export type PropertyCategory = 'all' | 'subsidi' | 'komersil';

export interface SpecItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface RoomZone {
  id: string;
  name: string;
  dimension: string;
  elevation: string;
  x: number;
  y: number;
  w: number;
  h: number;
  tone: 'indoor' | 'wet' | 'outdoor' | 'carport';
}

export interface PropertyUnit {
  id: 'type-36-69' | 'type-45-72';
  code: string;
  name: string;
  tagline: string;
  category: 'subsidi' | 'komersil';
  categories: ('subsidi' | 'komersil')[];
  badgeText: string;
  schemeLabel: string;
  priceStart: string;
  numericPrice: number;
  allInFee: string;
  numericAllIn: number;
  monthlyInstallment: string;
  buildingArea: number;
  landArea: number;
  landDimension: string;
  bedrooms: number;
  bathrooms: number;
  carport: number;
  powerWatt: number;
  waterSource: string;
  heroImage: string;
  heroImageSm: string;
  brochureImage: string;
  promoItems: string[];
  keyFeatures: string[];
  specs: SpecItem[];
  lotWidthM: number;
  lotLengthM: number;
  rooms: RoomZone[];
}

export interface MarketingContact {
  name: string;
  role: string;
  phoneDisplay: string;
  waNumber: string;
  isOffice?: boolean;
}

export const COMPANY_INFO = {
  developerName: 'MJ Property',
  developerSub: 'Interior & Exterior · Real Estate Developer',
  clusterName: 'Griya Mayang Permai',
  clusterShort: 'GMP Jombang',
  address: 'Nol Jl. Raya Jogoroto – Peterongan, Jombang, Jawa Timur',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jl.+Raya+Jogoroto+Peterongan+Jombang',
  socials: {
    facebook: 'MJ Property',
    tiktok: 'mj_propertyjombang',
    instagram: 'mj_property_jombang',
    whatsappDisplay: '0812-3344-6940',
    whatsappRaw: '6281233446940',
  },
  promoBonus: ['TV', 'AC', 'Kulkas'],
  promoNote: 'Sesuai stok yang tersedia serta hadiah menarik lainnya. Biaya All In sampai serah terima kunci.',
};

export const MARKETING_CONTACTS: MarketingContact[] = [
  {
    name: 'Office MJ Property',
    role: 'Official Office Hotline',
    phoneDisplay: '0812-3344-6940',
    waNumber: '6281233446940',
    isOffice: true,
  },
  {
    name: 'Cheril',
    role: 'Property Consultant',
    phoneDisplay: '0858-5182-3683',
    waNumber: '6285851823683',
  },
  {
    name: 'Rafita',
    role: 'Property Consultant',
    phoneDisplay: '0858-5569-3057',
    waNumber: '6285855693057',
  },
  {
    name: 'Chandra',
    role: 'Property Consultant',
    phoneDisplay: '0815-5059-006',
    waNumber: '628155059006',
  },
];

export const LOCATION_ADVANTAGES = [
  {
    time: '0 Menit',
    title: 'Nol Jalan Raya Utama',
    description:
      'Berada tepat di Nol Jl. Raya Jogoroto–Peterongan Jombang. Akses langsung jalan raya provinsi/kabupaten dengan nilai investasi properti yang terus tumbuh.',
  },
  {
    time: '1 Menit',
    title: 'Pusat Layanan & Keamanan',
    description:
      'Selangkah menuju Koramil, Puskesmas, dan Polsek terdekat untuk ketenangan serta kemudahan akses kesehatan keluarga setiap hari.',
  },
  {
    time: '1–5 Menit',
    title: 'Zonasi Pendidikan & Kuliner',
    description:
      'Dekat kawasan Zonasi Sekolah unggulan, Pondok Pesantren ternama di Peterongan & Jogoroto, serta sentra kuliner harian.',
  },
  {
    time: '10 Menit',
    title: 'Pusat Kota Jombang',
    description:
      'Terhubung cepat ke Alun-Alun Jombang, Stasiun Jombang, pusat perbelanjaan, perbankan, dan fasilitas publik utama kota.',
  },
];

