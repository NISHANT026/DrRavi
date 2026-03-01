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
    <section id={id} className={`w-full max-w-full overflow-x-hidden py-12 sm:py-16 lg:py-20 ${bgClass} ${className}`}>
      <div className="mx-auto w-full max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-8 text-center sm:mb-12">
            {title && (
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">{title}</h2>
            )}
            {subtitle && (
              <p className="mx-auto mt-3 max-w-2xl min-w-0 text-base text-gray-600">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
