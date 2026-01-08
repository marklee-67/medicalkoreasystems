
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getServices, getCurrentLang } from '../constants';
import { Service } from '../types';

const Solutions: React.FC = () => {
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

  const titles = {
    ko: { main: 'MKS Solutions', sub: '전문적인 관리가 필요한 모든 순간을 위한 맞춤형 헬스케어 큐레이션.', more: 'Details' },
    en: { main: 'MKS Solutions', sub: 'Customized healthcare curation for every moment that requires professional management.', more: 'Details' },
    lo: { main: 'MKS ໂຊລູຊັ່ນ', sub: 'ການຈັດການດ້ານສຸຂະພາບສ່ວນບຸກຄົນສຳລັບທຸກຊ່ວງເວລາທີ່ທ່ານຕ້ອງການຄວາມຊ່ຽວຊານ.', more: 'ລາຍລະອຽດ' },
    si: { main: 'MKS විසඳුම්', sub: 'වෘත්තීය කළමනාකරණයක් අවශ්‍ය සෑම මොහොතක් සඳහාම පුද්ගලීකරණය කළ සෞඛ්‍ය විසඳුම්.', more: 'විස්තර' }
  }[lang] || { main: 'MKS Solutions', sub: 'Customized healthcare curation...', more: 'Details' };

  return (
    <div className="bg-white min-h-screen pt-32">
      <section className="px-6 mb-24 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/20 block mb-6">Collection</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary mb-10">{titles.main}</h1>
        <p className="text-lg text-primary/40 font-light max-w-xl mx-auto leading-relaxed">
          {titles.sub}
        </p>
      </section>

      <section className="px-6 pb-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {services.map((service, idx) => (
            <Link 
              key={service.id} 
              to={`/service/${service.id}`} 
              className="group animate-fade-up opacity-0"
              style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="w-full aspect-[4/5] rounded-[40px] overflow-hidden mb-10 bg-bg-soft premium-shadow transition-all duration-500">
                <img src={service.imageUrl} alt={service.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
              </div>
              <div className="flex justify-between items-start mb-4">
                 <h3 className="text-2xl font-black tracking-tight text-primary">{service.name}</h3>
                 <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{service.category}</span>
              </div>
              <p className="text-primary/40 text-sm font-light leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-primary/10 pb-1 group-hover:border-primary transition-all">
                Learn More <span className="material-symbols-outlined text-lg">east</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Solutions;
