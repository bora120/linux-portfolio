// app/security/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

type SecurityBlock = {
  title: string
  color: 'pink' | 'sky' | 'purple' | 'slate'
  description: string
  points: string[]
}

type ProofImage = {
  src: string
  alt: string
  caption: string
}

const securityBlocks: SecurityBlock[] = [
  {
    title: 'access.log 기반 트래픽 분석',
    color: 'pink',
    description:
      'Nginx access.log를 기준으로 어떤 IP가 언제, 어떤 요청을 보냈는지 파악한다.',
    points: [
      'IP · 시간 · 메서드 · URL · 상태 코드 등 주요 정보 확인',
      '404 다발, 반복 요청, 이상한 URL 등 공격 패턴 탐지에 활용',
    ],
  },
  {
    title: 'Python 로그 분석 스크립트',
    color: 'sky',
    description:
      'access.log를 읽어 통계를 만들고, IDS와 그래프 생성에 사용하는 스크립트이다.',
    points: [
      'log_analyzer.py: 최근 5분 상위 IP / 404 다발 IP 출력',
      'log_graphs.py · plot_top_ips.py: Top IP, 상태 코드, 시간대별 요청 시각화',
    ],
  },
  {
    title: '자동 차단 IDS 흐름',
    color: 'purple',
    description:
      '비정상 트래픽을 자동으로 차단하기 위해 UFW 규칙을 자동 추가하는 IDS를 구성했다.',
    points: [
      'block_bad_ips.py: 임계값 초과 IP를 ufw deny로 자동 등록',
      '탐지 → 차단까지 로그 기반 자동 대응 구조를 만든다.',
    ],
  },
  {
    title: 'Crontab 주기 실행',
    color: 'slate',
    description:
      'IDS 스크립트를 5분마다 실행해 실시간에 가까운 감시가 가능하도록 구성했다.',
    points: [
      '*/5 * * * * python3 log_analyzer.py / block_bad_ips.py',
      '주기 실행 결과는 ids.log 등으로 남겨 추적할 수 있다.',
    ],
  },
]

const proofGraphs: ProofImage[] = [
  {
    src: '/security/requests_by_hour.png',
    alt: '시간대별 요청 수 그래프',
    caption: '최근 24시간 기준 시간대별 요청 수 변화이다.',
  },
  {
    src: '/security/status_codes.png',
    alt: 'HTTP 상태 코드 분포 그래프',
    caption: '200, 404 등 주요 상태 코드 비율을 보여준다.',
  },
  {
    src: '/security/top_ips.png',
    alt: 'Top IP 요청 수 그래프',
    caption: '요청 수가 많은 상위 IP를 한눈에 확인할 수 있다.',
  },
]

const proofServer: ProofImage[] = [
  {
    src: '/security/https_ports.png',
    alt: 'Nginx 80/443 포트 리스닝 상태',
    caption: '80, 443 포트에서 Nginx가 리스닝 중인 것을 확인한 화면이다.',
  },
  {
    src: '/security/ssh_2222.png',
    alt: 'SSH 2222 포트 리스닝 및 접속',
    caption: 'SSH 포트를 2222로 변경하고 접속이 가능한지 확인했다.',
  },
  {
    src: '/security/ufw_status.png',
    alt: 'UFW 방화벽 정책 상태',
    caption: '필수 포트만 허용하고 나머지는 차단하는 정책을 적용한 상태이다.',
  },
  {
    src: '/security/log_analyzer.png',
    alt: 'log_analyzer.py 실행 결과',
    caption: '상위 IP와 404 다발 IP를 출력하는 분석 스크립트 실행 결과이다.',
  },
  {
    src: '/security/block_bad_ips.png',
    alt: 'block_bad_ips.py 실행 결과',
    caption: '임계값 이상 요청한 IP를 자동으로 차단한 결과이다.',
  },
  {
    src: '/security/cron_ids.png',
    alt: 'IDS 크론탭 자동 실행 설정',
    caption: '5분마다 IDS 스크립트를 실행하도록 설정한 crontab이다.',
  },
]

