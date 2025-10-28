"use client"

import { useState } from "react"
import { ChevronRight, MapPin, Bed, Bath, Ruler, Star } from "lucide-react"

export default function LuxuryPage1() {
  const [email, setEmail] = useState("")
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif text-amber-400">PRESTIGE</div>
          <div className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#properties" className="hover:text-amber-400 transition">
              Properties
            </a>
            <a href="#about" className="hover:text-amber-400 transition">
              About
            </a>
            <a href="#testimonials" className="hover:text-amber-400 transition">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-amber-400 transition">
              Contact
            </a>
          </div>
          <button className="px-6 py-2 bg-amber-500 text-slate-950 rounded-full text-sm font-semibold hover:bg-amber-400 transition">
            Schedule Tour
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">
                Luxury Waterfront Living
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Discover an exceptional penthouse with panoramic ocean views, private beach access, and world-class
                amenities.
              </p>
              <div className="flex gap-4 mb-8">
                <button className="px-8 py-3 bg-amber-500 text-slate-950 rounded-full font-semibold hover:bg-amber-400 transition flex items-center gap-2">
                  View Details <ChevronRight size={20} />
                </button>
                <button className="px-8 py-3 border border-amber-500 text-amber-400 rounded-full font-semibold hover:bg-amber-500/10 transition">
                  Schedule Viewing
                </button>
              </div>
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="text-amber-400 font-semibold">$8.5M</p>
                  <p className="text-slate-400">Price</p>
                </div>
                <div>
                  <p className="text-amber-400 font-semibold">5 Beds / 4 Baths</p>
                  <p className="text-slate-400">Layout</p>
                </div>
                <div>
                  <p className="text-amber-400 font-semibold">Miami Beach</p>
                  <p className="text-slate-400">Location</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="/luxury-penthouse-ocean-view.jpg"
                alt="Luxury Penthouse"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Features */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-white mb-12">Property Highlights</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Bed, label: "Bedrooms", value: "5" },
              { icon: Bath, label: "Bathrooms", value: "4" },
              { icon: Ruler, label: "Square Feet", value: "8,500" },
              { icon: MapPin, label: "Location", value: "Miami Beach" },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition"
              >
                <feature.icon className="text-amber-400 mb-4" size={32} />
                <p className="text-slate-400 text-sm mb-2">{feature.label}</p>
                <p className="text-2xl font-serif text-white">{feature.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-white mb-12">About This Property</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed">
                This stunning oceanfront penthouse represents the pinnacle of luxury living. Perched on the 45th floor,
                it offers unobstructed panoramic views of the Atlantic Ocean and Miami skyline.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The residence features floor-to-ceiling windows, a private infinity pool, spa facilities, and a
                state-of-the-art smart home system. Every detail has been meticulously designed for the most discerning
                clientele.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-amber-400">Key Amenities</h3>
                {[
                  "Private Beach Access",
                  "Infinity Pool & Spa",
                  "Wine Cellar",
                  "Home Theater",
                  "Chef's Kitchen",
                  "Smart Home System",
                ].map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <p className="text-slate-300">{amenity}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <img src="/luxury-interior-.jpg" alt="Interior" className="w-full rounded-xl" />
              <img
                src="/luxury-interior-.jpg?height=300&width=400&query=luxury-interior-2"
                alt="Interior 2"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-white mb-12">Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(i)}
              >
                <img
                  src={`/luxury-interior-.jpg?height=300&width=400&query=luxury-interior-${i}`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-white mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "James Mitchell",
                role: "Property Owner",
                text: "An exceptional property with unmatched views and amenities. The entire experience was seamless.",
                rating: 5,
              },
              {
                name: "Sarah Johnson",
                role: "Investor",
                text: "Outstanding investment opportunity. The location and design make this a premium asset.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Luxury Buyer",
                text: "This penthouse exceeded all expectations. Truly a masterpiece of modern luxury living.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-white mb-12">Our Expert Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Victoria Sterling", role: "Senior Agent", specialty: "Waterfront Properties" },
              { name: "David Rothschild", role: "Investment Advisor", specialty: "Portfolio Management" },
              { name: "Elena Moretti", role: "Luxury Specialist", specialty: "High-End Transactions" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-serif text-white mb-2">{member.name}</h3>
                <p className="text-amber-400 font-semibold mb-2">{member.role}</p>
                <p className="text-slate-400 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-r from-amber-900/20 to-amber-800/20 border-y border-amber-500/20"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Schedule Your Private Viewing</h2>
          <p className="text-slate-300 mb-8">Experience luxury living firsthand. Our team is ready to assist you.</p>
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 bg-slate-800 border border-slate-700 rounded-full text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            <button className="px-8 py-3 bg-amber-500 text-slate-950 rounded-full font-semibold hover:bg-amber-400 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-amber-400 font-serif text-lg mb-4">PRESTIGE</p>
              <p className="text-slate-400 text-sm">Luxury real estate at its finest.</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-4">Quick Links</p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold mb-4">Contact</p>
              <p className="text-slate-400 text-sm">+1 (305) 555-0100</p>
              <p className="text-slate-400 text-sm">info@prestige.com</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-4">Follow Us</p>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-amber-400">
                  Instagram
                </a>
                <a href="#" className="hover:text-amber-400">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 Prestige Luxury Homes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
