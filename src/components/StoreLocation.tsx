import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Instagram, Share2 } from 'lucide-react';
import { Language } from '../types';

interface StoreLocationProps {
  lang: Language;
}

export const StoreLocation: React.FC<StoreLocationProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const igUrl = 'https://www.instagram.com/pointastores';
  const tiktokUrl = 'https://www.tiktok.com/@pointastore';
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Espana+Plaza+Mall+El+Sheikh+Zayed+Egypt';

  return (
    <section id="location-info" className="py-16 md:py-24 border-b border-white/10 relative">
      <div className="max-w-wide px-4 md:px-8 relative z-10 space-y-12">
        
        {/* HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase">
            <MapPin className="w-4 h-4" />
            <span>{isAr ? 'موقع واسم الفرع في الشيخ زايد' : 'Store Location & Official Social Channels'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Outfit'] tracking-tight">
            {isAr ? (
              <>تشرفنا بزيارتك في <span className="text-gradient-blue">اسبانيا بلازا مول</span></>
            ) : (
              <>Visit Us at <span className="text-gradient-blue">Espana Plaza Mall</span></>
            )}
          </h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {isAr
              ? 'يقع فرع بوينت اي بمركز اسبانيا بلازا مول بالشيخ زايد - محافظة الجيزة. يسعدنا استقبالكم يومياً لفحص أجهزتكم، الشراء الفوري، وتصفح أحدث الإكسسوارات.'
              : 'Located at Espana Plaza Mall, El Sheikh Zayed, Egypt. Open daily to serve all your Apple purchase, trade-in, and repair needs.'}
          </p>
        </div>

        {/* LOCATION & SOCIAL CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LOCATION INFO CARD */}
          <div className="glass-panel p-8 flex flex-col justify-between space-y-6 border-white/15">
            <div className="space-y-4">
              
              {/* LOGO MARK */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 bg-black border border-white/30 rounded-xl flex items-center justify-center p-2">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                    <circle cx="30" cy="62" r="18" />
                    <rect x="42" y="20" width="40" height="18" rx="9" transform="rotate(45 62 29)" />
                  </svg>
                </div>
                <div>
                  <div className="font-extrabold text-xl text-white font-['Outfit']">POINT A</div>
                  <div className="text-xs text-blue-400 font-semibold">{isAr ? 'فرع اسبانيا بلازا - الشيخ زايد' : 'Espana Plaza Mall Branch'}</div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">
                      {isAr ? 'العنوان بالضبط:' : 'Exact Location:'}
                    </strong>
                    <span>
                      {isAr
                        ? 'اسبانيا بلازا مول - مدينة الشيخ زايد - محافظة الجيزة - مصر.'
                        : 'Espana Plaza Mall, El Sheikh Zayed, Giza Governorate, Egypt.'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">
                      {isAr ? 'ساعات العمل الرسمية:' : 'Working Hours:'}
                    </strong>
                    <span>{isAr ? 'يومياً من 11:00 صباحاً حتى 11:00 مساءً' : 'Daily from 11:00 AM to 11:00 PM'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">
                      {isAr ? 'الواتساب والهاتف:' : 'WhatsApp & Phone:'}
                    </strong>
                    <span className="font-mono text-emerald-300 font-bold">01070455777</span>
                  </div>
                </div>
              </div>

            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3.5 rounded-xl text-xs font-bold text-center justify-center shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{isAr ? 'فتح اللوكيشن على خرائط جوجل' : 'Open Location on Google Maps'}</span>
            </a>
          </div>

          {/* INSTAGRAM SOCIAL CARD */}
          <div className="glass-panel p-8 flex flex-col justify-between space-y-6 border-pink-500/20 bg-gradient-to-b from-pink-950/20 to-black">
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-extrabold text-lg text-white font-['Outfit']">@pointastores</div>
                  <div className="text-xs text-pink-400 font-semibold">Official Instagram</div>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                {isAr
                  ? 'تابع حسابتنا على انستجرام لمشاهدة فيديو فحص الأجهزة كسر الزيرو اليومية، وعروض الصيانة وتغطيات الفرع مباشرة.'
                  : 'Follow our official Instagram feed for daily pre-owned inventory updates, repair videos, and exclusive store offers.'}
              </p>
            </div>

            <a
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>{isAr ? 'متابعة صفحتنا على الانستجرام' : 'Follow @pointastores on Instagram'}</span>
            </a>
          </div>

          {/* TIKTOK SOCIAL CARD */}
          <div className="glass-panel p-8 flex flex-col justify-between space-y-6 border-cyan-500/20 bg-gradient-to-b from-cyan-950/20 to-black">
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-black border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-black text-xl shadow-lg">
                  🎵
                </div>
                <div>
                  <div className="font-extrabold text-lg text-white font-['Outfit']">@pointastore</div>
                  <div className="text-xs text-cyan-400 font-semibold">Official TikTok</div>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                {isAr
                  ? 'شاهد فيديوهات الصيانة تحت المجهر، واختبارات كسر الزيرو والتوعية بشرائح الآيفون على تيك توك بوينت اي.'
                  : 'Watch microscope motherboard repairs, battery health tests, and short phone reviews on our official TikTok account.'}
              </p>
            </div>

            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition-all"
            >
              <span>🎵 {isAr ? 'متابعة صفحتنا على تيك توك' : 'Follow @pointastore on TikTok'}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
