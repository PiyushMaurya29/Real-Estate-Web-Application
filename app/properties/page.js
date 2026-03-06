import PropertyGrid from '@/components/PropertyGrid';
import { properties } from '@/data/properties';

export const metadata = {
  title: 'Properties | RealEstateApp'
};

export default function PropertiesPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 py-10 container-padding">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Browse Properties</h1>
        <p className="max-w-2xl text-slate-600">
          Explore houses, apartments, and villas with dynamic filtering and quick property previews.
        </p>
      </header>
      <PropertyGrid properties={properties} />
    </div>
  );
}
