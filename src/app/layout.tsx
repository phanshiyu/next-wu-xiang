import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wu Xiang Pte. Ltd.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full flex justify-center pt-4 pb-8`}><div className='max-w-md w-full'>{children}</div></body>
    </html>
  )
}
