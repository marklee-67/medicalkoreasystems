
import React, { useState, useEffect } from 'react';
import { getTechContent, getCurrentLang } from '../constants';
import { TechContent } from '../types';

const Technology: React.FC = () => {
  const [content, setContent] = useState<TechContent>(getTechContent());
  const [lang, setLang] = useState(getCurrentLang());

  useEffect(() => {
    const update = () => {
        setContent(getTechContent());
        setLang(getCurrentLang());
    };
    window.addEventListener('storage_updated', update);
    return () => window.removeEventListener('storage_updated', update);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32">
      {/* Hero */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
        <div className="animate-fade-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/20 block mb-8">Technical Excellence</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary mb-12 leading-[0.85]">
            {content.heroTitle.split(' ').map((w, i) => (
              <span key={i} className="block">{w}</span>
            ))}
          </h1>
          <p className="text-xl text-primary/50 font-light leading-relaxed mb-16 max-w-md">
            {content.heroDescription}
          </p>
          <div className="flex gap-16 border-t border-slate-100 pt-12">
             <div>
               <p className="text-5xl font-black text-primary mb-1 tracking-tighter">{content.stat1Value}</p>
               <p className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">{content.stat1Label}</p>
             </div>
             <div>
               <p className="text-5xl font-black text-primary mb-1 tracking-tighter">{content.stat2Value}</p>
               <p className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">{content.stat2Label}</p>
             </div>
          </div>
        </div>
        
        <div className="animate-reveal-img rounded-[60px] overflow-hidden aspect-[4/5] bg-bg-soft">
           <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" alt="Tech" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-40 px-6 bg-bg-soft text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
           <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/20 block mb-10">Philosophy</span>
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-primary mb-12 leading-none">{content.sectionTitle}</h2>
           <p className="text-lg md:text-xl text-primary/40 leading-relaxed font-light">
             {content.sectionDescription}
           </p>
        </div>
      </section>

      {/* Innovation Cards */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="group animate-fade-up">
              <div className="aspect-square rounded-[60px] bg-bg-soft overflow-hidden mb-12">
                 <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" alt="AI" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              </div>
              <h3 className="text-4xl font-black text-primary mb-6 tracking-tighter">{content.aiTitle}</h3>
              <p className="text-primary/40 leading-relaxed font-light text-lg mb-10">
                {content.aiDescription}
              </p>
              <div className="space-y-4">
                {content.aiFeatures.map(f => (
                  <div key={f} className="flex items-center gap-4 text-sm font-bold border-b border-slate-100 pb-4 last:border-0">
                    <span className="material-symbols-outlined text-accent text-lg">radio_button_checked</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="group animate-fade-up reveal-delay-2">
              <div className="aspect-square rounded-[60px] bg-bg-soft overflow-hidden mb-12">
                 <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" alt="Security" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              </div>
              <h3 className="text-4xl font-black text-primary mb-6 tracking-tighter">{content.blockchainTitle}</h3>
              <p className="text-primary/40 leading-relaxed font-light text-lg mb-10">
                {content.blockchainDescription}
              </p>
              <div className="space-y-4">
                {content.blockchainFeatures.map(f => (
                  <div key={f} className="flex items-center gap-4 text-sm font-bold border-b border-slate-100 pb-4 last:border-0">
                    <span className="material-symbols-outlined text-accent text-lg">radio_button_checked</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
