import type { Property } from "@/lib/schemas";

export function ListingsSection(props: {
  properties?: Property[];
  layout?: "grid" | "masonry";
  categories?: string[];
}) {
  const { properties = [], layout = "grid", categories = [] } = props;
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Listings</h2>
        {categories.length > 0 && (
          <div className="flex gap-2 text-sm text-muted-foreground">
            {categories.map((c, i) => (
              <span key={i} className="rounded border px-2 py-1">
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
      {properties.length === 0 ? (
        <div className="rounded border p-6 text-center text-sm text-muted-foreground">
          No properties yet. Use the editor to add properties.
        </div>
      ) : (
        <div className={layout === "grid" ? "grid grid-cols-1 gap-6 md:grid-cols-3" : "columns-2 md:columns-3 gap-6"}>
          {properties.map((p) => (
            <div key={p.id} className="overflow-hidden rounded border">
              {p.images?.[0] && (
                <img src={p.images[0]} alt={p.title} className="h-40 w-full object-cover" />
              )}
              <div className="p-3">
                <h3 className="font-medium">{p.title}</h3>
                {p.location && <p className="text-sm text-muted-foreground">{p.location}</p>}
                {p.price != null && <p className="mt-2 text-sm">${p.price.toLocaleString()}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}