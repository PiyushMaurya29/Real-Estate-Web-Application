import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 py-24 text-center container-padding">
      <h1 className="text-4xl font-bold">Property Not Found</h1>
      <p className="text-slate-600">The page you are looking for does not exist or has been removed.</p>
      <Link href="/properties" className="rounded-xl bg-brand-500 px-5 py-3 text-white hover:bg-brand-700">
        Back to Properties
      </Link>
    </div>
  );
}
