import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/Section';
import Card from '@/components/Card';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  IdentificationIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { doctor } from '@/lib/doctor';

export const metadata: Metadata = {
  title: `About Us | ${doctor.name} | Pediatric Care Ujjain`,
  description: `Meet ${doctor.name}, ${doctor.specialty} in Ujjain. Child Care and Advanced Vaccination Center — vaccination, newborn care, and child development.`,
};

const qualifications = [
  'MBBS',
  'MD (Pediatrics)',
  'Fellowship in Neonatology (optional)',
  'Registered with Indian Medical Council',
];

const experience = [
  '24 Years in Healthcare',
  'Child Care and Advanced Vaccination Center, Freeganj, Ujjain',
  'Special interest in newborn care and vaccination',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero: premium, hospital-grade, 75vh, two columns */}
      <section className="relative w-full max-w-full min-h-0 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50/40 min-[480px]:min-h-[60vh] lg:min-h-[75vh]">
        {/* Subtle depth: blurred radial behind image area */}
        <div className="pointer-events-none absolute right-0 top-1/2 h-[80%] max-w-[90vw] w-[60%] -translate-y-1/2 rounded-full bg-blue-100/30 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 right-0 h-1/2 w-1/2 max-w-[90vw] rounded-full bg-sky-50/60 blur-2xl" aria-hidden />

        <div className="relative mx-auto flex w-full min-w-0 max-w-6xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[75vh] lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          {/* Left: text */}
          <div className="flex min-w-0 flex-1 flex-col justify-center space-y-6 pb-8 lg:pb-0">
            <p className="text-sm font-medium uppercase tracking-wider text-blue-600">
              Trusted Pediatric Care in Ujjain
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              About Dr. Ravi
            </h1>
            <p className="max-w-[520px] min-w-0 text-lg leading-[1.7] text-slate-600">
              {doctor.name} — {doctor.specialty} at Child Care and Advanced Vaccination Center, Ujjain. Dedicated to compassionate, evidence-based care for every child.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/appointment/"
                className="btn-primary"
              >
                Book Appointment
              </Link>
              <Link
                href="/about/#qualifications"
                className="inline-flex items-center justify-center rounded-xl border-2 border-slate-300 bg-transparent px-6 py-3 font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                View Qualifications
              </Link>
            </div>
          </div>

          {/* Right: image — no card, float with subtle shadow */}
          <div className="relative flex min-w-0 flex-1 items-center justify-center lg:justify-end">
            <div className="w-full max-w-full lg:max-w-xl">
              <Image
                src="/about-header.png"
                alt={`${doctor.name} — Pediatric Care`}
                width={640}
                height={450}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full max-h-[450px] object-contain object-center drop-shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider between hero and content */}
      <div className="border-t border-slate-200/70" aria-hidden />

      <Section id="qualifications" background="white">
        <h2 className="mb-10 text-2xl font-bold text-slate-900 sm:text-3xl">
          Professional Background
        </h2>
        <div className="grid w-full min-w-0 grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <div className="flex items-start gap-4">
              <AcademicCapIcon className="h-8 w-8 shrink-0 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Qualifications</h3>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-600">
                  {qualifications.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-4">
              <BriefcaseIcon className="h-8 w-8 shrink-0 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Experience</h3>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-600">
                  {experience.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
          <Card className="lg:col-span-2">
            <div className="flex items-start gap-4">
              <IdentificationIcon className="h-8 w-8 shrink-0 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Registration</h3>
                <p className="mt-2 text-slate-600">
                  Registration number: [Registration Number Placeholder]
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Our Mission" background="pastel-mint">
        <Card hover={false} className="mx-auto w-full max-w-3xl min-w-0">
          <div className="flex items-start gap-4">
            <HeartIcon className="h-10 w-10 shrink-0 text-blue-500" />
            <div>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide every child with access to quality, compassionate pediatric care.
                We believe in building trust with families, supporting parents through every stage of their
                child’s growth, and ensuring that each visit is comfortable and reassuring. We are committed
                to evidence-based practice and continuous learning to serve our young patients better.
              </p>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}
