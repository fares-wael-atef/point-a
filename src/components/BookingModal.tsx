import React, { useState } from 'react';
import { DeviceModel, RepairPartOption, Language } from '../types';
import { X, Wrench, Calendar, Clock, MapPin, CheckCircle, MessageCircle, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  lang: Language;
  preselectedModel?: DeviceModel;
  preselectedPart?: RepairPartOption;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  lang,
  preselectedModel,
  preselectedPart,
  onClose
}) => {
  const isAr = lang === 'ar';

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState<'store_visit' | 'free_pickup'>('store_visit');
  const [preferredDate, setPreferredDate] = useState(new Date().toISOString().split('T')[0]);
  const [preferredTime, setPreferredTime] = useState('02:00 PM');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const deviceName = preselectedModel ? preselectedModel.name : 'iPhone';
    const partName = preselectedPart ? (isAr ? preselectedPart.partNameAr : preselectedPart.partName) : 'General Repair';
    const priceText = preselectedPart ? `${preselectedPart.price.toLocaleString()} EGP` : 'TBD';

    const message = isAr
      ? `🛠️ *حجز موعد صيانة جديد - POINT A*\n\n` +
        `👤 *الاسم:* ${fullName}\n` +
        `📞 *الهاتف:* ${phone}\n` +
        `📱 *الجهاز:* ${deviceName}\n` +
        `🔧 *قطعة الغيار / الخدمة:* ${partName}\n` +
        `💰 *السعر التقديري:* ${priceText}\n` +
        `📍 *نوع الخدمة:* ${serviceType === 'store_visit' ? 'زيارة فرع اسبانيا بلازا مول' : 'استلام واستلام من مكان العميل (الشيخ زايد)'}\n` +
        `📅 *التاريخ:* ${preferredDate}\n` +
        `⏰ *الوقت:* ${preferredTime}\n` +
        (notes ? `📝 *ملاحظات:* ${notes}\n` : '') +
        `\nرجاء تأكيد الحجز وإخطاري بالموعد النهائي.`
      : `🛠️ *New Repair Booking Request - POINT A*\n\n` +
        `👤 *Name:* ${fullName}\n` +
        `📞 *Phone:* ${phone}\n` +
        `📱 *Device:* ${deviceName}\n` +
        `🔧 *Service:* ${partName}\n` +
        `💰 *Estimated Price:* ${priceText}\n` +
        `📍 *Service Type:* ${serviceType === 'store_visit' ? 'In-Store Visit (Espana Plaza Mall)' : 'Free Pickup & Delivery (Sheikh Zayed)'}\n` +
        `📅 *Date:* ${preferredDate}\n` +
        `⏰ *Time:* ${preferredTime}\n` +
        (notes ? `📝 *Notes:* ${notes}\n` : '') +
        `\nPlease confirm my appointment slot.`;

    const whatsappUrl = `https://wa.me/201070455777?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="glass-panel p-6 sm:p-8 max-w-xl w-full relative border-blue-500/40 shadow-2xl max-h-[95vh] overflow-y-auto">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* MODAL HEADER */}
        <div className="space-y-2 mb-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold">
            <Wrench className="w-3.5 h-3.5" />
            <span>{isAr ? 'حجز موعد صيانة مؤكد' : 'Confirmed Appointment Reservation'}</span>
          </div>

          <h3 className="text-2xl font-extrabold text-white font-['Outfit']">
            {isAr ? 'استكمال بيانا الحجز والتأكيد' : 'Complete Your Booking Details'}
          </h3>

          {preselectedModel && preselectedPart && (
            <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-between text-xs font-bold text-white">
              <div>
                <span className="text-blue-400">{preselectedModel.name}</span> - {isAr ? preselectedPart.partNameAr : preselectedPart.partName}
              </div>
              <div className="text-emerald-400 font-mono text-sm">
                {preselectedPart.price.toLocaleString()} EGP
              </div>
            </div>
          )}
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-xs font-bold text-gray-300 mb-1.5">
              {isAr ? 'الاسم بالكامل:' : 'Full Name:'}
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder={isAr ? 'أدخل اسمك الكريم' : 'Enter your full name'}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 mb-1.5">
              {isAr ? 'رقم الهاتف / الواتساب:' : 'Mobile / WhatsApp Number:'}
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="01000000000"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* SERVICE LOCATION CHOICE */}
          <div>
            <label className="block text-xs font-bold text-gray-300 mb-1.5">
              {isAr ? 'مكان تقديم الخدمة:' : 'Service Option:'}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setServiceType('store_visit')}
                className={`p-3 rounded-xl text-xs font-bold text-center border transition-all ${
                  serviceType === 'store_visit'
                    ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                }`}
              >
                🏢 {isAr ? 'زيارة فرع اسبانيا بلازا' : 'Store Visit (Espana Plaza)'}
              </button>

              <button
                type="button"
                onClick={() => setServiceType('free_pickup')}
                className={`p-3 rounded-xl text-xs font-bold text-center border transition-all ${
                  serviceType === 'free_pickup'
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                }`}
              >
                🚚 {isAr ? 'استلام ورجوع مجاناً بالزايد' : 'Free Pickup in Zayed'}
              </button>
            </div>
          </div>

          {/* DATE & TIME PICKER */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">
                {isAr ? 'تاريخ الحجز المفصل:' : 'Preferred Date:'}
              </label>
              <input
                type="date"
                required
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">
                {isAr ? 'الوقت المناسب:' : 'Preferred Time Slot:'}
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-xs font-bold text-white"
              >
                <option value="12:00 PM" className="bg-gray-900">12:00 PM</option>
                <option value="02:00 PM" className="bg-gray-900">02:00 PM</option>
                <option value="04:00 PM" className="bg-gray-900">04:00 PM</option>
                <option value="06:00 PM" className="bg-gray-900">06:00 PM</option>
                <option value="08:00 PM" className="bg-gray-900">08:00 PM</option>
                <option value="10:00 PM" className="bg-gray-900">10:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 mb-1.5">
              {isAr ? 'توصيف إضافي المشكلة:' : 'Problem Summary / Additional Notes:'}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={isAr ? 'مثل: الشاشة مكسورة بالكامل، الجهاز تعرض لسائل، إلخ...' : 'e.g. Broken touch glass, battery draining quickly...'}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full btn-whatsapp py-3.5 rounded-xl font-bold text-sm text-center justify-center shadow-xl mt-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{isAr ? 'إرسال الحجز مباشرة عبر الواتساب (01070455777)' : 'Confirm Booking via WhatsApp (01070455777)'}</span>
          </button>

        </form>

      </div>
    </div>
  );
};
