export function FAQSection({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <h2 className="mb-4 text-2xl font-semibold">FAQs</h2>
      <div className="space-y-4">
        {items?.map((it, idx) => (
          <div key={idx} className="rounded-md border p-4">
            <p className="font-medium">{it.q}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{it.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}