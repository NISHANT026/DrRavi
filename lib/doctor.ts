/**
 * Doctor & clinic data (from scraped listings).
 * Single source of truth for Dr. Ravi Rathore — name, specialty, address, images.
 */

export const doctor = {
  name: 'Dr. Ravi Rathore',
  specialty: 'Paediatrician',
  address: '21 Ghatkarpar Marg, Near Ss Hospital, Freeganj Ujjain, Ujjain 456010, IN',
  /** Contact from public listings (Mom's Cuddle, ThreeBestRated) */
  phone: '0734 251 6358',
  /** Homepage hero image (ChatGPT-generated image at public/hero.png) */
  homepageHeroImage: '/hero.png',
  /** Image 1 (e.g. catalogue) */
  image1: 'https://content3.jdmagicbox.com/comp/ujjain/r8/9999px734.x734.170926060156.j6r8/catalogue/dr-ravi-rathore-s-child-care-and-advanced-vaccination-center-freeganj-ujjain-ujjain-paediatricians-44o496dfoa.jpg',
  /** Image 2 (e.g. about / profile) */
  image2: 'https://content3.jdmagicbox.com/comp/ujjain/r8/9999px734.x734.170926060156.j6r8/catalogue/dr-ravi-rathore-s-child-care-and-advanced-vaccination-center-freeganj-ujjain-ujjain-paediatricians-z40lkdsyx6.jpg',
  /** All images from scraped links (JustDial, Lybrate, ThreeBestRated) */
  images: [
    'https://content3.jdmagicbox.com/comp/ujjain/r8/9999px734.x734.170926060156.j6r8/catalogue/dr-ravi-rathore-s-child-care-and-advanced-vaccination-center-freeganj-ujjain-ujjain-paediatricians-44o496dfoa.jpg',
    'https://content3.jdmagicbox.com/comp/ujjain/r8/9999px734.x734.170926060156.j6r8/catalogue/dr-ravi-rathore-s-child-care-and-advanced-vaccination-center-freeganj-ujjain-ujjain-paediatricians-z40lkdsyx6.jpg',
    'https://content3.jdmagicbox.com/comp/ujjain/r8/9999px734.x734.170926060156.j6r8/catalogue/dr-ravi-rathore-s-child-care-and-advanced-vaccination-center-freeganj-ujjain-ujjain-paediatricians-5mzc5jpd0i.jpg',
    'https://content3.jdmagicbox.com/comp/ujjain/r8/9999px734.x734.170926060156.j6r8/catalogue/dr-ravi-rathore-s-child-care-and-advanced-vaccination-center-freeganj-ujjain-ujjain-paediatricians-q2riiifkwg.jpg',
    'https://content3.jdmagicbox.com/comp/ujjain/r8/9999px734.x734.170926060156.j6r8/catalogue/dr-ravi-rathore-s-child-care-and-advanced-vaccination-center-freeganj-ujjain-ujjain-paediatricians-zz8e3z4tg5.jpg',
    'https://assets.lybrate.com/f_auto,c_limit,w_384,q_auto/img/documents/doctor/dp/e290a2f008ddef55a1cc8751d3dc80b2/Pediatrics-RaviRathore-Ujjain-5f9262',
    'https://threebestrated.in/images/DrRaviRathoreMBBSMDChildCareandAdvancedVaccinationCenter-Ujjain-MP.jpeg',
  ],
} as const;

/** Clinic timings (from JustDial: Mon–Sat 9 AM – 5 PM) */
export const clinicTimings = [
  { day: 'Monday – Friday', time: '9:00 AM – 5:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'Closed' },
] as const;
