"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle signup logic here
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
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-muted">
              Join thousands of real estate professionals
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <Input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="bg-input border-border text-foreground placeholder:text-muted"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-input border-border text-foreground placeholder:text-muted"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <Input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="bg-input border-border text-foreground placeholder:text-muted"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-input border-border text-foreground placeholder:text-muted"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 mt-6"
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-center text-muted">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:text-primary/90 font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <Button
              variant="outline"
              className="w-full border-border hover:bg-surface bg-transparent"
            >
              Sign up with Google
            </Button>
            <Button
              variant="outline"
              className="w-full border-border hover:bg-surface bg-transparent"
            >
              Sign up with Facebook
            </Button>
          </div>

          <p className="text-xs text-muted text-center mt-6">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </Card>
      </main>
    </div>
  );
}
