# AsiaViet Restaurant Website

A modern, responsive website for AsiaViet Restaurant built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean UI design with Tailwind CSS
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 14 App Router
- 🎯 TypeScript for type safety
- 🎭 Lucide React icons for beautiful icons
- 🍜 Restaurant-specific pages (Home, Menu, About, Contact)
- 📋 Interactive reservation form

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
asiaviet/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer component
│   ├── globals.css         # Global styles with Tailwind
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── menu/page.tsx       # Menu page
│   ├── about/page.tsx      # About page
│   └── contact/page.tsx    # Contact/Reservation page
├── public/                 # Static assets
├── package.json
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the primary color scheme:

```typescript
colors: {
  primary: {
    // Customize these values
    50: '#fef2f2',
    600: '#dc2626',
    // ...
  }
}
```

### Content

- **Homepage**: Edit `app/page.tsx`
- **Menu**: Edit `app/menu/page.tsx`
- **About**: Edit `app/about/page.tsx`
- **Contact**: Edit `app/contact/page.tsx`

### Components

- **Navbar**: Edit `app/components/Navbar.tsx`
- **Footer**: Edit `app/components/Footer.tsx`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons

## License

This project is private and proprietary.

