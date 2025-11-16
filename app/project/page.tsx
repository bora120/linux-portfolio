// app/project/page.tsx

import { ToggleCard } from '@/components/project/ToggleCard'
import {
  ProjectItem,
  ProjectItemCard,
} from '@/components/project/ProjectItemCard'

import { projectCodeBlocks } from '@/data/project/codeBlocks' // ★ 추가됨

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
      'Next.js로 만든 포트폴리오 서비스를 리눅스 서버에서 안정적으로 실행하기 위해 PM2를 사용해 상시 실행 환경을 구성하고, 외부에서는 Nginx를 통해서만 접근하도록 전체 구조를 설계했다.',
    details: [
      'Next.js 앱은 3000번 포트에서만 동작하도록 하고, 해당 포트는 외부에 직접 노출하지 않는다.',
      'Nginx가 80/443 포트에서 모든 요청을 받아 내부 127.0.0.1:3000으로 전달하도록 설정했다.',
      'PM2로 Next.js 서버를 실행해, 재부팅 시에도 자동으로 다시 실행되도록 운영 환경을 만들었다.',
    ],
    codeBlocks: projectCodeBlocks.pm2,
  },
  {
    title: 'Nginx 리버스 프록시 · HTTPS 적용',
    color: 'sky',
    description:
      'HTTP 리버스 프록시를 먼저 성공시킨 뒤, 마지막 단계에서 self-signed 인증서를 적용해 HTTPS까지 완성한 과정이다.',
    details: [
      '우선 HTTP 리버스 프록시를 구성해 도메인/서버IP 요청이 127.0.0.1:3000으로 정상 전달되는지 확인했다.',
      '이후 openssl로 selfsigned.crt / selfsigned.key를 생성해 443 포트에 HTTPS를 적용했다.',
      'nginx -t와 ss -tulpn 등으로 설정 오류와 80/443 리스닝 상태를 점검하며 HTTPS 연결을 성공시켰다.',
    ],
    codeBlocks: projectCodeBlocks.nginx,
  },
  {
    title: 'UFW 방화벽 최소 권한 정책',
    color: 'purple',
    description:
      '개발 초기에는 테스트 편의를 위해 필요한 몇몇 포트만 임시로 열어두었고, 서비스 구성이 완성된 이후 최소 권한 원칙에 맞게 방화벽 정책을 정리했다.',
    details: [
      '기본 정책을 외부 입력 deny, 내부 출력 allow로 설정해 불필요한 인바운드 접근을 차단했다.',
      'OpenSSH, Nginx Full(80/443), 변경된 SSH 포트(2222/tcp)만 허용하도록 규칙을 구성했다.',
      '개발 초기에 임시로 열어두었던 3000 포트는 최종적으로 제거해 외부에서는 오직 Nginx와 SSH 포트만 보이도록 정리했다.',
    ],
    codeBlocks: projectCodeBlocks.ufw,
  },
  {
    title: 'SSH 보안 강화 · 서비스 운영 안정화',
    color: 'sky',
    description:
      '기본 SSH 설정의 보안 취약점을 보완하기 위해 포트를 변경하고 root 로그인을 차단했으며, 리눅스에서 ssh.socket이 계속 22번 포트를 잡던 문제도 해결했다.',
    details: [
      'sshd_config에서 기본 포트 22를 2222로 변경해 무작위 공격 위험을 줄였다.',
      'root 계정 직접 로그인을 막아 계정 탈취 위험을 낮췄다.',
      'ssh.socket을 비활성화하고 ssh 서비스를 사용하도록 구성해 포트 변경이 실제 운영 환경에 정상 반영되도록 했다.',
    ],
    codeBlocks: projectCodeBlocks.ssh,
  },
  {
    title: '로그 기반 IDS(탐지 및 자동 차단)',
    color: 'pink',
    description:
      'Nginx access.log를 분석해 비정상적인 요청 패턴을 찾아내고, 기준을 초과하는 IP는 자동으로 방화벽에서 차단되도록 IDS를 직접 구현했다.',
    details: [
      'log_analyzer.py로 최근 5분간 요청량이 많은 IP와 404 요청이 많은 IP를 분석했다.',
      'block_bad_ips.py에서 요청이 임계값을 넘는 IP를 자동으로 ufw deny 규칙에 등록한다.',
      'crontab을 이용해 5분마다 IDS 스크립트를 자동 실행해, 사람이 보지 않아도 스스로 차단이 이루어지도록 만들었다.',
    ],
    codeBlocks: projectCodeBlocks.ids,
  },
  {
    title: '로그 시각화 · 그래프 분석',
    color: 'purple',
    description:
      '하루 동안의 접근 로그를 분석해 Top IP, HTTP 상태 코드 비율, 시간대별 요청량을 그래프로 시각화해 트래픽 패턴을 한눈에 볼 수 있게 했다.',
    details: [
      'matplotlib을 사용해 Top IP, 상태 코드 분포, 시간대별 요청량을 PNG 그래프로 생성했다.',
      '최근 24시간 로그만 필터링한 뒤 Counter로 집계해 분석 정확도를 높였다.',
      '생성된 그래프는 보안 · 로그 요약 페이지에서 활용해 서버 이상 징후를 시각적으로 확인할 수 있다.',
    ],
    codeBlocks: projectCodeBlocks.graphs,
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

      {/* 개요 카드 */}
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

      {/* 현재 구현 진행 사항 */}
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
