"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Trash2, Edit2, Eye, Save, X } from "lucide-react"

const MOCK_LISTINGS = [
  {
    id: 1,
    title: "Luxury Penthouse Downtown",
    price: "$2,500,000",
    beds: 4,
    baths: 3,
    sqft: "4,500",
    image: "/luxury-penthouse.png",
    description: "Stunning penthouse with panoramic city views",
  },
  {
    id: 2,
    title: "Modern Family Home",
    price: "$850,000",
    beds: 3,
    baths: 2,
    sqft: "2,800",
    image: "/modern-family-home.png",
    description: "Beautiful suburban home with large backyard",
  },
  {
    id: 3,
    title: "Beachfront Villa",
    price: "$3,200,000",
    beds: 5,
    baths: 4,
    sqft: "6,200",
    image: "/beachfront-villa.png",
    description: "Exclusive beachfront property with private access",
  },
]

function ListingEditModal({
  listing,
  onClose,
  onSave,
}: {
  listing: any
  onClose: () => void
  onSave: (listing: any) => void
}) {
  const [formData, setFormData] = useState(listing)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 border border-slate-700 rounded-lg max-w-2xl w-full">
        <div className="flex justify-between items-center p-6 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Edit Listing</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Square Feet</label>
              <input
                type="text"
                name="sqft"
                value={formData.sqft}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
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
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
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
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export function WebsiteBuilder({
  templateId,
  websiteData,
}: {
  templateId: string
  websiteData: any
}) {
  const [listings, setListings] = useState(MOCK_LISTINGS)
  const [editingListing, setEditingListing] = useState<any | null>(null)
  const [showPreview, setShowPreview] = useState(false)
  const [homepageTitle, setHomepageTitle] = useState(`Welcome to ${websiteData?.businessName}`)
  const [homepageDescription, setHomepageDescription] = useState(websiteData?.description || "")

  const deleteListing = (id: number) => {
    setListings(listings.filter((l) => l.id !== id))
  }

  const saveListing = (updatedListing: any) => {
    setListings(listings.map((l) => (l.id === updatedListing.id ? updatedListing : l)))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">{websiteData?.businessName}</h1>
            <p className="text-sm text-slate-400">Template: {templateId}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
            >
              <Eye className="w-4 h-4" />
              {showPreview ? "Edit" : "Preview"}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Save className="w-4 h-4" />
              Publish
            </button>
          </div>
        </div>
      </div>

      {showPreview ? (
        <WebsitePreview
          listings={listings}
          websiteData={websiteData}
          homepageTitle={homepageTitle}
          homepageDescription={homepageDescription}
        />
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-4">Website Content</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Homepage Title</label>
                    <input
                      type="text"
                      value={homepageTitle}
                      onChange={(e) => setHomepageTitle(e.target.value)}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Homepage Description</label>
                    <textarea
                      value={homepageDescription}
                      onChange={(e) => setHomepageDescription(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Listings Management */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">Property Listings</h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <Plus className="w-4 h-4" />
                    Add Listing
                  </button>
                </div>

                <div className="space-y-4">
                  {listings.map((listing) => (
                    <div
                      key={listing.id}
                      className="bg-slate-700 border border-slate-600 rounded-lg p-4 hover:border-slate-500 transition-colors"
                    >
                      <div className="flex gap-4">
                        <img
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.title}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-1">{listing.title}</h3>
                          <p className="text-sm text-slate-400 mb-2">{listing.description}</p>
                          <div className="flex gap-4 text-sm text-slate-300">
                            <span>{listing.beds} beds</span>
                            <span>{listing.baths} baths</span>
                            <span>{listing.sqft} sqft</span>
                            <span className="font-semibold text-blue-400">{listing.price}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingListing(listing)}
                            className="p-2 bg-slate-600 hover:bg-slate-500 text-white rounded transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteListing(listing.id)}
                            className="p-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-4">AI Assistance</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                    Generate Descriptions
                  </button>
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                    Generate Images
                  </button>
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                    Optimize SEO
                  </button>
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                    Generate Tagline
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700">
                  <h4 className="font-semibold text-white mb-3">Quick Stats</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-slate-400">
                      <span>Total Listings:</span>
                      <span className="text-white font-semibold">{listings.length}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Pages:</span>
                      <span className="text-white font-semibold">5</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Status:</span>
                      <span className="text-green-400 font-semibold">Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {editingListing && (
        <ListingEditModal listing={editingListing} onClose={() => setEditingListing(null)} onSave={saveListing} />
      )}
    </div>
  )
}

function WebsitePreview({
  listings,
  websiteData,
  homepageTitle,
  homepageDescription,
}: {
  listings: any[]
  websiteData: any
  homepageTitle: string
  homepageDescription: string
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">{homepageTitle}</h1>
        <p className="text-xl text-blue-100 mb-6">{homepageDescription}</p>
        <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
          View Listings
        </button>
      </div>

      {/* Listings Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-600 transition-colors"
            >
              <img src={listing.image || "/placeholder.svg"} alt={listing.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{listing.title}</h3>
                <p className="text-blue-400 font-bold text-xl mb-3">{listing.price}</p>
                <div className="flex gap-4 text-sm text-slate-400 mb-4">
                  <span>{listing.beds} beds</span>
                  <span>{listing.baths} baths</span>
                  <span>{listing.sqft} sqft</span>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea
              placeholder="Your message..."
              rows={4}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>
          <button className="md:col-span-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}
