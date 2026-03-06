'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ImageGallery({ images, title }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="relative h-[380px] overflow-hidden rounded-2xl md:h-[480px]">
        <Image src={selected} alt={title} fill className="object-cover" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => setSelected(img)}
            className="relative h-24 overflow-hidden rounded-xl border-2 border-transparent transition hover:border-brand-500"
          >
            <Image src={img} alt={title} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
