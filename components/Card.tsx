import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`min-w-0 max-w-full rounded-xl border border-gray-100 bg-white p-5 shadow-soft transition-all duration-200 sm:p-6 ${
        hover ? 'hover:shadow-soft-hover hover:border-teal-600/30' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
