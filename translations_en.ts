
import { Service, Partner, TechContent, ContactContent } from './types';

export const EN_SERVICES: Service[] = [
  {
    id: 'q-health',
    name: 'Q-health',
    title: 'Personalized Intelligence for Your Wellbeing',
    description: 'Advanced AI-powered health risk assessment and continuous patient monitoring system.',
    longDescription: 'Q-health uses deep learning algorithms to analyze over 50 biomarkers and patient history. It identifies patterns difficult for the naked eye, providing accurate diagnoses and personalized health roadmaps.',
    icon: 'analytics',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    features: ['AI Pattern Recognition', 'Real-time Continuous Monitoring', 'Personalized Health Plans', 'Biomarker Data Integration'],
    category: 'AI Diagnostics'
  },
  {
    id: 'nutricheck',
    name: 'NutriCheck',
    title: 'Smart Nutrition & Health Management',
    description: 'AI-based diet analysis and personalized nutrition planning solution.',
    longDescription: 'Log meals instantly with photo captures or QR scans. NutriCheck analyzes nutrients, tracks trends, and uses gamified rewards to help achieve health goals.',
    icon: 'restaurant_menu',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
    features: ['Photo-based Nutrition Analysis', 'Smart Restaurant QR Linkage', 'Personalized Reward System', 'Metabolic Trend Tracking'],
    category: 'Nutrition'
  },
  {
    id: 'hellios',
    name: 'HELLIOS',
    title: 'Decoding Health via Voice Signals',
    description: 'Sophisticated vocal biomarker engine for real-time diagnostic prediction.',
    longDescription: 'HELLIOS converts raw vocal data into medical insights. By analyzing pitch, tone, and rhythm, it non-invasively detects health anomalies and emotional states.',
    icon: 'graphic_eq',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    features: ['Vocal Biomarker Analysis', 'Real-time Data Processing', 'Emotional State Detection', 'Telemedicine Integration'],
    category: 'Voice AI'
  },
  {
    id: 'medi-bar',
    name: 'Medi-bar Platform',
    title: 'Integrated Medical Data & Service Hub',
    description: 'Intelligent platform connecting hospitals, patients, and administrators.',
    longDescription: 'Medi-bar standardizes fragmented medical data and integrates with MKS AI engines to provide real-time health insights and precise diagnostic tools.',
    icon: 'hub',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    features: ['Universal Data Standardization', 'AI Analysis API Linkage', 'Secure Cloud Storage', 'Intuitive Admin Dashboard'],
    category: 'Medical Platform'
  },
  {
    id: 'foreign-patient-platform',
    name: 'International Patient Platform',
    title: 'Unified Concierge for Global Patients',
    description: 'AI-powered platform managing the entire journey from booking to follow-up care.',
    longDescription: 'Medical Korea Systems transcends language barriers to offer top-tier medical care for international patients with multilingual support and AI translation.',
    icon: 'public',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    features: ['Real-time Multilingual Translation', 'Global Booking System', 'Stay & Visa Support', 'Remote Follow-up Monitoring'],
    category: 'Global Care'
  }
];

export const EN_TECH: TechContent = {
  heroTitle: 'Innovative Technology',
  heroDescription: 'Expanding the boundaries of precision medicine through a fusion of deep learning and data analysis.',
  sectionTitle: 'Technology Where Data Saves Lives',
  sectionDescription: 'Medical Korea Systems predicts and manages diseases through proprietary AI engines trained on millions of clinical data points. We provide decisive insights that go beyond analysis.',
  coreInnovations: 'Core Innovations',
  aiTitle: 'Artificial Intelligence',
  aiDescription: 'Our proprietary AI engine analyzes structured and unstructured medical data using deep learning. Combining vocal biomarkers, image recognition, and text analysis, we catch symptoms with over 99% accuracy.',
  aiFeatures: ['Deep learning-based disease prediction', 'Real-time vocal biomarker analysis', '99% precision diagnostic accuracy'],
  blockchainTitle: 'Blockchain',
  blockchainDescription: 'Data integrity and security are fundamental. MKS introduces blockchain to protect patient health records, preventing forgery and ensuring transparent data sovereignty for patients.',
  blockchainFeatures: ['Medical data integrity system', 'Patient-centered data sovereignty', 'Transparent record sharing ecosystem'],
  bottomTitle: 'Continuous Technological Evolution',
  bottomDescription: 'Medical Korea Systems never settles. We are setting global standards for precision medicine by integrating next-gen security like quantum encryption and LLM-powered medical assistants.',
  stat1Value: '15+',
  stat1Label: 'Patents Held',
  stat2Value: '24/7',
  stat2Label: 'System Monitoring'
};

export const EN_PARTNERS: Partner[] = [
  {
    id: 'kmi',
    name: 'KMI Health Research Institute',
    type: 'Institution',
    description: 'A leading health screening institution providing comprehensive services across Korea.',
    scope: 'AI health screening data analysis & preventive medicine',
    imageUrl: 'https://picsum.photos/seed/kmi/400/300',
    status: 'Active Partner'
  },
  {
    id: 'sunhan-hospital',
    name: 'Sunhan General Hospital',
    type: 'Institution',
    description: 'A community medical institution practicing precision medicine via MKS AI solutions.',
    scope: 'AI-based patient prognosis prediction & smart ward implementation',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400',
    status: 'Active Partner'
  }
];

export const EN_CONTACT: ContactContent = {
  heroTitle: 'How Can We Help You?',
  heroDescription: 'Feel free to leave any inquiries regarding MKS AI technologies and services. Our expert group will respond promptly.',
  email: 'info@medicalohub.com',
  emailDescription: 'For sensitive matters regarding data security or partnerships, please email us directly. We usually respond within 4 hours.',
  addressTitle: 'Headquarters',
  address: 'Teheran-ro, Gangnam-gu, Seoul, Republic of Korea',
  formName: 'Name / Contact Person',
  formEmail: 'Email Address',
  formSubject: 'Inquiry Subject',
  formContent: 'Detailed Content',
  formSubmit: 'Submit Inquiry',
  formPrivacy: 'I agree to the collection and use of personal information.'
};
