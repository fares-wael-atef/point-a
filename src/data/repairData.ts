import { DeviceModel, RepairPartOption } from '../types';

function createPartsForModel(modelName: string, basePriceMultiplier: number): RepairPartOption[] {
  const isLatest = modelName.includes('16') || modelName.includes('17');
  const isPro = modelName.includes('Pro') || modelName.includes('Max');

  const screenOrigPrice = Math.round(3500 * basePriceMultiplier);
  const screenPremPrice = Math.round(screenOrigPrice * 0.65);
  
  const batteryOrigPrice = Math.round(1800 * (basePriceMultiplier * 0.75));
  const batteryPremPrice = Math.round(batteryOrigPrice * 0.7);

  const backGlassPrice = Math.round(1200 * (basePriceMultiplier * 0.8));
  const cameraPrice = Math.round(2400 * basePriceMultiplier);
  const chargingPortPrice = Math.round(1500 * (basePriceMultiplier * 0.7));
  const speakerPrice = Math.round(1100 * (basePriceMultiplier * 0.65));
  const motherboardPrice = Math.round(3800 * basePriceMultiplier);

  return [
    {
      id: `${modelName.toLowerCase().replace(/\s+/g, '-')}-screen-orig`,
      partName: 'OLED Display (Original Apple Grade)',
      partNameAr: 'شاشة أصلية كاملة (ضمان سنة)',
      category: 'screen',
      quality: 'original',
      qualityLabel: 'Original Apple Grade',
      qualityLabelAr: 'أصلي وكيل 100%',
      price: screenOrigPrice,
      regularPrice: Math.round(screenOrigPrice * 1.15),
      monthlyInstallment: Math.round(screenOrigPrice / 12),
      warrantyMonths: 12,
      warrantyLabel: '1 Year Full Warranty',
      warrantyLabelAr: 'ضمان سنة كاملة',
      estimatedTimeMinutes: 45
    },
    {
      id: `${modelName.toLowerCase().replace(/\s+/g, '-')}-screen-prem`,
      partName: 'OLED Display (Premium Quality)',
      partNameAr: 'شاشة هاي كوبي فرز أول',
      category: 'screen',
      quality: 'premium',
      qualityLabel: 'Premium Quality',
      qualityLabelAr: 'فرز أول جودة عالية',
      price: screenPremPrice,
      regularPrice: Math.round(screenPremPrice * 1.15),
      monthlyInstallment: Math.round(screenPremPrice / 12),
      warrantyMonths: 6,
      warrantyLabel: '6 Months Warranty',
      warrantyLabelAr: 'ضمان 6 شهور',
      estimatedTimeMinutes: 30
    },
    {
      id: `${modelName.toLowerCase().replace(/\s+/g, '-')}-battery-orig`,
      partName: 'Battery 100% (Original Apple Spec)',
      partNameAr: 'بطارية أصلية (سعة 100% مع ضمان)',
      category: 'battery',
      quality: 'original',
      qualityLabel: 'Original Apple Grade',
      qualityLabelAr: 'أصلية 100%',
      price: batteryOrigPrice,
      regularPrice: Math.round(batteryOrigPrice * 1.15),
      monthlyInstallment: Math.round(batteryOrigPrice / 12),
      warrantyMonths: 12,
      warrantyLabel: '1 Year Warranty',
      warrantyLabelAr: 'ضمان سنة كاملة',
      estimatedTimeMinutes: 30
    },
    {
      id: `${modelName.toLowerCase().replace(/\s+/g, '-')}-battery-prem`,
      partName: 'Battery High Capacity (Premium Grade)',
      partNameAr: 'بطارية سعة عالية (درجة أولى)',
      category: 'battery',
      quality: 'premium',
      qualityLabel: 'Premium Quality',
      qualityLabelAr: 'درجة أولى high capacity',
      price: batteryPremPrice,
      regularPrice: Math.round(batteryPremPrice * 1.15),
      monthlyInstallment: Math.round(batteryPremPrice / 12),
      warrantyMonths: 6,
      warrantyLabel: '6 Months Warranty',
      warrantyLabelAr: 'ضمان 6 شهور',
      estimatedTimeMinutes: 25
    },
    {
      id: `${modelName.toLowerCase().replace(/\s+/g, '-')}-backglass`,
      partName: 'Laser Back Glass Replacement',
      partNameAr: 'تغيير الظهر الزجاج بالليزر',
      category: 'backglass',
      quality: 'original',
      qualityLabel: 'Original Glass Finish',
      qualityLabelAr: 'زجاج أصل بالليزر',
      price: backGlassPrice,
      regularPrice: Math.round(backGlassPrice * 1.2),
      monthlyInstallment: Math.round(backGlassPrice / 12),
      warrantyMonths: 6,
      warrantyLabel: '6 Months Warranty',
      warrantyLabelAr: 'ضمان 6 شهور',
      estimatedTimeMinutes: 90
    },
    {
      id: `${modelName.toLowerCase().replace(/\s+/g, '-')}-camera`,
      partName: 'iSight Rear Camera Assembly',
      partNameAr: 'كاميرا خلفية أصلية كاملا',
      category: 'camera',
      quality: 'original',
      qualityLabel: 'Original Part',
      qualityLabelAr: 'قطعة أصلية',
      price: cameraPrice,
      regularPrice: Math.round(cameraPrice * 1.15),
      monthlyInstallment: Math.round(cameraPrice / 12),
      warrantyMonths: 12,
      warrantyLabel: '1 Year Warranty',
      warrantyLabelAr: 'ضمان سنة كاملة',
      estimatedTimeMinutes: 40
    },
    {
      id: `${modelName.toLowerCase().replace(/\s+/g, '-')}-charging`,
      partName: 'Lightning / USB-C Charging Port Flex',
      partNameAr: 'فلاتة مدخل الشحن الأصلي',
      category: 'charging',
      quality: 'original',
      qualityLabel: 'Original Cable Assembly',
      qualityLabelAr: 'فلاتة مدخل شحن أصلية',
      price: chargingPortPrice,
      regularPrice: Math.round(chargingPortPrice * 1.15),
      monthlyInstallment: Math.round(chargingPortPrice / 12),
      warrantyMonths: 12,
      warrantyLabel: '1 Year Warranty',
      warrantyLabelAr: 'ضمان سنة كاملة',
      estimatedTimeMinutes: 45
    },
    {
      id: `${modelName.toLowerCase().replace(/\s+/g, '-')}-speaker`,
      partName: 'Loudspeaker & Ear Speaker Module',
      partNameAr: 'السماعة الخارجية وسماعة المكالمات',
      category: 'speaker',
      quality: 'original',
      qualityLabel: 'Original Sound Module',
      qualityLabelAr: 'سماعة أصلية nfc',
      price: speakerPrice,
      regularPrice: Math.round(speakerPrice * 1.15),
      monthlyInstallment: Math.round(speakerPrice / 12),
      warrantyMonths: 12,
      warrantyLabel: '1 Year Warranty',
      warrantyLabelAr: 'ضمان سنة كاملة',
      estimatedTimeMinutes: 30
    },
    {
      id: `${modelName.toLowerCase().replace(/\s+/g, '-')}-motherboard`,
      partName: 'Logic Board & IC Micro-soldering / Water Damage',
      partNameAr: 'إصلاح البوردة الميكروسكوبي والمياه',
      category: 'motherboard',
      quality: 'original',
      qualityLabel: 'Certified Micro-Repair',
      qualityLabelAr: 'صيانة بوردة متخصصة',
      price: motherboardPrice,
      regularPrice: Math.round(motherboardPrice * 1.2),
      monthlyInstallment: Math.round(motherboardPrice / 12),
      warrantyMonths: 12,
      warrantyLabel: '1 Year Warranty',
      warrantyLabelAr: 'ضمان سنة كاملة',
      estimatedTimeMinutes: 180
    }
  ];
}

