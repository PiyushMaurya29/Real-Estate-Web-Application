import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact | RealEstateApp'
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 py-10 container-padding">
      <header>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2 text-slate-600">We are here to help you find the right property and answer your questions.</p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <ContactForm />

        <section className="space-y-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Office Information</h2>
            <p className="mt-2 text-sm text-slate-600">123 Prime Avenue, Downtown, New York, NY</p>
            <p className="text-sm text-slate-600">Phone: +1 (555) 987-6543</p>
            <p className="text-sm text-slate-600">Email: contact@realestateapp.com</p>
          </div>

          <div className="flex h-72 items-center justify-center rounded-2xl bg-slate-200 text-slate-600 shadow-sm">
            Map Placeholder
          </div>
        </section>
      </div>
    </div>
  );
}
