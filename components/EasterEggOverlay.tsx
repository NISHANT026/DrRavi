'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import { useLogoEasterEgg } from '@/contexts/LogoEasterEggContext';

export default function EasterEggOverlay() {
  const ctx = useLogoEasterEgg();
  const close = useCallback(() => ctx?.closeOverlay(), [ctx]);

  if (!ctx?.showOverlay) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Easter egg"
      onClick={close}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src="/easter-egg-photo.png"
          alt=""
          width={600}
          height={400}
          className="h-auto w-full object-contain"
          unoptimized
          priority
        />
      </div>
    </div>
  );
}
