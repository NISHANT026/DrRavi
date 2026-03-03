'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { BeakerIcon } from '@heroicons/react/24/outline';
import Card from '@/components/Card';
import AnimatedServiceIcon from '@/components/AnimatedServiceIcons';

const BARREL_ROLL_DURATION_MS = 600;

function FlaskIconWithBarrelRoll({ className }: { className?: string }) {
  const [rolling, setRolling] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (rolling) return;
      setRolling(true);
      setTimeout(() => setRolling(false), BARREL_ROLL_DURATION_MS);
    },
    [rolling]
  );

  return (
    <button
      type="button"
      onClick={handleClick}
      className="touch-manipulation cursor-pointer select-none rounded-lg p-1 -m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 [perspective:120px]"
      aria-label="Tap to animate flask icon"
    >
      <span
        className={`inline-block origin-center [transform-style:preserve-3d] ${rolling ? 'animate-barrel-roll' : ''} ${className ?? ''}`}
      >
        <BeakerIcon className="h-10 w-10 text-teal-600" aria-hidden />
      </span>
    </button>
  );
}

const keyServices = [
  {
    title: 'Vaccination',
    description: 'Complete immunization schedule for your child\'s healthy future.',
    href: '/services/#vaccination',
    iconType: 'flask' as const, // static icon, no animation
  },
  {
    title: 'Newborn Care',
    description: 'Gentle care for newborns and support for new parents.',
    href: '/services/#newborn-care',
    iconType: 'heart' as const,
  },
  {
    title: 'Child Growth Monitoring',
    description: 'Track milestones and development with expert guidance.',
    href: '/services/#growth-monitoring',
    iconType: 'bars' as const,
  },
  {
    title: 'Fever & Infection Treatment',
    description: 'Quick diagnosis and treatment for common childhood illnesses.',
    href: '/services/#general-consultation',
    iconType: 'flame' as const,
  },
];

export default function KeyServicesGrid() {
  return (
    <div className="grid w-full min-w-0 grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {keyServices.map((service) => (
        <Link key={service.title} href={service.href}>
          <Card>
            {service.iconType === 'flask' ? (
              <FlaskIconWithBarrelRoll />
            ) : (
              <AnimatedServiceIcon type={service.iconType} className="h-10 w-10 text-teal-600" />
            )}
            <h3 className="mt-4 text-lg font-semibold text-gray-900 sm:text-base">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 line-clamp-3">
              {service.description}
            </p>
          </Card>
        </Link>
      ))}
    </div>
  );
}
