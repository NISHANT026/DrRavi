'use client';

import Link from 'next/link';
import { useMobileMenu } from '@/contexts/MobileMenuContext';

/**
 * Sticky "Book Appointment" bar for mobile. Hidden on md+.
 * Also hidden when hamburger menu is open to avoid two "Book Appointment" buttons.
 */
export default function StickyBookCTA() {
  const { isOpen: menuOpen } = useMobileMenu();
  if (menuOpen) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 flex w-full max-w-full justify-center border-t border-gray-200 bg-white/98 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      role="complementary"
      aria-label="Quick book appointment"
    >
      <Link
        href="/appointment/"
        className="flex min-h-[44px] w-full max-w-sm flex-shrink-0 items-center justify-center rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-teal-700 active:scale-[0.98]"
      >
        Book Appointment
      </Link>
    </div>
  );
}
