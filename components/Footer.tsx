'use client';

import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { doctor } from '@/lib/doctor';
import DoctorLogo from '@/components/DoctorLogo';
import { useLogoEasterEgg } from '@/contexts/LogoEasterEggContext';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/appointment/', label: 'Appointment' },
  { href: '/contact/', label: 'Contact' },
];

export default function Footer() {
  const easterEgg = useLogoEasterEgg();

  return (
    <footer className="w-full max-w-full overflow-x-hidden border-t border-gray-100 bg-gray-50 pb-24 md:pb-8">
      <div className="mx-auto w-full max-w-6xl min-w-0 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid w-full min-w-0 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-teal-700">
              <span
                className="flex min-w-[44px] min-h-[44px] items-center justify-center rounded-lg bg-pastel-blue px-2 py-1 text-teal-700 touch-manipulation cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Pediatric Care logo"
                onClick={() => easterEgg?.registerLogoClick()}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    easterEgg?.registerLogoClick();
                  }
                }}
              >
                <DoctorLogo size={20} />
              </span>
              Pediatric Care
            </div>
            <p className="text-sm text-gray-600">
              Compassionate pediatric care for your little ones. Your trusted child specialist in India.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-teal-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-gray-800">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <a href={`tel:+91${doctor.phone.replace(/\D/g, '').replace(/^0/, '')}`} className="hover:text-teal-700">
                  {doctor.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <EnvelopeIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <a href="mailto:contact@pediatric-clinic.in" className="hover:text-teal-700">
                  contact@pediatric-clinic.in
                </a>
              </li>
              <li className="flex min-w-0 items-start gap-2">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span className="min-w-0 break-words">{doctor.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-gray-800">Legal</h3>
            <Link href="/privacy-policy/" className="text-sm text-gray-600 hover:text-teal-700">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8">
          <p className="text-center text-xs text-gray-500">
            This website is for informational purposes only and does not replace medical consultation.
            Please visit the clinic or consult your doctor for medical advice.
          </p>
          <p className="mt-2 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Pediatric Care. All rights reserved.
          </p>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm font-medium tracking-wide text-teal-700 sm:text-base break-words">
            Website designed & developed by{' '}
            <a
              href="https://www.instagram.com/nish.parmar_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block font-semibold underline-offset-2 transition-all duration-200 ease-in-out hover:underline focus-visible:outline focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus-visible:rounded"
            >
              <span className="bg-gradient-to-r from-teal-700 to-teal-800 bg-clip-text text-transparent transition-all duration-200 ease-in-out group-hover:from-teal-800 group-hover:to-teal-900">
                Nishant Parmar
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
