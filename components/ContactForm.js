export default function ContactForm({ compact = false }) {
  return (
    <form className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{compact ? 'Contact Agent' : 'Send a Message'}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <input className="rounded-lg border border-slate-300 p-3 text-sm" placeholder="Your Name" required />
        <input className="rounded-lg border border-slate-300 p-3 text-sm" placeholder="Phone Number" required />
      </div>
      <input
        type="email"
        className="w-full rounded-lg border border-slate-300 p-3 text-sm"
        placeholder="Email Address"
        required
      />
      <textarea
        className="h-32 w-full rounded-lg border border-slate-300 p-3 text-sm"
        placeholder="Tell us about your inquiry"
      />
      <button className="w-full rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-700">
        Submit Inquiry
      </button>
    </form>
  );
}
