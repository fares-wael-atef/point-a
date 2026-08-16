import React from 'react';
import { MapPin, Phone, MessageCircle, Instagram, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const isAr = lang === 'ar';

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-12 text-gray-400 text-xs">
      <div className="max-w-wide px-4 md:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* BRAND COL */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border border-white/30 rounded-xl flex items-center justify-center p-2">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                  <circle cx="30" cy="62" r="18" />
                  <rect x="42" y="20" width="40" height="18" rx="9" transform="rotate(45 62 29)" />
                </svg>
              </div>
              <div className="font-extrabold text-2xl text-white font-['Outfit']">POINT A</div>
            </div>

            <p className="leading-relaxed text-gray-400">
              {isAr
                ? 'متجر ومركز صيانة أجهزة أبل المعتمد بالشيخ زايد. بيع هواتف الآيفون الجديدة والكسر زيرو والإكسسوارات الأصلية مع ضمان شامل.'
                : 'Premium Apple sales, certified pre-owned, original accessories, and professional iPhone repair at Espana Plaza Mall Sheikh Zayed.'}
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">
              {isAr ? 'روابط سريعة' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('repair-estimator')} className="hover:text-white transition-colors">
                  {isAr ? 'حاسبة صيانة الآيفون' : 'iPhone Repair Menu'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog-new')} className="hover:text-white transition-colors">
                  {isAr ? 'أجهزة آيفون جديدة' : 'New iPhones'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog-used')} className="hover:text-white transition-colors">
                  {isAr ? 'أجهزة مستعملة كسر زيرو' : 'Pre-Owned Devices'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('trade-in')} className="hover:text-white transition-colors">
                  {isAr ? 'حاسبة تقييم الاستبدال' : 'Trade-In Valuator'}
                </button>
              </li>
            </ul>
          </div>

          {/* STORE DETAILS */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">
              {isAr ? 'موقع الفرع' : 'Store Location'}
            </h4>
            <p className="leading-relaxed text-gray-300">
              {isAr
                ? 'اسبانيا بلازا مول - مدينة الشيخ زايد - الجيزة - مصر.'
                : 'Espana Plaza Mall, El Sheikh Zayed, Giza, Egypt.'}
            </p>
            <div className="font-bold text-emerald-400 font-mono">
              WhatsApp: 01070455777
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">
              {isAr ? 'التواصل الاجتماعي' : 'Follow Us'}
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/pointastores"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition-all"
                title="Instagram @pointastores"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@pointastore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-cyan-600 text-white flex items-center justify-center transition-all font-black"
                title="TikTok @pointastore"
              >
                🎵
              </a>
              <a
                href="https://wa.me/201070455777"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-all"
                title="WhatsApp 01070455777"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            © {new Date().getFullYear()} POINT A. All Rights Reserved. Espana Plaza Mall Sheikh Zayed.
          </div>
          <div className="flex items-center gap-1">
            <span>Designed with precision for</span>
            <span className="text-white font-bold">POINT A</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
