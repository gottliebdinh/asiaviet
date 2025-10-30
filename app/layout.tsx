import type { Metadata } from 'next'
import { Noto_Sans_SC, Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import SmoothScroll from './components/SmoothScroll'

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
        {/* Global subtle background pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ibW9uZ29saWFuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiMwMDAiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbW9uZ29saWFuKSIvPjwvc3ZnPg==')]"></div>
        </div>
        {/* Top Navigation */}
        <header className="fixed top-0 inset-x-0 z-50 bg-white/30 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <nav className="relative mx-auto max-w-7xl px-6 h-16 flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="AsiaViet Logo" width={120} height={40} className="h-8 w-auto" priority />
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-12 text-sm font-medium">
              <Link href="/" className="text-red-600 hover:text-red-700 transition-colors">Home</Link>
              <Link href="/menu" className="text-red-600 hover:text-red-700 transition-colors">Speisekarte</Link>
              <Link href="/about" className="text-red-600 hover:text-red-700 transition-colors">Über uns</Link>
              <Link href="/contact" className="text-red-600 hover:text-red-700 transition-colors">Besuche uns</Link>
            </div>
          </nav>
        </header>
        <div className="pt-16 relative z-10">{children}</div>
      </body>
    </html>
  )
}
