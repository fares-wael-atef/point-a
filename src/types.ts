export type Language = 'en' | 'ar';

export type QualityTier = 'original' | 'premium';

export interface RepairPartOption {
  id: string;
  partName: string;
  partNameAr: string;
  category: 'screen' | 'battery' | 'backglass' | 'camera' | 'charging' | 'speaker' | 'motherboard';
  quality: QualityTier;
  qualityLabel: string;
  qualityLabelAr: string;
  price: number; // EGP
  regularPrice: number; // EGP
  monthlyInstallment: number; // EGP for 12 months 0%
  warrantyMonths: number;
  warrantyLabel: string;
  warrantyLabelAr: string;
  estimatedTimeMinutes: number;
}

export interface DeviceModel {
  id: string;
  name: string; // e.g. "iPhone 15 Pro Max"
  series: string; // e.g. "iPhone 15 Series"
  releaseYear: number;
  image?: string;
  parts: RepairPartOption[];
}

export interface Product {
  id: string;
  name: string;
  nameAr: string;
  category: 'new-iphones' | 'pre-owned' | 'accessories';
  categoryLabel: string;
  categoryLabelAr: string;
  price: number;
  originalPrice?: number;
  storage?: string;
  color?: string;
  batteryHealth?: number; // for pre-owned
  conditionGrade?: 'Sealed' | 'Grade A+ (Mint)' | 'Grade A (Like New)';
  conditionGradeAr?: string;
  warranty: string;
  warrantyAr: string;
  inStock: boolean;
  image: string;
  description: string;
  descriptionAr: string;
  highlights: string[];
  highlightsAr: string[];
}

export interface RepairBookingRequest {
  deviceModel: string;
  issueCategory: string;
  partSelected: RepairPartOption;
  problemSummary: string;
  fullName: string;
  phone: string;
  serviceType: 'store_visit' | 'free_pickup';
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}
