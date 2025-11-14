// app/plan/page.tsx
type Plan = {
  title: string
  badgeColor: 'pink' | 'sky' | 'purple'
  summary: string
  items: string[]
}

const plans: Plan[] = [
  {
    title: 'IDS 자동화 고도화',
    badgeColor: 'pink',
    summary:
      '현재 구현한 로그 기반 IDS를 더 안정적이고 자동화된 형태로 발전시키는 것을 목표로 한다.',
    items: [],
  },
  {
    title: '모니터링 · 실시간 대시보드',
    badgeColor: 'sky',
    summary:
      '로그와 서버 상태를 실시간으로 볼 수 있는 대시보드를 도입해 운영 상황을 한눈에 파악한다.',
    items: [],
  },
  {
    title: '운영 환경 · 배포 자동화',
    badgeColor: 'purple',
    summary:
      '실제 서비스 운영을 가정하고 HTTPS 인증서와 CI/CD 파이프라인을 적용한다.',
    items: [],
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
          지금까지 구현한 서버 보안·로그 분석 기능을 기반으로, IDS 자동화,
          모니터링, 배포까지 어떻게 확장해 나갈지 정리한 페이지이다.
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
