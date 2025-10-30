export function TestimonialsSection({ items }: { items: { name: string; quote: string; avatar?: string }[] }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-8">
      <h2 className="mb-4 text-2xl font-semibold">Testimonials</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items?.map((t, i) => (
          <div key={i} className="rounded border p-4">
            <div className="flex items-center gap-3">
              {t.avatar && <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />}
              <div>
                <p className="font-medium">{t.name}</p>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">“{t.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}