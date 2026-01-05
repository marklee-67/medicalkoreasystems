
import { Service, FAQ, Partner } from './types';

export const SERVICES: Service[] = [
  {
    id: 'q-health',
    name: 'Q-health',
    title: '당신의 웰빙을 위한 개인 맞춤형 지능',
    description: '고도화된 AI 기반 건강 위험 평가 및 지속적인 환자 모니터링 시스템입니다.',
    longDescription: 'Q-health는 딥러닝 알고리즘을 사용하여 50개 이상의 바이오마커와 환자 이력을 분석합니다. 육안으로 식별하기 어려운 패턴을 찾아내어 정확한 진단과 개인별 건강 로드맵을 제시합니다.',
    icon: 'analytics',
    imageUrl: 'https://picsum.photos/seed/qhealth/800/600',
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
    imageUrl: 'https://picsum.photos/seed/nutrition/800/600',
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
    imageUrl: 'https://picsum.photos/seed/voice/800/600',
    features: ['음향 바이오마커 분석', '실시간 데이터 처리', '정서 및 심리 상태 감지', '원격 의료 시스템 통합'],
    category: '음성 AI'
  },
  {
    id: 'medi-bar',
    name: 'Medi-Bar',
    title: '스마트 원격 의료의 미래',
    description: '효율적인 환자 케어를 위한 통합 스마트 키오스크 솔루션입니다.',
    longDescription: 'Medi-Bar는 생체 측정, 휴대용 영상 장치, AI 진단을 하나의 모바일 플랫폼에 결합했습니다. 도서산간 지역, 요양원, 응급 현장에서 병원급 진단을 가능하게 합니다.',
    icon: 'touch_app',
    imageUrl: 'https://picsum.photos/seed/kiosk/800/600',
    features: ['휴대용 X-ray 통합', '활력 징후 센서', '원격 전문의 실시간 연결', 'AI 환자 분류(Triage)'],
    category: '원격 의료'
  },
  {
    id: 'foreign-patients',
    name: '외국인 환자 유치',
    title: '국경을 넘는 원스톱 의료 케어',
    description: '해외 환자를 위한 글로벌 컨시어지 및 의료 관광 서비스입니다.',
    longDescription: '해외 환자와 한국의 최상급 의료 기관을 연결합니다. VIP 컨시어지, 의료 비자 지원, 원어민 통역 서비스를 제공하여 원활한 의료 여정을 보장합니다.',
    icon: 'public',
    imageUrl: 'https://picsum.photos/seed/global/800/600',
    features: ['VIP 컨시어지 서비스', '비자 및 여행 지원', '전문 의료 통역', '귀국 후 사후 모니터링'],
    category: '글로벌 서비스'
  }
];

export const FAQS: FAQ[] = [
  {
    category: 'Q-health',
    question: 'AI 개인화 알고리즘은 어떻게 작동하나요?',
    answer: '저희 AI는 초기 건강 검진의 50가지 이상 바이오마커와 라이프스타일 데이터를 분석합니다. 이 정보를 글로벌 의료 데이터베이스와 대조하여 귀하의 대사 프로필에 최적화된 맞춤형 권장 사항을 제공합니다.'
  },
  {
    category: 'NutriCheck',
    question: '웨어러블 기기와 연동이 가능한가요?',
    answer: '네, NutriCheck은 현재 Apple 건강, Google Fit, 삼성 헬스를 지원합니다. 앱 설정의 "기기 및 통합" 메뉴에서 데이터를 직접 동기화할 수 있습니다.'
  },
  {
    category: 'HELLIOS',
    question: '음성 데이터는 안전하게 보관되나요?',
    answer: '물론입니다. HELLIOS는 군사급 AES-256 암호화를 사용합니다. 모든 음성 데이터는 익명화되어 개인 식별 정보와 분리된 HIPAA 준수 서버에 안전하게 저장됩니다.'
  }
];

export const PARTNERS: Partner[] = [
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
    id: 'seonhan',
    name: '선한종합병원',
    type: 'Institution',
    description: '환자 중심의 케어와 첨단 수술 역량을 갖춘 지역 거점 의료 센터입니다.',
    scope: '환자 원격 모니터링 및 EMR 시스템 통합',
    imageUrl: 'https://picsum.photos/seed/hospital/400/300',
    status: '활성 파트너'
  }
];
