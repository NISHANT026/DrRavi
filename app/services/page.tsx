import type { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';
import {
  BeakerIcon,
  HeartIcon,
  ChartBarIcon,
  UserGroupIcon,
  CakeIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Services | Pediatric Care | Vaccination, Newborn Care & More',
  description:
    'Pediatric services: vaccination & immunization, newborn care, growth monitoring, general consultation, and nutritional guidance. Child specialist in India.',
};

const services = [
  {
    id: 'vaccination',
    title: 'Vaccination & Immunization',
    description:
      'Complete immunization schedules as per IAP guidelines. We ensure your child receives all recommended vaccines on time, with proper counselling and follow-up.',
    icon: BeakerIcon,
  },
  {
    id: 'newborn-care',
    title: 'Newborn Care',
    description:
      'Gentle care for newborns including routine check-ups, feeding support, jaundice monitoring, and guidance for new parents on breastfeeding and sleep.',
    icon: HeartIcon,
  },
  {
    id: 'growth-monitoring',
    title: 'Growth & Development Monitoring',
    description:
      'Regular tracking of height, weight, and developmental milestones. We help identify any concerns early and provide evidence-based guidance.',
    icon: ChartBarIcon,
  },
  {
    id: 'general-consultation',
    title: 'General Pediatric Consultation',
    description:
      'Comprehensive care for common childhood illnesses including fever, cough, cold, infections, allergies, and digestive issues.',
    icon: UserGroupIcon,
  },
  {
    id: 'nutritional-guidance',
    title: 'Nutritional Guidance',
    description:
      'Age-appropriate diet advice, weaning support, and management of feeding difficulties and nutritional deficiencies.',
    icon: CakeIcon,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="w-full max-w-full overflow-hidden bg-gradient-to-br from-pastel-mint/60 to-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Child Care Services in Ujjain</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            From vaccination to nutrition, we support your child’s health at every stage.
          </p>
        </div>
      </section>

      <Section background="white">
        <div className="space-y-8">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <Card>
                <div className="flex min-w-0 flex-col gap-6 sm:flex-row">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-pastel-blue">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
                    <p className="mt-2 text-gray-600">{service.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
