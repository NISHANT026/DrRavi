/**
 * Doctor & clinic data (from scraped listings).
 * Single source of truth for Dr. Ravi Rathore — name, specialty, address, images.
 */

export const doctor = {
  name: 'Dr. Ravi Rathore',
  specialty: 'Paediatrician',
  address: '21 Ghatkarpar Marg, near SS Hospital, Freeganj, Ujjain, Madhya Pradesh 456010',
  /** Contact from public listings (Mom's Cuddle, ThreeBestRated) */
  phone: '0734 251 6358',
  /** Homepage hero image (public/hero.png); fallback to image1 if load fails */
  homepageHeroImage: '/hero.png',
  /** Fallback hero image (external catalogue) */
  image1: 'https://content3.jdmagicbox.com/comp/ujjain/r8/9999px734.x734.170926060156.j6r8/catalogue/dr-ravi-rathore-s-child-care-and-advanced-vaccination-center-freeganj-ujjain-ujjain-paediatricians-44o496dfoa.jpg',
} as const;

/** Short tagline for hero credibility */
export const heroCredibility =
  '20+ Years Experience | 5000+ Happy Parents | Vaccination & Newborn Care Expert';

/** Short about snippet for homepage (keep to 3–4 lines) */
export const aboutShort =
  'Dr. Ravi Rathore is a Consultant Pediatrician & Child Specialist in Ujjain, dedicated to compassionate care from birth through adolescence. MBBS, MD (Pediatrics), with special focus on vaccination and newborn care.';

/** Clinic timings (from JustDial: Mon–Sat 9 AM – 5 PM) */
export const clinicTimings = [
  { day: 'Monday – Friday', time: '9:00 AM – 5:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'Closed' },
] as const;
