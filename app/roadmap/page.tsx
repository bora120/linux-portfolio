// app/roadmap/page.tsx

const sectionTitleClass =
  'text-2xl md:text-3xl font-semibold tracking-tight text-pink-100'
const sectionSubClass = 'text-sm md:text-base text-slate-300'
const cardClass =
  'rounded-2xl border border-pink-500/20 bg-slate-950/80 p-6 md:p-8 space-y-3'

export default function RoadmapPage() {
  return (
    <main className="space-y-16 md:space-y-20">
      <section className="space-y-4">
        <h1 className={sectionTitleClass}>발전 계획</h1>
        <p className={sectionSubClass}>
          지금은 기본 구성을 마친 상태이고, 앞으로는 보안·모니터링 쪽으로 확장할
          예정입니다.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className={cardClass}>
          <h2 className="text-sm font-semibold text-pink-200 md:text-base">
            로그 기반 IDS 고도화
          </h2>
          <ul className="space-y-1 text-sm text-slate-200">
            <li>· 요청 횟수 기준 이상행위 탐지</li>
            <li>· 404 반복·특정 URL 스캔 패턴 체크</li>
            <li>· 의심 IP를 UFW와 연동해 차단</li>
          </ul>
        </div>

        <div className={cardClass}>
          <h2 className="text-sm font-semibold text-pink-200 md:text-base">
            서버 보안 강화
          </h2>
          <ul className="space-y-1 text-sm text-slate-200">
            <li>· SSH 포트 변경 및 root 로그인 차단</li>
            <li>· 키 기반 인증 적용</li>
            <li>· 불필요 포트/서비스 정리</li>
          </ul>
        </div>

        <div className={cardClass}>
          <h2 className="text-sm font-semibold text-pink-200 md:text-base">
            시각화 & 대시보드
          </h2>
          <ul className="space-y-1 text-sm text-slate-200">
            <li>· 트래픽/에러 코드 그래프화</li>
            <li>· 차단 IP 현황 모니터링</li>
            <li>· 간단한 보안 대시보드 페이지 추가</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
