// components/NavBar.tsx
import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: '소개' },
  { href: '/projects', label: '프로젝트 내용' },
  { href: '/roadmap', label: '발전 계획' },
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-pink-500/20 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 md:px-6 lg:px-8 py-3 md:py-4">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-pink-200 md:text-sm">
          Linux · Web · Security
        </span>
        <nav className="flex items-center gap-2 md:gap-3 text-[0.75rem] md:text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 text-slate-200/90 transition hover:bg-pink-600/20 hover:text-pink-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
