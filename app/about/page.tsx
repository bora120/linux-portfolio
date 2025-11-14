// app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="space-y-10">
      {/* 상단 인트로 */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/70 px-4 py-1 text-[11px] text-purple-700">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          About · Linux Security · Portfolio
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          내 소개
        </h1>
        <p className="text-sm sm:text-base text-slate-700">
          정보보호학과 2학년으로, 리눅스·웹 보안·네트워크를 중심으로 공부하고
          있습니다. 프로젝트와 학습 상황에 맞게 자유롭게 수정해 활용할 수
          있습니다.
        </p>
      </div>

      {/* 기본 정보 + 컨택트 박스 */}
      <div className="grid sm:grid-cols-2 gap-6 mt-2">
        {/* 기본 정보 */}
        <div className="rounded-2xl bg-pink-50 border border-pink-100 shadow-sm p-6 space-y-3">
          <h2 className="text-sm font-semibold text-pink-700">기본 정보</h2>
          <ul className="text-sm text-slate-700 space-y-1">
            <li>· 이름 : 김가연</li>
            <li>· 전공 : 정보보호학과</li>
            <li>· 학년 : 2학년</li>
          </ul>
        </div>

        {/* 컨택트 박스 */}
        <div className="rounded-2xl bg-sky-50 border border-sky-100 shadow-sm p-6 space-y-3">
          <h2 className="text-sm font-semibold text-sky-700">Contact</h2>
          <ul className="text-sm text-slate-700 space-y-1">
            <li>· 이메일 : smile05020@naver.com</li>

            <li>
              · GitHub :{' '}
              <a
                href="https://github.com/bora120"
                target="_blank"
                className="underline text-sky-600"
              >
                github.com/bora120
              </a>
            </li>

            <li>· 전화번호 : 010-9495-7736</li>
          </ul>
        </div>
      </div>

      {/* 학습 및 프로젝트 소개 */}
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl bg-purple-50 border border-purple-100 shadow-sm p-6 space-y-3">
          <h2 className="text-sm font-semibold text-purple-700">
            학습 및 프로젝트
          </h2>
          <ul className="text-sm text-slate-700 space-y-1">
            <li>· Ubuntu + Nginx + Next.js를 이용한 웹 서버 구성 실습</li>
            <li>· 리눅스 기반 웹 서버 보안(HTTPS, 방화벽, SSH 보안) 학습</li>
            <li>· 로그 분석 및 간단 IDS 구현 프로젝트 진행</li>
            <li>· GitHub를 통한 프로젝트 버전 관리 및 기록</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
