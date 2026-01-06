
import { Service, FAQ, Partner, TechContent, ContactContent, Inquiry } from './types';
import { KO_SERVICES, KO_TECH, KO_PARTNERS, KO_CONTACT } from './translations_ko';
import { EN_SERVICES, EN_TECH, EN_PARTNERS, EN_CONTACT } from './translations_en';

export const getCurrentLang = (): 'ko' | 'en' => {
  return (localStorage.getItem('mks_lang') as 'ko' | 'en') || 'ko';
};

// Services
export const getServices = (): Service[] => {
  const lang = getCurrentLang();
  const saved = localStorage.getItem(`mks_services_${lang}`);
  if (saved) return JSON.parse(saved);
  return lang === 'ko' ? KO_SERVICES : EN_SERVICES;
};

export const saveServices = (services: Service[]) => {
  const lang = getCurrentLang();
  localStorage.setItem(`mks_services_${lang}`, JSON.stringify(services));
  window.dispatchEvent(new Event('storage_updated'));
};

// Tech Content
export const getTechContent = (): TechContent => {
  const lang = getCurrentLang();
  const saved = localStorage.getItem(`mks_tech_content_${lang}`);
  if (saved) return JSON.parse(saved);
  return lang === 'ko' ? KO_TECH : EN_TECH;
};

export const saveTechContent = (content: TechContent) => {
  const lang = getCurrentLang();
  localStorage.setItem(`mks_tech_content_${lang}`, JSON.stringify(content));
  window.dispatchEvent(new Event('storage_updated'));
};

// Partners
export const getPartners = (): Partner[] => {
  const lang = getCurrentLang();
  const saved = localStorage.getItem(`mks_partners_${lang}`);
  if (saved) return JSON.parse(saved);
  return lang === 'ko' ? KO_PARTNERS : EN_PARTNERS;
};

export const savePartners = (partners: Partner[]) => {
  const lang = getCurrentLang();
  localStorage.setItem(`mks_partners_${lang}`, JSON.stringify(partners));
  window.dispatchEvent(new Event('storage_updated'));
};

// Contact Content
export const getContactContent = (): ContactContent => {
  const lang = getCurrentLang();
  const saved = localStorage.getItem(`mks_contact_content_${lang}`);
  if (saved) return JSON.parse(saved);
  return lang === 'ko' ? KO_CONTACT : EN_CONTACT;
};

export const saveContactContent = (content: ContactContent) => {
  const lang = getCurrentLang();
  localStorage.setItem(`mks_contact_content_${lang}`, JSON.stringify(content));
  window.dispatchEvent(new Event('storage_updated'));
};

// Inquiries
export const getInquiries = (): Inquiry[] => {
  const saved = localStorage.getItem('mks_inquiries');
  return saved ? JSON.parse(saved) : [];
};

export const saveInquiries = (inquiries: Inquiry[]) => {
  localStorage.setItem('mks_inquiries', JSON.stringify(inquiries));
  window.dispatchEvent(new Event('storage_updated'));
};

export const SERVICES: Service[] = getServices();

export const FAQS: FAQ[] = [
  {
    category: 'Q-health',
    question: 'How does the personalization algorithm work?',
    answer: 'Our AI analyzes over 50 biomarkers from initial screening along with lifestyle data to provide optimized health recommendations based on global medical databases.'
  }
];

export const UI_TEXT = {
  ko: {
    heroSub: '미래 헬스케어의 새로운 기준',
    heroMain: 'AI가 설계하는 맞춤형 건강 솔루션',
    heroDesc: '당신만을 위한 맞춤형 건강 관리, AI가 함께합니다. Medical Korea Systems는 의료 전문 지식과 인공지능 기술의 결합을 통해 새로운 건강 관리 경험을 제공합니다.',
    btnSolutions: '솔루션 보기',
    btnConsult: '상담 문의하기',
    stats: [
      { title: '99% 정확도', desc: '고도화된 머신러닝 모델을 통한 정밀 진단 시스템을 제공합니다.' },
      { title: '24/7 모니터링', desc: '클라우드 시스템을 통해 언제 어디서나 건강 상태를 추적합니다.' },
      { title: '개인 맞춤형 플랜', desc: '개별 생체 지표에 최적화된 맞춤형 건강 전략을 설계합니다.' },
    ],
    sectionEco: '에코시스템',
    sectionEcoTitle: '핵심 헬스케어 솔루션',
    sectionEcoDesc: 'MKS의 통합 AI 서비스가 현대 의료 케어를 어떻게 재정의하는지 확인해 보세요.',
    learnMore: '자세히 보기',
    nav: ['솔루션', '기술력', '파트너십', '문의하기'],
    serviceDetail: {
        preparing: '서비스 준비 중',
        preparingDesc: '현재 해당 솔루션의 고도화 작업이 진행 중입니다. 빠른 시일 내에 찾아뵙겠습니다.',
        confirm: '확인',
        start: '시작하기',
        brochure: '브로슈어 다운로드',
        highlight: '최고 수준의 헬스케어, 당신만을 위한 맞춤 서비스',
        certified: '인증된 AI 분석 시스템',
        ctaTitle: '미래의 헬스케어를 경험할 준비가 되셨나요?',
        ctaDesc: '이미 수많은 사용자가 MKS의 AI 솔루션을 통해 자신의 건강을 스마트하게 관리하고 있습니다.',
        demo: '데모 세션 요청하기'
    }
  },
  en: {
    heroSub: 'The New Standard for Future Healthcare',
    heroMain: 'AI-Designed Personalized Health Solutions',
    heroDesc: 'AI is with you for personalized health management. Medical Korea Systems provides a new health experience by combining medical expertise and AI technology.',
    btnSolutions: 'View Solutions',
    btnConsult: 'Get Consulting',
    stats: [
      { title: '99% Accuracy', desc: 'We provide precision diagnostic systems through advanced ML models.' },
      { title: '24/7 Monitoring', desc: 'Track your health status anytime, anywhere via cloud systems.' },
      { title: 'Personalized Plans', desc: 'Design customized health strategies optimized for individual metrics.' },
    ],
    sectionEco: 'Ecosystem',
    sectionEcoTitle: 'Core Healthcare Solutions',
    sectionEcoDesc: 'See how MKS integrated AI services redefine modern medical care.',
    learnMore: 'Learn More',
    nav: ['Solutions', 'Technology', 'Partnership', 'Contact'],
    serviceDetail: {
        preparing: 'Service in Progress',
        preparingDesc: 'We are currently upgrading this solution. We will be back soon.',
        confirm: 'Confirm',
        start: 'Get Started',
        brochure: 'Download Brochure',
        highlight: 'Top-tier healthcare, personalized service just for you',
        certified: 'Certified AI Analysis System',
        ctaTitle: 'Ready to experience the future of healthcare?',
        ctaDesc: 'Countless users are already managing their health smartly with MKS AI solutions.',
        demo: 'Request Demo Session'
    }
  }
};
