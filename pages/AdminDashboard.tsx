
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getServices, saveServices } from '../constants';
import { Service } from '../types';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newService, setNewService] = useState<Partial<Service>>({
    id: '',
    name: '',
    title: '',
    description: '',
    longDescription: '',
    icon: 'settings',
    imageUrl: 'https://picsum.photos/seed/mks/800/600',
    category: '기타',
    features: []
  });

  useEffect(() => {
    const token = localStorage.getItem('mks_admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    setServices(getServices());
  }, [navigate]);

  const handleDelete = (id: string) => {
    if (!confirm('정말 이 기능을 삭제하시겠습니까?')) return;
    const updated = services.filter(s => s.id !== id);
    setServices(updated);
    saveServices(updated);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newService.id || !newService.name) return;
    const updated = [...services, newService as Service];
    setServices(updated);
    saveServices(updated);
    setIsAdding(false);
    setNewService({ id: '', name: '', title: '', description: '', longDescription: '', icon: 'settings', imageUrl: 'https://picsum.photos/seed/mks/800/600', category: '기타', features: [] });
  };

  const logout = () => {
    localStorage.removeItem('mks_admin_token');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background-dark p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black dark:text-white">Admin Dashboard</h1>
            <p className="text-slate-500">MKS 시스템 기능 및 솔루션 관리</p>
          </div>
          <button onClick={logout} className="px-6 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm dark:text-white hover:bg-red-50 hover:text-red-500 transition-all">로그아웃</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* List of Services */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold dark:text-white mb-4">현재 등록된 솔루션 ({services.length})</h2>
            {services.map(service => (
              <div key={service.id} className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex justify-between items-center group">
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold dark:text-white">{service.name}</h3>
                    <p className="text-xs text-slate-400">{service.id} | {service.category}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleDelete(service.id)}
                  className="size-10 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-full flex items-center justify-center transition-all"
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            ))}
          </div>

          {/* Add Form */}
          <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-xl border border-primary/10">
            <h2 className="text-xl font-bold dark:text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">add_circle</span> 신규 솔루션 추가
            </h2>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">고유 ID (영어)</label>
                <input required type="text" value={newService.id} onChange={e => setNewService({...newService, id: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-lg text-sm dark:text-white" placeholder="예: smart-care" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">솔루션 이름</label>
                <input required type="text" value={newService.name} onChange={e => setNewService({...newService, name: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-lg text-sm dark:text-white" placeholder="예: 스마트 케어" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">핵심 제목</label>
                <input required type="text" value={newService.title} onChange={e => setNewService({...newService, title: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-lg text-sm dark:text-white" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">아이콘 (Material Name)</label>
                <input required type="text" value={newService.icon} onChange={e => setNewService({...newService, icon: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-lg text-sm dark:text-white" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">간략 설명</label>
                <textarea required rows={3} value={newService.description} onChange={e => setNewService({...newService, description: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-lg text-sm dark:text-white resize-none" />
              </div>
              <button type="submit" className="w-full h-12 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-dark transition-all mt-4">
                솔루션 등록하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
