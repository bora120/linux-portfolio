// app/page.tsx

const titleClass =
  'text-4xl md:text-5xl font-semibold tracking-tight text-pink-100'
const subtitleClass = 'mt-4 text-sm md:text-base text-slate-200/80'
const buttonBaseClass =
  'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm md:text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950'
const primaryButtonClass =
  buttonBaseClass +
  ' bg-pink-500/90 text-slate-50 hover:bg-pink-400 focus:ring-pink-400'
const secondaryButtonClass =
  buttonBaseClass +
  ' border border-pink-400/50 bg-slate-950/60 text-pink-100 hover:bg-pink-900/40 focus:ring-pink-400'

export default function HomePage() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <section className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-pink-500/25 bg-slate-950/90 px-6 py-12 md:px-10 md:py-16 shadow-[0_0_80px_rgba(219,39,119,0.25)]">
        {/* 배경 그라디언트 장식 */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-700/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-pink-500/25 blur-3xl" />
        </div>

        <div className="relative space-y-8 text-center md:space-y-10">
          {/* 작은 태그 라인 */}
          <p className="text-[0.7rem] md:text-xs font-medium uppercase tracking-[0.2em] text-pink-200/80">
            Linux · Web · Security
          </p>

          {/* 메인 타이틀 & 한 줄 */}
          <div className="space-y-3 md:space-y-4">
            <h1 className={titleClass}>LINUX 포트폴리오</h1>
            <p className={subtitleClass}>
              리눅스와 웹 보안을 공부하며 쌓아가는 기록을 담은 페이지입니다.
            </p>
          </div>

          {/* 버튼들 – 다른 페이지로 이동 */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-2">
            <a href="/projects" className={primaryButtonClass}>
              프로젝트 보기
            </a>
            <a href="/about" className={secondaryButtonClass}>
              소개
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
