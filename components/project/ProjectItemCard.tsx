// components/project/ProjectItemCard.tsx
'use client'

import { useState } from 'react'

export type ProjectItem = {
  title: string
  color: 'pink' | 'sky' | 'purple'
  description: string
  details: string[]
}

function itemCardClasses(color: ProjectItem['color']) {
  switch (color) {
    case 'pink':
      return 'bg-pink-50 border-pink-100'
    case 'sky':
      return 'bg-sky-50 border-sky-100'
    case 'purple':
    default:
      return 'bg-purple-50 border-purple-100'
  }
}

type Props = {
  item: ProjectItem
}

export function ProjectItemCard({ item }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`rounded-2xl border shadow-sm p-5 space-y-2 cursor-pointer transition-all ${itemCardClasses(
        item.color
      )}`}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
        <span className="text-[10px] text-slate-500">
          {open ? '상세 접기' : '상세 보기'}
        </span>
      </div>
      <p className="text-sm text-slate-700">{item.description}</p>
      {open && (
        <ul className="text-xs text-slate-600 space-y-1 pt-1">
          {item.details.map((detail) => (
            <li key={detail}>· {detail}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
