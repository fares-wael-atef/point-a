import React, { useState } from 'react';
import { Smartphone, RefreshCw, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface TradeInCalculatorProps {
  lang: Language;
}

export const TradeInCalculator: React.FC<TradeInCalculatorProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const [currentPhone, setCurrentPhone] = useState('iPhone 13 Pro');
  const [storage, setStorage] = useState('128GB');
  const [batteryHealth, setBatteryHealth] = useState(88);
  const [bodyCondition, setBodyCondition] = useState('Clean / No Scratches');

  // Dynamic estimated value calculation
  const estimatedTradeValue = Math.round(
    (currentPhone.includes('15') ? 35000 : currentPhone.includes('14') ? 27000 : currentPhone.includes('13') ? 21000 : 14000) *
      (batteryHealth / 100) *
      (storage === '256GB' ? 1.15 : storage === '512GB' ? 1.25 : 1.0)
  );

  return (
    <section id="trade-in" className="py-16 md:py-24 border-b border-white/10 relative">
      <div className="max-w-wide px-4 md:px-8 relative z-10">
        <div className="glass-panel p-8 md:p-12 border-blue-500/30">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT DETAILS & FORM */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase">
                <RefreshCw className="w-4 h-4" />
                <span>{isAr ? 'حاسبة تقييم الاستبدال المباشر' : 'Instant Device Trade-In Valuator'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit']">
                {isAr ? (
                  <>بدل جهازك القديم بآيفون جديد <span className="text-gradient-blue">وادفع الفرق فقط</span></>
                ) : (
                  <>Trade-In Your Old iPhone & <span className="text-gradient-blue">Pay Only the Difference</span></>
                )}
              </h2>

              <p className="text-sm text-gray-300">
                {isAr
                  ? 'يقوم خبراء بوينت اي بفحص جهازك بدقة واستلامه بأعلى قيمة سوقية بالشيخ زايد لاحتسابها كخصم مباشر عند شراء جهاز جديد أو كسر زيرو.'
                  : 'Get the highest guaranteed market trade-in value for your old iPhone at Espana Plaza Mall.'}
              </p>

              {/* INPUT FIELDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-2">
                    {isAr ? 'موديل جهازك الحالي:' : 'Your Current Model:'}
                  </label>
                  <select
                    value={currentPhone}
                    onChange={(e) => setCurrentPhone(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm font-bold text-white"
                  >
                    <option value="iPhone 15 Pro Max" className="bg-gray-900">iPhone 15 Pro Max</option>
                    <option value="iPhone 15 Pro" className="bg-gray-900">iPhone 15 Pro</option>
                    <option value="iPhone 14 Pro Max" className="bg-gray-900">iPhone 14 Pro Max</option>
                    <option value="iPhone 14 Pro" className="bg-gray-900">iPhone 14 Pro</option>
                    <option value="iPhone 13 Pro Max" className="bg-gray-900">iPhone 13 Pro Max</option>
                    <option value="iPhone 13 Pro" className="bg-gray-900">iPhone 13 Pro</option>
                    <option value="iPhone 13" className="bg-gray-900">iPhone 13</option>
                    <option value="iPhone 12 Pro Max" className="bg-gray-900">iPhone 12 Pro Max</option>
                    <option value="iPhone 12" className="bg-gray-900">iPhone 12</option>
                    <option value="iPhone 11 Pro Max" className="bg-gray-900">iPhone 11 Pro Max</option>
                    <option value="iPhone 11" className="bg-gray-900">iPhone 11</option>
                    <option value="iPhone XS Max / X" className="bg-gray-900">iPhone XS Max / X</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-2">
                    {isAr ? 'المساحة التخزينية:' : 'Storage Capacity:'}
                  </label>
                  <select
                    value={storage}
                    onChange={(e) => setStorage(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm font-bold text-white"
                  >
                    <option value="128GB" className="bg-gray-900">128 GB</option>
                    <option value="256GB" className="bg-gray-900">256 GB</option>
                    <option value="512GB" className="bg-gray-900">512 GB</option>
                    <option value="1TB" className="bg-gray-900">1 TB</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-2">
                    {isAr ? `نسبة البطارية الحالي: (${batteryHealth}%)` : `Battery Health: (${batteryHealth}%)`}
                  </label>
                  <input
                    type="range"
                    min="70"
                    max="100"
                    value={batteryHealth}
                    onChange={(e) => setBatteryHealth(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-2">
                    {isAr ? 'حالة الشاسي والزجاج:' : 'Physical Body Condition:'}
                  </label>
                  <select
                    value={bodyCondition}
                    onChange={(e) => setBodyCondition(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm font-bold text-white"
                  >
                    <option value="Clean / No Scratches" className="bg-gray-900">{isAr ? 'ممتازة - بدون خدوش' : 'Clean / No Scratches'}</option>
                    <option value="Minor Scratches" className="bg-gray-900">{isAr ? 'خربوش بسيط بالشاسي' : 'Minor Frame Scratches'}</option>
                    <option value="Cracked Back Glass" className="bg-gray-900">{isAr ? 'شرح بالظهر الزجاج' : 'Cracked Back Glass'}</option>
                  </select>
                </div>

              </div>

            </div>

            {/* RIGHT ESTIMATED RESULT CARD */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-950/80 to-black border border-blue-500/40 text-center space-y-6 shadow-2xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400">
                  {isAr ? 'القيمة التقديرية لجهازك' : 'Estimated Trade-In Credit'}
                </span>

                <div className="text-4xl md:text-5xl font-black text-white font-mono">
                  ~{estimatedTradeValue.toLocaleString()} <span className="text-lg text-emerald-400">EGP</span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {isAr
                    ? 'هذا السعر تقريبي بناءً على اختيارك. يرجى زيارة فرعنا باسبانيا بلازا مول زايد أو التنسيق عبر الواتساب للفحص النهائي.'
                    : 'This is an estimated trade credit value. Bring your device to Espana Plaza Mall or contact via WhatsApp for final appraisal.'}
                </p>

                <a
                  href={`https://wa.me/201070455777?text=مرحباً%20بوينت%20اي%20عايز%20استبدل%20جهازي%20${encodeURIComponent(currentPhone)}%20مساحة%20${storage}%20بطارية%20${batteryHealth}%25`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-whatsapp py-4 rounded-xl font-extrabold text-sm justify-center shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{isAr ? 'تأكيد التقييم والحجز عبر الواتساب' : 'Confirm Trade-In on WhatsApp'}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
