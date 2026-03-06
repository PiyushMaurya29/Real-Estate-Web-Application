import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 container-padding py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">realestateapp</h3>
          <p className="mt-3 text-sm text-slate-400">
            Find your dream home through a curated marketplace of modern houses, apartments, and villas.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/properties" className="hover:text-white">Properties</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Follow Us</h4>
          <div className="mt-3 flex gap-3 text-sm">
            {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
              <span
                key={social}
                className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 transition hover:border-brand-500 hover:text-white"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} realestateapp. All rights reserved.
      </div>
    </footer>
  );
}
