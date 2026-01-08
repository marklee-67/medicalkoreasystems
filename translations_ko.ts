
import { Service, Partner, TechContent, ContactContent } from './types';

export const KO_SERVICES: Service[] = [
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
    title: 'AI 기반 맞춤형 건강기능식품 큐레이션',
    description: '건강검진 결과와 문진 데이터를 AI로 분석하여 당신에게 꼭 필요한 영양제를 추천하고 정기구독 서비스로 제공합니다.',
    longDescription: 'NutriCheck은 단순한 영양 관리를 넘어, 사용자의 실제 건강검진 기록과 전문 문진 데이터를 딥러닝 AI로 분석합니다. 분석된 데이터를 바탕으로 개인에게 최적화된 맞춤형 건강기능식품을 1개월, 3개월, 6개월 단위의 구독 모델로 배송하며, 꾸준한 복용을 독려하기 위한 포인트 보상 체계를 통해 건강 습관 형성을 돕습니다.',
    icon: 'vaccines',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
    features: ['건강검진 데이터 기반 AI 분석', '개인 맞춤형 영양제 구독 (1/3/6개월)', '복용 체크 및 포인트 보상 시스템', '맞춤형 건강 문진 알고리즘'],
    category: '영양 관리'
  },
  {
    id: 'helios',
    name: 'HELIOS™',
    title: '비정형 데이터 속의 내원 신호 포착',
    description: '의료 상담 데이터를 정밀 분석하여 고객의 내원 가능성과 감정의 흐름을 예측하는 AI 솔루션입니다.',
    longDescription: 'HELIOS™는 상담 과정에서 발생하는 텍스트와 음성 등 파편화된 비정형 데이터를 AI로 심층 분석합니다. 단순한 기록을 넘어 고객의 심리적 변화와 필요를 실시간으로 파악함으로써, 병원 방문 가능성을 과학적으로 예측하고 최적의 상담 전략을 제안하여 고객 만족도와 전환율을 극대화합니다.',
    icon: 'insights',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    features: ['내원 확률 예측 알고리즘', '실시간 감정 흐름 분석', '비정형 의료 상담 데이터 마이닝', '맞춤형 상담 가이드 제공'],
    category: '상담 AI'
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

export const KO_TECH: TechContent = {
  heroTitle: '혁신 기술력',
  heroDescription: '딥러닝 음성인식, 그리고 데이터 분석 기술의 융합으로 정밀 의료의 한계를 넓혀갑니다.',
  sectionTitle: '데이터가 생명이 되는 기술',
  sectionDescription: 'Medical Korea Systems는 수백만 건의 임상 데이터를 학습한 독자적인 AI 엔진을 통해 질병을 예측하고 관리합니다. 우리의 기술은 단순한 분석을 넘어, 사람의 생명을 구하는 결정적인 통찰을 제공하는 것을 목표로 합니다.',
  coreInnovations: '핵심 혁신 기술',
  aiTitle: 'AI 인공지능',
  aiDescription: 'MKS의 독자적인 AI 인공지능 엔진은 딥러닝 기술을 기반으로 수백만 건의 정형/비정형 의료 데이터를 분석합니다. 음성 바이오마커, 이미지 인식, 그리고 텍스트 분석 기술을 결합하여 질병의 전조 증상을 99% 이상의 정확도로 포착하며, 개인별 맞춤형 정밀 진단을 가능하게 합니다.',
  aiFeatures: ['딥러닝 기반 질병 예측 엔진', '실시간 음성 바이오마커 분석', '정밀 진단 정확도 99% 확보'],
  blockchainTitle: '블록체인',
  blockchainDescription: '데이터의 무결성과 보안은 의료 서비스의 기본입니다. MKS는 블록체인 기술을 도입하여 환자의 건강 정보를 안전하게 보호합니다. 분산 원장 기술을 통해 의료 데이터의 위변조를 원천 차단하며, 환자가 자신의 데이터에 대한 주권을 가지고 투명하게 관리할 수 있는 신뢰 체계를 구축합니다.',
  blockchainFeatures: ['의료 데이터 위변조 방지 시스템', '환자 중심 데이터 주권 보장', '투명한 의료 기록 공유 체계'],
  bottomTitle: '끊임없는 기술 고도화',
  bottomDescription: 'Medical Korea Systems는 현재에 안주하지 않습니다. 양자 암호화 기술을 포함한 차세대 보안 기술과 초거대 언어 모델(LLM)을 연동한 맞춤형 의료 어시스턴트 개발을 통해 글로벌 정밀 의료 시장의 표준을 만들어가고 있습니다.',
  stat1Value: '2+',
  stat1Label: '특허 출원',
  stat2Value: '24/7',
  stat2Label: '시스템 관제'
};

export const KO_PARTNERS: Partner[] = [
  {
    id: 'kmi',
    name: 'KMI 한국의학연구소',
    type: 'Institution',
    description: '대한민국 전역에 종합 검진 서비스를 제공하는 선도적인 건강검진 기관입니다.',
    scope: 'AI 건강 검진 데이터 분석 및 예방 의학',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
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

export const KO_CONTACT: ContactContent = {
  heroTitle: '무엇을 도와드릴까요?',
  heroDescription: 'MKS의 AI 기술 및 서비스에 대한 모든 문의사항을 남겨주세요. 전문가 그룹이 신속하게 답변해 드립니다.',
  email: 'info@medicalohub.com',
  emailDescription: '의료 데이터 보안 및 파트너십과 관련된 민감한 사안은 이메일로 직접 문의해 주시기 바랍니다. 보통 4시간 이내에 첫 답변을 드립니다.',
  addressTitle: '본사 (Headquarters)',
  address: '광주광역시 광산구 임방울대로 154-29 1층 101호',
  formName: '성함 / 담당자',
  formEmail: '이메일 주소',
  formSubject: '문의 제목',
  formContent: '상세 내용',
  formSubmit: '문의 제출하기',
  formPrivacy: '개인정보 수집 및 이용에 동의합니다.'
};
