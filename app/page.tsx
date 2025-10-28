"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <nav className="border-b border-border bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-gradient">Real Estate</div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-muted hover:text-foreground transition"
            >
              Logout
            </button>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Your Dashboard
            </h1>
            <p className="text-muted text-lg">
              Create professional real estate websites in minutes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-surface border-border p-6 hover:border-primary transition">
              <h3 className="text-xl font-semibold mb-2">Create New Website</h3>
              <p className="text-muted mb-4">
                Start building your real estate website with our templates
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </Card>
            <Card className="bg-surface border-border p-6 hover:border-primary transition">
              <h3 className="text-xl font-semibold mb-2">My Websites</h3>
              <p className="text-muted mb-4">
                Manage and edit your existing websites
              </p>
              <Button
                variant="outline"
                className="w-full border-border hover:bg-surface bg-transparent"
              >
                View All
              </Button>
            </Card>
            <Card className="bg-surface border-border p-6 hover:border-primary transition">
              <h3 className="text-xl font-semibold mb-2">Analytics</h3>
              <p className="text-muted mb-4">
                Track performance and visitor insights
              </p>
              <Button
                variant="outline"
                className="w-full border-border hover:bg-surface bg-transparent"
              >
                View Stats
              </Button>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <nav className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient">Real Estate </div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary"
              >
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Create Professional Real Estate Websites in Minutes
            </h1>
            <p className="text-xl text-muted mb-8 text-balance">
              Instantly generate stunning, SEO-optimized websites with
              AI-powered content and beautiful templates. No coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsLoggedIn(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                className="border-border hover:bg-surface px-8 py-6 text-lg bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted">Professional Templates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">
                AI-Powered
              </div>
              <p className="text-muted">Content Generation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                SEO Ready
              </div>
              <p className="text-muted">Optimized for Search</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
