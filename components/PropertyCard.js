import Image from 'next/image';
import Link from 'next/link';

export default function PropertyCard({ property }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56">
        <Image src={property.image} alt={property.title} fill className="object-cover" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <h3 className="line-clamp-1 text-lg font-semibold">{property.title}</h3>
          <p className="text-brand-700 font-bold">${property.price.toLocaleString()}</p>
        </div>
        <p className="text-sm text-slate-500">{property.location}</p>
        <p className="line-clamp-2 text-sm text-slate-600">{property.description}</p>
        <Link
          href={`/properties/${property.id}`}
          className="inline-block rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
