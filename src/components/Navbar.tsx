"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-lg font-semibold text-foreground">
            Devscot Realty
          </Link>
        </div>

        <div className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm text-muted hover:text-foreground">Home</Link>
          <Link href="/listings" className="text-sm text-muted hover:text-foreground">Listings</Link>
          <Link href="/about" className="text-sm text-muted hover:text-foreground">About</Link>
          <Link href="/contact" className="text-sm text-muted hover:text-foreground">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden inline-flex items-center rounded-md border px-2 py-2"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="mx-auto max-w-6xl space-y-2 px-4 py-3">
            <Link href="/" className="block text-sm text-muted hover:text-foreground">Home</Link>
            <Link href="/listings" className="block text-sm text-muted hover:text-foreground">Listings</Link>
            <Link href="/about" className="block text-sm text-muted hover:text-foreground">About</Link>
            <Link href="/contact" className="block text-sm text-muted hover:text-foreground">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}