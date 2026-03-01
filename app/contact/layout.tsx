import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Pediatric Care | Child Specialist Clinic',
  description:
    'Get in touch with our pediatric clinic. Phone, email, and address. Visit or call to book an appointment.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
