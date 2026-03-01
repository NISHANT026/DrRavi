'use client';

import Link from 'next/link';

/**
 * Sticky "Book Appointment" bar for mobile. Hidden on md+.
 * Min 44px touch target, high contrast.
 */
export default function StickyBookCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-gray-200 bg-white/98 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden"
      role="complementary"
      aria-label="Quick book appointment"
    >
      <Link
        href="/appointment/"
        className="flex min-h-[44px] w-full max-w-sm items-center justify-center rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-teal-700 active:scale-[0.98]"
      >
        Book Appointment
      </Link>
    </div>
  );
}
