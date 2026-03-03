import Link from 'next/link';
import {
  AcademicCapIcon,
  CpuChipIcon,
  UserGroupIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import Section from '@/components/Section';
import Card from '@/components/Card';
import HeroImage from '@/components/HeroImage';
import KeyServicesGrid from '@/components/KeyServicesGrid';
import LazyMap from '@/components/LazyMap';
import StickyBookCTA from '@/components/StickyBookCTA';
import {
  doctor,
  clinicTimings,
  heroCredibility,
  aboutShort,
} from '@/lib/doctor';

const whyChoose = [
  {
    title: 'Experience',
    description: 'Years of dedicated pediatric practice and continuous learning.',
    icon: AcademicCapIcon,
  },
  {
    title: 'Modern Equipment',
    description: 'Well-equipped clinic for accurate diagnosis and care.',
    icon: CpuChipIcon,
  },
  {
    title: 'Friendly Consultation',
    description: 'Calm, patient-focused visits that put children at ease.',
    icon: UserGroupIcon,
  },
  {
    title: 'Emergency Support',
    description: 'Guidance when you need it most for urgent concerns.',
    icon: PhoneIcon,
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

const phoneHref = `tel:+91${doctor.phone.replace(/\D/g, '').replace(/^0/, '')}`;

export default function HomePage() {
  return (
    <>
      {/* Hero: Doctor identity & credibility above the fold */}
      <section
        className="relative w-full max-w-full overflow-hidden bg-gradient-to-br from-pastel-blue via-white to-pastel-mint pb-20 md:pb-0"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto w-full max-w-6xl min-w-0 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
          <div className="grid w-full min-w-0 grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="order-2 min-w-0 lg:order-1">
              <h1
                id="hero-heading"
                className="text-[28px] font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
              >
                Dr. Ravi Rathore
              </h1>
              <p className="mt-2 text-lg font-medium text-teal-700 sm:text-xl">
                Consultant Pediatrician & Child Specialist
              </p>
              <p className="mt-4 max-w-xl min-w-0 text-base text-gray-600">
                {heroCredibility}
              </p>
              <div className="mt-8 flex flex-wrap gap-4 gap-y-3">
                <Link
                  href="/appointment/"
                  className="btn-primary min-h-[44px] min-w-[140px] px-6"
                >
                  Book Appointment
                </Link>
                <a
                  href={phoneHref}
                  className="btn-secondary min-h-[44px] min-w-[120px] px-6"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative order-1 flex min-w-0 justify-center lg:order-2 lg:justify-end">
              <div className="aspect-[4/3] w-full max-w-full overflow-hidden rounded-xl border border-pastel-blue-dark/30 shadow-soft lg:max-w-md">
                <HeroImage />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Key Services */}
      <Section
        id="services"
        title="Key Services"
        subtitle="Comprehensive pediatric care for your child’s health from birth through adolescence."
        background="white"
      >
        <KeyServicesGrid />
        <div className="mt-8 text-center sm:mt-10">
          <Link href="/services/" className="btn-secondary min-h-[44px] px-6">
            View All Services
          </Link>
        </div>
      </Section>

      {/* 2. Why Choose Dr. Ravi */}
      <Section
        id="why-choose"
        title="Why Choose Dr. Ravi"
        subtitle="Trusted pediatric care with a personal touch."
        background="pastel-blue"
      >
        <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {whyChoose.map((item) => (
            <Card key={item.title}>
              <item.icon className="h-10 w-10 text-teal-600" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 3. Testimonials */}
      <Section
        id="testimonials"
        title="What Parents Say"
        subtitle="Trusted by families in Ujjain for compassionate pediatric care."
        background="pastel-mint"
      >
        <div className="grid w-full min-w-0 grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} hover={false}>
              <p className="text-gray-600">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-gray-800">
                — {t.author}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 4. About the Doctor (short) */}
      <Section
        id="about"
        title="About the Doctor"
        subtitle=""
        background="white"
      >
        <div className="mx-auto w-full max-w-2xl min-w-0">
          <p className="text-base text-gray-600 leading-relaxed">
            {aboutShort}
          </p>
          <p className="mt-6">
            <Link
              href="/about/"
              className="font-medium text-teal-600 underline decoration-teal-600/40 underline-offset-2 hover:decoration-teal-600"
            >
              Read More
            </Link>
          </p>
        </div>
      </Section>

      {/* 5. Contact & Location */}
      <Section
        id="contact"
        title="Contact & Location"
        subtitle="Visit us or call to book your appointment."
        background="pastel-blue"
      >
        <div className="grid w-full min-w-0 grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="min-w-0 space-y-6">
            <Card hover={false}>
              <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
              <a
                href={phoneHref}
                className="mt-2 inline-flex min-h-[44px] items-center gap-2 text-lg font-medium text-teal-700 hover:text-teal-800 hover:underline focus-visible:outline focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 rounded-lg"
              >
                <PhoneIcon className="h-6 w-6 shrink-0" />
                {doctor.phone}
              </a>
              <p className="mt-1 text-sm text-gray-500">Tap to call</p>
            </Card>
            <Card hover={false}>
              <h3 className="text-lg font-semibold text-gray-900">Address</h3>
              <p className="mt-2 min-w-0 break-words text-gray-600 whitespace-pre-line">
                {doctor.address.replace(/, /g, ',\n')}
              </p>
            </Card>
            <Card hover={false}>
              <h3 className="text-lg font-semibold text-gray-900">
                Clinic Timings
              </h3>
              <ul className="mt-3 space-y-2">
                {clinicTimings.map((slot) => (
                  <li
                    key={slot.day}
                    className="flex justify-between text-sm text-gray-600"
                  >
                    <span className="font-medium">{slot.day}</span>
                    <span>{slot.time}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <Card hover={false} className="min-w-0 w-full max-w-full overflow-hidden p-0 self-start">
            <LazyMap />
          </Card>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 gap-y-3 sm:gap-6">
          <Link
            href="/appointment/"
            className="btn-primary min-h-[44px] px-8"
          >
            Book Appointment
          </Link>
          <a href={phoneHref} className="btn-secondary min-h-[44px] px-8">
            Call Now
          </a>
        </div>
      </Section>

      {/* Spacer for sticky CTA on mobile */}
      <div className="h-20 md:hidden" aria-hidden />

      <StickyBookCTA />
    </>
  );
}
