"use client"

import { useState } from "react"
import {
  BarChart3,
  Users,
  Globe,
  TrendingUp,
  Settings,
  LogOut,
  Search,
  Filter,
  MoreVertical,
  Trash2,
  Edit2,
  Eye,
  X,
} from "lucide-react"

const MOCK_WEBSITES = [
  {
    id: 1,
    name: "Luxury Homes Agency",
    owner: "John Smith",
    listings: 24,
    status: "active",
    created: "2025-01-15",
    revenue: "$12,500",
  },
  {
    id: 2,
    name: "Downtown Properties",
    owner: "Sarah Johnson",
    listings: 18,
    status: "active",
    created: "2025-01-10",
    revenue: "$8,200",
  },
  {
    id: 3,
    name: "Beachfront Realty",
    owner: "Mike Davis",
    listings: 12,
    status: "active",
    created: "2025-01-05",
    revenue: "$6,800",
  },
  {
    id: 4,
    name: "Commercial Real Estate",
    owner: "Emma Wilson",
    listings: 8,
    status: "inactive",
    created: "2024-12-20",
    revenue: "$0",
  },
]

const MOCK_USERS = [
  { id: 1, name: "John Smith", email: "john@example.com", role: "agent", websites: 1, joined: "2025-01-15" },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", role: "agent", websites: 1, joined: "2025-01-10" },
  { id: 3, name: "Mike Davis", email: "mike@example.com", role: "agent", websites: 1, joined: "2025-01-05" },
  { id: 4, name: "Emma Wilson", email: "emma@example.com", role: "agent", websites: 1, joined: "2024-12-20" },
]

const MOCK_ANALYTICS = {
  totalWebsites: 156,
  activeUsers: 89,
  totalListings: 2847,
  inquiries: 342,
  monthlyRevenue: "$125,400",
  conversionRate: "3.2%",
}

export function AdminDashboard() {
  const [selectedWebsite, setSelectedWebsite] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<"overview" | "websites" | "users" | "settings">("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "inactive">("all")

  const filteredWebsites = MOCK_WEBSITES.filter((website) => {
    const matchesSearch =
      website.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      website.owner.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || website.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-slate-700">
          {(["overview", "websites", "users", "settings"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-semibold transition-colors border-b-2 ${
                activeTab === tab
                  ? "text-blue-400 border-blue-600"
                  : "text-slate-400 border-transparent hover:text-slate-300"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <>
            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Total Websites</p>
                    <p className="text-3xl font-bold text-white">{MOCK_ANALYTICS.totalWebsites}</p>
                  </div>
                  <Globe className="w-10 h-10 text-blue-500 opacity-20" />
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Active Users</p>
                    <p className="text-3xl font-bold text-white">{MOCK_ANALYTICS.activeUsers}</p>
                  </div>
                  <Users className="w-10 h-10 text-green-500 opacity-20" />
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Total Listings</p>
                    <p className="text-3xl font-bold text-white">{MOCK_ANALYTICS.totalListings}</p>
                  </div>
                  <BarChart3 className="w-10 h-10 text-purple-500 opacity-20" />
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Inquiries</p>
                    <p className="text-3xl font-bold text-white">{MOCK_ANALYTICS.inquiries}</p>
                  </div>
                  <TrendingUp className="w-10 h-10 text-orange-500 opacity-20" />
                </div>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Monthly Revenue</h3>
                <p className="text-4xl font-bold text-green-400">{MOCK_ANALYTICS.monthlyRevenue}</p>
                <p className="text-slate-400 text-sm mt-2">+12% from last month</p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Conversion Rate</h3>
                <p className="text-4xl font-bold text-blue-400">{MOCK_ANALYTICS.conversionRate}</p>
                <p className="text-slate-400 text-sm mt-2">+0.5% from last month</p>
              </div>
            </div>
          </>
        )}

        {/* Websites Tab */}
        {activeTab === "websites" && (
          <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-slate-700">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 text-slate-500 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search websites or owners..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex gap-2">
                  <Filter className="w-5 h-5 text-slate-400 self-center" />
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value as any)}
                    className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <h2 className="text-xl font-bold text-white">Managed Websites</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700/50 border-b border-slate-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Website Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Owner</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Listings</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Revenue</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Created</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredWebsites.map((website) => (
                    <tr key={website.id} className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">{website.name}</td>
                      <td className="px-6 py-4 text-slate-400">{website.owner}</td>
                      <td className="px-6 py-4 text-slate-400">{website.listings}</td>
                      <td className="px-6 py-4 text-slate-400 font-semibold">{website.revenue}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            website.status === "active"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-slate-600/50 text-slate-400"
                          }`}
                        >
                          {website.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-400 text-sm">{website.created}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedWebsite(website.id)}
                            className="p-2 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white mb-4">User Management</h2>
              <div className="relative">
                <Search className="absolute left-3 top-3 text-slate-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search users..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700/50 border-b border-slate-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Role</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Websites</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Joined</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_USERS.map((user) => (
                    <tr key={user.id} className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">{user.name}</td>
                      <td className="px-6 py-4 text-slate-400">{user.email}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-400">{user.websites}</td>
                      <td className="px-6 py-4 text-slate-400 text-sm">{user.joined}</td>
                      <td className="px-6 py-4">
                        <button className="text-slate-400 hover:text-white">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">System Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Platform Name</label>
                  <input
                    type="text"
                    defaultValue="RealEstate Builder"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Support Email</label>
                  <input
                    type="email"
                    defaultValue="support@realestate.com"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Max Listings per User</label>
                  <input
                    type="number"
                    defaultValue="100"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold">
                Save Settings
              </button>
            </div>
          </div>
        )}

        {/* Website Details Modal */}
        {selectedWebsite && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 border border-slate-700 rounded-lg max-w-2xl w-full">
              <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">
                  {MOCK_WEBSITES.find((w) => w.id === selectedWebsite)?.name}
                </h2>
                <button onClick={() => setSelectedWebsite(null)} className="text-slate-400 hover:text-white text-2xl">
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {(() => {
                  const website = MOCK_WEBSITES.find((w) => w.id === selectedWebsite)
                  return (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-slate-400 text-sm mb-1">Owner</p>
                          <p className="text-white font-semibold">{website?.owner}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm mb-1">Status</p>
                          <p className="text-white font-semibold capitalize">{website?.status}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm mb-1">Total Listings</p>
                          <p className="text-white font-semibold">{website?.listings}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm mb-1">Revenue</p>
                          <p className="text-white font-semibold">{website?.revenue}</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-700">
                        <h3 className="font-semibold text-white mb-3">Quick Actions</h3>
                        <div className="flex gap-3">
                          <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                            View Website
                          </button>
                          <button className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                            Edit
                          </button>
                          <button className="flex-1 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors">
                            Deactivate
                          </button>
                        </div>
                      </div>
                    </>
                  )
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
