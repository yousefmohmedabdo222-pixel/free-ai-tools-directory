import React from 'react';
import { Info } from 'lucide-react';

interface AdSensePlaceholderProps {
  type: 'ad-banner-top' | 'ad-sidebar' | 'ad-in-article';
  darkMode: boolean;
  className?: string;
}

export const AdSensePlaceholder: React.FC<AdSensePlaceholderProps> = ({
  type,
  darkMode,
  className = '',
}) => {
  let label = 'مكسب إعلاني - AdSense Placeholder';
  let heightClass = 'h-24';

  if (type === 'ad-banner-top') {
    label = 'إعلان أعلى الصفحة (AdSense Banner Top Slot)';
    heightClass = 'h-24 sm:h-28';
  } else if (type === 'ad-sidebar') {
    label = 'إعلان القائمة الجانبية (AdSense Sidebar Responsive Slot)';
    heightClass = 'h-64 sm:h-80';
  } else if (type === 'ad-in-article') {
    label = 'إعلان داخل المحتوى (AdSense In-Article Responsive Slot)';
    heightClass = 'h-32 sm:h-36';
  }

  return (
    <div 
      className={`${type} relative rounded-xl border border-dashed p-4 flex flex-col items-center justify-center text-center transition-all my-6 ${heightClass} ${
        darkMode 
          ? 'bg-slate-800/40 border-slate-700 text-slate-400' 
          : 'bg-slate-100 border-slate-300 text-slate-500'
      } ${className}`}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="bg-indigo-500/20 text-indigo-400 text-[10px] font-bold px-2 py-0.5 rounded border border-indigo-500/30">
          AdSense Placeholder
        </span>
        <span className="text-xs font-semibold">{label}</span>
      </div>
      <p className="text-[11px] opacity-75 max-w-md font-mono dir-ltr">
        &lt;ins class="adsbygoogle" data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"&gt;&lt;/ins&gt;
      </p>
      <div className="absolute bottom-1.5 right-2 flex items-center gap-1 text-[10px] opacity-60">
        <Info className="w-3 h-3" />
        <span>جاهز لاستبدال الشفرة عند الموافقة</span>
      </div>
    </div>
  );
};
