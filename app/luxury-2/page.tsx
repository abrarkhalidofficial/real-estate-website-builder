"use client"

import { useState } from "react"
import { Menu, X, ArrowRight, MapPin, Phone, Mail } from "lucide-react"

export default function LuxuryPage2() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif text-slate-900">ELEGANCE</div>
          <div className="hidden md:flex gap-8 text-sm text-slate-700">
            <a href="#portfolio" className="hover:text-slate-900 transition font-medium">
              Portfolio
            </a>
            <a href="#services" className="hover:text-slate-900 transition font-medium">
              Services
            </a>
            <a href="#team" className="hover:text-slate-900 transition font-medium">
              Team
            </a>
            <a href="#contact" className="hover:text-slate-900 transition font-medium">
              Contact
            </a>
          </div>
          <button className="hidden md:block px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition">
            Inquire Now
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-0 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-slate-600 mb-4 uppercase tracking-widest">Curated Collections</p>
              <h1 className="text-6xl md:text-7xl font-serif text-slate-900 mb-6 leading-tight">Timeless Elegance</h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-md">
                Discover properties that define sophistication and refined living. Each home is a masterpiece of design
                and comfort.
              </p>
              <div className="flex gap-4 mb-8">
                <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition flex items-center gap-2">
                  Explore Collection <ArrowRight size={20} />
                </button>
                <button className="px-8 py-3 border border-slate-300 text-slate-900 rounded-full font-semibold hover:bg-slate-50 transition">
                  Learn More
                </button>
              </div>
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="text-slate-900 font-semibold">50+</p>
                  <p className="text-slate-600">Properties</p>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">$2B+</p>
                  <p className="text-slate-600">Total Sales</p>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">20+</p>
                  <p className="text-slate-600">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <img
                src="/elegant-modern-home-interior.jpg"
                alt="Elegant Home"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-slate-900 mb-12">Featured Properties</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Modern Minimalist", price: "$2.5M", location: "Beverly Hills", beds: 4, baths: 3 },
              { name: "Contemporary Luxury", price: "$3.2M", location: "Malibu", beds: 5, baths: 4 },
              { name: "Urban Penthouse", price: "$4.1M", location: "Downtown LA", beds: 3, baths: 3 },
            ].map((prop, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-80 rounded-xl overflow-hidden mb-4">
                  <img
                    src={`/luxury-property-.jpg?height=400&width=400&query=luxury-property-${i + 1}`}
                    alt={prop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-semibold text-slate-900">
                    Featured
                  </div>
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-2">{prop.name}</h3>
                <div className="flex items-center gap-2 text-slate-600 mb-2">
                  <MapPin size={16} />
                  <p>{prop.location}</p>
                </div>
                <div className="flex gap-4 mb-4 text-sm text-slate-600">
                  <span>{prop.beds} Beds</span>
                  <span>{prop.baths} Baths</span>
                </div>
                <p className="text-2xl font-semibold text-slate-900">{prop.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-slate-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Property Consultation", desc: "Expert guidance in finding your perfect luxury home" },
              { title: "Investment Analysis", desc: "Comprehensive market analysis and ROI projections" },
              { title: "Private Showings", desc: "Exclusive viewings tailored to your preferences" },
              { title: "Concierge Service", desc: "Full support throughout your purchase journey" },
              { title: "Market Research", desc: "In-depth neighborhood and market insights" },
              { title: "Legal Support", desc: "Assistance with contracts and documentation" },
            ].map((service, i) => (
              <div key={i} className="border-l-4 border-slate-900 pl-6">
                <h3 className="text-xl font-serif text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-slate-900 mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Alexandra Stone", role: "Founder & CEO", specialty: "Luxury Sales" },
              { name: "Marcus Williams", role: "Senior Agent", specialty: "Investment Properties" },
              { name: "Isabella Rodriguez", role: "Property Manager", specialty: "Portfolio Management" },
              { name: "James Patterson", role: "Market Analyst", specialty: "Market Trends" },
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-40 h-40 bg-gradient-to-br from-slate-300 to-slate-400 rounded-lg mx-auto mb-4 group-hover:shadow-lg transition"></div>
                <h3 className="text-lg font-serif text-slate-900 mb-1">{member.name}</h3>
                <p className="text-slate-600 font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-slate-500 text-xs">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-lg text-slate-300 mb-8">Connect with our team of luxury real estate experts today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition">
              Schedule Consultation
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-full font-semibold hover:bg-white/10 transition">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-slate-300 font-serif text-lg mb-4">ELEGANCE</p>
              <p className="text-slate-400 text-sm">Premium luxury real estate services.</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-4">Quick Links</p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold mb-4">Contact</p>
              <div className="space-y-2 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <p>+1 (310) 555-0100</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <p>info@elegance.com</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-4">Follow Us</p>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 Elegance Luxury Realty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
