import React, { useState, useMemo } from 'react';
import { REPAIR_MODELS } from '../data/repairData';
import { DeviceModel, RepairPartOption, Language } from '../types';
import { Wrench, ShieldCheck, Clock, CheckCircle2, AlertCircle, Calendar, Sparkles, ChevronDown } from 'lucide-react';

interface RepairEstimatorProps {
  lang: Language;
  onSelectRepairForBooking: (model: DeviceModel, part: RepairPartOption) => void;
}

export const RepairEstimator: React.FC<RepairEstimatorProps> = ({
  lang,
  onSelectRepairForBooking
}) => {
  const isAr = lang === 'ar';

  const [selectedModelId, setSelectedModelId] = useState<string>('iphone-15-pro-max');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [qualityFilter, setQualityFilter] = useState<'all' | 'original' | 'premium'>('all');

  // Selected device object
  const selectedModel = useMemo(() => {
    return REPAIR_MODELS.find(m => m.id === selectedModelId) || REPAIR_MODELS[0];
  }, [selectedModelId]);

  // Filtered parts for selected model
  const filteredParts = useMemo(() => {
    return selectedModel.parts.filter(part => {
      const matchCategory = selectedCategory === 'all' || part.category === selectedCategory;
      const matchQuality = qualityFilter === 'all' || part.quality === qualityFilter;
      return matchCategory && matchQuality;
    });
  }, [selectedModel, selectedCategory, qualityFilter]);

  // Categories list
  const categories = [
    { id: 'all', label: isAr ? 'جميع الخدمات' : 'All Repairs' },
    { id: 'screen', label: isAr ? 'تغيير الشاشة' : 'Screen / OLED' },
    { id: 'battery', label: isAr ? 'تغيير البطارية' : 'Battery' },
    { id: 'backglass', label: isAr ? 'الظهر الزجاج (ليزر)' : 'Back Glass' },
    { id: 'camera', label: isAr ? 'الكاميرا وعدسة الكاميرا' : 'Camera' },
    { id: 'charging', label: isAr ? 'مدخل الشحن' : 'Charging Port' },
    { id: 'speaker', label: isAr ? 'السماعات والميكروفون' : 'Audio / Speaker' },
    { id: 'motherboard', label: isAr ? 'صيانة البوردة والمياه' : 'Motherboard / Water' },
  ];

  return (
    <section id="repair-estimator" className="py-16 md:py-24 border-b border-white/10 relative">
      
      {/* GLOW DECORATION */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-wide px-4 md:px-8 relative z-10 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-4 h-4" />
            <span>{isAr ? 'حاسبة أسعار صيانة الآيفون الرسمية' : 'iPhone Repair Estimator & Booking'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Outfit'] tracking-tight">
            {isAr ? (
              <>اختر موديل جهازك واستعلم عن <span className="text-gradient-blue">السعر والضمان</span></>
            ) : (
              <>Select Your Model & Explore <span className="text-gradient-blue">Instant Repair Pricing</span></>
            )}
          </h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {isAr
              ? 'تغطي خدمة صيانة بوينت اي جميع موديلات الآيفون من iPhone X إلى iPhone 17 Pro Max. قطع غيار أصلية 100% مع ضمان سنة كاملة وتقسيط على 12 شهر بدون فوائد.'
              : 'Detailed breakdown for all iPhone models from iPhone X up to iPhone 17 Pro Max. Original parts, up to 1-Year Warranty, and zero-interest 12-month installment plans.'}
          </p>
        </div>

        {/* STEP 1: MODEL SELECTOR */}
        <div className="glass-panel p-6 md:p-8 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black">1</span>
                <span>{isAr ? 'اختر نوع وموديل جهازك' : 'Choose iPhone Model'}</span>
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {isAr ? 'يدعم موديلات iPhone X, XS, 11, 12, 13, 14, 15, 16, 17' : 'Supported iPhone X, XS, 11, 12, 13, 14, 15, 16, 17 & Pro Max series'}
              </p>
            </div>

            {/* QUICK DROPDOWN SELECTOR */}
            <div className="relative min-w-[260px]">
              <select
                value={selectedModelId}
                onChange={(e) => setSelectedModelId(e.target.value)}
                className="w-full appearance-none bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl px-4 py-3 text-sm font-bold text-white cursor-pointer focus:outline-none focus:border-blue-500 transition-all pr-10"
              >
                {REPAIR_MODELS.map((model) => (
                  <option key={model.id} value={model.id} className="bg-gray-900 text-white">
                    {model.name} ({model.series})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* VISUAL MODEL SCROLLABLE PILL BAR */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {REPAIR_MODELS.map((model) => {
              const isSelected = model.id === selectedModelId;
              return (
                <button
                  key={model.id}
                  onClick={() => setSelectedModelId(model.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border shrink-0 ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30'
                      : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                  }`}
                >
                  {model.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 2: SERVICE CATEGORY & QUALITY FILTER */}
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* CATEGORY TABS */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                      isActive
                        ? 'bg-white text-black border-white shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* QUALITY TIER SWITCHER */}
            <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10 self-start lg:self-auto">
              <button
                onClick={() => setQualityFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  qualityFilter === 'all' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {isAr ? 'الكل' : 'All Quality'}
              </button>
              <button
                onClick={() => setQualityFilter('original')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  qualityFilter === 'original' ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {isAr ? 'أصلي 100%' : 'Original Only'}
              </button>
              <button
                onClick={() => setQualityFilter('premium')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  qualityFilter === 'premium' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {isAr ? 'هاي كوبي' : 'Premium Grade'}
              </button>
            </div>

          </div>

          {/* REPAIR OPTIONS CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredParts.map((part) => {
              const isOriginal = part.quality === 'original';

              return (
                <div
                  key={part.id}
                  className="glass-card p-6 flex flex-col justify-between space-y-6 relative overflow-hidden group border-white/10 hover:border-blue-500/50"
                >
                  {/* TOP BADGES */}
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide border ${
                        isOriginal
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                          : 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                      }`}
                    >
                      {isAr ? part.qualityLabelAr : part.qualityLabel}
                    </span>

                    <span className="flex items-center gap-1 text-[11px] text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      <Clock className="w-3 h-3" />
                      <span>{part.estimatedTimeMinutes} {isAr ? 'دقيقة' : 'mins'}</span>
                    </span>
                  </div>

                  {/* TITLE & DETAILS */}
                  <div className="space-y-2">
                    <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                      {selectedModel.name}
                    </div>
                    <h4 className="text-lg font-extrabold text-white group-hover:text-blue-300 transition-colors">
                      {isAr ? part.partNameAr : part.partName}
                    </h4>

                    {/* WARRANTY INFORMATION */}
                    <div className="flex items-center gap-2 text-xs text-gray-300 pt-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-semibold text-emerald-300">
                        {isAr ? part.warrantyLabelAr : part.warrantyLabel}
                      </span>
                    </div>
                  </div>

                  {/* PRICING & INSTALLMENTS BREAKDOWN */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-white font-mono">
                          {part.price.toLocaleString()} EGP
                        </span>
                        <span className="text-xs text-gray-500 line-through font-mono">
                          {part.regularPrice.toLocaleString()} EGP
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                        {isAr ? 'خصم كاش' : 'Cash Price'}
                      </span>
                    </div>

                    {/* 0% INSTALLMENT BAR */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                      <span className="font-medium">{isAr ? 'أو قسط صيانة (12 شهر):' : '0% Installment (12 M):'}</span>
                      <span className="font-bold text-amber-400 font-mono">
                        ~{part.monthlyInstallment.toLocaleString()} {isAr ? 'جنيه/شهرياً' : 'EGP/mo'}
                      </span>
                    </div>
                  </div>

                  {/* CTA BUTTON FOR APPOINTMENT BOOKING */}
                  <button
                    onClick={() => onSelectRepairForBooking(selectedModel, part)}
                    className="w-full btn-primary py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-blue-600 transition-all shadow-lg shadow-blue-600/20"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{isAr ? 'احجز موعد الصيانة الآن' : 'Schedule Appointment'}</span>
                  </button>

                </div>
              );
            })}
          </div>

          {filteredParts.length === 0 && (
            <div className="text-center py-12 glass-panel space-y-3">
              <AlertCircle className="w-10 h-10 text-amber-400 mx-auto" />
              <div className="text-lg font-bold text-white">
                {isAr ? 'لا توجد نتائج مطابقة لهذه الفلترة' : 'No repairs found for selected filters'}
              </div>
              <p className="text-xs text-gray-400">
                {isAr ? 'جرب تغيير فئة الخدمة أو نوع الجودة' : 'Try selecting All Repairs or All Quality options above.'}
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
