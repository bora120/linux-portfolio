// app/layout.tsx
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Linux Portfolio',
  description: '리눅스 활용 프로젝트 포트폴리오',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <NavBar />
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
          {children}
        </div>
      </body>
    </html>
  )
}
