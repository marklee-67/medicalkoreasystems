
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

  // Solutions Handlers
  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;
    let updated;
    const exists = services.find(s => s.id === editingService.id);
    if (exists) {
      updated = services.map(s => s.id === editingService.id ? editingService : s);
    } else {
      updated = [...services, editingService];
    }
    setServices(updated);
    saveServices(updated);
    setEditingService(null);
  };

  const deleteService = (id: string) => {
    if (!confirm('솔루션을 삭제하시겠습니까?')) return;
    const updated = services.filter(s => s.id !== id);
    setServices(updated);
    saveServices(updated);
  };

  // Tech Handlers
  const handleSaveTech = (e: React.FormEvent) => {
    e.preventDefault();
    saveTechContent(techContent);
    alert('기술력 정보가 저장되었습니다.');
  };

  // Partner Handlers
  const handleSavePartner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPartner) return;
    let updated;
    if (partners.find(p => p.id === editingPartner.id)) {
      updated = partners.map(p => p.id === editingPartner.id ? editingPartner : p);
    } else {
      updated = [...partners, editingPartner];
    }
    setPartners(updated);
    savePartners(updated);
    setEditingPartner(null);
  };

  const deletePartner = (id: string) => {
    if (!confirm('파트너를 삭제하시겠습니까?')) return;
    const updated = partners.filter(p => p.id !== id);
    setPartners(updated);
    savePartners(updated);
  };

  // Contact Handlers
  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    saveContactContent(contactContent);
    alert('문의하기 정보가 저장되었습니다.');
  };

  // Inquiry Handlers
  const deleteInquiry = (id: string) => {
    if (!confirm('문의 내역을 삭제하시겠습니까?')) return;
    const updated = inquiries.filter(i => i.id !== id);
    setInquiries(updated);
    saveInquiries(updated);
    if (viewingInquiry?.id === id) setViewingInquiry(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background-dark flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-surface-dark border-r border-slate-200 dark:border-slate-800 flex flex-col">
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
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto h-screen no-scrollbar">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black dark:text-white capitalize">{activeTab} Management</h1>
            <p className="text-slate-500 mt-1">사이트의 각 섹션 내용을 실시간으로 수정하고 관리하세요.</p>
          </div>
          <div className="text-xs font-bold text-slate-400 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full border border-slate-100 dark:border-slate-700">
            Current Tab: <span className="text-primary">{activeTab.toUpperCase()}</span>
          </div>
        </header>

        {/* SOLUTIONS TAB */}
        {activeTab === 'solutions' && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-xl font-bold dark:text-white">등록된 솔루션 리스트</h2>
                 <button 
                  onClick={() => setEditingService({ id: '', name: '', title: '', description: '', longDescription: '', icon: 'star', imageUrl: '', category: '', features: [] })}
                  className="px-4 py-2 bg-primary/10 text-primary text-xs font-black rounded-lg hover:bg-primary hover:text-white transition-all"
                 >
                   신규 솔루션 추가
                 </button>
              </div>
              {services.map(s => (
                <div key={s.id} className="bg-white dark:bg-surface-dark p-5 rounded-2xl border border-slate-100 dark:border-slate-800 flex justify-between items-center group shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="size-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined">{s.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm dark:text-white">{s.name}</h3>
                      <p className="text-[10px] text-slate-400 uppercase font-black">{s.id} • {s.category}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setEditingService(s)} className="size-8 rounded-full flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 transition-all"><span className="material-symbols-outlined text-sm">edit</span></button>
                    <button onClick={() => deleteService(s.id)} className="size-8 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"><span className="material-symbols-outlined text-sm">delete</span></button>
                  </div>
                </div>
              ))}
            </div>

            {editingService && (
              <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-primary/20 shadow-xl animate-in fade-in slide-in-from-right-10">
                <h3 className="text-lg font-bold mb-6 dark:text-white">솔루션 정보 편집</h3>
                <form onSubmit={handleSaveService} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input required placeholder="ID (영어)" value={editingService.id} onChange={e => setEditingService({...editingService, id: e.target.value})} className="bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-3 dark:text-white" />
                    <input required placeholder="이름" value={editingService.name} onChange={e => setEditingService({...editingService, name: e.target.value})} className="bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-3 dark:text-white" />
                  </div>
                  <input required placeholder="핵심 타이틀" value={editingService.title} onChange={e => setEditingService({...editingService, title: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-3 dark:text-white" />
                  <textarea required placeholder="설명" rows={3} value={editingService.description} onChange={e => setEditingService({...editingService, description: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-3 dark:text-white resize-none" />
                  <div className="grid grid-cols-2 gap-4">
                    <input required placeholder="카테고리" value={editingService.category} onChange={e => setEditingService({...editingService, category: e.target.value})} className="bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-3 dark:text-white" />
                    <input required placeholder="아이콘" value={editingService.icon} onChange={e => setEditingService({...editingService, icon: e.target.value})} className="bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-3 dark:text-white" />
                  </div>
                  <div className="flex gap-2">
                    <button type="submit" className="flex-1 h-12 bg-primary text-white font-bold rounded-xl shadow-lg">저장하기</button>
                    <button type="button" onClick={() => setEditingService(null)} className="px-6 h-12 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl">취소</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* TECHNOLOGY TAB */}
        {activeTab === 'technology' && (
          <div className="max-w-3xl">
            <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-bold mb-8 dark:text-white">기술력 페이지 텍스트 편집</h2>
              <form onSubmit={handleSaveTech} className="space-y-6">
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Hero 타이틀</label>
                  <input required value={techContent.heroTitle} onChange={e => setTechContent({...techContent, heroTitle: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-4 dark:text-white font-bold" />
                </div>
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Hero 설명</label>
                  <input required value={techContent.heroDescription} onChange={e => setTechContent({...techContent, heroDescription: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-4 dark:text-white" />
                </div>
                <div className="pt-4 border-t border-slate-50 dark:border-slate-800">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">섹션 타이틀</label>
                  <input required value={techContent.sectionTitle} onChange={e => setTechContent({...techContent, sectionTitle: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-4 dark:text-white font-bold" />
                </div>
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">섹션 설명</label>
                  <textarea required rows={4} value={techContent.sectionDescription} onChange={e => setTechContent({...techContent, sectionDescription: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-4 dark:text-white resize-none" />
                </div>
                <div className="pt-4 border-t border-slate-50 dark:border-slate-800">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">AI 인공지능 기술 설명</label>
                  <textarea required rows={4} value={techContent.aiDescription} onChange={e => setTechContent({...techContent, aiDescription: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-4 dark:text-white resize-none" />
                </div>
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">블록체인 기술 설명</label>
                  <textarea required rows={4} value={techContent.blockchainDescription} onChange={e => setTechContent({...techContent, blockchainDescription: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-4 dark:text-white resize-none" />
                </div>
                <button type="submit" className="h-14 w-full bg-primary text-white font-black rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.01] transition-all">기술력 정보 저장</button>
              </form>
            </div>
          </div>
        )}

        {/* PARTNERSHIP TAB */}
        {activeTab === 'partnership' && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-xl font-bold dark:text-white">글로벌 파트너 리스트</h2>
                 <button 
                  onClick={() => setEditingPartner({ id: String(Date.now()), name: '', type: 'Business', description: '', scope: '', imageUrl: '', status: '활성' })}
                  className="px-4 py-2 bg-primary/10 text-primary text-xs font-black rounded-lg hover:bg-primary hover:text-white transition-all"
                 >
                   신규 파트너 추가
                 </button>
              </div>
              {partners.map(p => (
                <div key={p.id} className="bg-white dark:bg-surface-dark p-5 rounded-2xl border border-slate-100 dark:border-slate-800 flex justify-between items-center group shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="size-12 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shrink-0">
                      <img src={p.imageUrl || 'https://picsum.photos/seed/partner/100/100'} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm dark:text-white">{p.name}</h3>
                      <p className="text-[10px] text-slate-400 uppercase font-black">{p.type} • {p.status}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setEditingPartner(p)} className="size-8 rounded-full flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 transition-all"><span className="material-symbols-outlined text-sm">edit</span></button>
                    <button onClick={() => deletePartner(p.id)} className="size-8 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"><span className="material-symbols-outlined text-sm">delete</span></button>
                  </div>
                </div>
              ))}
            </div>

            {editingPartner && (
              <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-primary/20 shadow-xl animate-in fade-in slide-in-from-right-10">
                <h3 className="text-lg font-bold mb-6 dark:text-white">파트너 정보 편집</h3>
                <form onSubmit={handleSavePartner} className="space-y-4">
                  <input required placeholder="파트너사 명칭" value={editingPartner.name} onChange={e => setEditingPartner({...editingPartner, name: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-3 dark:text-white" />
                  <select value={editingPartner.type} onChange={e => setEditingPartner({...editingPartner, type: e.target.value as any})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-3 dark:text-white">
                    <option value="Institution">의료 기관 (Institution)</option>
                    <option value="Business">일반 기업 (Business)</option>
                  </select>
                  <textarea required placeholder="설명" rows={3} value={editingPartner.description} onChange={e => setEditingPartner({...editingPartner, description: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-3 dark:text-white resize-none" />
                  <input required placeholder="협력 범위" value={editingPartner.scope} onChange={e => setEditingPartner({...editingPartner, scope: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-3 dark:text-white" />
                  <input placeholder="이미지 URL" value={editingPartner.imageUrl} onChange={e => setEditingPartner({...editingPartner, imageUrl: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-3 dark:text-white" />
                  <div className="flex gap-2">
                    <button type="submit" className="flex-1 h-12 bg-primary text-white font-bold rounded-xl shadow-lg">파트너 저장</button>
                    <button type="button" onClick={() => setEditingPartner(null)} className="px-6 h-12 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl">취소</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-3xl">
            <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-bold mb-8 dark:text-white">문의하기 페이지 정보 편집</h2>
              <form onSubmit={handleSaveContact} className="space-y-6">
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Hero 타이틀</label>
                  <input required value={contactContent.heroTitle} onChange={e => setContactContent({...contactContent, heroTitle: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-4 dark:text-white font-bold" />
                </div>
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Hero 설명</label>
                  <textarea required rows={3} value={contactContent.heroDescription} onChange={e => setContactContent({...contactContent, heroDescription: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-4 dark:text-white resize-none" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-50 dark:border-slate-800">
                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">공식 이메일</label>
                    <input required value={contactContent.email} onChange={e => setContactContent({...contactContent, email: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-4 dark:text-white" />
                  </div>
                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">이메일 설명</label>
                    <input required value={contactContent.emailDescription} onChange={e => setContactContent({...contactContent, emailDescription: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-4 dark:text-white" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">주소 타이틀 (예: 본사)</label>
                    <input required value={contactContent.addressTitle} onChange={e => setContactContent({...contactContent, addressTitle: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-4 dark:text-white" />
                  </div>
                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">상세 주소</label>
                    <input required value={contactContent.address} onChange={e => setContactContent({...contactContent, address: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm p-4 dark:text-white" />
                  </div>
                </div>
                <button type="submit" className="h-14 w-full bg-primary text-white font-black rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.01] transition-all">문의 정보 저장</button>
              </form>
            </div>
          </div>
        )}

        {/* INQUIRIES TAB */}
        {activeTab === 'inquiries' && (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
            <div className="xl:col-span-5 space-y-4">
              <h2 className="text-xl font-bold dark:text-white mb-6">접수된 문의 내역 ({inquiries.length})</h2>
              {inquiries.length === 0 ? (
                <div className="p-10 text-center bg-white dark:bg-surface-dark rounded-3xl border border-dashed border-slate-200 dark:border-slate-700">
                  <p className="text-slate-400">접수된 문의가 없습니다.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {inquiries.map(inq => (
                    <div 
                      key={inq.id} 
                      onClick={() => setViewingInquiry(inq)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer group flex justify-between items-center ${
                        viewingInquiry?.id === inq.id 
                        ? 'bg-primary/5 border-primary/30 shadow-md' 
                        : 'bg-white dark:bg-surface-dark border-slate-100 dark:border-slate-800 hover:border-primary/20 shadow-sm'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-sm dark:text-white truncate">{inq.name}</span>
                          <span className="text-[10px] text-slate-400 font-medium shrink-0">{inq.date}</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate font-body">{inq.subject}</p>
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); deleteInquiry(inq.id); }}
                        className="size-8 rounded-full flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="xl:col-span-7">
              {viewingInquiry ? (
                <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl animate-in fade-in slide-in-from-right-5 sticky top-8">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-[10px] font-black uppercase text-primary tracking-widest mb-1 block">Inquiry Detail</span>
                      <h3 className="text-2xl font-bold dark:text-white">{viewingInquiry.subject}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold dark:text-white">{viewingInquiry.name}</p>
                      <p className="text-xs text-slate-400">{viewingInquiry.email}</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 mb-8">
                    <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed font-body">
                      {viewingInquiry.content}
                    </p>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={`mailto:${viewingInquiry.email}?subject=Re: ${viewingInquiry.subject}`}
                      className="flex-1 h-14 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all"
                    >
                      <span className="material-symbols-outlined text-xl">reply</span> 답장 메일 쓰기
                    </a>
                    <button 
                      onClick={() => deleteInquiry(viewingInquiry.id)}
                      className="px-8 h-14 border border-red-200 text-red-500 font-bold rounded-xl hover:bg-red-50 transition-all"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-3xl p-20">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-6xl text-slate-200 dark:text-slate-700 mb-4">mail_outline</span>
                    <p className="text-slate-400">좌측 리스트에서 상세 내용을 확인할 문의를 선택하세요.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
