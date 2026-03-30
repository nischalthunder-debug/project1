import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project2',
  description: 'Welcome to Project2',
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
