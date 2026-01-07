
import { Service, FAQ, Partner, TechContent, ContactContent, Inquiry } from './types';
import { KO_SERVICES, KO_TECH, KO_PARTNERS, KO_CONTACT } from './translations_ko';
import { EN_SERVICES, EN_TECH, EN_PARTNERS, EN_CONTACT } from './translations_en';
import { LO_SERVICES, LO_TECH, LO_CONTACT, LO_PARTNERS } from './translations_lo';
import { SI_SERVICES, SI_TECH, SI_CONTACT, SI_PARTNERS } from './translations_si';

export type Language = 'ko' | 'en' | 'lo' | 'si';

export const getCurrentLang = (): Language => {
  return (localStorage.getItem('mks_lang') as Language) || 'ko';
};

// Services
export const getServices = (): Service[] => {
  const lang = getCurrentLang();
  const saved = localStorage.getItem(`mks_services_${lang}`);
  if (saved) return JSON.parse(saved);
  switch (lang) {
    case 'lo': return LO_SERVICES;
    case 'si': return SI_SERVICES;
    case 'en': return EN_SERVICES;
    default: return KO_SERVICES;
  }
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
  switch (lang) {
    case 'lo': return LO_TECH;
    case 'si': return SI_TECH;
    case 'en': return EN_TECH;
    default: return KO_TECH;
  }
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
  switch (lang) {
    case 'lo': return LO_PARTNERS;
    case 'si': return SI_PARTNERS;
    case 'en': return EN_PARTNERS;
    default: return KO_PARTNERS;
  }
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
  switch (lang) {
    case 'lo': return LO_CONTACT;
    case 'si': return SI_CONTACT;
    case 'en': return EN_CONTACT;
    default: return KO_CONTACT;
  }
};

export const saveContactContent = (content: ContactContent) => {
  const lang = getCurrentLang();
  localStorage.setItem(`mks_contact_content_${lang}`, JSON.stringify(content));
  window.dispatchEvent(new Event('storage_updated'));
};

export const getInquiries = (): Inquiry[] => {
  const saved = localStorage.getItem('mks_inquiries');
  return saved ? JSON.parse(saved) : [];
};

