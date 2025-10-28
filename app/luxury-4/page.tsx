"use client"

import { useState } from "react"
import { Heart, Phone, Mail, Check } from "lucide-react"

export default function LuxuryPage4() {
  const [liked, setLiked] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif text-rose-900">LUXE</div>
          <div className="hidden md:flex gap-8 text-sm text-rose-900">
            <a href="#properties" className="hover:text-rose-600 transition">
              Properties
            </a>
            <a href="#services" className="hover:text-rose-600 transition">
              Services
            </a>
            <a href="#team" className="hover:text-rose-600 transition">
              Team
            </a>
            <a href="#contact" className="hover:text-rose-600 transition">
              Contact
            </a>
          </div>
          <button className="px-6 py-2 bg-rose-600 text-white rounded-full text-sm font-semibold hover:bg-rose-700 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-rose-600 mb-4 uppercase tracking-widest font-semibold">Featured Listing</p>
              <h1 className="text-6xl md:text-7xl font-serif text-rose-900 mb-6 leading-tight">Urban Sophistication</h1>
              <p className="text-lg text-rose-800 mb-8 leading-relaxed">
                A stunning downtown penthouse combining modern architecture with timeless elegance. Floor-to-ceiling
                windows offer breathtaking city views.
              </p>
              <div className="flex gap-4 mb-8">
                <button className="px-8 py-3 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-700 transition">
                  Schedule Tour
                </button>
                <button
                  onClick={() => setLiked(!liked)}
                  className={`px-8 py-3 border-2 rounded-full font-semibold transition flex items-center gap-2 ${
                    liked
                      ? "border-rose-600 bg-rose-50 text-rose-600"
                      : "border-rose-200 text-rose-900 hover:border-rose-600"
                  }`}
                >
                  <Heart size={20} fill={liked ? "currentColor" : "none"} />
                  Save
                </button>
              </div>
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="text-rose-600 font-semibold">$5.2M</p>
                  <p className="text-rose-800">Price</p>
                </div>
                <div>
                  <p className="text-rose-600 font-semibold">4,500 sq ft</p>
                  <p className="text-rose-800">Size</p>
                </div>
                <div>
                  <p className="text-rose-600 font-semibold">Downtown</p>
                  <p className="text-rose-800">Location</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <img
                src="/luxury-downtown-penthouse.jpg"
                alt="Penthouse"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="properties" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-rose-900 mb-12">Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:row-span-2 relative h-96 md:h-full rounded-xl overflow-hidden">
              <img
                src="/luxury-living-room.jpg"
                alt="Living Room"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <img
                src="/luxury-bedroom.jpg"
                alt="Bedroom"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <img
                src="/luxury-kitchen.jpg"
                alt="Kitchen"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-rose-900 mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Floor-to-ceiling windows with city views",
              "Smart home automation system",
              "Private elevator access",
              "Heated infinity pool on terrace",
              "Chef's kitchen with premium appliances",
              "Spa and sauna facilities",
              "Concierge service 24/7",
              "Secure underground parking",
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-rose-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={16} className="text-white" />
                </div>
                <p className="text-rose-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-rose-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Property Consultation", desc: "Expert guidance for luxury purchases" },
              { title: "Interior Design", desc: "Curated design recommendations" },
              { title: "Investment Analysis", desc: "Comprehensive market insights" },
              { title: "Staging Services", desc: "Professional property preparation" },
              { title: "Legal Support", desc: "Full transaction assistance" },
              { title: "Concierge", desc: "24/7 dedicated support" },
            ].map((service, i) => (
              <div key={i} className="border-l-4 border-rose-600 pl-6">
                <h3 className="text-lg font-serif text-rose-900 mb-2">{service.title}</h3>
                <p className="text-rose-800 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-rose-900 mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Sophia Laurent", role: "Founder", specialty: "Luxury Sales" },
              { name: "Marcus Reid", role: "Senior Agent", specialty: "Downtown Properties" },
              { name: "Elena Rossi", role: "Designer", specialty: "Interior Styling" },
              { name: "James Cooper", role: "Consultant", specialty: "Investment Strategy" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-rose-300 to-rose-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-serif text-rose-900 mb-1">{member.name}</h3>
                <p className="text-rose-600 font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-rose-800 text-xs">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-rose-900 mb-6">Interested in This Property?</h2>
          <p className="text-lg text-rose-800 mb-8">Our luxury specialists are ready to assist you.</p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 border-2 border-rose-200 rounded-full text-rose-900 placeholder-rose-400 focus:outline-none focus:border-rose-600"
            />
            <button className="px-8 py-3 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-700 transition">
              Contact
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-rose-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-rose-900 font-serif text-lg mb-4">LUXE</p>
              <p className="text-rose-800 text-sm">Premium luxury real estate services.</p>
            </div>
            <div>
              <p className="text-rose-900 font-semibold mb-4">Quick Links</p>
              <ul className="space-y-2 text-rose-800 text-sm">
                <li>
                  <a href="#" className="hover:text-rose-600">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-600">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-600">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-rose-900 font-semibold mb-4">Contact</p>
              <div className="space-y-2 text-rose-800 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <p>+1 (212) 555-0100</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <p>info@luxe.com</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-rose-900 font-semibold mb-4">Follow Us</p>
              <div className="flex gap-4 text-rose-800">
                <a href="#" className="hover:text-rose-600">
                  Instagram
                </a>
                <a href="#" className="hover:text-rose-600">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-rose-100 pt-8 text-center text-rose-800 text-sm">
            <p>© 2025 Luxe Realty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
