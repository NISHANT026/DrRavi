'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DoctorLogo from '@/components/DoctorLogo';
import { useMobileMenu } from '@/contexts/MobileMenuContext';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/appointment/', label: 'Appointment' },
  { href: '/contact/', label: 'Contact' },
];

function normalizePath(path: string) {
  const p = path.replace(/\/$/, '') || '/';
  return p;
}

function isActivePath(currentPath: string, href: string) {
  const current = normalizePath(currentPath);
  const target = normalizePath(href);
  if (target === '/') return current === '/';
  return current === target || current.startsWith(target + '/');
}

interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  variant: 'desktop' | 'mobile';
}

function NavItem({ href, label, isActive, onClick, variant }: NavItemProps) {
  if (variant === 'desktop') {
    return (
      <li>
        <Link
          href={href}
          onClick={onClick}
          className={`
            group relative inline-block py-2 text-[15px] transition-all duration-200 ease-out
            focus-visible:outline focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus-visible:rounded-lg
            ${isActive
              ? 'font-semibold text-teal-700'
              : 'font-medium text-gray-600 hover:text-teal-700'
            }
          `}
          aria-current={isActive ? 'page' : undefined}
        >
          {label}
          {/* Active: full underline. Inactive hover: subtle slide-in underline (accessibility: active uses border) */}
          <span
            className={`
              absolute bottom-0 left-0 h-0.5 bg-teal-600 transition-all duration-200 ease-out
              ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'}
            `}
            aria-hidden
          />
        </Link>
      </li>
    );
  }

  // Mobile: background tint + left border
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={`
          block rounded-lg border-l-4 py-3 px-4 text-[15px] transition-all duration-200 ease-out
          focus-visible:outline focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2
          ${isActive
            ? 'border-teal-600 bg-pastel-blue/70 font-semibold text-teal-800'
            : 'border-transparent font-medium text-gray-600 hover:bg-pastel-blue/50 hover:text-teal-700'
          }
        `}
        aria-current={isActive ? 'page' : undefined}
      >
        {label}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { isOpen: open, setOpen } = useMobileMenu();

  return (
    <header className="sticky top-0 z-50 w-full max-w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm shadow-soft overflow-hidden">
      <nav className="mx-auto flex max-w-6xl min-w-0 w-full items-center justify-between gap-2 px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex min-w-0 shrink items-center gap-2 text-lg font-semibold text-teal-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus-visible:rounded-lg sm:text-xl">
          <span className="flex items-center justify-center rounded-lg bg-pastel-blue px-2 py-1 text-teal-700">
            <DoctorLogo size={20} />
          </span>
          <span className="truncate">Pediatric Care</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={isActivePath(pathname ?? '', link.href)}
              variant="desktop"
            />
          ))}
        </ul>

        <Link
          href="/appointment/"
          className="hidden min-h-[44px] items-center rounded-xl bg-teal-600 px-4 py-2 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-teal-700 md:inline-flex focus-visible:outline focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
        >
          Book Appointment
        </Link>

        <button
          type="button"
          className="rounded-lg p-2 text-gray-600 hover:bg-pastel-blue hover:text-teal-700 transition-colors duration-200 md:hidden focus-visible:outline focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gray-100 bg-white px-3 py-4 md:hidden" role="dialog" aria-label="Mobile menu">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={isActivePath(pathname ?? '', link.href)}
                onClick={() => setOpen(false)}
                variant="mobile"
              />
            ))}
            <li className="mt-2 pt-2 border-t border-gray-100">
              <Link
                href="/appointment/"
                className="btn-primary block w-full text-center"
                onClick={() => setOpen(false)}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
