// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: '내 소개' },
  { href: '/project', label: '프로젝트 내용' },
  { href: '/plan', label: '발전 계획' },
  { href: '/security', label: '보안 · 로그 요약' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* 로고/타이틀 */}
        <div className="font-semibold text-lg bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
          Linux · Security · Portfolio
        </div>

        {/* 메뉴 */}
        <ul className="flex gap-3 text-xs sm:text-sm md:text-base">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href))

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    'px-3 py-1.5 rounded-full transition-colors duration-150 border text-xs sm:text-sm',
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white border-pink-400 shadow-sm'
                      : 'border-transparent text-slate-700 hover:text-purple-700 hover:bg-slate-100 hover:border-pink-200',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
