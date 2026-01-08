
import { Service, Partner, TechContent, ContactContent } from './types';

export const LO_SERVICES: Service[] = [
  {
    id: 'q-health',
    name: 'Q-health',
    title: 'ສະຕິປັນຍາສ່ວນບຸກຄົນເພື່ອສຸຂະພາບຂອງທ່ານ',
    description: 'ລະບົບການປະເມີນຄວາມສ່ຽງດ້ານສຸຂະພາບດ້ວຍ AI ທີ່ກ້າວໜ້າ ແລະ ການຕິດຕາມຄົນເຈັບຢ່າງຕໍ່ເນື່ອງ.',
    longDescription: 'Q-health ໃຊ້ອັນກໍຣິດທຶມການຮຽນຮູ້ເລິກເຊິ່ງເພື່ອວິເຄາະ Biomarkers ຫຼາຍກວ່າ 50 ຊະນິດ ແລະ ປະຫວັດຄົນເຈັບ ເພື່ອໃຫ້ການວິນິດໄສທີ່ຊັດເຈນ.',
    icon: 'analytics',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    features: ['ການຮັບຮູ້ຮູບແບບ AI', 'ການຕິດຕາມແບບສົດໆ', 'ແຜນສຸຂະພາບສ່ວນບຸກຄົນ'],
    category: 'AI ວິນິດໄສ'
  },
  {
    id: 'nutricheck',
    name: 'NutriCheck',
    title: 'ການຈັດການອາຫານເສີມສ່ວນບຸກຄົນດ້ວຍ AI',
    description: 'AI ວິເຄາະຜົນການກວດສຸຂະພາບເພື່ອແນະນໍາອາຫານເສີມທີ່ເໝາະສົມກັບທ່ານ ແລະ ບໍລິການແບບສະໝັກສະມາຊິກ.',
    longDescription: 'NutriCheck ວິເຄາະຂໍ້ມູນສຸຂະພາບຕົວຈິງຂອງທ່ານເພື່ອຈັດສົ່ງອາຫານເສີມສ່ວນບຸກຄົນແບບລາຍເດືອນ ແລະ ມີລະບົບໃຫ້ຄະແນນລາງວັນສຳລັບການກິນຢ່າງຕໍ່ເນື່ອງ.',
    icon: 'vaccines',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
    features: ['ວິເຄາະຂໍ້ມູນກວດສຸຂະພາບດ້ວຍ AI', 'ສະໝັກສະມາຊິກອາຫານເສີມ (1/3/6 ເດືອນ)', 'ລະບົບລາງວັນຄະແນນ'],
    category: 'ການຈັດການອາຫານ'
  },
  {
    id: 'helios',
    name: 'HELIOS™',
    title: 'ການຄາດຄະເນການມາຢ້ຽມຢາມຜ່ານຂໍ້ມູນທີ່ບໍ່ມີໂຄງສ້າງ',
    description: 'ໂຊລູຊັ່ນ AI ທີ່ວິເຄາະຂໍ້ມູນການປຶກສາທາງການແພດເພື່ອຄາດຄະເນຄວາມເປັນໄປໄດ້ໃນການມາຢ້ຽມຢາມ.',
    longDescription: 'HELIOS™ ວິເຄາະຂໍ້ມູນທີ່ບໍ່ມີໂຄງສ້າງເຊັ່ນ: ຂໍ້ຄວາມ ແລະ ສຽງຈາກການປຶກສາຫາລື. ໂດຍການກໍານົດການປ່ຽນແປງທາງຈິດໃຈ ແລະ ຄວາມຕ້ອງການໃນເວລາທີ່ແທ້ຈິງ, ມັນຄາດຄະເນຄວາມເປັນໄປໄດ້ຂອງການໄປຢ້ຽມຢາມໂຮງຫມໍທາງວິທະຍາສາດ.',
    icon: 'insights',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    features: ['ການຄາດຄະເນຄວາມເປັນໄປໄດ້', 'ການວິເຄາະອາລົມ', 'ຂໍ້ມູນການປຶກສາທາງການແພດ'],
    category: 'AI ການປຶກສາ'
  },
  {
    id: 'medi-bar',
    name: 'ແພລດຟອມ Medi-bar',
    title: 'ສູນກາງຂໍ້ມູນທາງການແພດ ແລະ ການບໍລິການແບບຄົບວົງຈອນ',
    description: 'ແພລດຟອມອັດສະລິຍະທີ່ເຊື່ອມຕໍ່ໂຮງໝໍ, ຄົນເຈັບ ແລະ ຜູ້ບໍລິຫານ.',
    longDescription: 'Medi-bar ເຮັດໃຫ້ຂໍ້ມູນທາງການແພດເປັນມາດຕະຖານ ແລະ ເຊື່ອມຕໍ່ກັບເຄື່ອງຈັກ MKS AI ເພື່ອໃຫ້ຄວາມຮູ້ດ້ານສຸຂະພາບໃນເວລາຈິງ ແລະ ເຄື່ອງມືວິນິດໄສທີ່ຊັດເຈນ.',
    icon: 'hub',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    features: ['ມາດຕະຖານຂໍ້ມູນສາກົນ', 'ການເຊື່ອມຕໍ່ AI API', 'ການຈັດການຂໍ້ມູນ'],
    category: 'ແພລດຟອມການແພດ'
  },
  {
    id: 'foreign-patient-platform',
    name: 'ແພລດຟອມຄົນເຈັບຕ່າງປະເທດ',
    title: 'ການບໍລິການຄົບວົງຈອນສຳລັບຄົນເຈັບທົ່ວໂລກ',
    description: 'ແພລດຟອມທີ່ຊ່ວຍຈັດການທຸກຂັ້ນຕອນຕັ້ງແຕ່ການຈອງຈົນເຖິງການເບິ່ງແຍງຫຼັງການປິ່ນປົວ.',
    longDescription: 'Medical Korea Systems ຊ່ວຍລົບລ້າງອຸປະສັກດ້ານພາສາເພື່ອສະໜອງການບໍລິການທາງການແພດທີ່ດີທີ່ສຸດໃຫ້ແກ່ຄົນເຈັບສາກົນ.',
    icon: 'public',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    features: ['ການແປພາສາແບບສົດໆ', 'ລະບົບຈອງລະດັບໂລກ', 'ການຊ່ວຍເຫຼືອດ້ານວີຊາ'],
    category: 'ການເບິ່ງແຍງທົ່ວໂລກ'
  }
];

