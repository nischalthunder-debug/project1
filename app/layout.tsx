import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project1',
  description: 'Welcome to Project1',
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
