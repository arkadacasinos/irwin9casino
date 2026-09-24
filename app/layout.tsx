import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Irwin Casino — ирвин казино официальный сайт, зеркало и играть онлайн',
  description: 'Irwin Casino: понятный гид по официальному сайту, рабочему зеркалу и игре онлайн. Проверка адреса, мобильный доступ, правила безопасности и советы для игроков без лишних обещаний.',
  metadataBase: new URL('https://irwin9casino.vercel.app/'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Irwin Casino — официальный сайт и рабочее зеркало',
    description: 'Короткий и понятный гид по доступу к Irwin Casino с мобильного устройства.',
    url: 'https://irwin9casino.vercel.app/',
    siteName: 'Irwin Casino',
    locale: 'ru_RU',
    type: 'website',
  },
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
}

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#141414', colorScheme: 'light', userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-[#f3f0e9]">
      <head>
        <meta name="yandex-verification" content="" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
