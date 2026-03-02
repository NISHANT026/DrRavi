import type { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import { doctor, clinicTimings } from '@/lib/doctor';
import LazyMap from '@/components/LazyMap';

export const metadata: Metadata = {
  title: 'Book Appointment | Pediatric Care | Child Specialist Clinic',
  description:
    'Visit our pediatric clinic. Find address, timings, and contact. Call or WhatsApp to book an appointment. No online consultation available.',
};

const phoneDigits = doctor.phone.replace(/\D/g, '').replace(/^0/, '');
const whatsappNumber = `91${phoneDigits}`;

export default function AppointmentPage() {
  return (
    <>
      <section className="w-full max-w-full overflow-hidden bg-gradient-to-br from-pastel-blue/60 to-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Book an Appointment</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Visit us at the clinic or call / WhatsApp to schedule a visit.
          </p>
        </div>
      </section>

      <Section background="white">
        <div className="grid w-full min-w-0 grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="min-w-0 space-y-6">
            <Card hover={false}>
              <div className="flex items-start gap-4">
                <MapPinIcon className="h-8 w-8 shrink-0 text-blue-500" />
                <div>
                  <h2 className="font-semibold text-gray-900">Clinic Address</h2>
                  <p className="mt-2 min-w-0 break-words text-gray-600 whitespace-pre-line">
                    {doctor.address.replace(/, /g, '\n')}
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex min-w-0 max-w-full flex-col gap-4 sm:flex-row">
              <a
                href={`tel:+91${phoneDigits}`}
                className="flex min-h-[44px] min-w-0 flex-1 items-center justify-center gap-3 rounded-2xl bg-green-600 px-4 py-4 font-semibold text-white shadow-soft transition-all hover:bg-green-700 hover:shadow-soft-hover sm:px-6"
              >
                <PhoneIcon className="h-7 w-7 shrink-0" />
                <span className="min-w-0 truncate">Call to Book</span>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] min-w-0 flex-1 items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-4 py-4 font-semibold text-white shadow-soft transition-all hover:opacity-90 hover:shadow-soft-hover sm:px-6"
              >
                <ChatBubbleLeftRightIcon className="h-7 w-7 shrink-0" />
                <span className="min-w-0 truncate">WhatsApp</span>
              </a>
            </div>

            <Card hover={false} className="border-amber-200 bg-amber-50/50">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> No online consultation available. Please visit the clinic in person or
                call / WhatsApp to book an appointment.
              </p>
            </Card>
          </div>

          <div className="min-w-0">
            <Card hover={false} className="min-w-0 overflow-hidden p-0">
              <LazyMap />
            </Card>

            <Card hover={false} className="mt-6">
              <div className="flex items-start gap-4">
                <ClockIcon className="h-8 w-8 shrink-0 text-blue-500" />
                <div>
                  <h2 className="font-semibold text-gray-900">Clinic Timings</h2>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    {clinicTimings.map((slot) => (
                      <li key={slot.day}>
                        <span className="font-medium">{slot.day}:</span> {slot.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
