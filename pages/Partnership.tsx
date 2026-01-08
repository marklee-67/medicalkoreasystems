
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPartners, getCurrentLang, UI_TEXT } from '../constants';
import { Partner } from '../types';

const Partnership: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [lang, setLang] = useState(getCurrentLang());

  useEffect(() => {
    const update = () => {
      setPartners(getPartners());
      setLang(getCurrentLang());
    };
    update();
    window.addEventListener('storage_updated', update);
    return () => window.removeEventListener('storage_updated', update);
  }, []);

  const t = UI_TEXT[lang].partnership;

  const getPartnerTypeLabel = (type: string) => {
    if (type === 'Institution') return t.typeInst;
    if (type === 'Business') return t.typeBiz;
    return type;
  };

  const getPartnerStatusLabel = (status: string | undefined) => {
    if (!status) return '';
    // 만약 데이터에 "활성 파트너" 또는 "Active Partner" 등이 들어있으면 변환
    if (status.toLowerCase().includes('active') || status.includes('활성')) return t.statusActive;
    return status;
  };

  return (
    <div className="bg-white min-h-screen pt-32">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
        <div className="animate-fade-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/20 block mb-8">Global Ecosystem</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary mb-12 leading-[0.85]">
            {t.title.split(' ').map((w, i) => (
              <span key={i} className="block">{w}</span>
            ))}
          </h1>
          <p className="text-xl text-primary/50 font-light leading-relaxed mb-16 max-w-md">
            {t.desc}
          </p>
          <div className="flex gap-16 border-t border-slate-100 pt-12">
             <div>
               <p className="text-5xl font-black text-primary mb-1 tracking-tighter">{partners.length}+</p>
               <p className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">{lang === 'ko' ? '글로벌 파트너' : lang === 'si' ? 'ගෝලීය හවුල්කරුවන්' : lang === 'lo' ? 'ຄູ່ຮ່ວມງານທົ່ວໂລກ' : 'Global Partners'}</p>
             </div>
             <div>
               <p className="text-5xl font-black text-primary mb-1 tracking-tighter">5+</p>
               <p className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">{lang === 'ko' ? '협력 국가' : lang === 'si' ? 'හවුල්කාර රටවල්' : lang === 'lo' ? 'ປະເທດຄູ່ຮ່ວມງານ' : 'Partner Countries'}</p>
             </div>
          </div>
        </div>
        
        <div className="animate-reveal-img rounded-[60px] overflow-hidden aspect-[4/5] bg-bg-soft">
           <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" 
            alt="Partnership Hero" 
            className="w-full h-full object-cover grayscale" 
           />
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-40 px-6 bg-bg-soft text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
           <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/20 block mb-10">Our Vision</span>
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-primary mb-12 leading-none">
             {t.visionTitle}
           </h2>
           <p className="text-lg md:text-xl text-primary/40 leading-relaxed font-light">
             {t.visionDesc}
           </p>
        </div>
      </section>

      {/* Partners Grid - Technology Card Style */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {partners.map((partner, idx) => (
            <div 
              key={partner.id} 
              className={`group animate-fade-up opacity-0`}
              style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: 'forwards' }}
            >
              {partner.imageUrl && (
                <div className="aspect-square rounded-[60px] bg-bg-soft overflow-hidden mb-12 premium-shadow transition-all duration-500">
                   <img 
                    src={partner.imageUrl} 
                    alt={partner.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                   />
                </div>
              )}
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">{getPartnerTypeLabel(partner.type)}</span>
                    <h3 className="text-4xl font-black text-primary tracking-tighter">{partner.name}</h3>
                 </div>
                 <span className="text-[10px] px-3 py-1 border border-slate-100 rounded-full text-primary/30 font-bold uppercase tracking-widest">
                    {getPartnerStatusLabel(partner.status)}
                 </span>
              </div>
              <p className="text-primary/40 leading-relaxed font-light text-lg mb-10">
                {partner.description}
              </p>
              <div className="pt-8 border-t border-slate-100">
                <p className="text-[10px] font-bold text-primary/20 uppercase tracking-[0.3em] mb-4">{t.scope}</p>
                <div className="flex items-center gap-4 text-sm font-bold text-primary/80">
                  <span className="material-symbols-outlined text-accent text-lg">handshake</span>
                  {partner.scope}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA for Partners */}
      <section className="py-40 px-6 text-center border-t border-slate-50">
         <div className="max-w-4xl mx-auto animate-fade-up">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-primary mb-12">
              {lang === 'ko' ? '새로운 혁신 파트너를 찾습니다' : lang === 'si' ? 'අපි නව නවෝත්පාදන හවුල්කරුවන් සොයමු' : lang === 'lo' ? 'ພວກເຮົາກຳລັງຊອກຫາຄູ່ຮ່ວມງານນະວັດຕະກໍາໃໝ່' : 'Join Our Global Network'}
            </h2>
            <p className="text-xl text-primary/40 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              {lang === 'ko' 
                ? '의료 서비스의 디지털 전환을 함께 이끌어갈 병원 및 기업의 참여를 기다립니다.' 
                : lang === 'si' ? 'වෛද්‍ය සේවාවල ඩිජිටල් පරිවර්තනය මෙහෙයවීමට රෝහල් සහ සමාගම්වල සහභාගීත්වය අපි බලාපොරොත්තු වෙමු.' : lang === 'lo' ? 'ພວກເຮົາລໍຖ້າການມີສ່ວນຮ່ວມຂອງໂຮງໝໍ ແລະ ບໍລິສັດທີ່ຈະຮ່ວມກັນນຳພາການຫັນເປັນດິຈິຕອນຂອງການບໍລິການທາງການແພດ.' : 'We invite hospitals and companies to join us in leading the digital transformation of medical services.'}
            </p>
            <Link to="/contact" className="inline-flex h-20 px-16 bg-primary text-white font-bold uppercase tracking-[0.2em] text-[12px] rounded-full shadow-2xl shadow-black/10 hover:opacity-90 transition-all items-center justify-center">
              {lang === 'ko' ? '파트너십 제안하기' : lang === 'si' ? 'හවුල්කාරිත්වය යෝජනා කරන්න' : lang === 'lo' ? 'ສະເໜີການຮ່ວມມື' : 'Propose Partnership'}
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Partnership;
