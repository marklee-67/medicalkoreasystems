
import { Service, FAQ, Partner, TechContent, ContactContent, Inquiry } from './types';

const DEFAULT_SERVICES: Service[] = [
  {
    id: 'q-health',
    name: 'Q-health',
    title: '당신의 웰빙을 위한 개인 맞춤형 지능',
    description: '고도화된 AI 기반 건강 위험 평가 및 지속적인 환자 모니터링 시스템입니다.',
    longDescription: 'Q-health는 딥러닝 알고리즘을 사용하여 50개 이상의 바이오마커와 환자 이력을 분석합니다. 육안으로 식별하기 어려운 패턴을 찾아내어 정확한 진단과 개인별 건강 로드맵을 제시합니다.',
    icon: 'analytics',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    features: ['AI 패턴 인식', '실시간 연속 모니터링', '개인 맞춤형 건강 플랜', '바이오마커 데이터 통합'],
    category: 'AI 진단'
  },
  {
    id: 'nutricheck',
    name: 'NutriCheck',
    title: '스마트한 영양 및 건강 관리',
    description: 'AI 기반 식단 분석 및 개인 맞춤형 영양 계획 솔루션입니다.',
    longDescription: '사진 촬영이나 QR 스캔으로 식사를 즉시 기록하세요. NutriCheck은 영양소를 분석하고 트렌드를 추적하며, 보상 시스템이 결합된 게임화 요소를 통해 건강 목표 달성을 돕습니다.',
    icon: 'restaurant_menu',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
    features: ['사진 기반 영양 분석', '스마트 식당 QR 연동', '개인별 보상 체계', '대사 지표 추적'],
    category: '영양 관리'
  },
  {
    id: 'hellios',
    name: 'HELLIOS',
    title: '목소리로 해독하는 건강 신호',
    description: '실시간 진단 예측을 위한 고도화된 음성 바이오마커 엔진입니다.',
    longDescription: 'HELLIOS는 가공되지 않은 음성 데이터를 의료적 통찰로 전환하는 최첨단 AI 엔진입니다. 음조, 높낮이, 리듬을 분석하여 비침습적으로 건강 이상 징후와 정서 상태를 감지합니다.',
    icon: 'graphic_eq',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    features: ['음향 바이오마커 분석', '실시간 데이터 처리', '정서 및 심리 상태 감지', '원격 의료 시스템 통합'],
    category: '음성 AI'
  },
  {
    id: 'medi-bar',
    name: 'Medi-bar 플랫폼',
    title: '통합 의료 데이터 및 서비스 연결 창구',
    description: '병원, 환자, 관리자를 하나로 잇는 지능형 의료 데이터 관리 및 서비스 통합 플랫폼입니다.',
    longDescription: 'Medi-bar 플랫폼은 파편화된 의료 데이터를 표준화된 포맷으로 통합하고, MKS의 고도화된 AI 엔진과 연동하여 사용자에게 실시간 건강 통찰을 제공합니다. 의료진에게는 정밀한 진단 보조 도구를, 환자에게는 맞춤형 케어 경로를 제안하는 MKS 에코시스템의 핵심 허브입니다.',
    icon: 'hub',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    features: ['범용 의료 데이터 표준화', 'AI 분석 엔진 API 연동', '보안 강화형 클라우드 저장소', '직관적인 관리자 대시보드'],
    category: '의료 플랫폼'
  },
  {
    id: 'foreign-patient-platform',
    name: '외국인 환자 플랫폼',
    title: '글로벌 환자를 위한 통합 컨시어지 서비스',
    description: '외국인 환자의 진료 예약부터 사후 관리까지 책임지는 AI 기반 통합 플랫폼입니다.',
    longDescription: 'Medical Korea Systems의 외국인 환자 플랫폼은 언어의 장벽을 넘어 글로벌 환자들에게 최상의 의료 서비스를 제공합니다. 다국어 지원, AI 번역, 화상 진료 예약, 비자 업무 지원 등 입국 전부터 출국 후 사후 관리까지 원스톱으로 지원하는 컨시어지 솔루션입니다.',
    icon: 'public',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    features: ['실시간 다국어 번역', '글로벌 진료 예약 시스템', '맞춤형 입국/체류 지원', '사후 관리 원격 모니터링'],
    category: '글로벌 케어'
  }
];

