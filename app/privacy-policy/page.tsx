import type { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pediatric Care',
  description: 'Privacy policy for Pediatric Care website.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-pastel-blue/60 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Placeholder page. Replace with your clinic’s privacy policy content.
          </p>
        </div>
      </section>

      <Section background="white">
        <Card hover={false} className="max-w-3xl mx-auto">
          <p className="text-gray-600">
            This is a placeholder for the Privacy Policy. Please add your clinic’s privacy policy text here,
            including how you collect, use, and protect visitor information.
          </p>
        </Card>
      </Section>
    </>
  );
}
