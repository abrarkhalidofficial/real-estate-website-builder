"use client"

import { useState } from "react"
import { BarChart3, Users, Mail, Lock, Zap, Calendar } from "lucide-react"

export function AdvancedFeatures() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  const features = [
    {
      id: "analytics",
      name: "Advanced Analytics",
      icon: BarChart3,
      description: "Track visitor behavior, conversion rates, and property performance",
      stats: [
        { label: "Page Views", value: "12,543" },
        { label: "Conversion Rate", value: "3.2%" },
        { label: "Avg. Time", value: "2m 34s" },
      ],
    },
    {
      id: "crm",
      name: "CRM Integration",
      icon: Users,
      description: "Manage leads, clients, and follow-ups directly from your dashboard",
      stats: [
        { label: "Active Leads", value: "247" },
        { label: "Conversion Rate", value: "18%" },
        { label: "Avg. Deal Value", value: "$450K" },
      ],
    },
    {
      id: "email",
      name: "Email Marketing",
      icon: Mail,
      description: "Send targeted campaigns and automated follow-ups to your audience",
      stats: [
        { label: "Subscribers", value: "5,234" },
        { label: "Open Rate", value: "28%" },
        { label: "Click Rate", value: "4.2%" },
      ],
    },
    {
      id: "automation",
      name: "Workflow Automation",
      icon: Zap,
      description: "Automate repetitive tasks and streamline your business processes",
      stats: [
        { label: "Workflows", value: "12" },
        { label: "Time Saved", value: "40 hrs/mo" },
        { label: "Automation Rate", value: "85%" },
      ],
    },
    {
      id: "security",
      name: "Enterprise Security",
      icon: Lock,
      description: "Bank-level encryption and compliance with industry standards",
      stats: [
        { label: "Encryption", value: "AES-256" },
        { label: "Uptime", value: "99.99%" },
        { label: "Compliance", value: "GDPR/CCPA" },
      ],
    },
    {
      id: "scheduling",
      name: "Smart Scheduling",
      icon: Calendar,
      description: "Automated appointment booking and property showing management",
      stats: [
        { label: "Bookings/Month", value: "342" },
        { label: "No-Show Rate", value: "2.1%" },
        { label: "Satisfaction", value: "4.8/5" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Advanced Features</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Powerful tools to grow your real estate business and manage your operations efficiently
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            const isActive = activeFeature === feature.id

            return (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(isActive ? null : feature.id)}
                className={`rounded-xl border-2 transition-all cursor-pointer overflow-hidden ${
                  isActive
                    ? "border-blue-500 bg-slate-800/50 shadow-2xl shadow-blue-500/20"
                    : "border-slate-700 bg-slate-800/30 hover:border-slate-600"
                }`}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 border-b border-slate-700">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-6 h-6 text-blue-400" />
                    <h3 className="text-lg font-bold text-white">{feature.name}</h3>
                  </div>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </div>

                {/* Stats */}
                <div className="p-6 space-y-4">
                  {feature.stats.map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">{stat.label}</span>
                      <span className="text-white font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Comparison Table */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-800 border-b border-slate-700">
                  <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Starter</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Professional</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Analytics Dashboard", starter: true, pro: true, enterprise: true },
                  { name: "CRM Integration", starter: false, pro: true, enterprise: true },
                  { name: "Email Marketing", starter: false, pro: true, enterprise: true },
                  { name: "Workflow Automation", starter: false, pro: false, enterprise: true },
                  { name: "API Access", starter: false, pro: false, enterprise: true },
                  { name: "Priority Support", starter: false, pro: true, enterprise: true },
                  { name: "Custom Branding", starter: false, pro: true, enterprise: true },
                  { name: "White Label", starter: false, pro: false, enterprise: true },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-700 hover:bg-slate-800/50">
                    <td className="px-6 py-4 text-slate-300">{row.name}</td>
                    <td className="px-6 py-4 text-center">
                      {row.starter ? (
                        <span className="text-green-400">✓</span>
                      ) : (
                        <span className="text-slate-600">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.pro ? <span className="text-green-400">✓</span> : <span className="text-slate-600">—</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.enterprise ? (
                        <span className="text-green-400">✓</span>
                      ) : (
                        <span className="text-slate-600">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