function blockClasses(color: SecurityBlock['color']) {
  switch (color) {
    case 'pink':
      return 'bg-pink-50 border-pink-100'
    case 'sky':
      return 'bg-sky-50 border-sky-100'
    case 'purple':
      return 'bg-purple-50 border-purple-100'
    case 'slate':
    default:
      return 'bg-slate-50 border-slate-100'
  }
}

function SecurityBlockCard({ block }: { block: SecurityBlock }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`rounded-2xl border shadow-sm p-5 space-y-3 ${blockClasses(
        block.color
      )}`}
    >
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-sm font-semibold text-slate-900">{block.title}</h2>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-[11px] text-slate-500 hover:text-slate-700"
        >
          {open ? '상세 접기' : '상세 보기'}
        </button>
      </div>
      <p className="text-sm text-slate-700">{block.description}</p>
      {open && (
        <ul className="text-xs text-slate-600 space-y-1">
          {block.points.map((p) => (
            <li key={p}>· {p}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function SecurityPage() {
  return (
    <section className="space-y-10">
      {/* 상단 인트로 */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50/70 px-4 py-1 text-[11px] text-pink-700">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
          Security · Logs · Overview
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          보안 · 로그 요약
        </h1>
        <p className="text-sm sm:text-base text-slate-700">
          Nginx 로그 분석, IDS 구성, 자동 차단, 24시간 트래픽 그래프 등 보안
          중심 결과를 모아놓은 페이지이다. 프로젝트 내용에서 설명한 구현을 실제
          로그와 캡처로 증명한다.
        </p>
      </div>

      {/* 보안/로그 블록 + 상세보기 토글 */}
      <div className="grid md:grid-cols-2 gap-6">
        {securityBlocks.map((block) => (
          <SecurityBlockCard key={block.title} block={block} />
        ))}
      </div>

      {/* 24시간 로그 기반 그래프들 (작게, 한눈에) */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold text-purple-700">로그 시각화</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {proofGraphs.map((img) => (
            <div
              key={img.src}
              className="space-y-2 rounded-xl bg-slate-50 border border-slate-100 p-2"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="rounded-lg object-contain"
                />
              </div>
              <p className="text-[11px] text-slate-600">{img.caption}</p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-slate-500">
          ※ Ubuntu에서 Python(matplotlib) 스크립트를 실행해 생성한 PNG를
          /public/security/에 저장한 뒤 불러오는 그래프이다.
        </p>
      </div>

      {/* 서버 보안 설정 및 IDS 동작 캡처 */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold text-sky-700">
          서버 보안 설정 · IDS 동작 캡처
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {proofServer.map((img) => (
            <div
              key={img.src}
              className="space-y-2 rounded-xl bg-slate-50 border border-slate-100 p-2"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="rounded-lg object-contain"
                />
              </div>
              <p className="text-[11px] text-slate-600">{img.caption}</p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-slate-500">
          ※ Nginx 포트 리스닝 상태, SSH 포트 변경, UFW 정책, IDS 실행 결과, cron
          설정을 실제 Ubuntu 터미널에서 캡처한 이미지이다.
        </p>
      </div>

      {/* 확인용 링크 */}
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl bg-pink-50 border border-pink-100 p-6 space-y-1 text-sm text-slate-700">
          <p>
            · IDS 및 로그 분석 스크립트 전체 코드:{' '}
            <Link
              href="https://github.com/bora120/log-ids"
              target="_blank"
              className="underline text-sky-700"
            >
              https://github.com/bora120/log-ids
            </Link>{' '}
          </p>
          <p>
            · 웹 서비스(Next.js) 전체 코드:{' '}
            <Link
              href="https://github.com/bora120/linux-portfolio"
              target="_blank"
              className="underline text-sky-700"
            >
              https://github.com/bora120/linux-portfolio
            </Link>{' '}
          </p>
          <p>
            · 동일 네트워크에서는 웹 서비스에{' '}
            <Link
              href="https://192.168.240.129"
              target="_blank"
              className="underline text-purple-700"
            >
              https://192.168.240.129
            </Link>{' '}
            로 접속
          </p>
        </div>
      </div>
    </section>
  )
}