export const PROPERTY_UNITS: PropertyUnit[] = [
  {
    id: 'type-36-69',
    code: 'TYPE 36/69',
    name: 'Modern Scandinavian',
    tagline: 'Skema Subsidi / KPR Ringan & Komersil Ekonomis',
    category: 'subsidi',
    categories: ['subsidi', 'komersil'],
    badgeText: '1 JUTA ALL IN · ANGSURAN 1 JT-AN',
    schemeLabel: 'Program Subsidi & Komersil Terjangkau',
    priceStart: 'Mulai Rp 200 Juta-an',
    numericPrice: 200000000,
    allInFee: '1 Juta All In',
    numericAllIn: 1000000,
    monthlyInstallment: '1 Jt-an / Bulan',
    buildingArea: 36,
    landArea: 69,
    landDimension: '6,00 × 11,50 m',
    bedrooms: 2,
    bathrooms: 1,
    carport: 1,
    powerWatt: 1300,
    waterSource: 'PDAM',
    heroImage: '/assets/type-36-69.webp',
    heroImageSm: '/assets/type-36-69-sm.webp',
    brochureImage: '/assets/brochure-36-69.webp',
    promoItems: ['TV', 'AC', 'Kulkas'],
    keyFeatures: [
      'Biaya Hanya 1 Juta All In sampai serah terima kunci',
      'Angsuran ringan 1 Jt-an/bulan (tersedia konsultasi KPR Subsidi & Komersil)',
      'Dinding Bata Merah penuh & Struktur Beton Bertulang',
      'Lantai Utama Granit 60×60 + Kusen Aluminium modern',
      'Closet Duduk + Free Shower & Air Bersih PDAM',
    ],
    specs: [
      { label: 'Pondasi', value: 'Batu Kumbung' },
      { label: 'Struktur', value: 'Beton Bertulang' },
      { label: 'Dinding', value: 'Bata Merah', highlight: true },
      { label: 'Kusen Pintu & Jendela', value: 'Almini (Aluminium)' },
      { label: 'Lantai Ruangan', value: 'Granit 60×60', highlight: true },
      { label: 'Lantai Kamar Mandi', value: 'Keramik 40×40' },
      { label: 'Lantai Carport', value: 'Keramik 30×30' },
      { label: 'Sanitair / WC', value: 'Closet Duduk + Free Shower', highlight: true },
      { label: 'Daya Listrik', value: '1300 Watt' },
      { label: 'Sumber Air', value: 'PDAM' },
    ],
    lotWidthM: 6.0,
    lotLengthM: 11.5,
    // Coordinates in meters (x: 0..6, y: 0..11.5 from rear [0] to front [11.5])
    rooms: [
      { id: 'wc', name: 'KM / WC', dimension: '1.35 × 2.00 m', elevation: '-0.05', x: 0, y: 0, w: 1.45, h: 2.0, tone: 'wet' },
      { id: 'cuci', name: 'Area Cuci', dimension: '1.55 × 2.00 m', elevation: '-0.05', x: 1.45, y: 0, w: 1.55, h: 2.0, tone: 'outdoor' },
      { id: 'taman-blkg', name: 'Taman Belakang', dimension: '3.00 × 1.50 m', elevation: '-0.20', x: 3.0, y: 0, w: 3.0, h: 1.5, tone: 'outdoor' },
      { id: 'dapur', name: 'Dapur & R. Makan', dimension: '3.00 × 2.00 m', elevation: '±0.00', x: 0, y: 2.0, w: 3.0, h: 2.2, tone: 'indoor' },
      { id: 'rtidur-2', name: 'R. Tidur 2', dimension: '3.00 × 2.50 m', elevation: '±0.00', x: 3.0, y: 1.5, w: 3.0, h: 2.7, tone: 'indoor' },
      { id: 'rtamu', name: 'R. Tamu', dimension: '3.00 × 3.00 m', elevation: '±0.00', x: 0, y: 4.2, w: 3.0, h: 3.1, tone: 'indoor' },
      { id: 'rtidur-1', name: 'R. Tidur Utama', dimension: '3.00 × 3.00 m', elevation: '±0.00', x: 3.0, y: 4.2, w: 3.0, h: 3.0, tone: 'indoor' },
      { id: 'teras', name: 'Teras', dimension: '2.50 × 1.20 m', elevation: '-0.05', x: 0, y: 7.3, w: 2.6, h: 1.25, tone: 'outdoor' },
      { id: 'taman-dpn', name: 'Taman Depan', dimension: '2.60 × 2.95 m', elevation: '-0.15', x: 0, y: 8.55, w: 2.6, h: 2.95, tone: 'outdoor' },
      { id: 'carport', name: 'Carport Mobil', dimension: '3.40 × 4.30 m', elevation: '-0.25', x: 2.6, y: 7.2, w: 3.4, h: 4.3, tone: 'carport' },
    ],
  },
  {
    id: 'type-45-72',
    code: 'TYPE 45/72',
    name: 'Scandinavian Design Living',
    tagline: 'Rumah Komersil Eksklusif · Smart Door Lock',
    category: 'komersil',
    categories: ['komersil'],
    badgeText: '5 JUTA ALL IN · SMART DOOR LOCK',
    schemeLabel: 'Hunian Komersil Premium',
    priceStart: 'Mulai Rp 300 Juta-an',
    numericPrice: 300000000,
    allInFee: '5 Juta All In',
    numericAllIn: 5000000,
    monthlyInstallment: '2 Jt-an / Bulan',
    buildingArea: 45,
    landArea: 72,
    landDimension: '6,00 × 12,00 m',
    bedrooms: 2,
    bathrooms: 1,
    carport: 1,
    powerWatt: 1300,
    waterSource: 'PDAM',
    heroImage: '/assets/type-45-72.webp',
    heroImageSm: '/assets/type-45-72-sm.webp',
    brochureImage: '/assets/brochure-45-72.webp',
    promoItems: ['TV', 'AC', 'Kulkas'],
    keyFeatures: [
      'Biaya Hanya 5 Juta All In sampai serah terima kunci',
      'Angsuran terjangkau mulai 2 Jt-an/bulan',
      'Pintu Utama dilengkapi Smart Door Lock System modern',
      'Fasad High-Gable Scandinavian dengan bukaan kaca panoramik',
      'Lantai Granit Motif 60×60, Dinding Bata Merah & Drop Ceiling rapi',
    ],
    specs: [
      { label: 'Pondasi', value: 'Batu Kumbung' },
      { label: 'Struktur', value: 'Beton Bertulang' },
      { label: 'Dinding', value: 'Bata Merah', highlight: true },
      { label: 'Kusen Pintu & Jendela', value: 'Almini (Aluminium)' },
      { label: 'Lantai Ruangan', value: 'Granit Motif 60×60', highlight: true },
      { label: 'Lantai Kamar Mandi', value: 'Keramik 40×40' },
      { label: 'Lantai Carport', value: 'Keramik 40×40' },
      { label: 'Sanitair / WC', value: 'Closet Duduk + Shower' },
      { label: 'Pintu Utama', value: 'Smart Lock System', highlight: true },
      { label: 'Plafon', value: 'High / Drop Ceiling' },
      { label: 'Daya Listrik', value: '1300 Watt' },
      { label: 'Sumber Air', value: 'PDAM' },
    ],
    lotWidthM: 6.0,
    lotLengthM: 12.0,
    // Coordinates in meters (x: 0..6, y: 0..12.0 from rear [0] to front [12.0])
    rooms: [
      { id: 'rtidur-2', name: 'R. Tidur 2', dimension: '3.00 × 2.50 m', elevation: '+0.48', x: 0, y: 0, w: 3.0, h: 2.5, tone: 'indoor' },
      { id: 'taman-blkg', name: 'Taman & Teras Blkg', dimension: '3.00 × 1.50 m', elevation: '+0.43', x: 3.0, y: 0, w: 3.0, h: 1.5, tone: 'outdoor' },
      { id: 'wc', name: 'KM / WC', dimension: '1.80 × 1.50 m', elevation: '+0.43', x: 0, y: 2.5, w: 2.1, h: 1.5, tone: 'wet' },
      { id: 'dapur', name: 'Dapur Modern', dimension: '3.00 × 2.50 m', elevation: '+0.48', x: 3.0, y: 1.5, w: 3.0, h: 2.5, tone: 'indoor' },
      { id: 'rtidur-1', name: 'R. Tidur Utama', dimension: '3.00 × 3.00 m', elevation: '+0.48', x: 0, y: 4.0, w: 3.0, h: 3.05, tone: 'indoor' },
      { id: 'rkeluarga', name: 'R. Keluarga', dimension: '3.00 × 3.00 m', elevation: '+0.48', x: 3.0, y: 4.0, w: 3.0, h: 3.0, tone: 'indoor' },
      { id: 'rtamu', name: 'R. Tamu (Smart Lock)', dimension: '3.00 × 1.85 m', elevation: '+0.48', x: 3.0, y: 7.0, w: 3.0, h: 1.85, tone: 'indoor' },
      { id: 'carport', name: 'Carport Keramik 40×40', dimension: '3.00 × 4.95 m', elevation: '±0.00', x: 0, y: 7.05, w: 3.0, h: 4.95, tone: 'carport' },
      { id: 'teras', name: 'Teras Utama', dimension: '3.00 × 1.38 m', elevation: '+0.44', x: 3.0, y: 8.85, w: 3.0, h: 1.4, tone: 'outdoor' },
      { id: 'taman-dpn', name: 'Taman Depan', dimension: '3.00 × 1.75 m', elevation: '+0.08', x: 3.0, y: 10.25, w: 3.0, h: 1.75, tone: 'outdoor' },
    ],
  },
];
