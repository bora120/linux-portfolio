// app/page.tsx
import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="relative min-h-[calc(100vh-180px)] flex flex-col items-center justify-center gap-12 overflow-hidden">
      {/* 파스텔 장식 배경 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-10 h-48 w-48 rounded-full bg-pink-100 blur-3xl opacity-70" />
        <div className="absolute -bottom-32 right-0 h-56 w-56 rounded-full bg-sky-100 blur-3xl opacity-70" />
        <div className="absolute top-24 right-1/4 h-40 w-40 rounded-full bg-purple-100 blur-3xl opacity-70" />
      </div>

      {/* 중앙 콘텐츠 */}
      <div className="w-full max-w-3xl text-center space-y-6">
        {/* 작은 태그 */}
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50/80 px-4 py-1 text-[11px] text-pink-600">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
          Linux · Nginx · Next.js · Security
        </div>

        {/* 큰 제목 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug text-slate-900">
          리눅스 기반
          <br />
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
            웹 서버 보안 프로젝트
          </span>
        </h1>

        {/* 짧은 설명 */}
        <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto">
          Ubuntu, Nginx, Next.js로 포트폴리오 웹을 구성하고 방화벽과 로그 분석을
          통해 보안을 강화하는 리눅스 활용 프로젝트입니다.
        </p>

        {/* 버튼 영역 */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            href="/project"
            className="px-7 py-2.5 rounded-full bg-pink-500 text-sm sm:text-base font-medium text-white shadow-sm hover:bg-pink-600 transition"
          >
            프로젝트 내용 보기
          </Link>
          <Link
            href="/plan"
            className="px-7 py-2.5 rounded-full border border-purple-300 bg-purple-50 text-sm sm:text-base text-purple-700 hover:bg-purple-100 transition"
          >
            발전 계획 살펴보기
          </Link>
        </div>
      </div>

      {/* 아래쪽 간단 요약 카드 (공백 유지하며 살짝만 정보) */}
      <div className="w-full max-w-4xl grid gap-4 md:grid-cols-3 mt-4">
        <div className="rounded-2xl bg-pink-50 border border-pink-100 p-4 space-y-2">
          <div className="text-xs font-semibold text-pink-700">
            Linux &amp; Network
          </div>
          <p className="text-xs sm:text-sm text-slate-700">
            Ubuntu 환경에서 서버를 구성하고 네트워크 흐름과 포트 상태를
            확인합니다.
          </p>
        </div>
        <div className="rounded-2xl bg-sky-50 border border-sky-100 p-4 space-y-2">
          <div className="text-xs font-semibold text-sky-700">Web Service</div>
          <p className="text-xs sm:text-sm text-slate-700">
            Next.js로 포트폴리오 웹을 제작해 프로젝트 내용을 정리합니다.
          </p>
        </div>
        <div className="rounded-2xl bg-purple-50 border border-purple-100 p-4 space-y-2">
          <div className="text-xs font-semibold text-purple-700">
            Security &amp; Logs
          </div>
          <p className="text-xs sm:text-sm text-slate-700">
            UFW와 Nginx 로그를 활용해 기본적인 보안 모니터링과 간단 IDS를
            구상합니다.
          </p>
        </div>
      </div>
    </section>
  )
}
