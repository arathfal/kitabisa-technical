import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import classNames from '@/lib/classNames'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kitabisa.com',
  description: 'Situs Donasi Terbesar dan Terpercaya di Indonesia',
  authors: [{ name: 'Kitabisa', url: 'https://www.kitabisa.com/about-us' }],
  keywords: [
    'Donasi',
    'Sedekah',
    'Zakat',
    'Infaq',
    'Tolong',
    'Menolong',
    'Kitabisa',
    'Maal',
    'Penghasilan',
    'Donasi Online',
    'Zakat Online',
    'Wakaf'
  ],
  applicationName: 'Kitabisa.com',
  openGraph: {
    title: 'Kitabisa.com',
    description: 'Situs Donasi Terbesar dan Terpercaya di Indonesia',
    siteName: 'Kitabisa',
    url: 'https://www.kitabisa.com',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={classNames(inter.className, 'px-4 md:px-12')}>
        <Header />
        {children}
      </body>
    </html>
  )
}
