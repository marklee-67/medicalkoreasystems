
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCurrentLang, UI_TEXT } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'ko' | 'en'>(getCurrentLang());
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navText = UI_TEXT[lang].nav;
  const navLinks = [
    { name: navText[0], path: '/solutions' },
    { name: navText[1], path: '/technology' },
    { name: navText[2], path: '/partnership' },
    { name: navText[3], path: '/contact' },
  ];

  const handleLanguageChange = (newLang: 'ko' | 'en') => {
    setLang(newLang);
    localStorage.setItem('mks_lang', newLang);
    window.dispatchEvent(new Event('storage_updated'));
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <div className="flex items-center gap-1.5 bg-primary px-3 py-1.5 rounded-xl text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
            <span className="material-symbols-outlined text-2xl font-bold">medical_services</span>
            <span className="text-xl font-black tracking-tighter leading-none">MKS</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white ml-3 hidden sm:block">
            Medical Korea Systems
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-primary'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="relative group pl-6 border-l border-slate-200 dark:border-slate-800 ml-2">
            <button className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors py-1.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-primary/20 shadow-sm">
              <span className="material-symbols-outlined text-[20px]">language</span>
              <span className="text-xs font-bold uppercase tracking-tight">{lang === 'ko' ? '한국어' : 'English'}</span>
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:rotate-180">expand_more</span>
            </button>
            
            <div className="absolute right-0 top-full mt-2 w-36 bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60] translate-y-2 group-hover:translate-y-0">
              <div className="p-1.5">
                <button 
                  onClick={() => handleLanguageChange('ko')}
                  className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl flex items-center justify-between ${lang === 'ko' ? 'text-primary bg-primary/5' : 'text-slate-600 dark:text-slate-300'}`}
                >
                  한국어
                  {lang === 'ko' && <span className="material-symbols-outlined text-[16px]">check</span>}
                </button>
                <button 
                  onClick={() => handleLanguageChange('en')}
                  className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl flex items-center justify-between ${lang === 'en' ? 'text-primary bg-primary/5' : 'text-slate-600 dark:text-slate-300'}`}
                >
                  English
                  {lang === 'en' && <span className="material-symbols-outlined text-[16px]">check</span>}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => handleLanguageChange(lang === 'ko' ? 'en' : 'ko')}
            className="flex items-center gap-1.5 text-[10px] font-black text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700"
          >
            <span className="material-symbols-outlined text-[16px]">language</span>
            {lang === 'ko' ? '한국어' : 'ENGLISH'}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300 p-2">
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 px-6 py-6 flex flex-col gap-5 animate-in slide-in-from-top duration-300 shadow-xl">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`text-lg font-bold ${location.pathname === link.path ? 'text-primary' : 'dark:text-white'}`}>
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{lang === 'ko' ? '언어 선택' : 'Select Language'}</span>
            <div className="flex gap-2">
              <button 
                onClick={() => handleLanguageChange('ko')} 
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all border ${lang === 'ko' ? 'bg-primary text-white border-primary' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700'}`}
              >
                한국어
              </button>
              <button 
                onClick={() => handleLanguageChange('en')} 
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all border ${lang === 'en' ? 'bg-primary text-white border-primary' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Footer remains as provided, using dynamic getters from constants.tsx
const Footer: React.FC = () => {
  const [dynamicServices, setDynamicServices] = useState([]);
  const [lang, setLang] = useState(getCurrentLang());

  useEffect(() => {
    const update = () => {
      import('../constants').then(m => {
        setDynamicServices(m.getServices());
        setLang(m.getCurrentLang());
      });
    };
    update();
    window.addEventListener('storage_updated', update);
    return () => window.removeEventListener('storage_updated', update);
  }, []);

  const footerText = {
    ko: { desc: 'AI 기반 건강 관리와 글로벌 의료 컨시어지 서비스를 통해 더 건강하고 스마트한 미래를 선도합니다.', intro: '회사 소개', sol: '솔루션', rights: '© 2024 Medical Korea Systems. All rights reserved.', privacy: '개인정보처리방침', terms: '이용약관', admin: '관리자 모드' },
    en: { desc: 'Leading a healthier and smarter future through AI-based healthcare and global medical concierge services.', intro: 'About', sol: 'Solutions', rights: '© 2024 Medical Korea Systems. All rights reserved.', privacy: 'Privacy Policy', terms: 'Terms of Use', admin: 'Admin Mode' }
  }[lang];

  return (
    <footer className="bg-white dark:bg-surface-dark border-t border-slate-100 dark:border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white">
            <div className="flex items-center gap-1.5 bg-primary px-3 py-1.5 rounded-xl text-white shadow-sm">
              <span className="material-symbols-outlined text-xl font-bold">medical_services</span>
              <span className="text-lg font-black tracking-tighter leading-none">MKS</span>
            </div>
            <span className="text-xl font-bold">Medical Korea Systems</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8 font-body leading-relaxed">
            {footerText.desc}
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-transparent flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary hover:border-primary/30 transition-all"><span className="material-symbols-outlined text-xl">public</span></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-transparent flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary hover:border-primary/30 transition-all"><span className="material-symbols-outlined text-xl">alternate_email</span></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 text-slate-900 dark:text-white">{footerText.intro}</h4>
          <ul className="flex flex-col gap-4 text-slate-500 dark:text-slate-400 text-sm font-body">
            <li><Link to="/about" className="hover:text-primary transition-colors">{lang === 'ko' ? '회사 개요' : 'Overview'}</Link></li>
            <li><Link to="/admin/login" className="hover:text-primary transition-colors flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">admin_panel_settings</span> {footerText.admin}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 text-slate-900 dark:text-white">{footerText.sol}</h4>
          <ul className="flex flex-col gap-4 text-slate-500 dark:text-slate-400 text-sm font-body">
            {dynamicServices.map(s => (
              <li key={s.id}><Link to={`/service/${s.id}`} className="hover:text-primary transition-colors">{s.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
        <p>{footerText.rights}</p>
        <div className="flex gap-8 items-center">
          <a href="#" className="hover:text-primary transition-colors">{footerText.privacy}</a>
          <a href="#" className="hover:text-primary transition-colors">{footerText.terms}</a>
        </div>
      </div>
    </footer>
  );
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [lang, setLang] = useState(getCurrentLang());
  const [chat, setChat] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const updateLang = () => {
      const newLang = getCurrentLang();
      setLang(newLang);
      setChat([{ 
        role: 'model', 
        text: newLang === 'ko' 
          ? '안녕하세요! MKS AI 어시스턴트입니다. 저희의 건강 솔루션에 대해 궁금한 점이 있으신가요?' 
          : 'Hello! I am the MKS AI Assistant. How can I help you with our health solutions today?' 
      }]);
    };
    updateLang();
    window.addEventListener('storage_updated', updateLang);
    return () => window.removeEventListener('storage_updated', updateLang);
  }, []);

  const handleSend = async () => {
    if (!message.trim() || loading) return;
    const userMsg = message;
    setMessage('');
    setChat(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const { gemini } = await import('../services/geminiService');
    const response = await gemini.chat(userMsg, chat.map(c => ({ role: c.role, parts: [{ text: c.text }] })), lang);
    
    setChat(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="size-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-bounce"
        >
          <span className="material-symbols-outlined text-2xl">chat</span>
        </button>
      )}

      {isOpen && (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-surface-dark rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10">
          <div className="p-4 bg-primary text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">support_agent</span>
              <span className="font-bold">{lang === 'ko' ? 'MKS AI 고객지원' : 'MKS AI Support'}</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 no-scrollbar">
            {chat.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-2xl text-sm flex gap-1">
                   <div className="size-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                   <div className="size-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                   <div className="size-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-2">
            <input 
              type="text" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={lang === 'ko' ? 'MKS에 대해 무엇이든 물어보세요...' : 'Ask anything about MKS...'}
              className="flex-1 bg-slate-50 dark:bg-slate-900 border-none rounded-lg text-sm focus:ring-1 focus:ring-primary dark:text-white"
            />
            <button onClick={handleSend} className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition-colors">
              <span className="material-symbols-outlined text-xl">send</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Layout;
