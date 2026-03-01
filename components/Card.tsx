import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 ${
        hover ? 'hover:shadow-soft-hover hover:border-pastel-blue-dark/50' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
