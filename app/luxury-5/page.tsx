"use client"

import { useState } from "react"
import { ChevronDown, Zap, Shield, Leaf, Phone, Mail } from "lucide-react"

export default function LuxuryPage5() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif text-cyan-400">APEX</div>
          <div className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#properties" className="hover:text-cyan-400 transition">
              Properties
            </a>
            <a href="#investment" className="hover:text-cyan-400 transition">
              Investment
            </a>
            <a href="#team" className="hover:text-cyan-400 transition">
              Team
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
          <button className="px-6 py-2 bg-cyan-500 text-slate-950 rounded-full text-sm font-semibold hover:bg-cyan-400 transition">
            Invest Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-cyan-400 mb-4 uppercase tracking-widest font-semibold">Smart Investment</p>
              <h1 className="text-6xl md:text-7xl font-serif text-white mb-6 leading-tight">Next Generation Living</h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Cutting-edge smart home technology meets sustainable luxury. The future of residential real estate is
                here.
              </p>
              <div className="flex gap-4 mb-8">
                <button className="px-8 py-3 bg-cyan-500 text-slate-950 rounded-full font-semibold hover:bg-cyan-400 transition">
                  View Details
                </button>
                <button className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/10 transition">
                  Download Brochure
                </button>
              </div>
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="text-cyan-400 font-semibold">$15M+</p>
                  <p className="text-slate-400">Total Investment</p>
                </div>
                <div>
                  <p className="text-cyan-400 font-semibold">12-15%</p>
                  <p className="text-slate-400">Expected ROI</p>
                </div>
                <div>
                  <p className="text-cyan-400 font-semibold">8 Units</p>
                  <p className="text-slate-400">Available</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <img
                src="/smart-home-technology-luxury.jpg"
                alt="Smart Home"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Smart Features */}
      <section id="properties" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-white mb-12">Smart Technology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "AI Energy Management",
                desc: "Optimized power consumption and renewable integration",
              },
              { icon: Shield, title: "Advanced Security", desc: "Biometric access and 24/7 monitoring systems" },
              { icon: Leaf, title: "Eco-Friendly", desc: "Carbon-neutral design with sustainable materials" },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition"
              >
                <feature.icon className="text-cyan-400 mb-4" size={40} />
                <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section id="investment" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-white mb-12">Investment Highlights</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { label: "Expected ROI", value: "12-15% annually" },
                { label: "Property Type", value: "Smart Residential Complex" },
                { label: "Location", value: "Tech Hub District" },
                { label: "Units Available", value: "8 premium residences" },
                { label: "Completion Date", value: "Q2 2026" },
                { label: "Minimum Investment", value: "$500,000" },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-cyan-500 pl-6">
                  <p className="text-slate-400 text-sm mb-2">{item.label}</p>
                  <p className="text-2xl font-serif text-cyan-400">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <img src="/luxury-residential-complex.jpg" alt="Complex" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-white mb-12">Our Expert Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Dr. Alexander Chen", role: "CEO & Founder", specialty: "Tech Innovation" },
              { name: "Victoria Hartley", role: "Investment Director", specialty: "Portfolio Strategy" },
              { name: "Michael Torres", role: "Development Lead", specialty: "Project Management" },
              { name: "Sarah Mitchell", role: "Sustainability Officer", specialty: "Green Building" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-serif text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-slate-400 text-xs">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif text-white mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What is the minimum investment?",
                a: "$500,000 for a single unit or fractional ownership available",
              },
              {
                q: "What are the financing options?",
                a: "Flexible payment plans and financing partnerships available",
              },
              { q: "When will construction be completed?", a: "Phase 1 completion expected in 18 months" },
              {
                q: "What amenities are included?",
                a: "Full smart home integration, concierge, gym, and community spaces",
              },
              {
                q: "What is the expected return on investment?",
                a: "12-15% annually based on market projections and historical data",
              },
            ].map((faq, i) => (
              <div key={i} className="border border-slate-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/50 transition"
                >
                  <p className="text-white font-semibold text-left">{faq.q}</p>
                  <ChevronDown
                    size={20}
                    className={`text-cyan-400 transition-transform ${expandedFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === i && (
                  <div className="px-6 py-4 bg-slate-800/30 border-t border-slate-700">
                    <p className="text-slate-300">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-r from-cyan-900/20 to-cyan-800/20 border-y border-cyan-500/20"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Ready to Invest?</h2>
          <p className="text-slate-300 mb-8">Join the future of luxury living with our smart investment opportunity.</p>
          <button className="px-8 py-3 bg-cyan-500 text-slate-950 rounded-full font-semibold hover:bg-cyan-400 transition">
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-cyan-400 font-serif text-lg mb-4">APEX</p>
              <p className="text-slate-400 text-sm">Next-generation luxury real estate investments.</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-4">Quick Links</p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Investment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
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
                  <p>+1 (415) 555-0100</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <p>info@apex.com</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-4">Follow Us</p>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-cyan-400">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-cyan-400">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 Apex Luxury Investments. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
