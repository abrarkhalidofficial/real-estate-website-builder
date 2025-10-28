"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { AdminSidebar } from "@/components/admin/sidebar";
import { UsersTable } from "@/components/admin/users-table";
import { WebsitesTable } from "@/components/admin/websites-table";
import { AnalyticsOverview } from "@/components/admin/analytics-overview";

type AdminTab = "overview" | "users" | "websites" | "templates" | "settings";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");

  return (
    <div className="min-h-screen bg-background flex">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 overflow-y-auto">
        <header className="border-b border-border bg-surface sticky top-0 z-40">
          <div className="px-8 py-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-muted">Manage your platform</p>
              </div>
              <ThemeToggle />
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Export Data
            </Button>
          </div>
        </header>

        <div className="p-8">
          {activeTab === "overview" && <AnalyticsOverview />}
          {activeTab === "users" && <UsersTable />}
          {activeTab === "websites" && <WebsitesTable />}
          {activeTab === "templates" && <TemplatesManagement />}
          {activeTab === "settings" && <SettingsPanel />}
        </div>
      </main>
    </div>
  );
}

function TemplatesManagement() {
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Templates</h2>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Add Template
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Modern", "Luxury", "Minimal", "Professional"].map((template) => (
          <Card key={template} className="bg-surface border-border p-6">
            <div className="bg-input rounded-lg h-40 mb-4 flex items-center justify-center">
              <span className="text-muted">Template Preview</span>
            </div>
            <h3 className="font-semibold mb-2">{template}</h3>
            <p className="text-sm text-muted mb-4">Used by 24 websites</p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 border-border hover:bg-surface bg-transparent text-sm"
              >
                Edit
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-border hover:bg-surface bg-transparent text-sm"
              >
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SettingsPanel() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Platform Settings</h2>

      <div className="space-y-6 max-w-2xl">
        <Card className="bg-surface border-border p-6">
          <h3 className="font-semibold mb-4">API Configuration</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                OpenAI API Key
              </label>
              <input
                type="password"
                placeholder="sk-..."
                className="w-full p-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Stability AI API Key
              </label>
              <input
                type="password"
                placeholder="sk-..."
                className="w-full p-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted"
              />
            </div>
          </div>
        </Card>

        <Card className="bg-surface border-border p-6">
          <h3 className="font-semibold mb-4">Email Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                SMTP Server
              </label>
              <input
                type="text"
                placeholder="smtp.gmail.com"
                className="w-full p-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                From Email
              </label>
              <input
                type="email"
                placeholder="noreply@RealEstate.devscot"
                className="w-full p-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted"
              />
            </div>
          </div>
        </Card>

        <div className="flex gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Save Settings
          </Button>
          <Button
            variant="outline"
            className="border-border hover:bg-surface bg-transparent"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
