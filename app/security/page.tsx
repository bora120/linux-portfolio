// app/security/page.tsx
type SecurityBlock = {
  title: string
  color: 'pink' | 'sky' | 'purple' | 'slate'
  description: string
  points: string[]
}

const securityBlocks: SecurityBlock[] = [
  {
    title: '방화벽(UFW) 정책',
    color: 'pink',
    description:
      'UFW를 사용하여 필요한 포트만 허용하고, 나머지 트래픽은 기본적으로 차단하는 정책을 사용합니다.',
    points: [
      '기본 정책 : 외부에서 들어오는 연결 차단',
      '허용 포트 : SSH, HTTP, HTTPS 등 최소한의 서비스만 허용',
      '규칙 관리 : 서비스 변경 시 방화벽 규칙 함께 점검',
    ],
  },
  {
    title: 'SSH 및 계정 보안',
    color: 'sky',
    description:
      '원격 접속에 사용되는 SSH와 계정 관리를 통해 서버 접근 경로를 안전하게 관리합니다.',
    points: [
      'SSH 포트 변경 및 root 로그인 제한',
      '키 기반 인증 사용 권장',
      '불필요 계정/서비스 비활성화',
    ],
  },
  {
    title: '로그 수집 및 모니터링',
    color: 'purple',
    description:
      'Nginx 액세스/에러 로그와 시스템 로그를 활용하여 이상 징후를 확인할 수 있는 기반을 마련합니다.',
    points: [
      '로그 위치 및 형식 파악',
      '필터링/검색 명령어 정리 (grep, tail 등)',
      '비정상 패턴(반복 요청, 에러 폭주 등) 확인',
    ],
  },
  {
    title: '간단 IDS 구상',
    color: 'slate',
    description:
      '로그 데이터를 토대로, 특정 기준을 넘는 트래픽이나 의심스러운 패턴을 탐지하는 간단한 IDS 형태를 구상합니다.',
    points: [
      'IP별 요청 횟수 집계',
      '특정 URL로의 과도한 접근 탐지',
      '기준 이상일 때 알림 또는 차단 규칙 설계',
    ],
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
          이 프로젝트에서 적용한 보안 설정과 로그 분석 방향을 한눈에 볼 수
          있도록 정리한 페이지입니다. 실제 서버 설정에 맞게 내용을 수정해
          사용하면 됩니다.
        </p>
      </div>

      {/* 보안/로그 블록들 */}
      <div className="grid md:grid-cols-2 gap-6">
        {securityBlocks.map((block) => (
          <div
            key={block.title}
            className={`rounded-2xl border shadow-sm p-5 space-y-3 ${blockClasses(
              block.color
            )}`}
          >
            <h2 className="text-sm font-semibold text-slate-900">
              {block.title}
            </h2>
            <p className="text-sm text-slate-700">{block.description}</p>
            <ul className="text-xs text-slate-600 space-y-1">
              {block.points.map((p) => (
                <li key={p}>· {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