export const saveInquiries = (inquiries: Inquiry[]) => {
  localStorage.setItem('mks_inquiries', JSON.stringify(inquiries));
  window.dispatchEvent(new Event('storage_updated'));
};

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
    partnership: {
        title: '글로벌 파트너십',
        desc: '국내의 유수의 의료기관 및 기업들과 함께 혁신적인 생태계를 구축하고 있습니다.',
        scope: '협력 범위'
    },
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
    partnership: {
        title: 'Global Partnership',
        desc: 'We are building an innovative ecosystem with leading medical institutions and companies.',
        scope: 'Scope of Cooperation'
    },
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
  },
  lo: {
    heroSub: 'ມາດຕະຖານໃໝ່ຂອງການເບິ່ງແຍງສຸຂະພາບ',
    heroMain: 'ໂຊລູຊັ່ນສຸຂະພາບທີ່ອອກແບບໂດຍ AI',
    heroDesc: 'ການເບິ່ງແຍງສຸຂະພາບສ່ວນບຸກຄົນໂດຍ AI. Medical Korea Systems ລວມຄວາມຊ່ຽວຊານທາງການແພດ ແລະ AI ເຂົ້າກັນ.',
    btnSolutions: 'ເບິ່ງໂຊລູຊັ່ນ',
    btnConsult: 'ປຶກສາຫາລື',
    stats: [
      { title: 'ຄວາມຊັດເຈນ 99%', desc: 'ລະບົບວິນິດໄສທີ່ຊັດເຈນຜ່ານຕົວແບບ AI.' },
      { title: 'ຕິດຕາມ 24/7', desc: 'ຕິດຕາມສຸຂະພາບຂອງທ່ານໄດ້ທຸກບ່ອນ.' },
      { title: 'ແຜນສ່ວນບຸກຄົນ', desc: 'ອອກແບບແຜນສຸຂະພາບໃຫ້ເໝາະສົມກັບທ່ານ.' },
    ],
    sectionEco: 'ລະບົບນິເວດ',
    sectionEcoTitle: 'ໂຊລູຊັ່ນສຸຂະພາບຫຼັກ',
    sectionEcoDesc: 'ເບິ່ງວິທີທີ່ MKS ປ່ຽນແປງການເບິ່ງແຍງສຸຂະພາບ.',
    learnMore: 'ຮຽນຮູ້ເພີ່ມເຕີມ',
    nav: ['ໂຊລູຊັ່ນ', 'ເຕັກໂນໂລຊີ', 'ການຮ່ວມມື', 'ຕິດຕໍ່'],
    partnership: {
        title: 'ການຮ່ວມມືທົ່ວໂລກ',
        desc: 'ພວກເຮົາກຳລັງສ້າງລະບົບນິເວດນະວັດຕະກໍາກັບສະຖາບັນການແພດ ແລະ ບໍລິສັດຊັ້ນນຳ.',
        scope: 'ຂອບເຂດການຮ່ວມມື'
    },
    serviceDetail: {
        preparing: 'ກຳລັງກຽມພ້ອມ',
        preparingDesc: 'ພວກເຮົາກຳລັງອັບເກຣດລະບົບນີ້.',
        confirm: 'ຢືນຢັນ',
        start: 'ເລີ່ມຕົ້ນ',
        brochure: 'ດາວໂຫຼດໂບຣຊົວ',
        highlight: 'ການເບິ່ງແຍງສຸຂະພາບລະດັບສູງ',
        certified: 'ລະບົບ AI ທີ່ໄດ້ຮັບການຢັ້ງຢືນ',
        ctaTitle: 'ພ້ອມທີ່ຈະສຳຜັດກັບອະນາຄົດຂອງການແພດບໍ?',
        ctaDesc: 'ຜູ້ໃຊ້ຫຼາຍຄົນກຳລັງໃຊ້ AI ຂອງ MKS ເພື່ອຈັດການສຸຂະພາບ.',
        demo: 'ຂໍການສາທິດ'
    }
  },
  si: {
    heroSub: 'අනාගත සෞඛ්‍ය සේවාවේ නව ප්‍රමිතිය',
    heroMain: 'AI මගින් නිර්මාණය කළ සෞඛ්‍ය විසඳුම්',
    heroDesc: 'පුද්ගලීකරණය කළ සෞඛ්‍ය කළමනාකරණය සඳහා AI ඔබ සමඟ සිටී. වෛද්‍ය විශේෂඥතාව සහ AI තාක්ෂණය එක් කර නව අත්දැකීමක් ලබා දෙන්නෙමු.',
    btnSolutions: 'විසඳුම් බලන්න',
    btnConsult: 'උපදෙස් ලබා ගන්න',
    stats: [
      { title: '99% නිරවද්‍යතාවය', desc: 'AI මාදිලි හරහා නිවැරදි රෝග විනිශ්චයක් ලබා දෙන්නෙමු.' },
      { title: '24/7 අධීක්ෂණය', desc: 'ඕනෑම වේලාවක ඔබේ සෞඛ්‍ය තත්ත්වය පරීක්ෂා කරන්න.' },
      { title: 'පුද්ගලීකරණය කළ සැලසුම්', desc: 'ඔබටම ආවේණික සෞඛ්‍ය සැලසුම් නිර්මාණය කරන්න.' },
    ],
    sectionEco: 'පද්ධතිය',
    sectionEcoTitle: 'මූලික සෞඛ්‍ය විසඳුම්',
    sectionEcoDesc: 'MKS AI සේවාවන් නවීන වෛද්‍ය සේවාවන් වෙනස් කරන ආකාරය බලන්න.',
    learnMore: 'තව දැනගන්න',
    nav: ['විසඳුම්', 'තාක්ෂණය', 'හවුල්කාරිත්වය', 'සම්බන්ධ වන්න'],
    partnership: {
        title: 'ගෝලීය හවුල්කාරිත්වය',
        desc: 'අපි ප්‍රමුඛ වෛද්‍ය ආයතන සහ සමාගම් සමඟ නව්‍ය පරිසර පද්ධතියක් ගොඩනඟමු.',
        scope: 'සහයෝගීතාවයේ විෂය පථය'
    },
    serviceDetail: {
        preparing: 'සේවාව සූදානම් වෙමින් පවතී',
        preparingDesc: 'අපි මෙම විසඳුම යාවත්කාලීන කරමින් සිටිමු.',
        confirm: 'තහවුරු කරන්න',
        start: 'ආරම්භ කරන්න',
        brochure: 'විස්තර පත්‍රිකාව බාගත කරන්න',
        highlight: 'උසස් මට්ටමේ සෞඛ්‍ය සේවාව',
        certified: 'සහතික කළ AI පද්ධතිය',
        ctaTitle: 'අනාගත සෞඛ්‍ය සේවාව අත්විඳීමට ඔබ සූදානම්ද?',
        ctaDesc: 'බොහෝ පරිශීලකයින් දැනටමත් MKS AI විසඳුම් භාවිතා කරයි.',
        demo: 'නිරූපණ සැසියක් ඉල්ලන්න'
    }
  }
};
