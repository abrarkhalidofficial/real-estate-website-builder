"use client"

export function HeroBlock({
  heading = "Welcome",
  subheading = "Your subtitle here",
  ctaLabel = "Get Started",
  ctaHref = "#",
  bgSrc = "/abstract-hero-background.png",
  overlayOpacity = 0.3,
}: {
  heading?: string
  subheading?: string
  ctaLabel?: string
  ctaHref?: string
  bgSrc?: string
  overlayOpacity?: number
}) {
  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">{heading}</h1>
        <p className="text-xl text-neutral-200 mb-8 text-balance">{subheading}</p>
        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  )
}
