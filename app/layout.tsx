import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import { Header } from '@/components/Header'
import ThemesProvider from '@/providers/ThemesProvider'

import '@/styles/globals.scss'
import '@/styles/theme-config.css'

export const metadata: Metadata = {
  title: {
    default: 'DBRX Chatbot',
    template: `%s - DBRX Chatbot`
  },
  description: 'AI Chatbot powered by DBRX',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemesProvider>
          <Header />
          {children}
          <Toaster />
        </ThemesProvider>
        <Analytics />
      </body>
    </html>
  )
}
