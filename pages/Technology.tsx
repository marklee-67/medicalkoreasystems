
import React from 'react';

const Technology: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
            alt="Advanced Technology" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-black mb-4">혁신 기술력</h1>
          <p className="text-xl text-slate-200 max-w-2xl font-light">
            딥러닝, 음성 인식, 그리고 데이터 분석 기술의 융합으로 정밀 의료의 한계를 넓혀갑니다.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="inline-block p-4 bg-primary/5 rounded-3xl mb-8">
          <span className="material-symbols-outlined text-6xl text-primary">psychology</span>
        </div>
        <h2 className="text-3xl font-bold mb-6 dark:text-white">데이터가 생명이 되는 기술</h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
          Medical Korea Systems는 수백만 건의 임상 데이터를 학습한 독자적인 AI 엔진을 통해 질병을 예측하고 관리합니다. 
          우리의 기술은 단순한 분석을 넘어, 사람의 생명을 구하는 결정적인 통찰을 제공하는 것을 목표로 합니다.
        </p>
      </section>
    </div>
  );
};

export default Technology;
