
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Solutions: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070" 
            alt="Medical Solutions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-black mb-4">MKS 헬스 솔루션</h1>
          <p className="text-xl text-slate-200 max-w-2xl font-light">
            인공지능 기술이 집약된 차세대 의료 서비스를 통해 미래의 건강 관리를 오늘 경험해 보세요.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img src={service.imageUrl} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">{service.icon}</span>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{service.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{service.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2">{service.description}</p>
                <Link to={`/service/${service.id}`} className="inline-flex items-center text-sm font-bold text-primary hover:gap-2 transition-all">
                  상세보기 <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Solutions;
