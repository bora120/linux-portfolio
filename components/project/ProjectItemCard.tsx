// components/project/ProjectItemCard.tsx
'use client'

import { useState } from 'react'

export type ProjectItemColor = 'pink' | 'sky' | 'purple'

export type CodeBlockData = {
  label: string
  language?: string
  content: string
}

export type ProjectItem = {
  title: string
  color: ProjectItemColor
  description: string
  details: string[]
  codeBlocks?: CodeBlockData[]
}

function itemCardClasses(color: ProjectItemColor) {
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

function CodeBlock({ language, content }: CodeBlockData) {
  return (
    <div className="rounded-xl bg-slate-900 text-slate-100 text-[11px] font-mono p-3 overflow-x-auto space-y-1">
      {language && (
        <div className="text-[10px] uppercase tracking-wide text-slate-400">
          {language}
        </div>
      )}
      <pre className="whitespace-pre">{content}</pre>
    </div>
  )
}

export function ProjectItemCard({ item }: Props) {
  const [open, setOpen] = useState(false) // 카드 상세 열기/닫기
  const [codeOpen, setCodeOpen] = useState(false) // 코드 영역 열기/닫기

  return (
    <div
      className={`rounded-2xl border shadow-sm p-5 space-y-2 cursor-pointer transition-all ${itemCardClasses(
        item.color
      )}`}
      onClick={() => {
        const next = !open
        setOpen(next)
        if (!next) {
          setCodeOpen(false) // 카드 닫힐 때 코드는 같이 닫기
        }
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
        <span className="text-[10px] text-slate-500">
          {open ? '상세 접기' : '상세 보기'}
        </span>
      </div>

      <p className="text-sm text-slate-700">{item.description}</p>

      {open && (
        <div className="space-y-2 pt-1">
          {/* 기존 상세 리스트 */}
          <ul className="text-xs text-slate-600 space-y-1">
            {item.details.map((detail) => (
              <li key={detail}>· {detail}</li>
            ))}
          </ul>

          {/* 코드가 있을 때만 작은 버튼 + 코드 영역 표시 */}
          {item.codeBlocks && item.codeBlocks.length > 0 && (
            <div
              className="pt-2"
              onClick={(e) => e.stopPropagation()} // 버튼 눌러도 카드가 접히지 않게
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full border border-slate-300 bg-white/70 text-slate-700 hover:bg-slate-100"
                onClick={() => setCodeOpen((v) => !v)}
              >
                {codeOpen ? '코드 숨기기' : '명령어 · 코드 자세히 보기'}
              </button>

              {codeOpen && (
                <div className="mt-2 space-y-3">
                  {item.codeBlocks.map((block) => (
                    <div key={block.label} className="space-y-1">
                      <p className="text-[11px] font-medium text-slate-700">
                        {block.label}
                      </p>
                      <CodeBlock {...block} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
