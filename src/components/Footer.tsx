import React from 'react';
import { LegalPageType } from '../types';
import { Sparkles, ShieldCheck, FileText, Info, Mail, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  onOpenLegalPage: (type: LegalPageType) => void;
  setActiveSection: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  darkMode,
  onOpenLegalPage,
  setActiveSection,
}) => {
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      id="main-footer"
      className={`border-t transition-colors pt-12 pb-8 ${
        darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-900 border-slate-800 text-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <span className="font-extrabold text-base text-white">
                دليل الذكاء الاصطناعي المجاني
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              المرجع العربي الأول لتكتشف وتستخدم وتجرب أحدث أدوات الذكاء الاصطناعي المجانية والمفتوحة المصدر للمبرمجين، الطلاب، ومطوري الألعاب.
            </p>
          </div>

          {/* Column 2: Sections */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-indigo-400 uppercase tracking-wider">
              أقسام الدليل
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('developers')} className="hover:text-white transition-colors">
                  أدوات المبرمجين والطلاب
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('gameDev')} className="hover:text-white transition-colors">
                  أدوات تطوير الألعاب والـ Pixel Art
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('blog')} className="hover:text-white transition-colors">
                  الشروحات والمقالات
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('comparison')} className="hover:text-white transition-colors">
                  مقارنة النماذج المتطورة
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('prompts')} className="hover:text-white transition-colors">
                  مكتبة البرومبتات التفاعلية
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: AdSense Compliance Pages (Mandatory) */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-indigo-400 uppercase tracking-wider">
              الصفحات القانونية (AdSense)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onOpenLegalPage('privacy')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>سياسة الخصوصية (Privacy Policy)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegalPage('terms')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>شروط الاستخدام (Terms of Use)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegalPage('about')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-slate-400" />
                  <span>من نحن (About Us)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegalPage('contact')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>اتصل بنا (Contact Us)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & AdSense Ready Badge */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-indigo-400 uppercase tracking-wider">
              النشرة التقنية
            </h4>
            <p className="text-xs text-slate-400">
              احصل على أحدث أدوات الذكاء الاصطناعي المجانية المضافة أسبوعياً.
            </p>
            <div className="flex gap-1.5">
              <input
                type="email"
                placeholder="بريدك الإلكتروني..."
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white outline-none focus:border-indigo-500"
              />
              <button className="px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shrink-0">
                اشتراك
              </button>
            </div>
            <span className="inline-block text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
              ✓ تم تجهيز الهيكل ليتوافق تماماً مع Google AdSense
            </span>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            جميع الحقوق محفوظة © 2026 - دليل أدوات الذكاء الاصطناعي المجانية
          </p>

          <p className="flex items-center gap-1 text-[11px]">
            صُنع بـ <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> للمجتمع التقني العربي
          </p>
        </div>

      </div>
    </footer>
  );
};
