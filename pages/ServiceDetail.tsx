
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServices, getCurrentLang, UI_TEXT } from '../constants';
import { Service } from '../types';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<Service | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lang, setLang] = useState(getCurrentLang());

  useEffect(() => {
    const update = () => {
        setService(getServices().find(s => s.id === id));
        setLang(getCurrentLang());
    };
    update();
    window.addEventListener('storage_updated', update);
    return () => window.removeEventListener('storage_updated', update);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{lang === 'ko' ? '서비스를 찾을 수 없습니다.' : 'Service not found.'}</h2>
          <Link to="/" className="text-primary font-bold underline">{lang === 'ko' ? '홈으로 이동' : 'Back to Home'}</Link>
        </div>
      </div>
    );
  }

  const t = UI_TEXT[lang].serviceDetail;

  const handleStartClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col animate-in fade-in duration-500 relative">
      {/* Custom Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-white dark:bg-surface-dark w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-8 text-center">
              <div className="size-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-4xl">construction</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.preparing}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                {t.preparingDesc}
              </p>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-full h-12 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                {t.confirm}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative h-[450px] md:h-[600px] flex items-center px-6 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={service.imageUrl} alt={service.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] opacity-80">{service.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-[68px] font-black leading-[1.1] tracking-tight mb-6">{service.title}</h1>
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed mb-10">{service.description}</p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleStartClick}
                className="h-14 px-10 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/25"
              >
                {t.start}
              </button>
              <button className="h-14 px-10 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all">{t.brochure}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{t.highlight.split(',')[0]}, <br/><span className="text-primary">{t.highlight.split(',')[1]}</span></h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8">{service.longDescription}</p>
            <div className="grid grid-cols-2 gap-6">
              {service.features?.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="size-6 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
             <img src={service.imageUrl || `https://picsum.photos/seed/${service.id}-2/800/600`} alt="Feature Image" className="w-full h-full object-cover" />
             <div className="absolute top-4 right-4 bg-white/90 dark:bg-surface-dark/90 px-4 py-2 rounded-xl text-xs font-bold border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white">
                {t.certified}
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">{t.ctaTitle}</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-light">{t.ctaDesc}</p>
        <button className="h-14 px-12 bg-primary text-white font-bold rounded-xl shadow-2xl hover:bg-primary-dark transition-all">{t.demo}</button>
      </section>
    </div>
  );
};

export default ServiceDetail;
