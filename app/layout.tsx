import type { Metadata } from 'next'
import { Noto_Sans_SC, Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import SmoothScroll from './components/SmoothScroll'
import NavLink from './components/NavLink'
import SectionObserver from './components/SectionObserver'

const notoSans = Noto_Sans_SC({ 
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
  weight: ['400', '700'],
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'AsiaViet Restaurant',
  description: 'Authentic Vietnamese and Asian cuisine',
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${notoSans.variable} ${inter.variable} font-sans relative min-h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-orange-200`}>
        <SmoothScroll />
        <SectionObserver />
        {/* Global subtle background pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ibW9uZ29saWFuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiMwMDAiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbW9uZ29saWFuKSIvPjwvc3ZnPg==')]"></div>
        </div>
        {/* Floating Top Navigation */}
        <header className="fixed top-4 xl:top-5 2xl:top-6 inset-x-0 z-50 pointer-events-none">
          <nav className="pointer-events-auto relative mx-auto w-fit px-6 xl:px-7 2xl:px-8 h-20 xl:h-22 2xl:h-24 flex items-center rounded-[56px] xl:rounded-[64px] 2xl:rounded-[72px] bg-white/60 backdrop-blur-xl border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.08)] animate-scaleIn [animation-delay:160ms] [animation-duration:1200ms] [animation-timing-function:cubic-bezier(0.2,0.8,0.2,1)]">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="AsiaViet Logo" width={140} height={48} className="h-10 xl:h-11 2xl:h-12 w-auto" priority />
            </Link>
            <div className="ml-6 xl:ml-7 2xl:ml-8 flex items-center gap-10 xl:gap-11 2xl:gap-12 text-[17px] xl:text-[18px] 2xl:text-[19px] font-semibold tracking-wide">
              <NavLink href="/#home">Home</NavLink>
              <NavLink href="/#about">Unsere Geschichte</NavLink>
              <NavLink href="/#visit">Besuche uns</NavLink>
              <NavLink href="/menu">Speisekarte</NavLink>
            </div>
          </nav>
        </header>
        <div className="pt-4 relative z-10">{children}</div>
      </body>
    </html>
  )
}
