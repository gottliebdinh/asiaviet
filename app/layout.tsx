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
    icon: '/logo.png',
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
        <header className="fixed top-4 inset-x-0 z-50 pointer-events-none">
          <nav className="pointer-events-auto relative mx-auto w-fit px-6 h-20 flex items-center rounded-[56px] bg-white/60 backdrop-blur-xl border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.08)] animate-scaleIn [animation-delay:160ms] [animation-duration:1200ms] [animation-timing-function:cubic-bezier(0.2,0.8,0.2,1)]">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="AsiaViet Logo" width={140} height={48} className="h-10 w-auto" priority />
            </Link>
            <div className="ml-6 flex items-center gap-10 text-[17px] font-semibold tracking-wide">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/#about">Unsere Geschichte</NavLink>
              <NavLink href="/#visit">Besuche uns</NavLink>
              <Link
                href="/menu"
                className="relative px-3 py-1 rounded-xl text-amber-900 transition-colors hover:bg-transparent after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:rounded-full after:bg-gradient-to-r after:from-rose-500 after:to-orange-400 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                Speisekarte
              </Link>
            </div>
          </nav>
        </header>
        <div className="pt-4 relative z-10">{children}</div>
      </body>
    </html>
  )
}
