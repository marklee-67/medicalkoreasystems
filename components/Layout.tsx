
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCurrentLang, UI_TEXT, Language } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>(getCurrentLang());
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

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('mks_lang', newLang);
    window.dispatchEvent(new Event('storage_updated'));
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4 ohora-glass' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <div className="size-8 bg-primary rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 shrink-0">
            <span className="material-symbols-outlined text-lg font-bold">medical_services</span>
          </div>
          <span className="ml-3 text-xl font-black tracking-tighter text-primary whitespace-nowrap">Medical Korea Systems</span>
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-accent ${location.pathname === link.path ? 'text-primary' : 'text-primary/40'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
           <div className="relative group">
              <button className="flex items-center gap-2 text-primary/60 hover:text-primary text-[10px] font-bold tracking-widest transition-all">
                <span className="material-symbols-outlined text-lg">language</span>
                {lang.toUpperCase()}
              </button>
              <div className="absolute right-0 top-full mt-2 w-32 bg-white border border-slate-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                  {(['ko', 'en', 'lo', 'si'] as Language[]).map(l => (
                    <button 
                      key={l}
                      onClick={() => handleLanguageChange(l)}
                      className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-slate-50 ${lang === l ? 'text-accent' : 'text-primary/40'}`}
                    >
                      {l}
                    </button>
                  ))}
              </div>
           </div>
           <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary">
              <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
           </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-[90] md:hidden flex flex-col items-center justify-center p-8">
           {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-2xl font-black mb-8 hover:text-accent transition-colors uppercase tracking-tighter">
                {link.name}
              </Link>
            ))}
           <button onClick={() => setIsOpen(false)} className="mt-12 text-primary/40">
              <span className="material-symbols-outlined text-4xl">close</span>
           </button>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  const [lang, setLang] = useState(getCurrentLang());

  useEffect(() => {
    const update = () => setLang(getCurrentLang());
    window.addEventListener('storage_updated', update);
    return () => window.removeEventListener('storage_updated', update);
  }, []);

  const footerText = {
    ko: { desc: 'AI 기반 건강 관리와 글로벌 의료 컨시어지 서비스를 통해 더 건강하고 스마트한 미래를 선도합니다.', rights: '© 2024 Medical Korea Systems. All rights reserved.' },
    en: { desc: 'Leading a healthier and smarter future through AI-based healthcare and global medical concierge services.', rights: '© 2024 Medical Korea Systems. All rights reserved.' },
    lo: { desc: 'ນໍາພາອະນາຄົດທີ່ສະຫຼາດກວ່າຜ່ານການເບິ່ງແຍງສຸຂະພາບດ້ວຍ AI.', rights: '© 2024 Medical Korea Systems.' },
    si: { desc: 'AI තාක්ෂණය හරහා සෞඛ්‍ය සම්පන්න අනාගතයක් නිර්මාණය කරමු.', rights: '© 2024 Medical Korea Systems.' }
  }[lang];

  return (
    <footer className="py-24 px-6 border-t border-slate-100 bg-bg-soft">
      <div className="max-w-7xl mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <div className="size-10 bg-primary rounded-full flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined">medical_services</span>
            </div>
            <span className="text-2xl font-black tracking-tighter">Medical Korea Systems</span>
          </div>
          <p className="text-primary/50 max-w-md text-sm leading-relaxed">
            {footerText?.desc}
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-8">
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors">Terms</a>
              <Link to="/admin/login" className="text-[10px] font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors">Admin</Link>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary/20">
            {footerText?.rights}
          </p>
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
        text: newLang === 'ko' ? '무엇을 도와드릴까요?' : 'How can I help you today?' 
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
    <div className="fixed bottom-10 right-10 z-[100]">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="size-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-black/10"
        >
          <span className="material-symbols-outlined text-3xl">chat_bubble</span>
        </button>
      )}

      {isOpen && (
        <div className="w-[350px] md:w-[400px] h-[550px] bg-white rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden animate-fade-up border border-slate-100">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-primary/5 text-primary rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
              </div>
              <span className="font-bold text-xs uppercase tracking-widest text-primary/60">MKS Intelligence</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="size-8 rounded-full hover:bg-slate-50 flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 no-scrollbar">
            {chat.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-bg-soft text-primary/80 border border-slate-100'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
               <div className="flex gap-1 p-2">
                  <div className="size-1 bg-primary/20 rounded-full animate-bounce"></div>
                  <div className="size-1 bg-primary/20 rounded-full animate-bounce delay-100"></div>
                  <div className="size-1 bg-primary/20 rounded-full animate-bounce delay-200"></div>
               </div>
            )}
          </div>
          <div className="p-6 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Your message..."
              className="flex-1 bg-bg-soft border-none rounded-xl text-sm focus:ring-1 focus:ring-primary text-primary placeholder:text-primary/20 px-4 h-12"
            />
            <button onClick={handleSend} className="bg-primary text-white size-12 rounded-xl flex items-center justify-center hover:opacity-90 transition-all">
              <span className="material-symbols-outlined">north</span>
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
