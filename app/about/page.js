import Image from 'next/image';

const team = [
  {
    name: 'Sophia Carter',
    role: 'Founder & CEO',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Liam Brooks',
    role: 'Lead Property Consultant',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Emma Reed',
    role: 'Client Success Manager',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80'
  }
];

export const metadata = {
  title: 'About | RealEstateApp'
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 py-10 container-padding">
      <section className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">About RealEstateApp</h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
          We are a modern real estate company focused on helping buyers and investors find premium properties with
          confidence. From city apartments to luxury villas, our mission is to deliver transparent guidance and a
          seamless digital experience.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Meet Our Team</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="relative h-72">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-slate-500">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
