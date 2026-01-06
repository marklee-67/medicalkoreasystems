
import React, { useState, useEffect } from 'react';
import { getTechContent } from '../constants';
import { TechContent } from '../types';

const Technology: React.FC = () => {
  const [content, setContent] = useState<TechContent>(getTechContent());

  useEffect(() => {
    const update = () => setContent(getTechContent());
    window.addEventListener('storage_updated', update);
    return () => window.removeEventListener('storage_updated', update);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
            alt="Advanced Technology" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-slate-900/80"></div>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#13a4ec 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full relative z-10 text-white">
          <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md text-primary-light text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6 border border-primary/30">Next-Gen Tech Stack</span>
          <h1 className="text-4xl md:text-5xl xl:text-[68px] font-black leading-[1.1] tracking-tight mb-4">{content.heroTitle}</h1>
          <p className="text-xl text-slate-200 font-light max-w-2xl leading-relaxed">
            {content.heroDescription}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 bg-white dark:bg-background-dark">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 bg-primary/5 rounded-3xl mb-8">
            <span className="material-symbols-outlined text-6xl text-primary animate-pulse">memory</span>
          </div>
          <h2 className="text-3xl font-bold mb-6 dark:text-white">{content.sectionTitle}</h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-body">
            {content.sectionDescription}
          </p>
        </div>
      </section>

      {/* Detailed Technology Sections */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-surface-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold dark:text-white">핵심 혁신 기술 (Core Innovations)</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* AI Card */}
            <div className="group bg-white dark:bg-surface-dark p-10 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
              <div className="size-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">psychology</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white flex items-center gap-3">
                AI 인공지능 <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md uppercase font-black">Deep Learning</span>
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-body text-lg">
                {content.aiDescription}
              </p>
              <ul className="mt-8 space-y-3">
                {['딥러닝 기반 질병 예측 엔진', '실시간 음성 바이오마커 분석', '정밀 진단 정확도 99% 확보'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-lg">verified</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Blockchain Card */}
            <div className="group bg-white dark:bg-surface-dark p-10 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
              <div className="size-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">security</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white flex items-center gap-3">
                블록체인 <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md uppercase font-black">Integrity</span>
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-body text-lg">
                {content.blockchainDescription}
              </p>
              <ul className="mt-8 space-y-3">
                {['의료 데이터 위변조 방지 시스템', '환자 중심 데이터 주권 보장', '투명한 의료 기록 공유 체계'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-lg">verified</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom Visual */}
      <section className="py-24 bg-white dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000" alt="Tech Infrastructure" className="w-full aspect-[4/3] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent mix-blend-overlay"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">끊임없는 기술 고도화</h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-body mb-8">
              Medical Korea Systems는 현재에 안주하지 않습니다. 양자 암호화 기술을 포함한 차세대 보안 기술과 초거대 언어 모델(LLM)을 연동한 맞춤형 의료 어시스턴트 개발을 통해 글로벌 정밀 의료 시장의 표준을 만들어가고 있습니다.
            </p>
            <div className="flex items-center gap-8">
               <div className="text-center">
                 <p className="text-3xl font-black text-primary">15+</p>
                 <p className="text-xs font-bold text-slate-400 uppercase mt-1">보유 특허</p>
               </div>
               <div className="h-10 w-px bg-slate-100 dark:bg-slate-800"></div>
               <div className="text-center">
                 <p className="text-3xl font-black text-primary">24/7</p>
                 <p className="text-xs font-bold text-slate-400 uppercase mt-1">시스템 관제</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
