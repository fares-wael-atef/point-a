import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* TOOLTIP LABEL */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-black/90 backdrop-blur-md border border-emerald-500/40 text-xs font-extrabold text-emerald-400 shadow-xl">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>{isAr ? 'تواصل واتساب: 01070455777' : 'WhatsApp Us: 01070455777'}</span>
      </div>

      {/* CIRCULAR BUTTON */}
      <a
        href="https://wa.me/201070455777?text=مرحباً%20بوينت%20اي%20عايز%20استفسر%20عن%20صيانة%20او%20شراء%20جهاز"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:scale-110 transition-all duration-300 group"
        title="Chat on WhatsApp 01070455777"
      >
        <MessageCircle className="w-7 h-7 fill-current group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};
