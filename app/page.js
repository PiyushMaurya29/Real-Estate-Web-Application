import BannerSlider from '@/components/BannerSlider';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';

export default function HomePage() {
  const featured = properties.slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl space-y-12 py-8 container-padding md:py-10">
      <BannerSlider />

      <section className="-mt-4 rounded-2xl bg-white p-4 shadow-lg md:p-6">
        <h2 className="text-lg font-semibold">Search Properties</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <input className="rounded-lg border border-slate-300 p-3 text-sm" placeholder="Location" />
          <select className="rounded-lg border border-slate-300 p-3 text-sm">
            <option>Any Price</option>
            <option>Below $500k</option>
            <option>$500k - $900k</option>
            <option>Above $900k</option>
          </select>
          <select className="rounded-lg border border-slate-300 p-3 text-sm">
            <option>Any Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Villa</option>
          </select>
          <button className="rounded-lg bg-brand-500 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-700">
            Search
          </button>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Properties</h2>
          <a href="/properties" className="text-sm font-semibold text-brand-700 hover:underline">
            View all
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}
