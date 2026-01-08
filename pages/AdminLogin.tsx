
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADMIN_CONFIG } from '../config/adminConfig';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_CONFIG.username && password === ADMIN_CONFIG.password) {
      localStorage.setItem('mks_admin_token', 'logged_in');
      navigate('/admin/dashboard');
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-background-dark px-6 pt-24">
      <div className="max-w-md w-full bg-white dark:bg-surface-dark p-10 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800">
        <div className="flex flex-col items-center mb-10">
          <div className="size-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-4xl">admin_panel_settings</span>
          </div>
          <h1 className="text-2xl font-bold dark:text-white">관리자 로그인</h1>
          <p className="text-slate-400 text-sm mt-2">시스템 설정을 위해 로그인하세요</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2 ml-1">아이디</label>
            <input 
              required
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2 ml-1">비밀번호</label>
            <input 
              required
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-primary"
            />
          </div>
          {error && <p className="text-red-500 text-xs text-center font-bold">{error}</p>}
          <button type="submit" className="w-full h-14 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-dark transition-all">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
