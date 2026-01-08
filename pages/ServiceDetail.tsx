
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

  if (!service) return null;

  const t = UI_TEXT[lang].serviceDetail;

  return (
    <div className="bg-white min-h-screen pt-32">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-white/80 backdrop-blur-xl">
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-lg rounded-[40px] shadow-2xl p-16 text-center animate-fade-up border border-slate-100">
              <h3 className="text-4xl font-black text-primary mb-6 tracking-tighter">{t.preparing}</h3>
              <p className="text-primary/40 text-sm font-light leading-relaxed mb-12">
                {t.preparingDesc}
              </p>
              <button onClick={() => setIsModalOpen(false)} className="w-full h-16 bg-primary text-white font-bold uppercase tracking-widest rounded-full hover:opacity-90 transition-all">
                {t.confirm}
              </button>
          </div>
        </div>
      )}

      {/* Main Info */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40">
        <div className="lg:col-span-7 animate-reveal-img rounded-[60px] overflow-hidden h-[600px] lg:h-[800px] bg-bg-soft">
           <img src={service.imageUrl} alt={service.name} className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="lg:col-span-5 flex flex-col justify-center animate-fade-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/20 block mb-10">{service.category}</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary mb-12 leading-[0.85]">
            {service.name}
          </h1>
          <p className="text-xl text-primary/40 font-light leading-relaxed mb-16">
            {service.description}
          </p>
          <div className="flex flex-col gap-4">
            <button onClick={() => setIsModalOpen(true)} className="h-20 bg-primary text-white font-bold uppercase tracking-[0.2em] text-[12px] rounded-full hover:opacity-90 transition-all shadow-xl shadow-black/10">
              {t.start}
            </button>
            <button className="h-20 border border-slate-100 text-primary font-bold uppercase tracking-[0.2em] text-[12px] rounded-full hover:bg-slate-50 transition-all">
              {t.brochure}
            </button>
          </div>
        </div>
      </section>

      {/* Long Desc */}
      <section className="py-40 px-6 bg-bg-soft">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-primary mb-12">{t.highlight}</h2>
            <p className="text-xl text-primary/40 font-light leading-relaxed">
              {service.longDescription}
            </p>
         </div>
      </section>

      {/* Features List */}
      <section className="py-40 px-6 max-w-5xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {service.features.map((f, i) => (
              <div key={i} className="flex items-center gap-6 p-8 bg-white border border-slate-100 rounded-[32px] premium-shadow">
                <span className="size-4 bg-accent rounded-full shrink-0"></span>
                <span className="text-lg font-bold text-primary tracking-tight">{f}</span>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
