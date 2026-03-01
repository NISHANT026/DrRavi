'use client';

import { useEffect, useRef, useState } from 'react';

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5863.747!2d75.7928109!3d23.1792601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963746e76dbf7bd%3A0x827a367d5acf0b7!2sDr.%20Ravi%20Rathore%27s%20Child%20Care%20and%20Advanced%20Vaccination%20Center!5e0!3m2!1sen!2sin!4v1709251200!5m2!1sen!2sin";

export default function LazyMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: '100px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative aspect-video w-full max-w-full min-h-[240px] min-w-0 sm:min-h-[280px]">
      {shouldLoad ? (
        <iframe
          title="Dr. Ravi Rathore's Child Care and Advanced Vaccination Center - Location"
          src={MAP_EMBED_SRC}
          width="100%"
          height="100%"
          className="absolute inset-0 block h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm"
          aria-hidden
        >
          Map loads when visible
        </div>
      )}
    </div>
  );
}
