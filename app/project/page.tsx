// app/project/page.tsx

import { ToggleCard } from '@/components/project/ToggleCard'
import {
  ProjectItem,
  ProjectItemCard,
} from '@/components/project/ProjectItemCard'

type Overview = {
  title: string
  description: string
  points: string[]
}

const overview: Overview = {
  title: '프로젝트 개요',
  description:
    'Next.js 포트폴리오를 단순 배포하는 수준을 넘어서, 리눅스 서버 운영·보안·로그 기반 자동 대응까지 실습한 프로젝트이다.',
  points: [
    '서비스 구조: Client → Nginx(80/443) → Next.js(3000) 구조로 설계했다.',
    '보안 계층: UFW, SSH 포트 변경, root 로그인 차단, self-signed HTTPS를 적용했다.',
    '로그 기반 보안: Nginx access.log로 이상 트래픽을 탐지하고 차단하는 IDS를 구성했다.',
    '운영 자동화: PM2와 cron으로 서비스와 IDS가 주기적으로 자동 실행되도록 구성했다.',
  ],
}

const projectItems: ProjectItem[] = [
  {
    title: '서비스 · 네트워크 구조 설계',
    color: 'pink',
    description:
      '외부에는 Nginx만 노출하고, 내부 Next.js 서버에는 리버스 프록시를 통해서만 접근하도록 설계했다.',
    details: [
      '클라이언트는 http/https로만 접속하고 내부 포트 구조는 숨겼다.',
      'Nginx가 80/443 포트에서 요청을 받고 127.0.0.1:3000으로 전달한다.',
      '웹 서비스만 노출하고 시스템 내부 자원은 직접 접근이 불가능하도록 구성했다.',
    ],
  },
  {
    title: 'Nginx 리버스 프록시 · HTTPS 적용',
    color: 'sky',
    description:
      'Nginx 리버스 프록시와 self-signed 인증서를 사용해 http/https 요청을 내부 Next.js 서버로 전달하도록 구성했다.',
    details: [
      '포트 80/443에서 들어온 요청을 127.0.0.1:3000으로 프록시한다.',
      'selfsigned.crt / selfsigned.key로 HTTPS(443) 암호화 통신을 적용했다.',
      'ss 명령으로 80, 443 포트 리스닝 상태를 확인해 설정을 검증했다.',
    ],
  },
  {
    title: 'UFW 방화벽 최소 권한 정책',
    color: 'purple',
    description:
      '기본 정책을 차단 중심으로 두고, 실제 서비스에 필요한 포트만 허용하는 최소 권한 원칙을 적용했다.',
    details: [
      '기본 정책을 외부 입력 deny, 내부 출력 allow로 설정했다.',
      'SSH, Nginx Full(80/443) 등 필수 서비스에 해당하는 포트만 개방했다.',
      'ufw status verbose로 최종 규칙과 적용 상태를 확인했다.',
    ],
  },
  {
    title: 'SSH 보안 강화 · 서비스 운영 안정화',
    color: 'sky',
    description:
      'SSH 포트를 변경하고 root 로그인을 차단해 원격 접속 보안을 강화하고, PM2로 Next.js 서비스를 상시 실행되도록 구성했다.',
    details: [
      'sshd 설정에서 기본 포트 22를 다른 포트(예: 2222)로 변경했다.',
      'root 계정 직접 로그인을 막아 계정 탈취 위험을 줄였다.',
      'PM2로 Next.js 서버를 실행하고 부팅 시 자동 시작되도록 설정했다.',
    ],
  },
  {
    title: '로그 기반 IDS(탐지 및 자동 차단)',
    color: 'pink',
    description:
      'Nginx access.log를 분석해 비정상 트래픽을 탐지하고, 기준을 초과하는 IP를 UFW로 자동 차단하는 IDS를 구현했다.',
    details: [
      'log_analyzer.py로 최근 5분 상위 IP와 404 다발 IP를 분석했다.',
      'block_bad_ips.py에서 임계값 이상 요청한 IP를 ufw deny 규칙으로 등록했다.',
      '터미널 출력으로 탐지와 차단 흐름을 눈으로 확인했다.',
    ],
  },
  {
    title: '로그 시각화 · 그래프 분석',
    color: 'purple',
    description:
      '최근 24시간 로그를 바탕으로 Top IP, 상태 코드 분포, 시간대별 요청 수를 그래프로 시각화했다.',
    details: [
      'Python + matplotlib으로 3종 그래프 PNG 파일을 생성했다.',
      'Top IP, 상태 코드 비율, 시간대별 요청량을 각각 시각화했다.',
      '자세한 그래프와 캡처는 보안 · 로그 요약 페이지에서 정리한다.',
    ],
  },
]

const securitySummary = {
  title: '보안 · 운영 대책 요약',
  description:
    '웹 서비스를 배포하는 것에 그치지 않고, 네트워크 구조·방화벽·SSH·HTTPS·로그 기반 IDS를 함께 구성해 실제 서비스 운영에 가까운 보안 환경을 만드는 것을 목표로 했다.',
  points: [
    'Nginx 리버스 프록시와 HTTPS로 애플리케이션 포트를 숨기고 암호화 통신을 적용했다.',
    'UFW 최소 권한 정책으로 필수 포트만 개방해 공격 표면을 줄였다.',
    'SSH 포트 변경과 root 로그인 차단으로 원격 접속 보안을 강화했다.',
    '로그 분석·자동 차단·cron 주기 실행으로 서버가 스스로 이상 트래픽에 대응하도록 구성했다.',
  ],
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
          Ubuntu 리눅스 서버 위에 Next.js 포트폴리오 서비스를 올리고, Nginx
          리버스 프록시, HTTPS, 방화벽, SSH 보안 강화, 로그 기반 IDS까지 구성한
          구현 과정을 정리한 페이지이다.
        </p>
      </div>

      {/* 개요 카드 (토글, 기본은 펼침) */}
      <div className="max-w-3xl mx-auto">
        <ToggleCard
          title={overview.title}
          defaultOpen
          variantClassName="bg-sky-50 border-sky-100"
        >
          <p className="text-sm text-slate-700 mb-3">{overview.description}</p>
          <ul className="text-sm text-slate-700 space-y-1">
            {overview.points.map((point) => (
              <li key={point}>· {point}</li>
            ))}
          </ul>
        </ToggleCard>
      </div>

      {/* 현재 구현 진행 사항 – 파스텔 카드들 (세로 정렬) */}
      <div className="space-y-5">
        <h2 className="text-sm font-semibold text-purple-700">
          현재 구현 진행 사항
        </h2>
        <div className="flex flex-col gap-7 md:gap-8">
          {projectItems.map((item) => (
            <ProjectItemCard key={item.title} item={item} />
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
          <p className="text-[11px] text-slate-500 pt-1">
            ※ 로그 분석 결과, 그래프, 세부 캡처 및 GitHub 링크는 보안 · 로그
            요약 페이지에서 별도로 정리한다.
          </p>
        </div>
      </div>
    </section>
  )
}
