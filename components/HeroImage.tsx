'use client';

import { useState } from 'react';
import { doctor } from '@/lib/doctor';

export default function HeroImage() {
  const [src, setSrc] = useState(doctor.homepageHeroImage);
  const fallback = doctor.image1;

  return (
    <img
      src={src}
      alt={`${doctor.name} - ${doctor.specialty}`}
      className="h-full w-full object-cover"
      loading="eager"
      decoding="async"
      fetchPriority="high"
      onError={() => setSrc(fallback)}
    />
  );
}
