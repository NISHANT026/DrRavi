import Link from 'next/link';
import {
  BeakerIcon,
  HeartIcon,
  ChartBarIcon,
  FireIcon,
} from '@heroicons/react/24/outline';
import Section from '@/components/Section';
import Card from '@/components/Card';
import HeroImage from '@/components/HeroImage';
import { doctor, clinicTimings } from '@/lib/doctor';

const servicesPreview = [
  {
    title: 'Vaccination',
    description: 'Complete immunization schedule for your child’s healthy future.',
    icon: BeakerIcon,
    href: '/services/#vaccination',
  },
  {
    title: 'Newborn Care',
    description: 'Gentle care for newborns and support for new parents.',
    icon: HeartIcon,
    href: '/services/#newborn-care',
  },
  {
    title: 'Growth Monitoring',
    description: 'Track milestones and development with expert guidance.',
    icon: ChartBarIcon,
    href: '/services/#growth-monitoring',
  },
  {
    title: 'Fever & Infection Care',
    description: 'Quick diagnosis and treatment for common childhood illnesses.',
    icon: FireIcon,
    href: '/services/#general-consultation',
  },
];

const testimonials = [
  {
    quote: `${doctor.name} is incredibly patient and kind with our toddler. The clinic is clean and the staff is helpful.`,
    author: 'Parent, Ujjain',
  },
  {
    quote: 'We have been coming here for vaccinations since our baby was born. Highly recommend for all parents.',
    author: 'Parent, Ujjain',
  },
  {
    quote: 'Professional, warm, and always takes time to explain everything. Best pediatrician we have visited.',
    author: 'Parent, Ujjain',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pastel-blue via-white to-pastel-mint">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Compassionate Pediatric Care for Your Little Ones
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                A trusted child specialist clinic in India, dedicated to the health and wellbeing of your children.
                From vaccinations to growth monitoring, we are here for every milestone.
              </p>
              <div className="mt-8">
                <Link href="/appointment/" className="btn-primary">
                  Book Appointment
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="aspect-[4/3] w-full max-w-md rounded-2xl overflow-hidden border border-pastel-blue-dark/30 shadow-soft">
                <HeroImage />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <Section
        title="Our Services"
        subtitle="We offer a range of pediatric services to support your child’s health from birth through adolescence."
        background="white"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesPreview.map((service) => (
            <Link key={service.title} href={service.href}>
              <Card>
                <service.icon className="h-10 w-10 text-blue-500" />
                <h3 className="mt-4 font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{service.description}</p>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services/" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        title="What Parents Say"
        subtitle="Trusted by families across India for compassionate pediatric care."
        background="pastel-mint"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} hover={false}>
              <p className="text-gray-600">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-gray-800">— {t.author}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Clinic Timings */}
      <Section
        title="Clinic Timings"
        subtitle="Visit us during these hours. For emergencies, please contact your nearest hospital."
        background="pastel-blue"
      >
        <div className="mx-auto max-w-md">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
            <ul className="space-y-4">
              {clinicTimings.map((slot) => (
                <li key={slot.day} className="flex justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <span className="font-medium text-gray-800">{slot.day}</span>
                  <span className="text-gray-600">{slot.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 text-center">
            <Link href="/appointment/" className="btn-primary">
              Book Appointment
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
