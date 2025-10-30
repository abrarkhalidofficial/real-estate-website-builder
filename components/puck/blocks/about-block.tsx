"use client"

export function AboutBlock({
  title = "About Us",
  content = "Add your content here",
  image = "/about-section.png",
}: {
  title?: string
  content?: string
  image?: string
}) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary dark:text-neutral-50 mb-6">{title}</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">{content}</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-96 object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
