'use client';

import Section from '@/components/Section';
import Card from '@/components/Card';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { doctor } from '@/lib/doctor';

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-pastel-mint/60 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            We would love to hear from you. Reach out for appointments or queries.
          </p>
        </div>
      </section>

      <Section background="white">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Card hover={false}>
              <div className="flex items-start gap-4">
                <PhoneIcon className="h-8 w-8 shrink-0 text-blue-500" />
                <div>
                  <h2 className="font-semibold text-gray-900">Phone</h2>
                  <a href={`tel:+91${doctor.phone.replace(/\D/g, '').replace(/^0/, '')}`} className="mt-2 block text-gray-600 hover:text-blue-600">
                    {doctor.phone}
                  </a>
                </div>
              </div>
            </Card>
            <Card hover={false}>
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="h-8 w-8 shrink-0 text-blue-500" />
                <div>
                  <h2 className="font-semibold text-gray-900">Email</h2>
                  <a
                    href="mailto:contact@pediatric-clinic.in"
                    className="mt-2 block text-gray-600 hover:text-blue-600"
                  >
                    contact@pediatric-clinic.in
                  </a>
                </div>
              </div>
            </Card>
            <Card hover={false}>
              <div className="flex items-start gap-4">
                <MapPinIcon className="h-8 w-8 shrink-0 text-blue-500" />
                <div>
                  <h2 className="font-semibold text-gray-900">Address</h2>
                  <p className="mt-2 text-gray-600 whitespace-pre-line">
                    {doctor.address.replace(/, /g, ',\n')}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card hover={false}>
            <h2 className="text-lg font-semibold text-gray-900">Send a Message</h2>
            <p className="mt-1 text-sm text-gray-600">
              This form is for display only. No backend is connected.
            </p>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  placeholder="+91 "
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  placeholder="Your message..."
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message (UI only)
              </button>
            </form>
          </Card>
        </div>
      </Section>
    </>
  );
}