export const REPAIR_MODELS: DeviceModel[] = [
  // iPhone X Series
  { id: 'iphone-x', name: 'iPhone X', series: 'iPhone X Series', releaseYear: 2017, parts: createPartsForModel('iPhone X', 0.6) },
  { id: 'iphone-xr', name: 'iPhone XR', series: 'iPhone X Series', releaseYear: 2018, parts: createPartsForModel('iPhone XR', 0.65) },
  { id: 'iphone-xs', name: 'iPhone XS', series: 'iPhone X Series', releaseYear: 2018, parts: createPartsForModel('iPhone XS', 0.68) },
  { id: 'iphone-xs-max', name: 'iPhone XS Max', series: 'iPhone X Series', releaseYear: 2018, parts: createPartsForModel('iPhone XS Max', 0.75) },

  // iPhone 11 Series
  { id: 'iphone-11', name: 'iPhone 11', series: 'iPhone 11 Series', releaseYear: 2019, parts: createPartsForModel('iPhone 11', 0.8) },
  { id: 'iphone-11-pro', name: 'iPhone 11 Pro', series: 'iPhone 11 Series', releaseYear: 2019, parts: createPartsForModel('iPhone 11 Pro', 0.9) },
  { id: 'iphone-11-pro-max', name: 'iPhone 11 Pro Max', series: 'iPhone 11 Series', releaseYear: 2019, parts: createPartsForModel('iPhone 11 Pro Max', 1.0) },

  // iPhone 12 Series
  { id: 'iphone-12-mini', name: 'iPhone 12 mini', series: 'iPhone 12 Series', releaseYear: 2020, parts: createPartsForModel('iPhone 12 mini', 0.95) },
  { id: 'iphone-12', name: 'iPhone 12', series: 'iPhone 12 Series', releaseYear: 2020, parts: createPartsForModel('iPhone 12', 1.1) },
  { id: 'iphone-12-pro', name: 'iPhone 12 Pro', series: 'iPhone 12 Series', releaseYear: 2020, parts: createPartsForModel('iPhone 12 Pro', 1.25) },
  { id: 'iphone-12-pro-max', name: 'iPhone 12 Pro Max', series: 'iPhone 12 Series', releaseYear: 2020, parts: createPartsForModel('iPhone 12 Pro Max', 1.4) },

  // iPhone 13 Series
  { id: 'iphone-13-mini', name: 'iPhone 13 mini', series: 'iPhone 13 Series', releaseYear: 2021, parts: createPartsForModel('iPhone 13 mini', 1.15) },
  { id: 'iphone-13', name: 'iPhone 13', series: 'iPhone 13 Series', releaseYear: 2021, parts: createPartsForModel('iPhone 13', 1.35) },
  { id: 'iphone-13-pro', name: 'iPhone 13 Pro', series: 'iPhone 13 Series', releaseYear: 2021, parts: createPartsForModel('iPhone 13 Pro', 1.55) },
  { id: 'iphone-13-pro-max', name: 'iPhone 13 Pro Max', series: 'iPhone 13 Series', releaseYear: 2021, parts: createPartsForModel('iPhone 13 Pro Max', 1.75) },

  // iPhone 14 Series
  { id: 'iphone-14', name: 'iPhone 14', series: 'iPhone 14 Series', releaseYear: 2022, parts: createPartsForModel('iPhone 14', 1.5) },
  { id: 'iphone-14-plus', name: 'iPhone 14 Plus', series: 'iPhone 14 Series', releaseYear: 2022, parts: createPartsForModel('iPhone 14 Plus', 1.65) },
  { id: 'iphone-14-pro', name: 'iPhone 14 Pro', series: 'iPhone 14 Series', releaseYear: 2022, parts: createPartsForModel('iPhone 14 Pro', 1.95) },
  { id: 'iphone-14-pro-max', name: 'iPhone 14 Pro Max', series: 'iPhone 14 Series', releaseYear: 2022, parts: createPartsForModel('iPhone 14 Pro Max', 2.2) },

  // iPhone 15 Series
  { id: 'iphone-15', name: 'iPhone 15', series: 'iPhone 15 Series', releaseYear: 2023, parts: createPartsForModel('iPhone 15', 1.8) },
  { id: 'iphone-15-plus', name: 'iPhone 15 Plus', series: 'iPhone 15 Series', releaseYear: 2023, parts: createPartsForModel('iPhone 15 Plus', 2.0) },
  { id: 'iphone-15-pro', name: 'iPhone 15 Pro', series: 'iPhone 15 Series', releaseYear: 2023, parts: createPartsForModel('iPhone 15 Pro', 2.4) },
  { id: 'iphone-15-pro-max', name: 'iPhone 15 Pro Max', series: 'iPhone 15 Series', releaseYear: 2023, parts: createPartsForModel('iPhone 15 Pro Max', 2.7) },

  // iPhone 16 Series
  { id: 'iphone-16', name: 'iPhone 16', series: 'iPhone 16 Series', releaseYear: 2024, parts: createPartsForModel('iPhone 16', 2.2) },
  { id: 'iphone-16-plus', name: 'iPhone 16 Plus', series: 'iPhone 16 Series', releaseYear: 2024, parts: createPartsForModel('iPhone 16 Plus', 2.45) },
  { id: 'iphone-16-pro', name: 'iPhone 16 Pro', series: 'iPhone 16 Series', releaseYear: 2024, parts: createPartsForModel('iPhone 16 Pro', 2.85) },
  { id: 'iphone-16-pro-max', name: 'iPhone 16 Pro Max', series: 'iPhone 16 Series', releaseYear: 2024, parts: createPartsForModel('iPhone 16 Pro Max', 3.2) },

  // iPhone 17 Series
  { id: 'iphone-17', name: 'iPhone 17', series: 'iPhone 17 Series', releaseYear: 2025, parts: createPartsForModel('iPhone 17', 2.6) },
  { id: 'iphone-17-pro-max', name: 'iPhone 17 Pro Max', series: 'iPhone 17 Series', releaseYear: 2025, parts: createPartsForModel('iPhone 17 Pro Max', 3.6) }
];
