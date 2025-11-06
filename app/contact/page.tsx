"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { getActivePageData } from "@/lib/client-project"
import { toast } from "@/hooks/use-toast"
import { Mail } from "lucide-react"

export default function ContactPage() {
  const [projectId, setProjectId] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id") || undefined
    const page = getActivePageData(id)
    if (page) setProjectId(page.id)
  }, [])

  const submit = (form: HTMLFormElement) => {
    const fd = new FormData(form)
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      subject: String(fd.get("subject") || ""),
      message: String(fd.get("message") || ""),
      createdAt: new Date().toISOString(),
    }
    try {
      const key = `contact:${projectId ?? "default"}`
      const raw = localStorage.getItem(key)
      const list = raw ? (JSON.parse(raw) as any[]) : []
      localStorage.setItem(key, JSON.stringify([payload, ...list]))
      toast({ title: "Message sent", description: "We’ll respond shortly." })
      form.reset()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-40 bg-popover/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">RE</span>
            </div>
            <span className="font-bold text-lg text-primary">Contact</span>
          </Link>
          <div className="text-sm text-muted-foreground">
            {projectId ? <span>Project: {projectId}</span> : <span>Using default data</span>}
          </div>
        </div>
      </nav>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto card p-6">
          <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"><Mail className="w-5 h-5" />Get in Touch</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              submit(e.currentTarget)
            }}
            className="space-y-3"
          >
            <input name="name" className="input-field" placeholder="Your name" required />
            <input name="email" type="email" className="input-field" placeholder="Email" required />
            <input name="subject" className="input-field" placeholder="Subject" />
            <textarea name="message" className="input-field" placeholder="Message" rows={5} />
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}