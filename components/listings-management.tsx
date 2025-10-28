"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Trash2, Edit2, Search, Filter, MapPin, Home, Bath, Maximize2, X } from "lucide-react"

interface Listing {
  id: number
  title: string
  price: string
  beds: number
  baths: number
  sqft: string
  address: string
  city: string
  state: string
  image: string
  description: string
  status: "active" | "sold" | "pending"
  featured: boolean
}

const INITIAL_LISTINGS: Listing[] = [
  {
    id: 1,
    title: "Luxury Penthouse Downtown",
    price: "$2,500,000",
    beds: 4,
    baths: 3,
    sqft: "4,500",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    image: "/luxury-penthouse.png",
    description: "Stunning penthouse with panoramic city views",
    status: "active",
    featured: true,
  },
  {
    id: 2,
    title: "Modern Family Home",
    price: "$850,000",
    beds: 3,
    baths: 2,
    sqft: "2,800",
    address: "456 Oak Ave",
    city: "Brooklyn",
    state: "NY",
    image: "/modern-family-home.png",
    description: "Beautiful suburban home with large backyard",
    status: "active",
    featured: false,
  },
  {
    id: 3,
    title: "Beachfront Villa",
    price: "$3,200,000",
    beds: 5,
    baths: 4,
    sqft: "6,200",
    address: "789 Beach Rd",
    city: "Miami",
    state: "FL",
    image: "/beachfront-villa.png",
    description: "Exclusive beachfront property with private access",
    status: "pending",
    featured: true,
  },
]

function ListingForm({
  listing,
  onClose,
  onSave,
}: {
  listing?: Listing
  onClose: () => void
  onSave: (listing: Listing) => void
}) {
  const [formData, setFormData] = useState<Listing>(
    listing || {
      id: Date.now(),
      title: "",
      price: "",
      beds: 0,
      baths: 0,
      sqft: "",
      address: "",
      city: "",
      state: "",
      image: "",
      description: "",
      status: "active",
      featured: false,
    },
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }))
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 border border-slate-700 rounded-lg max-w-2xl w-full">
        <div className="flex justify-between items-center p-6 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">{listing ? "Edit Listing" : "Add New Listing"}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Property title"
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Price *</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="$0"
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Bedrooms</label>
              <input
                type="number"
                name="beds"
                value={formData.beds}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Bathrooms</label>
              <input
                type="number"
                name="baths"
                value={formData.baths}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Sq Ft</label>
              <input
                type="text"
                name="sqft"
                value={formData.sqft}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Address *</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Street address"
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Property description"
              rows={4}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              checked={formData.featured}
              onChange={handleCheckbox}
              className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="featured" className="text-sm font-medium text-slate-300">
              Featured Listing
            </label>
          </div>
        </div>

        <div className="flex gap-3 p-6 border-t border-slate-700">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSave(formData)
              onClose()
            }}
            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            {listing ? "Update Listing" : "Add Listing"}
          </button>
        </div>
      </div>
    </div>
  )
}

export function ListingsManagement() {
  const [listings, setListings] = useState<Listing[]>(INITIAL_LISTINGS)
  const [editingListing, setEditingListing] = useState<Listing | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "pending" | "sold">("all")

  const filteredListings = listings.filter((listing) => {
    const matchesSearch =
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.city.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || listing.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const handleSave = (listing: Listing) => {
    if (editingListing) {
      setListings(listings.map((l) => (l.id === listing.id ? listing : l)))
    } else {
      setListings([...listings, listing])
    }
    setEditingListing(null)
    setShowForm(false)
  }

  const handleDelete = (id: number) => {
    setListings(listings.filter((l) => l.id !== id))
  }

  const handleEdit = (listing: Listing) => {
    setEditingListing(listing)
    setShowForm(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-600/20 text-green-400"
      case "pending":
        return "bg-yellow-600/20 text-yellow-400"
      case "sold":
        return "bg-slate-600/20 text-slate-400"
      default:
        return "bg-slate-600/20 text-slate-400"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Listings Management</h1>
          <p className="text-slate-400">Manage all your property listings in one place</p>
        </div>

        {/* Controls */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-slate-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by title or city..."
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
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
              </select>
            </div>

            <button
              onClick={() => {
                setEditingListing(null)
                setShowForm(true)
              }}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
            >
              <Plus className="w-5 h-5" />
              Add Listing
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-700 rounded-lg p-4">
              <p className="text-slate-400 text-sm mb-1">Total Listings</p>
              <p className="text-2xl font-bold text-white">{listings.length}</p>
            </div>
            <div className="bg-slate-700 rounded-lg p-4">
              <p className="text-slate-400 text-sm mb-1">Active</p>
              <p className="text-2xl font-bold text-green-400">
                {listings.filter((l) => l.status === "active").length}
              </p>
            </div>
            <div className="bg-slate-700 rounded-lg p-4">
              <p className="text-slate-400 text-sm mb-1">Pending</p>
              <p className="text-2xl font-bold text-yellow-400">
                {listings.filter((l) => l.status === "pending").length}
              </p>
            </div>
            <div className="bg-slate-700 rounded-lg p-4">
              <p className="text-slate-400 text-sm mb-1">Featured</p>
              <p className="text-2xl font-bold text-blue-400">{listings.filter((l) => l.featured).length}</p>
            </div>
          </div>
        </div>

        {/* Listings Table */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700 border-b border-slate-600">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Property</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Details</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {filteredListings.length > 0 ? (
                  filteredListings.map((listing) => (
                    <tr key={listing.id} className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={listing.image || "/placeholder.svg"}
                            alt={listing.title}
                            className="w-12 h-12 rounded object-cover"
                          />
                          <div>
                            <p className="font-semibold text-white">{listing.title}</p>
                            {listing.featured && (
                              <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Featured</span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 text-slate-300">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">
                            {listing.city}, {listing.state}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            {listing.beds}
                          </span>
                          <span className="flex items-center gap-1">
                            <Bath className="w-4 h-4" />
                            {listing.baths}
                          </span>
                          <span className="flex items-center gap-1">
                            <Maximize2 className="w-4 h-4" />
                            {listing.sqft}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-bold text-blue-400">{listing.price}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(listing.status)}`}
                        >
                          {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(listing)}
                            className="p-2 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(listing.id)}
                            className="p-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-slate-400">
                      No listings found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showForm && (
        <ListingForm
          listing={editingListing || undefined}
          onClose={() => {
            setShowForm(false)
            setEditingListing(null)
          }}
          onSave={handleSave}
        />
      )}
    </div>
  )
}
