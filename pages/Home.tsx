
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getServices, getCurrentLang, UI_TEXT } from '../constants';
import { Service } from '../types';

const Home: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [lang, setLang] = useState(getCurrentLang());

  useEffect(() => {
    const update = () => {
      setServices(getServices());
      setLang(getCurrentLang());
    };
    update();
    window.addEventListener('storage_updated', update);
    return () => window.removeEventListener('storage_updated', update);
  }, []);

  const t = UI_TEXT[lang];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24">
          <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-up">
            <span className="text-primary/40 font-bold uppercase tracking-[0.4em] text-[10px] block mb-6">{t.heroSub}</span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-primary mb-12">
              {t.heroMain.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            <p className="text-lg text-primary/50 leading-relaxed mb-16 max-w-lg mx-auto lg:mx-0 font-light">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/solutions" className="h-16 px-12 bg-primary text-white font-bold uppercase tracking-[0.2em] text-[11px] rounded-full flex items-center justify-center hover:opacity-90 transition-all">
                {t.btnSolutions}
              </Link>
              <Link to="/contact" className="h-16 px-12 border border-slate-200 text-primary font-bold uppercase tracking-[0.2em] text-[11px] rounded-full flex items-center justify-center hover:bg-slate-50 transition-all">
                {t.btnConsult}
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-reveal-img overflow-hidden rounded-[60px] aspect-[4/5] lg:aspect-auto h-[500px] lg:h-[800px]">
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200" 
              alt="Medical Tech" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
            />
          </div>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-40 px-6 text-center bg-bg-soft">
         <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-6xl text-primary leading-tight italic">
              "Redefining healthcare through the elegance of <span className="font-bold not-italic">advanced intelligence</span> and personalized care."
            </h2>
         </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <span className="text-primary/20 font-bold uppercase tracking-[0.6em] text-[10px] block mb-4">Discovery</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-primary">{t.sectionEcoTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.slice(0, 3).map((service, idx) => (
              <Link key={service.id} to={`/service/${service.id}`} className="group flex flex-col items-center text-center animate-fade-up opacity-0" style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: 'forwards' }}>
                <div className="w-full aspect-[4/5] rounded-[40px] overflow-hidden mb-10 bg-bg-soft">
                   <img src={service.imageUrl} alt={service.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/30 mb-4">{service.category}</span>
                <h3 className="text-3xl font-black tracking-tighter text-primary mb-4">{service.name}</h3>
                <p className="text-primary/40 text-sm font-light max-w-xs mb-8">
                  {service.description}
                </p>
                <div className="text-[10px] font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 group-hover:border-primary transition-all">
                  Shop Solution
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Table */}
      <section className="py-32 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:divide-x divide-slate-100">
            {t.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start md:pl-16 first:md:pl-0">
                 <span className="text-5xl font-black text-primary mb-4 tracking-tighter">{stat.title.split(' ')[0]}</span>
                 <p className="text-[11px] font-bold uppercase tracking-widest text-accent mb-6">{stat.title.split(' ').slice(1).join(' ')}</p>
                 <p className="text-primary/40 text-sm leading-relaxed font-light">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
