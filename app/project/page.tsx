// app/project/page.tsx

type ProjectItem = {
  title: string
  color: 'pink' | 'sky' | 'purple'
  description: string
  details: string[]
}

const overview = {
  title: '프로젝트 개요',
  description:
    'Ubuntu 리눅스 서버 위에 Nginx 리버스 프록시와 Next.js 기반 포트폴리오 웹을 구성하고, 방화벽과 로그 분석을 통해 보안을 강화하는 프로젝트입니다.',
  points: [
    '운영체제 : Ubuntu',
    '웹 서버 : Nginx 리버스 프록시',
    '애플리케이션 : Next.js 포트폴리오 사이트',
    '기타 : GitHub 버전 관리, UFW 방화벽, 로그 기반 보안 모니터링',
  ],
}

const projectItems: ProjectItem[] = [
  {
    title: '웹 서비스 개발',
    color: 'pink',
    description:
      'Next.js로 포트폴리오 형태의 웹 페이지를 제작하여, 프로젝트 내용과 학습 내용을 정리합니다.',
    details: ['홈, 내 소개, 프로젝트 내용, 발전 계획, 보안 요약 페이지 구성'],
  },
  {
    title: 'GitHub 버전 관리',
    color: 'sky',
    description:
      '프로젝트 코드를 GitHub 리포지토리로 관리하여 변경 이력을 남기고, 협업 환경을 고려합니다.',
    details: ['commit, branch, push/pull을 이용한 변경 이력 관리'],
  },
  {
    title: 'Ubuntu 환경 구성',
    color: 'purple',
    description:
      'VM 혹은 실서버 환경에 Ubuntu를 설치하고, 기본 패키지 및 개발 환경을 구성합니다.',
    details: ['필요 패키지 설치', 'Node.js, Nginx, UFW 설정'],
  },
  {
    title: 'Nginx 리버스 프록시',
    color: 'sky',
    description:
      'Nginx를 이용해 외부 요청을 Next.js 애플리케이션으로 전달하는 리버스 프록시를 설정합니다.',
    details: ['도메인/포트 설정', '기본 보안 설정 적용'],
  },
  {
    title: '방화벽(UFW) 설정',
    color: 'pink',
    description:
      'UFW를 사용하여 필요한 포트만 허용하고 불필요한 접근을 차단합니다.',
    details: [
      'SSH, HTTP/HTTPS 등 필수 포트만 허용',
      '기본 정책을 제한(deny) 중심으로 설정',
    ],
  },
  {
    title: '로그 분석 준비',
    color: 'purple',
    description:
      'Nginx와 시스템 로그를 수집하고, 이상 징후를 확인할 수 있는 기반을 마련합니다.',
    details: [
      '로그 위치 파악',
      '간단한 필터링/검색 명령어 정리 (grep, tail 등)',
    ],
  },
]

const securitySummary = {
  title: '보안 대책 요약',
  description:
    '방화벽, SSH 설정, Nginx 보안 설정, 로그 관리를 통해 기본적인 서버 보안을 강화합니다.',
  points: [
    'UFW 방화벽으로 불필요한 포트 차단',
    'SSH 포트 및 인증 방식 설정',
    'Nginx 설정 파일을 통한 접근 제어',
    '로그를 활용한 이상 징후 확인',
  ],
}

function itemCardClasses(color: ProjectItem['color']) {
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

export default function ProjectPage() {
  return (
    <section className="space-y-10">
      {/* 상단 인트로 */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/70 px-4 py-1 text-[11px] text-sky-700">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          Project · Linux Server · Web Security
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          프로젝트 내용
        </h1>
        <p className="text-sm sm:text-base text-slate-700">
          리눅스 서버 위에 웹 서비스를 올리고, 방화벽과 로그 분석을 통해 보안을
          강화하는 과정을 정리한 페이지입니다. 실제 구현 상황에 맞게 내용을
          수정해서 사용할 수 있습니다.
        </p>
      </div>

      {/* 개요 카드 */}
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl bg-sky-50 border border-sky-100 shadow-sm p-6 space-y-3">
          <h2 className="text-lg font-semibold text-sky-700">
            {overview.title}
          </h2>
          <p className="text-sm text-slate-700">{overview.description}</p>
          <ul className="text-sm text-slate-700 space-y-1">
            {overview.points.map((point) => (
              <li key={point}>· {point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 현재 구현 진행 사항 – 파스텔 카드들 */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-purple-700">
          현재 구현 진행 사항
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projectItems.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl border shadow-sm p-5 space-y-2 ${itemCardClasses(
                item.color
              )}`}
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm text-slate-700">{item.description}</p>
              <ul className="text-xs text-slate-600 space-y-1">
                {item.details.map((detail) => (
                  <li key={detail}>· {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 보안 대책 요약 */}
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl bg-pink-50 border border-pink-100 shadow-sm p-6 space-y-3">
          <h2 className="text-lg font-semibold text-pink-700">
            {securitySummary.title}
          </h2>
          <p className="text-sm text-slate-700">
            {securitySummary.description}
          </p>
          <ul className="text-sm text-slate-700 space-y-1">
            {securitySummary.points.map((point) => (
              <li key={point}>· {point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
