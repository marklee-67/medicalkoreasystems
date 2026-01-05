
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '솔루션', path: '/solutions' },
    { name: '기술력', path: '/technology' },
    { name: '파트너십', path: '/partnership' },
    { name: '고객지원', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">medical_services</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Medical Korea Systems</h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
          <button className="h-10 px-5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105">
            로그인
          </button>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-600 dark:text-slate-300 p-2">
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="text-lg font-medium dark:text-white hover:text-primary">
              {link.name}
            </Link>
          ))}
          <button className="w-full h-12 bg-primary text-white font-bold rounded-lg mt-2">로그인</button>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-primary text-2xl">medical_services</span>
          <span className="text-lg font-bold">Medical Korea Systems</span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
          AI 기반 건강 관리와 글로벌 의료 컨시어지 서비스를 통해 더 건강하고 스마트한 미래를 선도합니다.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">public</span></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">alternate_email</span></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">chat</span></a>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-6">회사 소개</h4>
        <ul className="flex flex-col gap-3 text-slate-500 dark:text-slate-400 text-sm">
          <li><Link to="/about" className="hover:text-primary">회사 개요</Link></li>
          <li><a href="#" className="hover:text-primary">인재 채용</a></li>
          <li><Link to="/partnership" className="hover:text-primary">파트너 현황</Link></li>
          <li><a href="#" className="hover:text-primary">보도 자료</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-6">솔루션</h4>
        <ul className="flex flex-col gap-3 text-slate-500 dark:text-slate-400 text-sm">
          <li><Link to="/service/q-health" className="hover:text-primary">Q-health</Link></li>
          <li><Link to="/service/nutricheck" className="hover:text-primary">NutriCheck</Link></li>
          <li><Link to="/service/hellios" className="hover:text-primary">HELLIOS</Link></li>
          <li><Link to="/service/medi-bar" className="hover:text-primary">Medi-Bar</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
      <p>© 2024 Medical Korea Systems. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-primary">개인정보처리방침</a>
        <a href="#" className="hover:text-primary">이용약관</a>
      </div>
    </div>
  </footer>
);

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: '안녕하세요! MKS AI 어시스턴트입니다. 저희의 건강 솔루션에 대해 궁금한 점이 있으신가요?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim() || loading) return;
    const userMsg = message;
    setMessage('');
    setChat(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const { gemini } = await import('../services/geminiService');
    const response = await gemini.chat(userMsg, chat.map(c => ({ role: c.role, parts: [{ text: c.text }] })));
    
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
              <span className="font-bold">MKS AI 고객지원</span>
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
              placeholder="MKS에 대해 무엇이든 물어보세요..."
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
