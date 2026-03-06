import ImageGallery from '@/components/ImageGallery';
import ContactForm from '@/components/ContactForm';
import { properties } from '@/data/properties';
import { notFound } from 'next/navigation';

export default function PropertyDetailPage({ params }) {
  const property = properties.find((item) => item.id === params.id);

  if (!property) {
    notFound();
  }

  const images = [property.image, ...property.gallery];

  return (
    <div className="mx-auto grid max-w-7xl gap-8 py-10 container-padding lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <ImageGallery images={images} title={property.title} />

        <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-3xl font-bold">{property.title}</h1>
            <span className="text-2xl font-extrabold text-brand-700">${property.price.toLocaleString()}</span>
          </div>
          <p className="text-slate-500">{property.address}</p>

          <div className="grid gap-4 rounded-xl bg-slate-100 p-4 text-sm sm:grid-cols-3">
            <p><strong>{property.beds}</strong> Bedrooms</p>
            <p><strong>{property.baths}</strong> Bathrooms</p>
            <p><strong>{property.area}</strong> sq ft</p>
          </div>

          <p className="text-slate-700 leading-relaxed">{property.description}</p>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Agent Information</h2>
          <p className="mt-2 text-sm text-slate-600">Reach out to schedule a private tour or request more details.</p>
          <div className="mt-4 space-y-1 text-sm">
            <p><strong>Name:</strong> Alex Morgan</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Email:</strong> alex@realestateapp.com</p>
          </div>
        </div>
        <ContactForm compact />
      </aside>
    </div>
  );
}
