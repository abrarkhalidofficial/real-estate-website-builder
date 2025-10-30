"use client"

export function FAQBlock({
  title = "Frequently Asked Questions",
  items = [],
}: {
  title?: string
  items?: Array<{ id?: string; question?: string; answer?: string }>
}) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100 dark:bg-neutral-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary dark:text-neutral-50 mb-12 text-center">{title}</h2>
        <div className="space-y-4">
          {(items?.length ? items : []).map((it, idx) => (
            <div
              key={it.id || idx}
              className="bg-white dark:bg-neutral-700 p-6 rounded-lg border border-neutral-200 dark:border-neutral-600"
            >
              <h3 className="font-bold text-primary dark:text-neutral-50 mb-2">{it.question || "Question"}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{it.answer || "Answer"}</p>
            </div>
          ))}

          {!items?.length && (
            <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg border border-neutral-200 dark:border-neutral-600">
              <h3 className="font-bold text-primary dark:text-neutral-50 mb-2">Sample Question</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Add FAQ items to display them here</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
