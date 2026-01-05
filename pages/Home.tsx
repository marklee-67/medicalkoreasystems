
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-6 lg:px-20 bg-gradient-to-br from-slate-50 via-white to-primary/5 dark:from-background-dark dark:via-surface-dark dark:to-background-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              미래 헬스케어의 새로운 기준
            </span>
            <h1 className="text-5xl lg:text-[72px] font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white mb-8">
              AI가 설계하는<br/>
              <span className="text-primary">맞춤형 건강 솔루션</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-body leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              당신만을 위한 맞춤형 건강 관리, AI가 함께합니다. Medical Korea Systems는 의료 전문 지식과 인공지능 기술의 결합을 통해 새로운 건강 관리 경험을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/solutions" className="h-14 px-8 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all">
                솔루션 보기 <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link to="/contact" className="h-14 px-8 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-xl flex items-center justify-center hover:bg-slate-50 transition-colors">
                상담 문의하기
              </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img src="https://picsum.photos/seed/mks/1200/900" alt="MKS 기술" className="w-full h-full object-cover" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <span className="font-bold dark:text-white">실시간 데이터 분석</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mb-2">
                  <div className="bg-primary h-full w-[88%] rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>글로벌 데이터 처리 중</span>
                  <span>88% 정확도 확보</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-slate-100 dark:border-slate-800 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: 'verified_user', title: '99% 정확도', desc: '고도화된 머신러닝 모델을 통한 정밀 진단 시스템을 제공합니다.' },
            { icon: 'ecg_heart', title: '24/7 모니터링', desc: '클라우드 시스템을 통해 언제 어디서나 건강 상태를 추적합니다.' },
            { icon: 'psychology', title: '개인 맞춤형 플랜', desc: '개별 생체 지표에 최적화된 맞춤형 건강 전략을 설계합니다.' },
          ].map((stat) => (
            <div key={stat.title} className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{stat.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">에코시스템</span>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">핵심 헬스케어 솔루션</h2>
            <p className="text-slate-500 dark:text-slate-400">MKS의 통합 AI 서비스가 현대 의료 케어를 어떻게 재정의하는지 확인해 보세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="group bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:border-primary/30 transition-all transform hover:-translate-y-2">
                <div className="h-56 bg-slate-200 overflow-hidden">
                  <img src={service.imageUrl} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="size-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                  <Link to={`/service/${service.id}`} className="inline-flex items-center text-sm font-bold text-primary group-hover:text-primary-dark">
                    자세히 보기 <span className="material-symbols-outlined text-[18px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/solutions" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              모든 서비스 보기 <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
