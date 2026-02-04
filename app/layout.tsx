import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Morolake Cares Initiatives - Empowering Girls, Building Hope',
  description: 'Morolake Cares Initiatives is dedicated to educating the girl-child, school dropouts, and underprivileged girls across Nigeria. Every life matters.',
  keywords: ['education', 'girls empowerment', 'Nigeria', 'charity', 'non-profit', 'girl child education'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}