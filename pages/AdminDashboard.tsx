
// Add React import to resolve namespace errors for React.FC, React.FormEvent, etc.
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  getServices, saveServices, 
  getTechContent, saveTechContent, 
  getPartners, savePartners, 
  getContactContent, saveContactContent,
  getInquiries, saveInquiries
} from '../constants';
import { Service, Partner, TechContent, ContactContent, Inquiry } from '../types';

type Tab = 'solutions' | 'technology' | 'partnership' | 'contact' | 'inquiries';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('solutions');
  const [showSource, setShowSource] = useState(false);

  // Solutions State
  const [services, setServices] = useState<Service[]>([]);
  const [editingService, setEditingService] = useState<Service | null>(null);

  // Technology State
  const [techContent, setTechContent] = useState<TechContent>(getTechContent());

  // Partnership State
  const [partners, setPartners] = useState<Partner[]>([]);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);

  // Contact State
  const [contactContent, setContactContent] = useState<ContactContent>(getContactContent());

  // Inquiries State
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [viewingInquiry, setViewingInquiry] = useState<Inquiry | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('mks_admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    setServices(getServices());
    setPartners(getPartners());
    setInquiries(getInquiries());
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('mks_admin_token');
    navigate('/admin/login');
  };

  // Inquiry Handlers
  const deleteInquiry = (id: string) => {
    if (!confirm('문의 내역을 삭제하시겠습니까?')) return;
    const updated = inquiries.filter(i => i.id !== id);
    setInquiries(updated);
    saveInquiries(updated);
    if (viewingInquiry?.id === id) setViewingInquiry(null);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('소스 코드가 클립보드에 복사되었습니다.');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background-dark flex pt-24 lg:pt-28">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-surface-dark border-r border-slate-200 dark:border-slate-800 flex flex-col sticky top-24 h-[calc(100vh-6rem)]">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary font-bold">admin_panel_settings</span>
            <span className="font-black text-slate-900 dark:text-white uppercase tracking-tighter">MKS Admin</span>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto no-scrollbar">
          {[
            { id: 'solutions', name: '솔루션 관리', icon: 'apps' },
            { id: 'technology', name: '기술력 관리', icon: 'psychology' },
            { id: 'partnership', name: '파트너십 관리', icon: 'handshake' },
            { id: 'contact', name: '페이지 텍스트 관리', icon: 'edit_note' },
            { id: 'inquiries', name: '문의 내역 확인', icon: 'inbox' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
          <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            로그아웃
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto no-scrollbar">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black dark:text-white">문의 내역 관리</h1>
            <p className="text-slate-500 mt-1">사이트의 각 섹션 내용을 실시간으로 수정하고 관리하세요.</p>
          </div>
          <div className="text-xs font-bold text-slate-400 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full border border-slate-100 dark:border-slate-700">
            현재 탭: <span className="text-primary">문의 내역</span>
          </div>
        </header>

        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold dark:text-white">접수된 문의 내역 ({inquiries.length})</h2>
            
            {inquiries.length === 0 ? (
              <div className="p-20 text-center bg-white dark:bg-surface-dark rounded-3xl border border-dashed border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">mail_outline</span>
                <p className="text-slate-400 font-medium">접수된 문의가 아직 없습니다.</p>
              </div>
            ) : (
              <div className="bg-white dark:bg-surface-dark rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
                        <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">문의일자</th>
                        <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">성함/담당자</th>
                        <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">이메일</th>
                        <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">문의제목</th>
                        <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">문의내용</th>
                        <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center whitespace-nowrap">관리</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                      {inquiries.map(inq => (
                        <tr 
                          key={inq.id} 
                          onClick={() => { setViewingInquiry(inq); setShowSource(false); }}
                          className={`hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors cursor-pointer group ${viewingInquiry?.id === inq.id ? 'bg-primary/5' : ''}`}
                        >
                          <td className="px-6 py-4 text-xs font-medium text-slate-500 whitespace-nowrap">{inq.date}</td>
                          <td className="px-6 py-4 text-xs font-bold text-primary dark:text-white whitespace-nowrap">{inq.name}</td>
                          <td className="px-6 py-4 text-xs text-slate-500 truncate max-w-[150px] whitespace-nowrap">{inq.email}</td>
                          <td className="px-6 py-4 text-xs font-bold text-primary dark:text-white truncate max-w-[200px] whitespace-nowrap">{inq.subject}</td>
                          <td className="px-6 py-4 text-xs text-slate-400 truncate max-w-[300px] whitespace-nowrap">{inq.content}</td>
                          <td className="px-6 py-4 text-center whitespace-nowrap">
                            <button 
                              onClick={(e) => { e.stopPropagation(); deleteInquiry(inq.id); }}
                              className="size-8 rounded-full flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all"
                            >
                              <span className="material-symbols-outlined text-[18px]">delete</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {viewingInquiry && (
              <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-primary/20 shadow-xl animate-fade-up">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-black uppercase text-primary tracking-widest mb-1 block">문의 내역 관리 콘솔</span>
                    <h3 className="text-2xl font-bold dark:text-white">{viewingInquiry.subject}</h3>
                    <p className="text-xs text-slate-400 mt-1">{viewingInquiry.date} | {viewingInquiry.name} ({viewingInquiry.email})</p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setShowSource(!showSource)}
                      className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${showSource ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                    >
                      {showSource ? '상세 내용 보기' : 'TS 소스 코드 보기'}
                    </button>
                    <button onClick={() => setViewingInquiry(null)} className="size-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-all">
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  </div>
                </div>

                {showSource ? (
                  <div className="relative group">
                    <pre className="bg-slate-900 text-slate-300 p-6 rounded-2xl text-xs font-mono overflow-x-auto border border-slate-800 leading-relaxed max-h-[400px]">
                      {viewingInquiry.tsCode || '// 해당 항목의 소스 코드를 불러올 수 없습니다.'}
                    </pre>
                    <button 
                      onClick={() => copyToClipboard(viewingInquiry.tsCode || '')}
                      className="absolute top-4 right-4 px-3 py-1.5 bg-white/10 text-white text-[10px] font-bold rounded-md hover:bg-white/20 transition-all"
                    >
                      코드 복사
                    </button>
                  </div>
                ) : (
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 mb-8 max-h-[300px] overflow-y-auto">
                    <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed font-body text-sm">
                      {viewingInquiry.content}
                    </p>
                  </div>
                )}
                
                <div className="flex gap-4 mt-8">
                  <a 
                    href={`mailto:${viewingInquiry.email}?subject=Re: ${viewingInquiry.subject}`}
                    className="flex-1 h-14 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all"
                  >
                    <span className="material-symbols-outlined text-xl">reply</span> 답장 메일 쓰기
                  </a>
                  <button 
                    onClick={() => { deleteInquiry(viewingInquiry.id); }}
                    className="px-8 h-14 border border-red-200 text-red-500 font-bold rounded-xl hover:bg-red-50 transition-all"
                  >
                    삭제
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
