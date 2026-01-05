
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=2070" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#13a4ec 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full relative z-10 text-white text-center">
          <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">24/7 고객 지원</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6">무엇을 도와드릴까요?</h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
            MKS의 AI 고객 지원 팀과 의료 전문가들이 개인 맞춤형 건강 솔루션 및 기술 관련 문의에 대해 최선을 다해 답변해 드립니다.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">직속 문의</h2>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-3xl p-10 flex flex-col gap-8 shadow-sm">
              <div className="size-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl">mail</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">공식 지원 이메일</p>
                <a href="mailto:help@mkhub.com" className="text-3xl font-black text-slate-900 dark:text-white hover:text-primary transition-colors">help@mkhub.com</a>
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-body leading-relaxed">
                민감한 의료 데이터가 포함된 문의나 파트너십 관련 내용은 이메일로 직접 연락해 주세요. 평균 응답 시간은 4시간 이내입니다.
              </p>
              <button className="flex items-center gap-2 w-fit h-12 px-6 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
                <span className="material-symbols-outlined">content_copy</span> 이메일 복사
              </button>
            </div>

            <div className="relative h-64 rounded-3xl overflow-hidden shadow-sm group">
              <img src="https://picsum.photos/seed/map/800/600" alt="지도" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h4 className="font-bold">본사 위치</h4>
                  <p className="text-sm opacity-80 font-body">서울특별시 강남구 위치</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">문의 주제 선택</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: 'settings_suggest', title: '기술 지원', desc: '앱 오류, 로그인 문제 등' },
                { icon: 'handshake', title: '파트너십 문의', desc: 'B2B, B2G 솔루션 도입' },
                { icon: 'lock', title: '데이터 보안', desc: '개인정보보호 및 HIPAA 규정' },
                { icon: 'account_circle', title: '계정 관리', desc: '결제 및 구독 관련 문의' },
                { icon: 'medical_information', title: 'AI 진단 관련', desc: '분석 정확도 및 리포트 상세 내용' },
                { icon: 'language', title: '해외 환자 지원', desc: '비자 및 글로벌 컨시어지 문의' },
              ].map((topic) => (
                <button key={topic.title} className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/50 text-left hover:border-primary/50 hover:bg-primary/5 transition-all group">
                  <div className="size-12 rounded-xl bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-2xl">{topic.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{topic.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">{topic.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
