interface DoctorLogoProps {
  className?: string;
  size?: number;
}

/** Doctor logo: stethoscope icon for pediatric/medical branding. */
export default function DoctorLogo({ className = '', size = 24 }: DoctorLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      aria-hidden
    >
      {/* Earpieces */}
      <path d="M9 5.5L7 4v2.5l2 1.5" />
      <path d="M15 5.5l2-1.5v2.5l-2 1.5" />
      {/* Y-tube */}
      <path d="M8 7.5v2c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2" />
      <path d="M12 9.5v5" />
      {/* Chestpiece / bell */}
      <circle cx="12" cy="16" r="2.5" />
    </svg>
  );
}
