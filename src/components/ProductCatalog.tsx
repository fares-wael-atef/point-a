import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/productsData';
import { Product, Language } from '../types';
import { ShoppingBag, ShieldCheck, Battery, Check, Eye, MessageCircle, Sparkles, Filter, X } from 'lucide-react';

interface ProductCatalogProps {
  lang: Language;
  initialCategory?: string;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  lang,
  initialCategory = 'all'
}) => {
  const isAr = lang === 'ar';

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const categories = [
    { id: 'all', label: isAr ? 'جميع المنتجات' : 'All Products' },
    { id: 'new-iphones', label: isAr ? 'أجهزة آيفون جديدة' : 'New iPhones' },
    { id: 'pre-owned', label: isAr ? 'كسر زيرو (مستعمل)' : 'Pre-Owned' },
    { id: 'accessories', label: isAr ? 'جرابات وإكسسوارات' : 'Accessories' },
  ];

  return (
    <section id="product-catalog" className="py-16 md:py-24 border-b border-white/10 relative">
      
      {/* BG GLOW */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-wide px-4 md:px-8 relative z-10 space-y-12">
        
        {/* HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs font-bold uppercase tracking-wider">
            <ShoppingBag className="w-4 h-4" />
            <span>{isAr ? 'متجر بوينت اي الرسمي - الشيخ زايد' : 'Point A Official Store Catalog'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Outfit'] tracking-tight">
            {isAr ? (
              <>أجهزة جديد وكسر زيرو <span className="text-gradient-gold">بضمان حقيقي</span></>
            ) : (
              <>New & Certified Pre-Owned <span className="text-gradient-gold">Apple Devices</span></>
            )}
          </h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {isAr
              ? 'تصفح تشكيلة الأجهزة الجديدة ذات ضمان الوكيل، والأجهزة المستعملة بحالة الزيرو مع نسبة البطارية وضمان متجر بوينت اي الشامل، وأرقى الإكسسوارات الأصلية.'
              : 'Explore factory-sealed iPhones with agent warranty, mint condition pre-owned phones with verified battery health ratings, and premium MagSafe accessories.'}
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center justify-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all border whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-500 shadow-xl shadow-blue-600/30 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isUsed = product.category === 'pre-owned';

            return (
              <div
                key={product.id}
                className="glass-card p-5 flex flex-col justify-between space-y-5 border-white/10 hover:border-blue-500/40 relative group"
              >
                
                {/* IMAGE CONTAINER */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-950 border border-white/10 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* BATTERY HEALTH BADGE IF PRE-OWNED */}
                  {isUsed && product.batteryHealth && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-xs font-black rounded-full flex items-center gap-1.5 shadow-lg">
                      <Battery className="w-3.5 h-3.5 fill-current" />
                      <span>{product.batteryHealth}% {isAr ? 'بطارية' : 'Health'}</span>
                    </div>
                  )}

                  {/* CONDITION GRADE BADGE */}
                  {product.conditionGrade && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-extrabold rounded-md">
                      {isAr ? product.conditionGradeAr : product.conditionGrade}
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="space-y-2">
                  <div className="text-[11px] text-blue-400 font-bold uppercase tracking-wider">
                    {isAr ? product.categoryLabelAr : product.categoryLabel}
                  </div>

                  <h3 className="text-base font-bold text-white line-clamp-2 leading-snug">
                    {isAr ? product.nameAr : product.name}
                  </h3>

                  {/* WARRANTY BADGE */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{isAr ? product.warrantyAr : product.warranty}</span>
                  </div>
                </div>

                {/* PRICING & WHATSAPP ACTION */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-white font-mono">
                        {product.price.toLocaleString()} EGP
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through font-mono">
                          {product.originalPrice.toLocaleString()} EGP
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span>{isAr ? 'التفاصيل' : 'Details'}</span>
                    </button>

                    <a
                      href={`https://wa.me/201070455777?text=مرحباً%20بوينت%20اي%20عايز%20استفسر%20عن%20شراء%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl btn-whatsapp text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{isAr ? 'طلب الآن' : 'Inquire'}</span>
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* QUICK VIEW PRODUCT MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel p-6 md:p-8 max-w-2xl w-full relative border-white/20 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="aspect-square rounded-2xl overflow-hidden bg-black border border-white/10 p-4">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-bold">
                  {isAr ? selectedProduct.categoryLabelAr : selectedProduct.categoryLabel}
                </span>

                <h3 className="text-xl font-extrabold text-white">
                  {isAr ? selectedProduct.nameAr : selectedProduct.name}
                </h3>

                <div className="text-2xl font-black text-emerald-400 font-mono">
                  {selectedProduct.price.toLocaleString()} EGP
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {isAr ? selectedProduct.descriptionAr : selectedProduct.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="text-xs font-bold text-gray-400">{isAr ? 'المواصفات المميزة:' : 'Highlights:'}</div>
                  <ul className="space-y-1 text-xs text-gray-200">
                    {(isAr ? selectedProduct.highlightsAr : selectedProduct.highlights).map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/201070455777?text=مرحباً%20بوينت%20اي%20عايز%20أشتري%20${encodeURIComponent(selectedProduct.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-whatsapp py-3.5 rounded-xl font-bold text-sm text-center justify-center shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{isAr ? 'اطلب الجهاز عبر الواتساب (01070455777)' : 'Order via WhatsApp (01070455777)'}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
