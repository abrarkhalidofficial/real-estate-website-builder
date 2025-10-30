"use client"

export function ListingsBlock({
  title = "Featured Properties",
  layout = "grid",
}: {
  title?: string
  layout?: "grid" | "masonry"
}) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary dark:text-neutral-50 mb-12 text-center">{title}</h2>
        <div
          className={layout === "masonry" ? "columns-1 md:columns-2 lg:columns-3 gap-8" : "grid md:grid-cols-3 gap-8"}
        >
          <div className="card p-6 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <div className="w-full h-48 bg-neutral-200 dark:bg-neutral-700 rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-primary dark:text-neutral-50 mb-2">Sample Property</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">Add properties to display them here</p>
            <p className="text-lg font-bold text-accent">$0</p>
          </div>
        </div>
      </div>
    </section>
  )
}
