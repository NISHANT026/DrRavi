import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { doctor } from '@/lib/doctor';
import DoctorLogo from '@/components/DoctorLogo';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/appointment/', label: 'Appointment' },
  { href: '/contact/', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-teal-700">
              <span className="flex items-center justify-center rounded-lg bg-pastel-blue px-2 py-1 text-teal-700">
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
              <li className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span>{doctor.address}</span>
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
      </div>
    </footer>
  );
}
