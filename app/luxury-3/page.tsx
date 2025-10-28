"use client"

import { useState } from "react"
import { Play, Star, Phone, Mail } from "lucide-react"

export default function LuxuryPage3() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif text-emerald-400">SANCTUARY</div>
          <div className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#listings" className="hover:text-emerald-400 transition">
              Listings
            </a>
            <a href="#amenities" className="hover:text-emerald-400 transition">
              Amenities
            </a>
            <a href="#testimonials" className="hover:text-emerald-400 transition">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition">
              Contact
            </a>
          </div>
          <button className="px-6 py-2 bg-emerald-500 text-slate-950 rounded-full text-sm font-semibold hover:bg-emerald-400 transition">
            Contact
          </button>
        </div>
      </nav>

      {/* Hero with Video */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-96 md:h-screen rounded-2xl overflow-hidden group">
            <img src="/luxury-estate-aerial-view.jpg" alt="Luxury Estate" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <button
              onClick={() => setVideoPlaying(!videoPlaying)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-400 transition group-hover:scale-110 transition-transform">
                <Play size={32} className="text-slate-950 ml-1" fill="currentColor" />
              </div>
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Private Estate Paradise</h1>
              <p className="text-lg text-slate-300 max-w-2xl">
                Nestled in pristine nature with world-class amenities and unparalleled privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section id="listings" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif text-white mb-8">Estate Overview</h2>
              <div className="space-y-6">
                {[
                  { label: "Total Acreage", value: "15 acres" },
                  { label: "Main Residence", value: "12,000 sq ft" },
                  { label: "Guest Houses", value: "2 properties" },
                  { label: "Amenities", value: "Pool, Tennis, Spa" },
                  { label: "Price", value: "$12.5M" },
                  { label: "Status", value: "Available" },
                ].map((item, i) => (
                  <div key={i} className="border-b border-slate-700 pb-4">
                    <p className="text-slate-400 text-sm mb-2">{item.label}</p>
                    <p className="text-2xl font-serif text-emerald-400">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <img src="/luxury-pool-area.jpg" alt="Pool Area" className="w-full rounded-xl" />
              <img src="/luxury-garden-landscape.jpg" alt="Garden" className="w-full rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-white mb-12">Premium Amenities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🏊", title: "Olympic Pool", desc: "Heated infinity pool with spa and sauna facilities" },
              { icon: "🎾", title: "Tennis Court", desc: "Professional-grade court with lighting system" },
              { icon: "🏋️", title: "Fitness Center", desc: "State-of-the-art equipment and personal training" },
              { icon: "🍷", title: "Wine Cellar", desc: "Climate-controlled storage for 500+ bottles" },
              { icon: "🎭", title: "Theater Room", desc: "Premium entertainment space with 4K projection" },
              { icon: "🌳", title: "Gardens", desc: "Manicured landscape with walking trails" },
            ].map((amenity, i) => (
              <div
                key={i}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition"
              >
                <div className="text-4xl mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-serif text-white mb-2">{amenity.title}</h3>
                <p className="text-slate-400">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-white mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Robert Thompson",
                role: "Estate Owner",
                text: "An absolutely magnificent property. The privacy and amenities are unparalleled.",
                rating: 5,
              },
              {
                name: "Catherine Wells",
                role: "Luxury Buyer",
                text: "The team's expertise and attention to detail made this purchase seamless and enjoyable.",
                rating: 5,
              },
              {
                name: "David Ashford",
                role: "Investor",
                text: "A truly exceptional investment opportunity with outstanding potential for appreciation.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-emerald-400 text-emerald-400" />
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
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-white mb-12">Our Expert Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Christopher Blake", role: "Estate Specialist", specialty: "Luxury Properties" },
              { name: "Natasha Volkov", role: "Senior Consultant", specialty: "International Buyers" },
              { name: "Richard Ashton", role: "Property Manager", specialty: "Estate Management" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-serif text-white mb-2">{member.name}</h3>
                <p className="text-emerald-400 font-semibold mb-2">{member.role}</p>
                <p className="text-slate-400 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 border-y border-emerald-500/20"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Exclusive Private Showing</h2>
          <p className="text-slate-300 mb-8">Experience this exceptional estate with our dedicated team.</p>
          <button className="px-8 py-3 bg-emerald-500 text-slate-950 rounded-full font-semibold hover:bg-emerald-400 transition">
            Request Viewing
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-emerald-400 font-serif text-lg mb-4">SANCTUARY</p>
              <p className="text-slate-400 text-sm">Luxury estate properties and services.</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-4">Quick Links</p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold mb-4">Contact</p>
              <div className="space-y-2 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <p>info@sanctuary.com</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-4">Follow Us</p>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-emerald-400">
                  Instagram
                </a>
                <a href="#" className="hover:text-emerald-400">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 Sanctuary Luxury Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
