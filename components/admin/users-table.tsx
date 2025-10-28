"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function UsersTable() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", websites: 3, joined: "2025-01-15", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", websites: 5, joined: "2025-01-10", status: "Active" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", websites: 1, joined: "2025-01-20", status: "Active" },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
      websites: 2,
      joined: "2025-01-05",
      status: "Inactive",
    },
  ]

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Users</h2>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Add User</Button>
      </div>

      <Card className="bg-surface border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-input border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Websites</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Joined</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-border hover:bg-input transition">
                  <td className="px-6 py-4 font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-muted">{user.email}</td>
                  <td className="px-6 py-4">{user.websites}</td>
                  <td className="px-6 py-4 text-muted text-sm">{user.joined}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Active" ? "bg-primary/20 text-primary" : "bg-muted/20 text-muted"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button variant="outline" className="border-border hover:bg-surface bg-transparent text-xs">
                        Edit
                      </Button>
                      <Button variant="outline" className="border-border hover:bg-surface bg-transparent text-xs">
                        Delete
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
