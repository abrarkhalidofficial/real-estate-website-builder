"use client"

export function ListingsBlock({
  title = "Featured Properties",
  layout = "grid",
  properties = [],
}: {
  title?: string
  layout?: "grid" | "masonry"
  properties?: Array<{
    id?: string
    title?: string
    description?: string
    price?: number
    location?: string
    bedrooms?: number
    bathrooms?: number
    areaSqFt?: number
    images?: string[]
    features?: string[]
    status?: "for-sale" | "for-rent" | "sold"
  }>
}) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary dark:text-neutral-50 mb-12 text-center">{title}</h2>
        <div className={layout === "masonry" ? "columns-1 md:columns-2 lg:columns-3 gap-8" : "grid md:grid-cols-3 gap-8"}>
          {(properties?.length ? properties : []).map((p, idx) => (
            <div
              key={p.id || idx}
              className="break-inside-avoid card p-6 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700"
            >
              {/* Image */}
              {p.images && p.images.length ? (
                <img
                  src={p.images[0] || "/placeholder.svg"}
                  alt={p.title || "Property image"}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-neutral-200 dark:bg-neutral-700 rounded-lg mb-4" />
              )}

              {/* Title + price */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-xl font-bold text-primary dark:text-neutral-50">{p.title || "Untitled"}</h3>
                {typeof p.price === "number" && (
                  <span className="text-lg font-bold text-accent">${p.price.toLocaleString()}</span>
                )}
              </div>

              {/* Meta */}
              <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                {(p.location || "").trim()}
                {(p.bedrooms || p.bathrooms) && (
                  <>
                    {p.location ? " • " : ""}
                    {p.bedrooms ? `${p.bedrooms} bd` : ""}
                    {p.bathrooms ? ` ${p.bathrooms} ba` : ""}
                  </>
                )}
                {p.areaSqFt ? ` • ${p.areaSqFt} sqft` : ""}
              </p>

              {/* Description */}
              {p.description && (
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{p.description}</p>
              )}

              {/* Features */}
              {p.features && p.features.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.features.slice(0, 6).map((f, i) => (
                    <span
                      key={`${p.id}-feature-${i}`}
                      className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-700 text-xs text-neutral-700 dark:text-neutral-300"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              )}

              {/* Status */}
              {p.status && (
                <span className="inline-block text-xs px-2 py-1 rounded bg-primary text-primary-foreground">
                  {p.status === "for-sale" ? "For Sale" : p.status === "for-rent" ? "For Rent" : "Sold"}
                </span>
              )}
            </div>
          ))}

          {!properties?.length && (
            <div className="card p-6 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="w-full h-48 bg-neutral-200 dark:bg-neutral-700 rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-primary dark:text-neutral-50 mb-2">Sample Property</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">Add properties to display them here</p>
              <p className="text-lg font-bold text-accent">$0</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
