"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PublishModal } from "@/components/preview/publish-modal";
import { ShareModal } from "@/components/preview/share-modal";

export default function PreviewPage({
  params,
}: {
  params: { siteId: string };
}) {
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gradient">
              Preview Your Website
            </h1>
            <p className="text-sm text-muted">Luxury Villa Listing</p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => setShowShareModal(true)}
              variant="outline"
              className="border-border hover:bg-surface bg-transparent"
            >
              Share
            </Button>
            <Button
              onClick={() => setShowPublishModal(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isPublished ? "Update" : "Publish"}
            </Button>
          </div>
        </div>
      </header>

      {/* Preview */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-lg">
          {/* Website Preview */}
          <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-brand-gradient h-96 flex items-center justify-center text-center text-white">
              <div>
                <h1 className="text-5xl font-bold mb-4">
                  Luxury Villa in Paradise
                </h1>
                <p className="text-xl text-white/80">
                  Experience luxury living at its finest
                </p>
              </div>
            </div>

            {/* Featured Property */}
            <div className="p-12 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <span className="text-gray-500">Property Image</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-gray-900">
                    Luxury Villa in Paradise
                  </h2>
                  <p className="text-2xl text-orange-500 font-bold mb-6">
                    $2,500,000
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-100 p-4 rounded text-center">
                      <div className="text-2xl font-bold text-gray-900">5</div>
                      <div className="text-sm text-gray-600">Bedrooms</div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded text-center">
                      <div className="text-2xl font-bold text-gray-900">4</div>
                      <div className="text-sm text-gray-600">Bathrooms</div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        8.5K
                      </div>
                      <div className="text-sm text-gray-600">Sq Ft</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    This stunning villa offers breathtaking views and
                    world-class amenities. Perfect for luxury living.
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
                    Schedule Viewing
                  </button>
                </div>
              </div>
            </div>

            {/* Listings Grid */}
            <div className="p-12 bg-gray-50 border-t border-gray-200">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Featured Listings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg overflow-hidden shadow"
                  >
                    <div className="bg-gray-200 h-40 flex items-center justify-center">
                      <span className="text-gray-500">Property {i}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Property {i}
                      </h3>
                      <p className="text-orange-500 font-bold mb-2">
                        $1,200,000
                      </p>
                      <p className="text-sm text-gray-600">
                        3 bed • 2 bath • 4,500 sqft
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="p-12 bg-white border-t border-gray-200">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                Get in Touch
              </h2>
              <div className="max-w-md mx-auto space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500"
                  rows={4}
                />
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
                  Send Message
                </button>
              </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white p-8 text-center">
              <p>&copy; 2025 Luxury Real Estate. All rights reserved.</p>
            </footer>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="bg-surface border-border p-6">
            <h3 className="font-semibold mb-2">Website URL</h3>
            <p className="text-muted text-sm mb-4">
              luxuryvilla.RealEstate.devscot
            </p>
            <Button
              variant="outline"
              className="w-full border-border hover:bg-surface bg-transparent text-sm"
            >
              Copy Link
            </Button>
          </Card>

          <Card className="bg-surface border-border p-6">
            <h3 className="font-semibold mb-2">Status</h3>
            <p className="text-primary font-semibold mb-4">
              {isPublished ? "Published" : "Draft"}
            </p>
            <Button
              variant="outline"
              className="w-full border-border hover:bg-surface bg-transparent text-sm"
            >
              View Analytics
            </Button>
          </Card>

          <Card className="bg-surface border-border p-6">
            <h3 className="font-semibold mb-2">Performance</h3>
            <p className="text-muted text-sm mb-4">SEO Score: 92/100</p>
            <Button
              variant="outline"
              className="w-full border-border hover:bg-surface bg-transparent text-sm"
            >
              View Report
            </Button>
          </Card>
        </div>
      </main>

      {/* Modals */}
      {showPublishModal && (
        <PublishModal
          onClose={() => setShowPublishModal(false)}
          onPublish={() => {
            setIsPublished(true);
            setShowPublishModal(false);
          }}
        />
      )}

      {showShareModal && (
        <ShareModal onClose={() => setShowShareModal(false)} />
      )}
    </div>
  );
}
