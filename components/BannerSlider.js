'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const slides = [
  {
    title: 'Find Your Perfect Home',
    subtitle: 'Explore modern properties in top locations.',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80'
  },
  {
    title: 'Luxury Living Redefined',
    subtitle: 'Discover premium villas with stunning views.',
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80'
  },
  {
    title: 'Smart Investments Start Here',
    subtitle: 'Browse curated homes with great value.',
    image:
      'https://images.unsplash.com/photo-1600585154205-4e5fe7c39198?auto=format&fit=crop&w=1600&q=80'
  }
];

export default function BannerSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-3xl">
      <div className="relative h-[420px] md:h-[520px]">
        <Image src={slides[active].image} alt={slides[active].title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-padding text-white">
            <h1 className="max-w-xl text-3xl font-bold leading-tight md:text-5xl">{slides[active].title}</h1>
            <p className="mt-4 max-w-lg text-sm md:text-lg">{slides[active].subtitle}</p>
            <Link
              href="/properties"
              className="mt-6 inline-flex rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Explore Properties
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2.5 w-8 rounded-full ${active === index ? 'bg-white' : 'bg-white/60'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