export const LO_TECH: TechContent = {
  heroTitle: 'ເຕັກໂນໂລຊີນະວັດຕະກໍາ',
  heroDescription: 'ຂະຫຍາຍຂອບເຂດຂອງການແພດທີ່ຊັດເຈນຜ່ານການລວມຕົວຂອງການຮຽນຮູ້ເລິກເຊິ່ງ ແລະ ການວິເຄາະຂໍ້ມູນ.',
  sectionTitle: 'ເຕັກໂນໂລຊີທີ່ຂໍ້ມູນຊ່ວຍຊີວິດ',
  sectionDescription: 'Medical Korea Systems ຄາດຄະເນ ແລະ ຈັດການພະຍາດຜ່ານເຄື່ອງຈັກ AI ທີ່ເປັນກຳມະສິດ.',
  coreInnovations: 'ນະວັດຕະກໍາຫຼັກ',
  aiTitle: 'ປັນຍາປະດິດ',
  aiDescription: 'ເຄື່ອງຈັກ AI ຂອງພວກເຮົາວິເຄາະຂໍ້ມູນທາງການແພດທີ່ມີໂຄງສ້າງ ແລະ ບໍ່ມີໂຄງສ້າງດ້ວຍຄວາມຊັດເຈນ 99%.',
  aiFeatures: ['ການຄາດຄເນພະຍາດດ້ວຍ AI', 'ການວິເຄາະສຽງ Biomarker', 'ຄວາມຊັດເຈນສູງ'],
  blockchainTitle: 'ບລັອກເຊນ',
  blockchainDescription: 'ຄວາມປອດໄພຂອງຂໍ້ມູນແມ່ນພື້ນຖານ. MKS ນໍາໃຊ້ບລັອກເຊນເພື່ອປົກປ້ອງຂໍ້ມູນສຸຂະພາບ.',
  blockchainFeatures: ['ຄວາມປອດໄພຂໍ້ມູນສູງ', 'ຄວາມໂປ່ງໃສ', 'ການປົກປ້ອງຂໍ້ມູນຄົນເຈັບ'],
  bottomTitle: 'ວິວັດທະນາການເຕັກໂນໂລຊີຢ່າງຕໍ່ເນື່ອງ',
  bottomDescription: 'ພວກເຮົາກຳລັງສ້າງມາດຕະຖານໂລກສຳລັບການແພດທີ່ຊັດເຈນ.',
  stat1Value: '2+',
  stat1Label: 'ຄຳຮ້ອງຂໍສິດທິບັດ',
  stat2Value: '24/7',
  stat2Label: 'ການຕິດຕາມລະບົບ'
};

