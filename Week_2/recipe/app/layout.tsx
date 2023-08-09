import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Recipe Book',
  description: 'A Recipe book where you can find ingredients for your favorite dishes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <h1 className="text-orange-500 text-3xl font-bold text-center mb-10"><span>ጣት ሚያስቆረጥም</span> Recipe Book</h1>
        {children}
      </body>
    </html>
  )
}
