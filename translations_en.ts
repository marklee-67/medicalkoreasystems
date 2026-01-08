
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
    title: 'AI-Powered Personalized Supplement Curation',
    description: 'AI analyzes health check-up results and medical questionnaires to recommend and deliver the supplements you actually need.',
    longDescription: 'NutriCheck goes beyond simple tracking by analyzing actual health check-up records and medical survey data using deep learning AI. Based on this, it delivers personalized supplements via 1, 3, or 6-month subscription plans. To ensure consistency, a point-based reward system encourages daily consumption and helps build lasting health habits.',
    icon: 'vaccines',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
    features: ['AI Analysis of Health Check-up Data', 'Custom Supplement Subscription (1/3/6 mo)', 'Consumption Tracking & Point Rewards', 'Tailored Health Questionnaire Algorithm'],
    category: 'Nutrition'
  },
  {
    id: 'helios',
    name: 'HELIOS™',
    title: 'Visit Prediction via Unstructured Data',
    description: 'AI solution that analyzes medical consultation data to predict visit probability and emotional flows.',
    longDescription: 'HELIOS™ deep-analyzes fragmented unstructured data such as text and voice from consultations. By identifying psychological changes and needs in real-time, it scientifically predicts the likelihood of hospital visits and suggests optimal communication strategies to maximize conversion and satisfaction.',
    icon: 'insights',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    features: ['Visit Probability Algorithms', 'Real-time Emotional Flow Analysis', 'Unstructured Consultation Data Mining', 'Customized Interaction Guides'],
    category: 'Consultation AI'
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
    name: 'International Healthcare Coordination Platform',
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
  stat1Value: '2+',
  stat1Label: 'Patent Applications',
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
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
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
  address: 'Rm 101, 1F, 154-29, Imbangul-daero, Gwangsan-gu, Gwangju, Republic of Korea',
  formName: 'Name / Contact Person',
  formEmail: 'Email Address',
  formSubject: 'Inquiry Subject',
  formContent: 'Detailed Content',
  formSubmit: 'Submit Inquiry',
  formPrivacy: 'I agree to the collection and use of personal information.'
};
