import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'
import Script from 'next/script' // ADDED

// ...existing code...
const deployedUrl =
  process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'

const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID 

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Viral Dalal | Solving real-world problems with AI & Data'
const description =
  ""

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  metadataBase: new URL(deployedUrl),
  alternates: { canonical: deployedUrl },
  openGraph: {
    title,
    description,
    url: deployedUrl,
    siteName: 'Viral Portfolio',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Viral Dalal Portfolio'
      }
    ],
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@viral04_',
    images: ['/twitter-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={firaCode.className}>
        {process.env.NODE_ENV === 'production' && clarityId && (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)
              })(window, document, "clarity", "script", "${clarityId}");`}
          </Script>
        )}
        <header>
          <Navbar />
        </header>
        {children}
        <ThemeMenu />
        <Footer />
      </body>
    </html>
  )
}