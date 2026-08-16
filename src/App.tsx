import React, { useState } from 'react';
import { Language, DeviceModel, RepairPartOption } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RepairEstimator } from './components/RepairEstimator';
import { ProductCatalog } from './components/ProductCatalog';
import { TradeInCalculator } from './components/TradeInCalculator';
import { StoreLocation } from './components/StoreLocation';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar'); // Default to Arabic for Zayed customers, with English toggle
  const [activeSection, setActiveSection] = useState<string>('hero');
  
  // Booking modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingModel, setSelectedBookingModel] = useState<DeviceModel | undefined>(undefined);
  const [selectedBookingPart, setSelectedBookingPart] = useState<RepairPartOption | undefined>(undefined);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (model?: DeviceModel, part?: RepairPartOption) => {
    setSelectedBookingModel(model);
    setSelectedBookingPart(part);
    setIsBookingOpen(true);
  };

  return (
    <div className={`min-h-screen bg-black text-white ${lang === 'ar' ? 'font-["Tajawal"]' : 'font-["Inter"]'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* HEADER NAVIGATION */}
      <Header
        lang={lang}
        onLanguageToggle={toggleLanguage}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* MAIN SECTIONS */}
      <main>
        {/* HERO SECTION */}
        <div id="hero">
          <Hero
            lang={lang}
            onOpenRepair={() => handleNavigate('repair-estimator')}
            onExploreProducts={() => handleNavigate('product-catalog')}
            onOpenTradeIn={() => handleNavigate('trade-in')}
          />
        </div>

        {/* INTERACTIVE REPAIR ESTIMATOR & MENU */}
        <RepairEstimator
          lang={lang}
          onSelectRepairForBooking={(model, part) => handleOpenBooking(model, part)}
        />

        {/* PRODUCT CATALOG (NEW & PRE-OWNED PHONES & ACCESSORIES) */}
        <ProductCatalog
          lang={lang}
        />

        {/* TRADE-IN CALCULATOR */}
        <TradeInCalculator
          lang={lang}
        />

        {/* STORE LOCATION & SOCIAL MEDIA */}
        <StoreLocation
          lang={lang}
        />
      </main>

      {/* FLOATING WHATSAPP BUTTON */}
      <FloatingWhatsApp lang={lang} />

      {/* FOOTER */}
      <Footer lang={lang} onNavigate={handleNavigate} />

      {/* REPAIR APPOINTMENT BOOKING MODAL */}
      {isBookingOpen && (
        <BookingModal
          lang={lang}
          preselectedModel={selectedBookingModel}
          preselectedPart={selectedBookingPart}
          onClose={() => setIsBookingOpen(false)}
        />
      )}

    </div>
  );
};

export default App;
