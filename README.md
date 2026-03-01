# Pediatric Care — Static Clinic Website

A modern, responsive, static website for a pediatrician (child specialist) clinic in India. Built with Next.js (App Router), Tailwind CSS, and fully static export compatible.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- **Heroicons**
- Static export (no backend)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production (Static Export)

```bash
npm run build
```

Output is generated in the `out/` folder. Deploy this folder to any static host (e.g. Vercel, Netlify, GitHub Pages).

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout (Navbar, Footer, SEO)
│   ├── page.tsx         # Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── appointment/page.tsx
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Card.tsx
│   └── Section.tsx
├── tailwind.config.ts
├── next.config.js       # output: 'export'
└── package.json
```

## Customization

- **Colors:** Edit `tailwind.config.ts` — `pastel-blue` (#E3F2FD), `pastel-mint` (#E8F5E9).
- **Content:** Replace placeholders (doctor name, address, phone, email, registration number, map embed) in the respective pages.
- **Images:** Replace hero and about page placeholders with real images (use Next.js `Image` with `unoptimized: true` for static export).

## Pages

| Page         | Route            | Description                    |
|-------------|------------------|--------------------------------|
| Home        | `/`              | Hero, services, testimonials   |
| About       | `/about/`        | Doctor info, mission           |
| Services    | `/services/`     | All services with descriptions |
| Appointment | `/appointment/`  | Address, map, call, WhatsApp   |
| Contact     | `/contact/`      | Contact details + form (UI)    |
| Privacy     | `/privacy-policy/` | Placeholder policy page      |

## Disclaimer

This website is for informational purposes only and does not replace medical consultation.
