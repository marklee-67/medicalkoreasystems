
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
