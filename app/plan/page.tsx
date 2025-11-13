// app/plan/page.tsx
type Plan = {
  title: string
  badgeColor: 'pink' | 'sky' | 'purple'
  summary: string
  items: string[]
}

const plans: Plan[] = [
  {
    title: '로그 분석 고도화',
    badgeColor: 'pink',
    summary:
      'Nginx 및 시스템 로그를 활용해 비정상 접근 패턴을 탐지하는 간단한 IDS 형태로 발전시키는 것을 목표로 합니다.',
    items: [
      'HTTP 상태 코드(4xx, 5xx) 비율 분석',
      '특정 IP의 과도한 요청 탐지',
      '로그 기반 알림/차단 규칙 초안 설계',
    ],
  },
  {
    title: '서버 보안 강화',
    badgeColor: 'sky',
    summary:
      '기본 방화벽 설정 외에도 SSH, 계정 관리, SSL 적용 등을 통해 전반적인 서버 보안을 강화합니다.',
    items: [
      'SSH 포트 변경 및 키 기반 로그인 설정',
      'root 로그인 차단 및 사용자 권한 관리',
      'HTTPS 적용(Certbot 등을 활용한 SSL 인증서 발급)',
    ],
  },
  {
    title: '시각화 및 대시보드',
    badgeColor: 'purple',
    summary:
      '로그와 모니터링 데이터를 그래프나 대시보드로 시각화하여 상태를 한눈에 파악할 수 있도록 합니다.',
    items: [
      '요청 수, 에러 비율 그래프 생성',
      '시간대별 트래픽 변화 시각화',
      '웹 기반 보안 현황 대시보드 초안 설계',
    ],
  },
]

function planCardClasses(color: Plan['badgeColor']) {
  if (color === 'pink') {
    return 'bg-pink-50 border-pink-100'
  }
  if (color === 'sky') {
    return 'bg-sky-50 border-sky-100'
  }
  return 'bg-purple-50 border-purple-100'
}

function badgeClasses(color: Plan['badgeColor']) {
  if (color === 'pink') {
    return 'bg-pink-100 text-pink-700'
  }
  if (color === 'sky') {
    return 'bg-sky-100 text-sky-700'
  }
  return 'bg-purple-100 text-purple-700'
}

export default function PlanPage() {
  return (
    <section className="space-y-10">
      {/* 상단 인트로 */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/70 px-4 py-1 text-[11px] text-sky-700">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          Roadmap · Development Plan
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          발전 계획
        </h1>
        <p className="text-sm sm:text-base text-slate-700">
          현재 구현된 기능을 바탕으로, 로그 분석과 보안 설정, 시각화를 어떻게
          확장해 나갈지 정리한 페이지입니다. 실제 진행 상황에 맞게 항목을
          추가하거나 수정할 수 있습니다.
        </p>
      </div>

      {/* 계획 카드들 */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`rounded-2xl border shadow-sm p-5 space-y-3 flex flex-col ${planCardClasses(
              plan.badgeColor
            )}`}
          >
            <div className="inline-flex items-center gap-2 text-[11px]">
              <span
                className={`px-2 py-0.5 rounded-full font-semibold ${badgeClasses(
                  plan.badgeColor
                )}`}
              >
                PLAN
              </span>
              <span className="text-slate-500">향후 발전 방향</span>
            </div>

            <h2 className="text-sm font-semibold text-slate-900">
              {plan.title}
            </h2>
            <p className="text-sm text-slate-700">{plan.summary}</p>

            <ul className="text-xs text-slate-600 space-y-1 mt-auto">
              {plan.items.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
