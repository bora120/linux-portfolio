// app/layout.tsx
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Linux Security Portfolio',
  description: '리눅스 기반 웹 서버 보안 프로젝트 포트폴리오',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="min-h-screen flex flex-col">
          {/* 상단 메뉴바 */}
          <Navbar />

          {/* 메인 컨텐츠 영역 */}
          <main className="flex-1">
            <div className="max-w-5xl mx-auto px-4 py-16">{children}</div>
          </main>

          {/* 푸터 */}
          <footer className="border-t border-slate-200 bg-white">
            <div className="max-w-5xl mx-auto px-4 py-4 text-[11px] sm:text-xs text-slate-500 flex justify-between">
              <span>© 2025 Linux Security Project</span>
              <span>Built with Next.js · Tailwind CSS</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