export const LO_PARTNERS: Partner[] = [
  {
    id: 'kmi',
    name: 'ສະຖາບັນວິໄຈການແພດ KMI ເກົາຫຼີ',
    type: 'Institution',
    description: 'ສະຖາບັນກວດສຸຂະພາບຊັ້ນນຳທີ່ໃຫ້ບໍລິການຄົບວົງຈອນທົ່ວປະເທດເກົາຫຼີ.',
    scope: 'ການວິເຄາະຂໍ້ມູນການກວດສຸຂະພາບດ້ວຍ AI ແລະ ການແພດປ້ອງກັນ',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    status: 'ຄູ່ຮ່ວມງານທີ່ເຄື່ອນໄຫວ'
  },
  {
    id: 'sunhan-hospital',
    name: 'ໂຮງໝໍທົ່ວໄປ Sunhan',
    type: 'Institution',
    description: 'ສະຖາບັນການແພດຊຸມຊົນທີ່ນຳໃຊ້ການແພດທີ່ຊັດເຈນຜ່ານໂຊລູຊັ່ນ AI ຂອງ MKS.',
    scope: 'ການຄາດຄະເນການພະຍາກອນໂລກຂອງຄົນເຈັບດ້ວຍ AI ແລະ ການສ້າງລະບົບຫວອດອັດສະລິຍະ',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400',
    status: 'ຄູ່ຮ່ວມງານທີ່ເຄື່ອນໄຫວ'
  }
];

export const LO_CONTACT: ContactContent = {
  heroTitle: 'ພວກເຮົາສາມາດຊ່ວຍທ່ານໄດ້ແນວໃດ?',
  heroDescription: 'ກະລຸນາສອບຖາມຂໍ້ມູນກ່ຽວກັບເຕັກໂນໂລຊີ ແລະ ການບໍລິການຂອງ MKS AI.',
  email: 'info@medicalohub.com',
  emailDescription: 'ສຳລັບເລື່ອງທີ່ລະອຽດອ່ອນ, ກະລຸນາສົ່ງອີເມວຫາພວກເຮົາໂດຍກົງ.',
  addressTitle: 'ສໍານັກງານໃຫຍ່',
  address: '101, 1F, 154-29, Imbangul-daero, Gwangsan-gu, Gwangju, ສ ເົາຫຼີ',
  formName: 'ຊື່ / ຜູ້ຕິດຕໍ່',
  formEmail: 'ທີ່ຢູ່ອີເມວ',
  formSubject: 'ຫົວຂໍ້ການສອບຖາມ',
  formContent: 'ເນື້ອໃນລະອຽດ',
  formSubmit: 'ສົ່ງການສອບຖາມ',
  formPrivacy: 'ຂ້ອຍຍອමຮັບການເກັບກຳ ແລະ ນໍາໃຊ້ຂໍ້ມູນສ່ວນຕົວ.'
};
