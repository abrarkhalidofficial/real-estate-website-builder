"use client"

export function PortalBlock({
  title = "Get in Touch",
  subtitle = "Contact us today",
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-neutral-200 mb-8">{subtitle}</p>
        <form className="space-y-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3 rounded-lg bg-white text-primary focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white text-primary focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-lg font-semibold transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
