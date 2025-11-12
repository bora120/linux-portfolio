// app/about/page.tsx

const sectionTitleClass =
  'text-2xl md:text-3xl font-semibold tracking-tight text-pink-100'
const sectionSubClass = 'text-sm md:text-base text-slate-300'
const cardClass =
  'rounded-2xl border border-pink-500/20 bg-slate-950/80 p-6 md:p-8 space-y-3'

export default function AboutPage() {
  return (
    <main className="space-y-16 md:space-y-20">
      <section className="space-y-4">
        <h1 className={sectionTitleClass}>소개</h1>
        <p className={sectionSubClass}>
          정보보호학과 2학년으로, 웹 개발과 리눅스 보안에 관심을 두고 공부하고
          있습니다.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className={cardClass}>
          <h2 className="text-sm font-semibold text-pink-200 md:text-base">
            나의 역할
          </h2>
          <ul className="space-y-1 text-sm text-slate-200">
            <li>· 포트폴리오 웹 기획 및 디자인</li>
            <li>· Next.js 기반 페이지 구현</li>
            <li>· Ubuntu 서버 셋업 및 배포</li>
          </ul>
        </div>

        <div className={cardClass}>
          <h2 className="text-sm font-semibold text-pink-200 md:text-base">
            이 프로젝트로 얻고 싶은 것
          </h2>
          <ul className="space-y-1 text-sm text-slate-200">
            <li>· 실제 서비스 같은 리눅스 서버 경험</li>
            <li>· Nginx · UFW · SSH 보안 기본기</li>
            <li>· 로그 기반 이상행위 탐지 감각</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
