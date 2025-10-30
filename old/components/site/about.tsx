export function AboutSection({ richText, teamPhotos }: { richText: string; teamPhotos?: string[] }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <h2 className="mb-4 text-2xl font-semibold">About Us</h2>
      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{richText}</p>
      {teamPhotos && teamPhotos.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
          {teamPhotos.map((src, i) => (
            <img key={i} src={src} alt={`Team ${i + 1}`} className="h-24 w-full rounded object-cover" />
          ))}
        </div>
      )}
    </section>
  );
}