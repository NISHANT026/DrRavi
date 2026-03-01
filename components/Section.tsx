import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'pastel-blue' | 'pastel-mint';
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  background = 'white',
}: SectionProps) {
  const bgClass =
    background === 'pastel-blue'
      ? 'bg-pastel-blue/50'
      : background === 'pastel-mint'
        ? 'bg-pastel-mint/50'
        : 'bg-white';

  return (
    <section id={id} className={`py-16 sm:py-20 ${bgClass} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-3 max-w-2xl mx-auto text-gray-600">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
