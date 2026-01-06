
export interface Service {
  id: string;
  name: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  imageUrl: string;
  features: string[];
  category: string;
}

export interface FAQ {
  category: string;
  question: string;
  answer: string;
}

export interface Partner {
  id: string;
  name: string;
  type: 'Institution' | 'Business';
  description: string;
  scope: string;
  imageUrl: string;
  status?: string;
}

export interface TechContent {
  heroTitle: string;
  heroDescription: string;
  sectionTitle: string;
  sectionDescription: string;
  coreInnovations: string;
  aiTitle: string;
  aiDescription: string;
  aiFeatures: string[];
  blockchainTitle: string;
  blockchainDescription: string;
  blockchainFeatures: string[];
  bottomTitle: string;
  bottomDescription: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
}

export interface ContactContent {
  heroTitle: string;
  heroDescription: string;
  email: string;
  emailDescription: string;
  addressTitle: string;
  address: string;
  formName: string;
  formEmail: string;
  formSubject: string;
  formContent: string;
  formSubmit: string;
  formPrivacy: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  date: string;
}
