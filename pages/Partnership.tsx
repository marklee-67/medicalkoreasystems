
import React from 'react';
import { PARTNERS } from '../constants';

const Partnership: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1974" 
            alt="Partnership" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-black mb-4">글로벌 파트너십</h1>
          <p className="text-xl text-slate-200 max-w-2xl font-light">
            국내외 유수의 의료 기관 및 기업들과 함께 혁신적인 헬스케어 생태계를 구축하고 있습니다.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PARTNERS.map((partner) => (
            <div key={partner.id} className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm">
              <div className="w-full md:w-40 h-40 shrink-0 rounded-xl overflow-hidden bg-slate-50">
                <img src={partner.imageUrl} alt={partner.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded">{partner.type}</span>
                    <span className="text-xs text-slate-400">{partner.status}</span>
                  </div>
                  <h3 className="text-xl font-bold dark:text-white mb-2">{partner.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{partner.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-50 dark:border-slate-800">
                  <p className="text-xs font-bold text-primary mb-1">협력 범위</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{partner.scope}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Partnership;
