'use client';

import { useState, useCallback } from 'react';

const ANIMATION_DURATION_MS = 900;

const SVG_PROPS = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

type IconType = 'heart' | 'bars' | 'flame';

interface AnimatedServiceIconProps {
  type: IconType;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

// Exact Heroicons outline paths (from @heroicons/react/24/outline)
const HEART_PATH =
  'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z';

const CHART_BAR_PATH =
  'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z';

// Individual bar paths for staggered fill animation
const CHART_BAR_1 = 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75Z';
const CHART_BAR_2 = 'M9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625Z';
const CHART_BAR_3 = 'M16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z';

const FIRE_PATH_1 =
  'M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z';
const FIRE_PATH_2 =
  'M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z';

function AnimatedHeart({ animating, className }: { animating: boolean; className?: string }) {
  return (
    <svg className={className} {...SVG_PROPS} style={{ overflow: 'visible' }}>
      <path
        d={HEART_PATH}
        className={`transition-colors duration-200 ${animating ? 'fill-red-500 stroke-red-500 animate-heart-beat' : 'fill-transparent'}`}
        style={{ transformOrigin: '12px 12px', transformBox: 'fill-box' }}
      />
    </svg>
  );
}

function AnimatedBars({ animating, className }: { animating: boolean; className?: string }) {
  const bars = [
    { path: CHART_BAR_1, origin: '5.25 21' },
    { path: CHART_BAR_2, origin: '11.25 21' },
    { path: CHART_BAR_3, origin: '17.25 21' },
  ];
  return (
    <svg className={className} {...SVG_PROPS}>
      <path d={CHART_BAR_PATH} />
      {bars.map((bar, i) => (
        <path
          key={i}
          d={bar.path}
          stroke="none"
          className={animating ? 'animate-bars-grow fill-teal-600' : 'fill-teal-600 opacity-0'}
          style={{
            transformOrigin: bar.origin,
            transformBox: 'fill-box',
            animationDelay: animating ? `${i * 0.12}s` : undefined,
          }}
        />
      ))}
    </svg>
  );
}

function AnimatedFlame({ animating, className }: { animating: boolean; className?: string }) {
  return (
    <svg className={className} {...SVG_PROPS}>
      <defs>
        <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="35%" stopColor="#ea580c" />
          <stop offset="65%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
      <path
        d={FIRE_PATH_1}
        className={animating ? 'animate-flame-flicker' : ''}
        fill={animating ? 'url(#flameGradient)' : 'none'}
        stroke={animating ? '#b91c1c' : undefined}
      />
      <path
        d={FIRE_PATH_2}
        className={animating ? 'animate-flame-flicker' : ''}
        fill={animating ? 'url(#flameGradient)' : 'none'}
        stroke={animating ? '#b91c1c' : undefined}
      />
    </svg>
  );
}

export default function AnimatedServiceIcon({
  type,
  className = 'h-10 w-10 text-teal-600',
  onClick,
}: AnimatedServiceIconProps) {
  const [animating, setAnimating] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (animating) return;
      setAnimating(true);
      onClick?.(e);
      setTimeout(() => setAnimating(false), ANIMATION_DURATION_MS);
    },
    [animating, onClick]
  );

  const iconProps = { animating, className };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="touch-manipulation cursor-pointer select-none rounded-lg p-1 -m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
      aria-label={`Tap to animate ${type} icon`}
    >
      {type === 'heart' && <AnimatedHeart {...iconProps} />}
      {type === 'bars' && <AnimatedBars {...iconProps} />}
      {type === 'flame' && <AnimatedFlame {...iconProps} />}
    </button>
  );
}
