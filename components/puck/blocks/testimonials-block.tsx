"use client"

export function TestimonialsBlock({
  title = "What Our Clients Say",
}: {
  title?: string
}) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary dark:text-neutral-50 mb-12 text-center">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 italic">
              "Add testimonials to display them here"
            </p>
            <p className="font-bold text-primary dark:text-neutral-50">Sample Client</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Role</p>
          </div>
        </div>
      </div>
    </section>
  )
}
