"use client"

export function PreviewPanel() {
  return (
    <div className="flex-1 overflow-y-auto bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="bg-brand-gradient h-96 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Luxury Villa in Paradise</h1>
            <p className="text-xl text-white/80">Experience luxury living at its finest</p>
          </div>
        </div>

        {/* Featured Property */}
        <div className="p-12 bg-surface border-b border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-input rounded-lg h-64 flex items-center justify-center">
              <span className="text-muted">Property Image</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Luxury Villa in Paradise</h2>
              <p className="text-2xl text-primary font-bold mb-6">$2,500,000</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-input p-4 rounded text-center">
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm text-muted">Bedrooms</div>
                </div>
                <div className="bg-input p-4 rounded text-center">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm text-muted">Bathrooms</div>
                </div>
                <div className="bg-input p-4 rounded text-center">
                  <div className="text-2xl font-bold">8.5K</div>
                  <div className="text-sm text-muted">Sq Ft</div>
                </div>
              </div>
              <p className="text-muted mb-6">
                This stunning villa offers breathtaking views and world-class amenities.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold">
                Schedule Viewing
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="p-12 bg-background border-b border-border">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted"
              rows={4}
            />
            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold">
              Send Message
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-surface border-t border-border p-8 text-center text-muted">
          <p>&copy; 2025 Luxury Real Estate. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
