
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
    
    // 1. Save to Local Storage for Admin
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

    // 2. Original File Download Logic
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=2070" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/75"></div>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#13a4ec 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl xl:text-[68px] font-black leading-[1.1] tracking-tight mb-6">{content.heroTitle}</h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
            {content.heroDescription}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">info</span> {lang === 'ko' ? '직접 문의' : 'Direct Contact'}
            </h2>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-3xl p-8 flex flex-col gap-6 shadow-sm">
              <div className="size-14 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{lang === 'ko' ? '공식 지원 이메일' : 'Official Support Email'}</p>
                <a href={`mailto:${content.email}`} className="text-xl md:text-2xl font-black text-slate-900 dark:text-white hover:text-primary transition-colors break-all">{content.email}</a>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                {content.emailDescription}
              </p>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(content.email);
                  alert(lang === 'ko' ? '이메일 주소가 복사되었습니다.' : 'Email address copied to clipboard.');
                }}
                className="flex items-center gap-2 w-fit h-11 px-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-lg">content_copy</span> {lang === 'ko' ? '이메일 주소 복사' : 'Copy Email Address'}
              </button>
            </div>

            <div className="relative h-60 rounded-3xl overflow-hidden shadow-sm group border border-slate-100 dark:border-slate-800">
              <img src="https://picsum.photos/seed/map/800/600" alt="Map" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <h4 className="font-bold text-sm">{content.addressTitle}</h4>
                  <p className="text-xs opacity-80 font-body mt-1">{content.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">send</span> {lang === 'ko' ? '메시지 보내기' : 'Send Message'}
            </h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-3xl p-12 text-center flex flex-col items-center animate-in zoom-in duration-300">
                <div className="size-20 bg-green-500 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="material-symbols-outlined text-4xl">check</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{lang === 'ko' ? '문의가 파일로 저장되었습니다!' : 'Inquiry saved as file!'}</h3>
                <p className="text-slate-500 dark:text-slate-400">{lang === 'ko' ? '다운로드된 파일을 확인해주세요. 담당자가 곧 연락 드리겠습니다.' : 'Please check the downloaded file. We will contact you soon.'}</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  {lang === 'ko' ? '새로운 메시지 작성' : 'Write new message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1">{content.formName}</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      placeholder={lang === 'ko' ? "성함을 입력해주세요" : "Enter your name"}
                      className="h-12 px-4 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1">{content.formEmail}</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="example@email.com"
                      className="h-12 px-4 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1">{content.formSubject}</label>
                  <input 
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    type="text" 
                    placeholder={lang === 'ko' ? "문의하시려는 핵심 내용을 입력해주세요" : "Enter the core subject of your inquiry"}
                    className="h-12 px-4 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1">{content.formContent}</label>
                  <textarea 
                    required
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    rows={6}
                    placeholder={lang === 'ko' ? "궁금하신 내용을 자세히 기재해 주세요." : "Please provide detailed information."}
                    className="p-4 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <input type="checkbox" required id="privacy" className="rounded border-slate-300 text-primary focus:ring-primary" />
                  <label htmlFor="privacy" className="text-xs text-slate-500 dark:text-slate-400">
                    {content.formPrivacy}
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="h-14 mt-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-dark hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  {content.formSubmit} <span className="material-symbols-outlined text-xl">save</span>
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
