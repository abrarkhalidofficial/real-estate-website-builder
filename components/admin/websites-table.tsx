"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function WebsitesTable() {
  const websites = [
    { id: 1, name: "Luxury Villa Listing", owner: "John Doe", template: "Modern", status: "Published", views: 1234 },
    {
      id: 2,
      name: "Downtown Apartments",
      owner: "Jane Smith",
      template: "Professional",
      status: "Published",
      views: 2156,
    },
    { id: 3, name: "Commercial Space", owner: "Mike Johnson", template: "Minimal", status: "Draft", views: 0 },
    { id: 4, name: "Beach Resort", owner: "Sarah Williams", template: "Luxury", status: "Published", views: 3421 },
  ]

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Websites</h2>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Create Website</Button>
      </div>

      <Card className="bg-surface border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-input border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Website Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Owner</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Template</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Views</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {websites.map((website) => (
                <tr key={website.id} className="border-b border-border hover:bg-input transition">
                  <td className="px-6 py-4 font-medium">{website.name}</td>
                  <td className="px-6 py-4 text-muted">{website.owner}</td>
                  <td className="px-6 py-4 text-sm">{website.template}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        website.status === "Published" ? "bg-primary/20 text-primary" : "bg-muted/20 text-muted"
                      }`}
                    >
                      {website.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{website.views}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button variant="outline" className="border-border hover:bg-surface bg-transparent text-xs">
                        View
                      </Button>
                      <Button variant="outline" className="border-border hover:bg-surface bg-transparent text-xs">
                        Edit
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
