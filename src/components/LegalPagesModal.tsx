import React, { useState } from 'react';
import { LegalPageType } from '../types';
import { X, ShieldCheck, FileText, Info, Mail, Send, CheckCircle2 } from 'lucide-react';

interface LegalPagesModalProps {
  isOpen: boolean;
  pageType: LegalPageType;
  onClose: () => void;
  darkMode: boolean;
}

export const LegalPagesModal: React.FC<LegalPagesModalProps> = ({
  isOpen,
  pageType,
  onClose,
  darkMode,
}) => {
  const [activeTab, setActiveTab] = useState<LegalPageType>(pageType);

  // Sync activeTab when modal opens with a specific pageType
  React.useEffect(() => {
    setActiveTab(pageType);
  }, [pageType]);

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  if (!isOpen) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setContactName('');
      setContactEmail('');
      setContactSubject('');
      setContactMessage('');
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        id="legal-modal-container"
        className={`relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border shadow-2xl flex flex-col ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Modal Header & Tabs */}
        <div className={`p-4 sm:p-6 border-b flex flex-wrap items-center justify-between gap-4 ${
          darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-indigo-400" />
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight">
              الصفحات الإلزامية وسياسات الموقع (AdSense Ready)
            </h2>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              darkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-200 text-slate-600'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className={`flex items-center gap-1 p-2 border-b overflow-x-auto ${
          darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              activeTab === 'privacy'
                ? 'bg-indigo-600 text-white shadow-sm'
                : darkMode ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>سياسة الخصوصية (Privacy Policy)</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              activeTab === 'terms'
                ? 'bg-indigo-600 text-white shadow-sm'
                : darkMode ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>شروط الاستخدام (Terms of Use)</span>
          </button>

          <button
            onClick={() => setActiveTab('about')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              activeTab === 'about'
                ? 'bg-indigo-600 text-white shadow-sm'
                : darkMode ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>من نحن (About Us)</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              activeTab === 'contact'
                ? 'bg-indigo-600 text-white shadow-sm'
                : darkMode ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>اتصل بنا (Contact Us)</span>
          </button>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed scrollbar-thin">
          
          {/* 1. Privacy Policy */}
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-indigo-400">سياسة الخصوصية (Privacy Policy)</h3>
              <p className="text-slate-300">
                أهلاً بكم في موقع "دليل أدوات الذكاء الاصطناعي المجانية" (تحديث 2026). نحن نولي أهمية قصوى لخصوصية زوارنا الكرام. توضح هذه الوثيقة أنواع المعلومات الشخصية التي نجمعها وكيفية استخدامها.
              </p>

              <div className="space-y-2">
                <h4 className="font-bold text-white text-sm">1. ملفات تعريف الارتباط (Cookies) وخلفيات Google AdSense:</h4>
                <p className="text-slate-300">
                  يستخدم موقعنا ملفات تعريف الارتباط (Cookies) لتخزين معلومات حول تفضيلات الزوار، وتسجيل معلومات خاصة بالمستخدم حول الصفحات التي يزورها.
                </p>
                <p className="text-slate-300">
                  تستخدم شركة Google بصفتها مورّداً طرفاً ثالثاً ملفات تعريف الارتباط لخدمة الإعلانات على موقعنا. يتيح استخدام Google لملف تعريف الارتباط DART عرض الإعلانات للمستخدمين استناداً إلى زيارتهم لموقعنا والمواقع الأخرى على الإنترنت.
                </p>
                <p className="text-slate-300">
                  يمكن للمستخدمين إلغاء استخدام ملف تعريف الارتباط DART بزيارة سياسة الخصوصية الخاصة بشبكة Google للإعلانات والمحتوى.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white text-sm">2. جمع البيانات وحمايتها:</h4>
                <p className="text-slate-300">
                  نحن لا نجمع أي بيانات شخصية حساسة بدون إذنك المباشر. البيانات الوحيدة التي قد تُحفظ محلياً في متصفحك هي تفضيلات الوضع الداكن/الفاتح وقائمة الأدوات المفضلة المحفوظة لديك (Local Storage).
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white text-sm">3. حقوق الامتثال والتحديثات:</h4>
                <p className="text-slate-300">
                  نحتفظ بالحق في تعديل أو تحديث سياسة الخصوصية هذه في أي وقت لملائمة إرشادات متطلبات Google AdSense وقوانين الحماية العامة للبيانات (GDPR).
                </p>
              </div>
            </div>
          )}

          {/* 2. Terms of Use */}
          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-indigo-400">شروط الاستخدام (Terms of Use)</h3>
              <p className="text-slate-300">
                باستخدامك لموقع "دليل أدوات الذكاء الاصطناعي المجانية"، فإنك توافق على الالتزام بشروط وأحكام الاستخدام الموضحة أدناه:
              </p>

              <div className="space-y-2">
                <h4 className="font-bold text-white text-sm">1. الاستخدام المقبول للمحتوى:</h4>
                <p className="text-slate-300">
                  جميع أدوات الذكاء الاصطناعي، البرومبتات، والمعلومات المنشورة بالموقع مخصصة للاغراض التعليمية والتطويرية والتطبيقات المشروعة. يُحظر استخدام البرومبتات أو الأدوات لتوليد محتوى ضار، احتيالي، أو ينتهك القوانين.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white text-sm">2. إخلاء المسؤولية عن الروابط الخارجية:</h4>
                <p className="text-slate-300">
                  يحتوي دليلنا على روابط تؤدي إلى خدمات وأدوات ذكاء اصطناعي من أطراف خارجية (مثل DeepSeek, OpenAI, Anthropic, Google). نحن غير مسؤولين عن شروط استخدام أو سياسات الخصوصية الخاصة بهذه المواقع الخارجية.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white text-sm">3. حقوق الملكية الفكرية:</h4>
                <p className="text-slate-300">
                  تصميم الموقع، الشعار، وهيكلية دليل الأدوات مملوكة للموقع لعام 2026. يمكنك نسخ البرومبتات بحرية للاستخدام الشخصي والتجاري في مشاريعك.
                </p>
              </div>
            </div>
          )}

          {/* 3. About Us */}
          {activeTab === 'about' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-indigo-400">من نحن (About Us)</h3>
              <p className="text-slate-300 leading-relaxed">
                "دليل أدوات الذكاء الاصطناعي المجانية" هو مبادرة عربية تقنية مستقلة انطلقت عام 2026 بهدف دعم المبرمجين، الطلاب، الباحثين، ومطوري الألعاب العرب عبر توفير منصة موحدة وشاملة لاستكشاف ومقارنة وتجربة أحدث أدوات الذكاء الاصطناعي المتاحة مجاناً بالكامل.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <h4 className="font-bold text-white mb-1">رؤيتنا:</h4>
                  <p className="text-xs text-slate-300">
                    تمكين كل مطور وطالب عربي من استغلال ثورة الذكاء الاصطناعي بدون تكاليف مادية باهظة وبأقصى كفاءة.
                  </p>
                </div>
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <h4 className="font-bold text-white mb-1">مهمتنا:</h4>
                  <p className="text-xs text-slate-300">
                    تصفية واختبار وتوثيق الأدوات والبرومبتات بدقة مع إعطاء أولوية كاملة للحلول المجانية ومفتوحة المصدر.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 4. Contact Us */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-indigo-400">اتصل بنا (Contact Us)</h3>
              <p className="text-slate-300">
                لديك استفسار، أداة ترغب في إضافتها، أو إقتراح لتطوير الدليل؟ نسعد بتواصلك معنا وسيتم الرد عليك في أقرب وقت.
              </p>

              {formSent ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400 animate-bounce" />
                  <h4 className="font-bold text-base">تم إرسال رسالتك بنجاح!</h4>
                  <p className="text-xs">شكراً لتواصلك معنا. سنراجع استفسارك ونرد عليك عبر البريد الإلكتروني قريباً.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">الاسم الكامل</label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="أدخل اسمك"
                        className={`w-full p-2.5 rounded-xl border text-xs outline-none ${
                          darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">البريد الإلكتروني</label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="name@example.com"
                        className={`w-full p-2.5 rounded-xl border text-xs outline-none ${
                          darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">موضوع الرسالة</label>
                    <input
                      type="text"
                      required
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      placeholder="استفسار، إقتراح أداة، دعم تقني..."
                      className={`w-full p-2.5 rounded-xl border text-xs outline-none ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">نص الرسالة</label>
                    <textarea
                      required
                      rows={4}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="اكتب تفاصيل استفسارك هنا..."
                      className={`w-full p-2.5 rounded-xl border text-xs outline-none ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>إرسال الرسالة الآن</span>
                  </button>
                </form>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
