"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <nav className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <div className="text-2xl font-bold text-gradient">Real Estate </div>
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md bg-surface border-border p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-input border-border text-foreground placeholder:text-muted"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-input border-border text-foreground placeholder:text-muted"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-center text-muted">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-primary hover:text-primary/90 font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <Button
              variant="outline"
              className="w-full border-border hover:bg-surface bg-transparent"
            >
              Continue with Google
            </Button>
            <Button
              variant="outline"
              className="w-full border-border hover:bg-surface bg-transparent"
            >
              Continue with Facebook
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
