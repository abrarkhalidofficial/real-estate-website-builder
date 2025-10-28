"use client"

import { useState } from "react"
import { OnboardingWizard } from "@/components/onboarding-wizard"
import { LuxuryTemplates } from "@/components/luxury-templates"
import { WebsiteBuilder } from "@/components/website-builder"
import { AdminDashboard } from "@/components/admin-dashboard"
import { AIAssistant } from "@/components/ai-assistant"
import { AdvancedFeatures } from "@/components/advanced-features"
import Link from "next/link"

export default function Home() {
  const [currentStep, setCurrentStep] = useState<
    "login" | "onboarding" | "templates" | "builder" | "admin" | "features" | "showcase"
  >("showcase")
  const [userRole, setUserRole] = useState<"user" | "admin">("user")
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [websiteData, setWebsiteData] = useState<any>(null)
  const [showAI, setShowAI] = useState(false)

  const handleLoginSuccess = (role: "user" | "admin") => {
    setUserRole(role)
    if (role === "admin") {
      setCurrentStep("admin")
    } else {
      setCurrentStep("onboarding")
    }
  }

  const handleOnboardingComplete = (data: any) => {
    setWebsiteData(data)
    setCurrentStep("templates")
  }

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
    setCurrentStep("builder")
  }

  return (
    <main className="min-h-screen bg-background">
      {currentStep === "showcase" && (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4 text-center">
              Luxury Real Estate Landing Pages
            </h1>
            <p className="text-xl text-slate-300 text-center mb-16 max-w-2xl mx-auto">
              Explore 5 premium luxury real estate landing pages showcasing different design aesthetics and property
              types.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Prestige Waterfront", href: "/luxury-1", color: "from-amber-600 to-amber-800" },
                { name: "Elegance Modern", href: "/luxury-2", color: "from-slate-600 to-slate-800" },
                { name: "Sanctuary Estate", href: "/luxury-3", color: "from-emerald-600 to-emerald-800" },
                { name: "Luxe Urban", href: "/luxury-4", color: "from-rose-600 to-rose-800" },
                { name: "Apex Smart Living", href: "/luxury-5", color: "from-cyan-600 to-cyan-800" },
              ].map((page, i) => (
                <Link key={i} href={page.href}>
                  <div
                    className={`bg-gradient-to-br ${page.color} rounded-xl p-8 hover:shadow-2xl transition-all cursor-pointer h-full flex flex-col justify-between`}
                  >
                    <div>
                      <h3 className="text-2xl font-serif text-white mb-2">{page.name}</h3>
                      <p className="text-white/80">Premium luxury real estate showcase</p>
                    </div>
                    <div className="text-white/60 text-sm mt-4">Click to view →</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button
                onClick={() => setCurrentStep("login")}
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Back to Builder
              </button>
            </div>
          </div>
        </div>
      )}
      {currentStep === "login" && <LoginPage onLoginSuccess={handleLoginSuccess} />}
      {currentStep === "onboarding" && <OnboardingWizard onComplete={handleOnboardingComplete} />}
      {currentStep === "templates" && <LuxuryTemplates onSelect={handleTemplateSelect} websiteData={websiteData} />}
      {currentStep === "builder" && selectedTemplate && (
        <WebsiteBuilder templateId={selectedTemplate} websiteData={websiteData} />
      )}
      {currentStep === "admin" && <AdminDashboard />}
      {currentStep === "features" && <AdvancedFeatures />}
      {showAI && <AIAssistant onClose={() => setShowAI(false)} />}
    </main>
  )
}

function LoginPage({ onLoginSuccess }: { onLoginSuccess: (role: "user" | "admin") => void }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">RealEstate Builder</h1>
          <p className="text-slate-400 text-center mb-8">Create professional websites instantly</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              onClick={() => onLoginSuccess("user")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Sign In as User
            </button>

            <button
              onClick={() => onLoginSuccess("admin")}
              className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Sign In as Admin
            </button>
          </div>

          <p className="text-slate-400 text-sm text-center mt-6">Demo credentials: any email/password</p>
        </div>
      </div>
    </div>
  )
}
