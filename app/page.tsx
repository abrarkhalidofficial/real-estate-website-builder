"use client"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { TEMPLATES } from "@/lib/templates"
import { ArrowRight, Zap, Palette, Download } from "lucide-react"

export default function Home() {
  const templates = Object.values(TEMPLATES)

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-popover/80 backdrop-blur-md border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 animate-slide-in-left">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-200">
              <span className="text-primary-foreground font-bold">RE</span>
            </div>
            <span className="font-bold text-lg text-primary">Real Estate Builder</span>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 animated-gradient text-foreground animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">Create Your Real Estate Website Easily</h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Choose a template, customize with our visual editor, and export your site in minutes
          </p>
          <a
            href="#templates"
            className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Choose Your Template</h2>
            <p className="text-lg text-muted-foreground">
              Select from our professionally designed templates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {templates.map((template, idx) => (
              <div
                key={template.id}
                className="card p-6 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center hover:shadow-md transition-all duration-200">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-muted-foreground mb-2">
                      {template.name.split(" ")[0][0]}
                    </div>
                    <p className="text-sm text-muted-foreground">Template Preview</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-2">{template.name}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {template.seo?.description || "Professional template for your real estate business"}
                </p>

                <Link
                  href={`/builder?template=${template.templateId}`}
                  className="btn-primary text-center hover:shadow-lg transition-all duration-200"
                >
                  View Template
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16 animate-fade-in">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Visual Editor",
                description: "Drag-and-drop interface to customize every section of your site",
              },
              {
                icon: Zap,
                title: "Dark/Light Mode",
                description: "Built-in theme switching for better user experience",
              },
              {
                icon: Download,
                title: "Easy Export",
                description: "Download as HTML or React components with one click",
              },
              {
                title: "Responsive Design",
                description: "Your site looks perfect on all devices",
              },
              {
                title: "SEO Ready",
                description: "Optimize your site with built-in SEO settings",
              },
              {
                title: "Save Projects",
                description: "Save your work locally and come back anytime",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-lg bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {feature.icon && (
                  <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center hover:shadow-lg transition-all duration-200">
                    <feature.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                )}
                {!feature.icon && (
                  <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center hover:shadow-lg transition-all duration-200">
                    <span className="text-accent-foreground font-bold">{idx + 1}</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neutral-300">© 2025 Real Estate Website Builder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
