"use client"

import { Card } from "@/components/ui/card"

export function AnalyticsOverview() {
  const stats = [
    { label: "Total Users", value: "1,234", change: "+12%" },
    { label: "Active Websites", value: "856", change: "+8%" },
    { label: "Total Inquiries", value: "3,421", change: "+24%" },
    { label: "AI Generations", value: "12,543", change: "+45%" },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Platform Analytics</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-surface border-border p-6">
            <p className="text-muted text-sm mb-2">{stat.label}</p>
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold">{stat.value}</div>
              <span className="text-primary text-sm font-semibold">{stat.change}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-surface border-border p-6">
          <h3 className="font-semibold mb-4">User Growth</h3>
          <div className="h-64 bg-input rounded-lg flex items-center justify-center">
            <span className="text-muted">Chart Placeholder</span>
          </div>
        </Card>

        <Card className="bg-surface border-border p-6">
          <h3 className="font-semibold mb-4">Website Types Distribution</h3>
          <div className="h-64 bg-input rounded-lg flex items-center justify-center">
            <span className="text-muted">Chart Placeholder</span>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-surface border-border p-6 mt-6">
        <h3 className="font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { user: "John Doe", action: "Created new website", time: "2 hours ago" },
            { user: "Jane Smith", action: "Published website", time: "4 hours ago" },
            { user: "Mike Johnson", action: "Generated AI content", time: "6 hours ago" },
          ].map((activity, i) => (
            <div key={i} className="flex justify-between items-center p-3 bg-input rounded-lg">
              <div>
                <p className="font-medium text-sm">{activity.user}</p>
                <p className="text-xs text-muted">{activity.action}</p>
              </div>
              <span className="text-xs text-muted">{activity.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
