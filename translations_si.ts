
import { Service, Partner, TechContent, ContactContent } from './types';

export const SI_SERVICES: Service[] = [
  {
    id: 'q-health',
    name: 'Q-health',
    title: 'ඔබේ යහපැවැත්ම සඳහා පුද්ගලීකරණය කළ බුද්ධිය',
    description: 'උසස් AI මගින් බල ගැන්වෙන සෞඛ්‍ය අවදානම් තක්සේරු කිරීමේ පද්ධතිය.',
    longDescription: 'Q-health ඔබේ සෞඛ්‍ය දත්ත විශ්ලේෂණය කර නිවැරදි රෝග විනිශ්චය සහ පුද්ගලීකරණය කළ සෞඛ්‍ය සැලසුම් ලබා දෙයි.',
    icon: 'analytics',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    features: ['AI රටා හඳුනා ගැනීම', 'තථ්‍ය කාලීන අධීක්ෂණය', 'පුද්ගලීකරණය කළ සැලසුම්'],
    category: 'AI රෝග විනිශ්චය'
  },
  {
    id: 'foreign-patient-platform',
    name: 'විදේශීය රෝගී වේදිකාව',
    title: 'ගෝලීය රෝගීන් සඳහා ඒකාබද්ධ සේවාව',
    description: 'ප්‍රතිකාර සඳහා වෙන්කිරීමේ සිට පසු විපරම් සත්කාර දක්වා සියල්ල කළමනාකරණය කරයි.',
    longDescription: 'Medical Korea Systems ජාත්‍යන්තර රෝගීන් සඳහා භාෂා බාධක ඉවත් කර ඉහළම මට්ටමේ වෛද්‍ය සේවාවන් සපයයි.',
    icon: 'public',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    features: ['තථ්‍ය කාලීන පරිවර්තනය', 'ගෝලීය වෙන්කිරීම්', 'වීසා සහාය'],
    category: 'ගෝලීය සත්කාරය'
  }
];

export const SI_TECH: TechContent = {
  heroTitle: 'නවෝත්පාදන තාක්ෂණය',
  heroDescription: 'දත්ත විශ්ලේෂණය සහ AI හරහා වෛද්‍ය විද්‍යාවේ සීමාවන් පුළුල් කිරීම.',
  sectionTitle: 'දත්ත මගින් ජීවිත බේරා ගන්නා තාක්ෂණය',
  sectionDescription: 'Medical Korea Systems අපගේ විශේෂිත AI එන්ජින් හරහා රෝග පුරෝකථනය කරයි.',
  coreInnovations: 'ප්‍රධාන නවෝත්පාදන',
  aiTitle: 'කෘතිම බුද්ධිය',
  aiDescription: 'අපගේ AI පද්ධතිය 99% ක නිරවද්‍යතාවයකින් යුතුව වෛද්‍ය දත්ත විශ්ලේෂණය කරයි.',
  aiFeatures: ['AI රෝග පුරෝකථනය', 'කටහඬ විශ්ලේෂණය', 'ඉහළ නිරවද්‍යතාවය'],
  blockchainTitle: 'බ්ලොක්චේන්',
  blockchainDescription: 'දත්ත ආරක්ෂාව ඉතා වැදගත් වේ. රෝගීන්ගේ දත්ත සුරක්ෂිත කිරීමට අපි බ්ලොක්චේන් භාවිතා කරමු.',
  blockchainFeatures: ['දත්ත සුරක්ෂිතතාවය', 'විනිවිදභාවය', 'රෝගීන්ගේ අයිතිය'],
  bottomTitle: 'අඛණ්ඩ තාක්ෂණික විකාශනය',
  bottomDescription: 'අපි නිරවද්‍ය වෛද්‍ය විද්‍යාව සඳහා ගෝලීය ප්‍රමිතීන් සකසන්නෙමු.',
  stat1Value: '15+',
  stat1Label: 'පේටන්ට් බලපත්‍ර',
  stat2Value: '24/7',
  stat2Label: 'පද්ධති අධීක්ෂණය'
};

export const SI_PARTNERS: Partner[] = [
  {
    id: 'kmi',
    name: 'KMI කොරියානු වෛද්‍ය පර්යේෂණ ආයතනය',
    type: 'Institution',
    description: 'සමස්ත කොරියාව පුරා පුළුල් සෞඛ්‍ය පරීක්ෂණ සේවා සපයන ප්‍රමුඛතම ආයතනයකි.',
    scope: 'AI සෞඛ්‍ය පරීක්ෂණ දත්ත විශ්ලේෂණය සහ වැළැක්වීමේ වෛද්‍ය විද්‍යාව',
    imageUrl: 'https://picsum.photos/seed/kmi/400/300',
    status: 'ක්‍රියාකාරී සහකරු'
  },
  {
    id: 'sunhan-hospital',
    name: 'සන්හාන් මහා රෝහල',
    type: 'Institution',
    description: 'ප්‍රජා සෞඛ්‍යය වෙනුවෙන් කැපවී සිටින, MKS AI විසඳුම් සායනික ක්ෂේත්‍රයට හඳුන්වා දුන් රෝහලකි.',
    scope: 'AI පාදක රෝගී පුරෝකථනය සහ ස්මාර්ට් වාට්ටු පද්ධති ගොඩනැගීම',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400',
    status: 'ක්‍රියාකාරී සහකරු'
  }
];

export const SI_CONTACT: ContactContent = {
  heroTitle: 'අපට ඔබට උදව් කළ හැක්කේ කෙසේද?',
  heroDescription: 'MKS AI තාක්ෂණයන් සහ සේවාවන් පිළිබඳ ඕනෑම විමසීමක් අප වෙත යොමු කරන්න.',
  email: 'info@medicalohub.com',
  emailDescription: 'වැදගත් කරුණු සඳහා කරුණාකර අපට කෙලින්ම විද්‍යුත් තැපෑලක් එවන්න.',
  addressTitle: 'ප්‍රධාන කාර්යාලය',
  address: 'Teheran-ro, Gangnam-gu, සෝල්, දකුණු කොරියාව',
  formName: 'නම / සම්බන්ධීකරණ පුද්ගලයා',
  formEmail: 'විද්‍යුත් තැපැල් ලිපිනය',
  formSubject: 'විමසීමේ මාතෘකාව',
  formContent: 'විස්තරාත්මක අන්තර්ගතය',
  formSubmit: 'විමසීම යොමු කරන්න',
  formPrivacy: 'පුද්ගලික දත්ත එකතු කිරීම සහ භාවිතය පිළිබඳව මම එකඟ වෙමි.'
};
