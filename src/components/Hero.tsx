import React from 'react';
import { Wrench, Smartphone, ShieldCheck, MapPin, Clock, Award, ChevronRight, Zap, CheckCircle } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onOpenRepair: () => void;
  onExploreProducts: () => void;
  onOpenTradeIn: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenRepair,
  onExploreProducts,
  onOpenTradeIn
}) => {
  const isAr = lang === 'ar';

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-white/10">
      
      {/* BACKGROUND GLOW ACCENTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-wide relative z-10 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT TEXT CONTENT */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* LOCATION BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs md:text-sm font-semibold shadow-lg shadow-blue-900/20">
              <MapPin className="w-4 h-4 text-blue-400 animate-bounce" />
              <span>
                {isAr
                  ? 'مول اسبانيا بلازا - الشيخ زايد - مصر'
                  : 'Espana Plaza Mall • El Sheikh Zayed, Egypt'}
              </span>
            </div>

            {/* MAIN HEADING */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-['Outfit'] leading-[1.1]">
              {isAr ? (
                <>
                  مركز صيانة وتجهيز <br />
                  <span className="text-gradient-blue">أجهزة Apple الأصلية</span> <br />
                  في الشيخ زايد
                </>
              ) : (
                <>
                  Your Ultimate <br />
                  <span className="text-gradient-blue">Apple & Smartphone</span> <br />
                  Hub in Sheikh Zayed
                </>
              )}
            </h1>

            {/* SUBTITLE */}
            <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {isAr
                ? 'بوينت اي هو وجهتك المتكاملة لشراء أحدث هواتف الآيفون الجديدة والأجهزة الكسر زيرو المضمونة، صيانة متخصصة فورية لجميع فئات الآيفون من iPhone X حتى 17 Pro Max مع قطع غيار أصلية وضمان سنة.'
                : 'POINT A is your premier Apple flagship store & certified repair lounge. Explore new iPhones, certified pre-owned devices, original accessories, and instant repair support with up to 1-Year Warranty.'}
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenRepair}
                className="btn-primary py-4 px-8 text-base font-bold rounded-2xl shadow-xl shadow-blue-600/30 hover:scale-105 transition-all"
              >
                <Wrench className="w-5 h-5" />
                <span>{isAr ? 'حسب تكلفة الصيانة واحجز فوراً' : 'Check Repair Prices & Book'}</span>
              </button>

              <button
                onClick={onExploreProducts}
                className="btn-secondary py-4 px-6 text-base font-semibold rounded-2xl border-white/20 hover:border-white/40"
              >
                <Smartphone className="w-5 h-5 text-blue-400" />
                <span>{isAr ? 'تصفح كسر الزيرو والجديد' : 'Browse Devices & Cases'}</span>
              </button>

              <button
                onClick={onOpenTradeIn}
                className="px-5 py-4 text-sm font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-2xl transition-all"
              >
                <span>{isAr ? '🔄 بيع / استبدل جهازك القديم' : '🔄 Trade-In Your Device'}</span>
              </button>
            </div>

            {/* TRUST PILLARS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs md:text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isAr ? 'قطع غيار أصلية 100%' : '100% Original Parts'}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{isAr ? 'ضمان سنة كاملة' : '1 Year Real Warranty'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isAr ? 'تسليم في نفس اليوم' : 'Same-Day Repair'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{isAr ? 'استلام وتوصيل بالزايد' : 'Pickup in Sheikh Zayed'}</span>
              </div>
            </div>

          </div>

          {/* RIGHT VISUAL CARD */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-6 sm:p-8 relative z-10 border-white/15 shadow-2xl space-y-6">
              
              {/* STORE SIGN SHOWCASE */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-black p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Logo Mark: matching store logo */}
                    <div className="w-12 h-12 bg-black border border-white/30 rounded-2xl flex items-center justify-center p-2.5 shadow-lg">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                        <circle cx="30" cy="62" r="18" />
                        <rect x="42" y="20" width="40" height="18" rx="9" transform="rotate(45 62 29)" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-extrabold text-2xl text-white font-['Outfit'] tracking-wide">POINT A</div>
                      <div className="text-xs text-blue-400 font-semibold">{isAr ? 'فرع اسبانيا بلازا مول' : 'Espana Plaza Branch'}</div>
                    </div>
                  </div>
                  
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-semibold animate-pulse">
                    ● {isAr ? 'مفتوح الآن' : 'Open Now'}
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {isAr
                    ? 'مول اسبانيا بلازا - مدينة الشيخ زايد - محافظة الجيزة. مواعيد العمل يومياً من 11 صباحاً حتى 11 مساءً.'
                    : 'Espana Plaza Mall, El Sheikh Zayed, Giza. Open daily 11:00 AM - 11:00 PM.'}
                </p>

                {/* WHATSAPP ACTION CARD */}
                <a
                  href="https://wa.me/201070455777?text=مرحباً%20بوينت%20اي%20عايز%20استفسر%20عن%20صيانة%20او%20شراء%20جهاز"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-sm font-bold transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💬</span>
                    <span>{isAr ? 'واتساب مباشر: 01070455777' : 'Direct WhatsApp: 01070455777'}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-emerald-400" />
                </a>
              </div>

              {/* REPAIR ESTIMATOR HIGHLIGHT */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-gray-400">
                  <span>{isAr ? 'حاسبة أسعار صيانة الآيفون' : 'iPhone Repair Rate Estimator'}</span>
                  <span className="text-blue-400">{isAr ? 'تحديث لحظي' : 'Live Update'}</span>
                </div>
                <div className="text-sm font-bold text-white flex items-center justify-between">
                  <span>iPhone 15 Pro / 16 Pro Max</span>
                  <span className="text-emerald-400 font-mono">From 1,400 EGP</span>
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isAr ? 'استبدال شاشة وبطارية في 30 دقيقة' : 'Screen & Battery replacement in 30 mins'}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
