'use client';

import { useMemo, useState } from 'react';
import PropertyCard from './PropertyCard';

const PAGE_SIZE = 4;

export default function PropertyGrid({ properties }) {
  const [filters, setFilters] = useState({ price: 'all', type: 'all', location: 'all' });
  const [visible, setVisible] = useState(PAGE_SIZE);

  const locations = [...new Set(properties.map((item) => item.location))];

  const filtered = useMemo(() => {
    return properties.filter((property) => {
      const priceMatch =
        filters.price === 'all' ||
        (filters.price === 'low' && property.price < 500000) ||
        (filters.price === 'mid' && property.price >= 500000 && property.price < 900000) ||
        (filters.price === 'high' && property.price >= 900000);

      const typeMatch = filters.type === 'all' || property.type === filters.type;
      const locationMatch = filters.location === 'all' || property.location === filters.location;

      return priceMatch && typeMatch && locationMatch;
    });
  }, [properties, filters]);

  const displayed = filtered.slice(0, visible);

  return (
    <section className="space-y-6">
      <div className="grid gap-4 rounded-2xl bg-white p-4 shadow-sm md:grid-cols-4">
        <select
          className="rounded-lg border border-slate-300 p-2 text-sm"
          onChange={(e) => {
            setFilters((prev) => ({ ...prev, price: e.target.value }));
            setVisible(PAGE_SIZE);
          }}
        >
          <option value="all">All Prices</option>
          <option value="low">Below $500k</option>
          <option value="mid">$500k - $900k</option>
          <option value="high">Above $900k</option>
        </select>

        <select
          className="rounded-lg border border-slate-300 p-2 text-sm"
          onChange={(e) => {
            setFilters((prev) => ({ ...prev, type: e.target.value }));
            setVisible(PAGE_SIZE);
          }}
        >
          <option value="all">All Types</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
        </select>

        <select
          className="rounded-lg border border-slate-300 p-2 text-sm"
          onChange={(e) => {
            setFilters((prev) => ({ ...prev, location: e.target.value }));
            setVisible(PAGE_SIZE);
          }}
        >
          <option value="all">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            setFilters({ price: 'all', type: 'all', location: 'all' });
            setVisible(PAGE_SIZE);
          }}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          Reset Filters
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {displayed.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {filtered.length === 0 && <p className="text-center text-slate-500">No properties match your filters.</p>}

      {visible < filtered.length && (
        <div className="text-center">
          <button
            onClick={() => setVisible((prev) => prev + PAGE_SIZE)}
            className="rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
