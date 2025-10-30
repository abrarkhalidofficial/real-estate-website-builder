export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative grid min-h-[50vh] place-items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 dark:from-black/60" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center">
          <h1 className="text-4xl font-bold md:text-6xl">Create Your Real Estate Website Easily</h1>
          <p className="mt-4 text-base text-muted-foreground">
            Choose a template, edit live with the visual builder, then preview and export.
          </p>
          <a href="#templates" className="mt-8 inline-block rounded bg-white px-4 py-2 font-medium text-black dark:bg-zinc-900 dark:text-white">
            Guest Study
          </a>
        </div>
      </section>
      <section id="templates" className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Templates</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TemplateCard title="Luxury Villas" href="/builder?template=luxuryVillas" />
          <TemplateCard title="Commercial Properties" href="/builder?template=commercialProperties" />
          <TemplateCard title="Housing Society" href="/builder?template=housingSociety" />
        </div>
      </section>
    </div>
  );
}

function TemplateCard({ title, href }: { title: string; href: string }) {
  return (
    <a href={href} className="group relative flex h-40 items-end overflow-hidden rounded border p-4">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/50" />
      <span className="relative z-10 text-lg font-medium text-white">{title}</span>
    </a>
  );
}
