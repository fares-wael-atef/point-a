import React, { useState } from 'react';
import { Phone, MessageCircle, Globe, Search, Wrench, Smartphone, ShoppingBag, MapPin, Menu, X } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  onLanguageToggle: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageToggle,
  activeSection,
  onNavigate,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAr = lang === 'ar';

  const navLinks = [
    { id: 'repair-estimator', label: isAr ? 'جدول الصيانة' : 'Repair Menu', icon: Wrench },
    { id: 'catalog-new', label: isAr ? 'أجهزة جديدة' : 'New iPhones', icon: Smartphone },
    { id: 'catalog-used', label: isAr ? 'كسر زيرو (مستعمل)' : 'Pre-Owned', icon: ShoppingBag },
    { id: 'catalog-accessories', label: isAr ? 'إكسسوارات' : 'Accessories', icon: ShoppingBag },
    { id: 'trade-in', label: isAr ? 'استبدل جهازك' : 'Trade-In', icon: Smartphone },
    { id: 'location-info', label: isAr ? 'موقع الفرع' : 'Location', icon: MapPin },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10 backdrop-blur-xl bg-black/80">
      <div className="max-w-wide flex items-center justify-between h-20 px-4 md:px-8">
        
        {/* LOGO BRANDING */}
        <div 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Logo Mark: matching store logo (circle + slanted rounded bar) */}
          <div className="w-10 h-10 bg-black border border-white/20 rounded-xl flex items-center justify-center p-2 shadow-inner group-hover:border-blue-500 transition-all">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
              <circle cx="30" cy="62" r="18" />
              <rect x="42" y="20" width="40" height="18" rx="9" transform="rotate(45 62 29)" />
            </svg>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-wider text-white font-['Outfit']">POINT</span>
              <span className="text-blue-500 font-extrabold text-2xl font-['Outfit']">A</span>
            </div>
            <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
              {isAr ? 'الشيخ زايد - اسبانيا بلازا' : 'Espana Plaza • Zayed'}
            </span>
          </div>
        </div>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          
          {/* LANGUAGE TOGGLE */}
          <button
            onClick={onLanguageToggle}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-200 transition-all"
            title="Switch Language"
          >
            <Globe className="w-4 h-4 text-blue-400" />
            <span>{isAr ? 'English' : 'العربية'}</span>
          </button>

          {/* QUICK REPAIR BOOKING CTA */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:flex btn-primary py-2.5 px-4 text-xs md:text-sm rounded-xl font-semibold shadow-lg shadow-blue-600/20"
          >
            <Wrench className="w-4 h-4" />
            <span>{isAr ? 'حجز صيانة' : 'Book Repair'}</span>
          </button>

          {/* WHATSAPP CONTACT DIRECT */}
          <a
            href="https://wa.me/201070455777?text=مرحباً%20بوينت%20اي%20عايز%20استفسر%20عن%20صيانة%20او%20شراء%20جهاز"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 transition-all"
            title="Chat on WhatsApp 01070455777"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl px-4 py-6 space-y-3">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 text-left text-gray-200 font-medium"
              >
                <Icon className="w-5 h-5 text-blue-400" />
                <span>{link.label}</span>
              </button>
            );
          })}
          
          <div className="pt-2">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full btn-primary py-3 text-center justify-center font-bold"
            >
              <Wrench className="w-5 h-5" />
              <span>{isAr ? 'حجز صيانة آيفون فورية' : 'Book iPhone Repair'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
