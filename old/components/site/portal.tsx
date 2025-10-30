export function PortalSection({ heading, showContactForm = true }: { heading: string; showContactForm?: boolean }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <h2 className="mb-4 text-2xl font-semibold">{heading}</h2>
      {showContactForm && (
        <form className="space-y-3">
          <div>
            <label className="block text-sm">Name</label>
            <input className="mt-1 w-full rounded border px-3 py-2" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input type="email" className="mt-1 w-full rounded border px-3 py-2" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm">Message</label>
            <textarea className="mt-1 w-full rounded border px-3 py-2" rows={4} placeholder="Tell us more" />
          </div>
          <button type="button" className="rounded bg-black px-4 py-2 text-white dark:bg-white dark:text-black">
            Send
          </button>
        </form>
      )}
    </section>
  );
}