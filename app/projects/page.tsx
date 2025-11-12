// app/projects/page.tsx

const sectionTitleClass =
  'text-2xl md:text-3xl font-semibold tracking-tight text-pink-100'
const sectionSubClass = 'text-sm md:text-base text-slate-300'
const cardClass =
  'rounded-2xl border border-pink-500/20 bg-slate-950/80 p-6 md:p-8 space-y-3'

export default function ProjectsPage() {
  return (
    <main className="space-y-16 md:space-y-20">
      <section className="space-y-4">
        <h1 className={sectionTitleClass}>프로젝트 구현 내용</h1>
        <p className={sectionSubClass}>
          개발 → 버전 관리 → 리눅스 서버 배포 → 로그 분석까지 한 흐름으로
          구성했습니다.
        </p>
      </section>

      <section className="space-y-6">
        <div className={cardClass}>
          <h2 className="text-sm font-semibold text-pink-200 md:text-base">
            1. 웹서비스 구축 & 배포
          </h2>
          <ul className="space-y-1 text-sm text-slate-200">
            <li>· Windows VS Code에서 Next.js 프로젝트 생성</li>
            <li>· GitHub 저장소로 코드 버전 관리</li>
            <li>
              · Ubuntu에서 <code>git clone</code> 후 실행
            </li>
            <li>
              · <code>npm install</code> → <code>npm run build</code> →{' '}
              <code>npm start</code>
            </li>
          </ul>
        </div>

        <div className={cardClass}>
          <h2 className="text-sm font-semibold text-pink-200 md:text-base">
            2. Nginx & 방화벽 설정
          </h2>
          <ul className="space-y-1 text-sm text-slate-200">
            <li>· 80번 포트 → 내부 3000번 포트로 리버스 프록시</li>
            <li>· UFW로 기본 deny, 필요한 포트만 allow</li>
            <li>· 웹서비스용 포트만 외부에 공개</li>
          </ul>
        </div>

        <div className={cardClass}>
          <h2 className="text-sm font-semibold text-pink-200 md:text-base">
            3. 로그 수집 & 간단 분석
          </h2>
          <ul className="space-y-1 text-sm text-slate-200">
            <li>
              · <code>/var/log/nginx/access.log</code> 수집
            </li>
            <li>· Python으로 IP별 요청 횟수 집계</li>
            <li>· 상위 IP 목록 확인으로 과도한 트래픽 파악</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
