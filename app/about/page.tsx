// app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="space-y-10">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/70 px-4 py-1 text-[11px] text-purple-700">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          About · Linux Security · Portfolio
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          내 소개
        </h1>
        <p className="text-sm sm:text-base text-slate-700">
          정보보호학과 2학년으로, 리눅스와 웹 보안, 네트워크를 중심으로 공부하고
          있습니다. 아래 내용은 과제나 포트폴리오 용도로 자유롭게 수정해서
          사용할 수 있습니다.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mt-2">
        <div className="rounded-2xl bg-pink-50 border border-pink-100 shadow-sm p-6 space-y-3">
          <h2 className="text-sm font-semibold text-pink-700">기본 정보</h2>
          <ul className="text-sm text-slate-700 space-y-1">
            <li>· 전공 : 정보보호학과</li>
            <li>· 학년 : 2학년</li>
            <li>· 관심 분야 : 리눅스, 웹 보안, 네트워크, 개발</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-sky-50 border border-sky-100 shadow-sm p-6 space-y-3">
          <h2 className="text-sm font-semibold text-sky-700">현재 목표</h2>
          <p className="text-sm text-slate-700">
            리눅스 서버 운영과 웹 애플리케이션 보안을 함께 이해하고, 직접
            서비스를 구축하고 운영할 수 있는 역량을 키우는 것을 목표로 하고
            있습니다.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl bg-purple-50 border border-purple-100 shadow-sm p-6 space-y-3">
          <h2 className="text-sm font-semibold text-purple-700">
            학습 및 프로젝트
          </h2>
          <ul className="text-sm text-slate-700 space-y-1">
            <li>· 리눅스 활용 프로젝트 : Ubuntu + Nginx + Next.js 서버 구성</li>
            <li>· 웹 서버 보안 프로그래밍 : 포트폴리오 사이트 개발</li>
            <li>· GitHub를 활용한 버전 관리 및 협업 연습</li>
          </ul>
          <p className="text-xs text-slate-500">
            * 실제 진행 상황에 맞게 항목을 추가하거나 수정해도 됩니다.
          </p>
        </div>
      </div>
    </section>
  )
}
