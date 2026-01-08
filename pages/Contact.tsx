
import React, { useState, useEffect } from 'react';
import { getContactContent, getInquiries, saveInquiries, getCurrentLang } from '../constants';
import { ContactContent, Inquiry } from '../types';

const Contact: React.FC = () => {
  const [content, setContent] = useState<ContactContent>(getContactContent());
  const [lang, setLang] = useState(getCurrentLang());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    content: ''
  });

  useEffect(() => {
    const update = () => {
        setContent(getContactContent());
        setLang(getCurrentLang());
    };
    window.addEventListener('storage_updated', update);
    return () => window.removeEventListener('storage_updated', update);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString();
    
    const newInquiry: Inquiry = {
      id: String(Date.now()),
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      content: formData.content,
      date: timestamp
    };
    const currentInquiries = getInquiries();
    saveInquiries([newInquiry, ...currentInquiries]);

    const fileContent = `
[Medical Korea Systems - ${lang === 'ko' ? '문의 접수 내역' : 'Inquiry Details'}]
${lang === 'ko' ? '접수 일시' : 'Date'}: ${timestamp}
---------------------------------------
${content.formName}: ${formData.name}
${content.formEmail}: ${formData.email}
${content.formSubject}: ${formData.subject}

${content.formContent}:
${formData.content}
---------------------------------------
    `.trim();

    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const fileName = `MKS_Inquiry_${formData.name}_${new Date().toISOString().split('T')[0]}.txt`;
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', content: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen pt-32">
      {/* Hero Section - Split Layout matched with Partnership page */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
        <div className="animate-fade-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/20 block mb-8">Support & Connect</span>
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
               <p className="text-5xl font-black text-primary mb-1 tracking-tighter">4h</p>
               <p className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">{lang === 'ko' ? '평균 응답 시간' : 'Avg. Response'}</p>
             </div>
             <div>
               <p className="text-5xl font-black text-primary mb-1 tracking-tighter">24/7</p>
               <p className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">{lang === 'ko' ? '글로벌 접수' : 'Global Reception'}</p>
             </div>
          </div>
        </div>

        <div className="animate-reveal-img rounded-[60px] overflow-hidden aspect-[4/5] bg-bg-soft">
           <img 
            src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=1200" 
            alt="Customer Support" 
            className="w-full h-full object-cover grayscale" 
           />
        </div>
      </section>

      {/* Communication Philosophy */}
      <section className="py-40 px-6 bg-bg-soft text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
           <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/20 block mb-10">Philosophy</span>
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-primary mb-12 leading-none">
             {lang === 'ko' ? '경청이 시작하는 혁신' : 'Innovation Starts with Listening'}
           </h2>
           <p className="text-lg md:text-xl text-primary/40 leading-relaxed font-light">
             {lang === 'ko' 
               ? '사용자의 목소리는 MKS AI를 더욱 정교하게 만드는 핵심 데이터입니다. 사소한 의견이라도 정성을 다해 듣고 서비스에 반영하겠습니다.' 
               : "Your voice is the key data that makes MKS AI even more sophisticated. We listen to every detail and reflect it in our service."}
           </p>
        </div>
      </section>

      {/* Contact Channels Grid */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Direct Info Block */}
          <div className="animate-fade-up">
            <h3 className="text-4xl font-black text-primary mb-10 tracking-tighter">{lang === 'ko' ? '직접 문의' : 'Direct Channels'}</h3>
            
            <div className="space-y-12">
               <div className="group">
                  <p className="text-[10px] font-bold text-primary/20 uppercase tracking-[0.4em] mb-4">Official Email</p>
                  <a href={`mailto:${content.email}`} className="text-3xl font-black text-primary hover:text-accent transition-colors break-all">
                    {content.email}
                  </a>
                  <p className="text-primary/40 text-sm mt-4 font-light leading-relaxed">
                    {content.emailDescription}
                  </p>
               </div>

               <div className="pt-12 border-t border-slate-100">
                  <p className="text-[10px] font-bold text-primary/20 uppercase tracking-[0.4em] mb-6">{content.addressTitle}</p>
                  <p className="text-2xl font-bold text-primary mb-8 tracking-tight leading-snug">
                    {content.address}
                  </p>
                  <div className="aspect-video rounded-[40px] overflow-hidden bg-bg-soft premium-shadow">
                    <img src="https://picsum.photos/seed/map/1200/600" alt="Map" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-opacity duration-700" />
                  </div>
               </div>
            </div>
          </div>

          {/* Form Block */}
          <div className="animate-fade-up reveal-delay-1">
            <h3 className="text-4xl font-black text-primary mb-10 tracking-tighter">{lang === 'ko' ? '상담 메시지' : 'Message Us'}</h3>
            
            {isSubmitted ? (
              <div className="aspect-[4/5] bg-bg-soft rounded-[60px] flex flex-col items-center justify-center text-center p-12 premium-shadow">
                <div className="size-24 bg-primary text-white rounded-full flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-5xl">check</span>
                </div>
                <h4 className="text-3xl font-black text-primary mb-4">{lang === 'ko' ? '감사합니다' : 'Thank You'}</h4>
                <p className="text-primary/40 font-light mb-12 leading-relaxed">
                  {lang === 'ko' ? '문의 내용이 성공적으로 접수되었습니다. 곧 연락 드리겠습니다.' : 'Your message has been received. We will contact you shortly.'}
                </p>
                <button onClick={() => setIsSubmitted(false)} className="text-[11px] font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-primary/30 uppercase tracking-widest ml-1">{content.formName}</label>
                    <input 
                      required name="name" value={formData.name} onChange={handleChange}
                      className="w-full h-16 px-6 bg-bg-soft border-none rounded-3xl text-sm focus:ring-1 focus:ring-primary text-primary placeholder:text-primary/20"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-primary/30 uppercase tracking-widest ml-1">{content.formEmail}</label>
                    <input 
                      required name="email" value={formData.email} onChange={handleChange} type="email"
                      className="w-full h-16 px-6 bg-bg-soft border-none rounded-3xl text-sm focus:ring-1 focus:ring-primary text-primary placeholder:text-primary/20"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-primary/30 uppercase tracking-widest ml-1">{content.formSubject}</label>
                  <input 
                    required name="subject" value={formData.subject} onChange={handleChange}
                    className="w-full h-16 px-6 bg-bg-soft border-none rounded-3xl text-sm focus:ring-1 focus:ring-primary text-primary placeholder:text-primary/20"
                    placeholder="Subject of your inquiry"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-primary/30 uppercase tracking-widest ml-1">{content.formContent}</label>
                  <textarea 
                    required name="content" value={formData.content} onChange={handleChange} rows={6}
                    className="w-full p-6 bg-bg-soft border-none rounded-[32px] text-sm focus:ring-1 focus:ring-primary text-primary placeholder:text-primary/20 resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="flex items-center gap-4 pt-4">
                   <input type="checkbox" required id="privacy" className="size-5 rounded-lg border-slate-200 text-primary focus:ring-primary" />
                   <label htmlFor="privacy" className="text-[11px] font-bold text-primary/30 uppercase tracking-widest cursor-pointer">
                      {content.formPrivacy}
                   </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full h-20 bg-primary text-white font-bold uppercase tracking-[0.2em] text-[12px] rounded-full shadow-2xl shadow-black/10 hover:opacity-90 transition-all flex items-center justify-center gap-3"
                >
                  {content.formSubmit} <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
