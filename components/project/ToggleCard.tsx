// components/project/ToggleCard.tsx
'use client'

import { useState } from 'react'

type ToggleCardProps = {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  /** bg-sky-50 border-sky-100 처럼 배경/테두리 클래스 추가용 */
  variantClassName?: string
}

export function ToggleCard({
  title,
  children,
  defaultOpen = false,
  variantClassName,
}: ToggleCardProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      className={`rounded-2xl border shadow-sm overflow-hidden ${
        variantClassName ?? 'bg-white/60 border-slate-100'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-3 text-left"
      >
        <span className="text-sm font-semibold text-slate-900">{title}</span>
        <span className="text-xs text-slate-500">
          {open ? '접기 ▲' : '펼치기 ▼'}
        </span>
      </button>
      {open && (
        <div className="border-t border-slate-100 px-5 py-4">{children}</div>
      )}
    </div>
  )
}