const DEFAULT_TECH_CONTENT: TechContent = {
  heroTitle: '혁신 기술력',
  heroDescription: '딥러닝 음성인식, 그리고 데이터 분석 기술의 융합으로 정밀 의료의 한계를 넓혀갑니다.',
  sectionTitle: '데이터가 생명이 되는 기술',
  sectionDescription: 'Medical Korea Systems는 수백만 건의 임상 데이터를 학습한 독자적인 AI 엔진을 통해 질병을 예측하고 관리합니다. 우리의 기술은 단순한 분석을 넘어, 사람의 생명을 구하는 결정적인 통찰을 제공하는 것을 목표로 합니다.',
  aiDescription: 'MKS의 독자적인 AI 인공지능 엔진은 딥러닝 기술을 기반으로 수백만 건의 정형/비정형 의료 데이터를 분석합니다. 음성 바이오마커, 이미지 인식, 그리고 텍스트 분석 기술을 결합하여 질병의 전조 증상을 99% 이상의 정확도로 포착하며, 개인별 맞춤형 정밀 진단을 가능하게 합니다.',
  blockchainDescription: '데이터의 무결성과 보안은 의료 서비스의 기본입니다. MKS는 블록체인 기술을 도입하여 환자의 건강 정보를 안전하게 보호합니다. 분산 원장 기술을 통해 의료 데이터의 위변조를 원천 차단하며, 환자가 자신의 데이터에 대한 주권을 가지고 투명하게 관리할 수 있는 신뢰 체계를 구축합니다.'
};

const DEFAULT_PARTNERS: Partner[] = [
  {
    id: 'kmi',
    name: 'KMI 한국의학연구소',
    type: 'Institution',
    description: '대한민국 전역에 종합 검진 서비스를 제공하는 선도적인 건강검진 기관입니다.',
    scope: 'AI 건강 검진 데이터 분석 및 예방 의학',
    imageUrl: 'https://picsum.photos/seed/kmi/400/300',
    status: '활성 파트너'
  },
  {
    id: 'sunhan-hospital',
    name: '선한종합병원',
    type: 'Institution',
    description: '지역 사회의 건강을 책임지는 종합 의료 기관으로, MKS의 AI 솔루션을 임상 현장에 도입하여 정밀 의료를 실천하고 있습니다.',
    scope: 'AI 기반 환자 예후 예측 및 스마트 병동 시스템 구축',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400',
    status: '활성 파트너'
  }
];

const DEFAULT_CONTACT_CONTENT: ContactContent = {
  heroTitle: '무엇을 도와드릴까요?',
  heroDescription: 'MKS의 AI 기술 및 서비스에 대한 모든 문의사항을 남겨주세요. 전문가 그룹이 신속하게 답변해 드립니다.',
  email: 'info@medicalohub.com',
  emailDescription: '의료 데이터 보안 및 파트너십과 관련된 민감한 사안은 이메일로 직접 문의해 주시기 바랍니다. 보통 4시간 이내에 첫 답변을 드립니다.',
  addressTitle: '본사 (Headquarters)',
  address: '서울특별시 강남구 테헤란로 (MKS 빌딩)'
};

// Services
export const getServices = (): Service[] => {
  const saved = localStorage.getItem('mks_services');
  return saved ? JSON.parse(saved) : DEFAULT_SERVICES;
};
export const saveServices = (services: Service[]) => {
  localStorage.setItem('mks_services', JSON.stringify(services));
  window.dispatchEvent(new Event('storage_updated'));
};

// Tech Content
export const getTechContent = (): TechContent => {
  const saved = localStorage.getItem('mks_tech_content');
  return saved ? JSON.parse(saved) : DEFAULT_TECH_CONTENT;
};
export const saveTechContent = (content: TechContent) => {
  localStorage.setItem('mks_tech_content', JSON.stringify(content));
  window.dispatchEvent(new Event('storage_updated'));
};

// Partners
export const getPartners = (): Partner[] => {
  const saved = localStorage.getItem('mks_partners');
  return saved ? JSON.parse(saved) : DEFAULT_PARTNERS;
};
export const savePartners = (partners: Partner[]) => {
  localStorage.setItem('mks_partners', JSON.stringify(partners));
  window.dispatchEvent(new Event('storage_updated'));
};

// Contact Content
export const getContactContent = (): ContactContent => {
  const saved = localStorage.getItem('mks_contact_content');
  return saved ? JSON.parse(saved) : DEFAULT_CONTACT_CONTENT;
};
export const saveContactContent = (content: ContactContent) => {
  localStorage.setItem('mks_contact_content', JSON.stringify(content));
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
    question: 'AI 개인화 알고리즘은 어떻게 작동하나요?',
    answer: '저희 AI는 초기 건강 검진의 50가지 이상 바이오마커와 라이프스타일 데이터를 분석합니다. 이 정보를 글로벌 의료 데이터베이스와 대조하여 귀하의 대사 프로필에 최적화된 맞춤형 권장 사항을 제공합니다.'
  }
];
