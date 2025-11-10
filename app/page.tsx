const sectionTitleClass = 'text-xl font-semibold md:text-2xl'
const cardClass = 'rounded-xl border border-slate-700 bg-slate-900/70 p-4'

function HeroSection() {
  return (
    <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-4">
        <p className="text-sm font-medium text-emerald-400">
          Linux · Web · Security Portfolio
        </p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          김가연 포트폴리오
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
          Next.js와 Ubuntu 리눅스 서버를 사용해 만든 개인 포트폴리오
          웹사이트입니다. 리눅스 웹서버 구축과 보안 설정 실습을 위해 제작한
          프로젝트입니다.
        </p>
        <div className="flex flex-wrap gap-2 pt-2 text-xs md:text-sm">
          <span className="rounded-full border border-emerald-400/50 px-3 py-1">
            Next.js 기반 웹서비스
          </span>
          <span className="rounded-full border border-emerald-400/50 px-3 py-1">
            Ubuntu Linux 서버
          </span>
          <span className="rounded-full border border-emerald-400/50 px-3 py-1">
            웹보안 · 로그 분석
          </span>
        </div>
      </div>

      <div className="mt-4 w-full max-w-xs self-start rounded-2xl border border-slate-700 bg-slate-900/60 p-4 text-xs text-slate-200 shadow-lg md:mt-0 md:text-sm">
        <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-emerald-300">
          Project Overview
        </p>
        <ul className="mt-2 space-y-1">
          <li>· VMware + Ubuntu 리눅스 환경</li>
          <li>· Next.js 포트폴리오 페이지</li>
          <li>· Nginx/방화벽/로그 설정 예정</li>
        </ul>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="space-y-3">
      <h2 className={sectionTitleClass}>About</h2>
      <p className="text-sm leading-relaxed text-slate-200 md:text-base">
        정보보호학과 2학년으로, 웹 개발과 보안에 관심을 가지고 공부하고
        있습니다. 이 페이지는 리눅스 웹서버와 보안을 함께 실습하기 위한 과제용
        포트폴리오 사이트입니다.
      </p>
      <p className="text-sm leading-relaxed text-slate-300 md:text-base">
        이후 프로젝트 내용과 학습 기록을 이 공간에 조금씩 추가해 나갈
        예정입니다.
      </p>
    </section>
  )
}

function SkillsSection() {
  return (
    <section className="space-y-4">
      <h2 className={sectionTitleClass}>Skills & Stack</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <div className={cardClass}>
          <h3 className="text-sm font-semibold text-emerald-300">
            Web / Frontend
          </h3>
          <ul className="mt-2 space-y-1 text-xs text-slate-200 md:text-sm">
            <li>- Next.js (App Router)</li>
            <li>- React 기본 사용</li>
            <li>- Tailwind CSS</li>
          </ul>
        </div>

        <div className={cardClass}>
          <h3 className="text-sm font-semibold text-emerald-300">
            Linux / Server
          </h3>
          <ul className="mt-2 space-y-1 text-xs text-slate-200 md:text-sm">
            <li>- VMware 기반 Ubuntu</li>
            <li>- Node.js 애플리케이션 실행</li>
            <li>- Nginx 리버스 프록시 (구성 예정)</li>
          </ul>
        </div>

        <div className={cardClass}>
          <h3 className="text-sm font-semibold text-emerald-300">
            Security / Logging
          </h3>
          <ul className="mt-2 space-y-1 text-xs text-slate-200 md:text-sm">
            <li>- UFW 방화벽 기본 설정</li>
            <li>- SSH 접속 보안 설정</li>
            <li>- 웹 접근 로그 수집 및 분석</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="space-y-4">
      <h2 className={sectionTitleClass}>Projects</h2>
      <div className="space-y-3 text-sm text-slate-200 md:text-base">
        <div className={cardClass}>
          <h3 className="text-sm font-semibold text-emerald-300 md:text-base">
            리눅스 기반 포트폴리오 웹서비스
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-300 md:text-sm">
            윈도우에서 Next.js로 개발한 코드를 GitHub로 관리하고, VMware Ubuntu
            리눅스 서버에 배포해 웹서비스처럼 운영할 예정입니다.
          </p>
        </div>

        <div className={cardClass}>
          <h3 className="text-sm font-semibold text-emerald-300 md:text-base">
            로그 수집 및 분석
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-300 md:text-sm">
            Nginx 웹 접근 로그를 수집하고, 간단한 스크립트로 IP별 접속 횟수와
            에러 코드를 분석하는 실습을 진행할 예정입니다.
          </p>
        </div>
      </div>
    </section>
  )
}

function ServerSecuritySection() {
  return (
    <section className="space-y-4">
      <h2 className={sectionTitleClass}>Linux Server & Security</h2>
      <p className="text-sm leading-relaxed text-slate-200 md:text-base">
        이 프로젝트에서는 리눅스를 단순 실습용이 아니라, 실제 웹서비스를
        운영하는 서버로 사용하는 것을 목표로 합니다.
      </p>
      <ul className="list-disc space-y-2 pl-5 text-xs text-slate-300 md:text-sm">
        <li>UFW로 22, 80, 443 포트만 최소 허용</li>
        <li>SSH 계정 관리 및 root 직접 로그인 비활성화</li>
        <li>Nginx 기본 보안 설정 및 간단한 웹방화벽 규칙 적용</li>
        <li>웹 접근 로그 기반 이상 요청(과도한 트래픽, 에러 코드) 확인</li>
      </ul>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="border-t border-slate-800 pt-6 text-xs text-slate-400 md:text-sm">
      <p>Contact: 추후 이메일 · GitHub 링크 등을 추가할 예정입니다.</p>
      <p className="mt-1">
        이 페이지는 리눅스 활용 프로젝트 및 웹보안프로그래밍 과제를 위해 제작된
        포트폴리오 웹사이트입니다.
      </p>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-20 px-4 py-12 md:py-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServerSecuritySection />
        <ContactSection />
      </div>
    </main>
  )
}
