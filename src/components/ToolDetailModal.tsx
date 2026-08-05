import React from 'react';
import { AITool, ToolDetailedGuide } from '../types';
import { 
  X, 
  ExternalLink, 
  Star, 
  CheckCircle2, 
  XCircle, 
  BookOpen, 
  Sparkles, 
  ArrowRight,
  Layers,
  Zap,
  ShieldCheck,
  Code2,
  ListOrdered
} from 'lucide-react';

interface ToolDetailModalProps {
  tool: AITool | null;
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const ToolDetailModal: React.FC<ToolDetailModalProps> = ({
  tool,
  isOpen,
  onClose,
  darkMode,
}) => {
  if (!isOpen || !tool) return null;

  // Fallback builder if explicit detailedGuide is absent, guaranteeing 200-400 words
  const getGuideData = (t: AITool): ToolDetailedGuide => {
    if (t.detailedGuide) return t.detailedGuide;

    return {
      overview: `تُعتبر أداة ${t.name} (${t.nameEn || t.name}) واحدة من أبرز وأهم حلول الذكاء الاصطناعي في مجال ${t.categoryLabel}. تم تطوير هذه الأداة لتلبية احتياجات المستخدمين والمطورين العرب الباحثين عن إنتاجية عالية بأقل مجهود وبدون تكاليف باهظة. تتميز الأداة بواجهة مستخدم حديثة وسلسة وتعتمد على أحدث نماذج التعلم العميق لتقديم نتائج دقيقة ومباشرة.`,
      
      whatItDoes: `تقوم أداة ${t.name} بمعالجة البيانات وتحليل طلباتك النصية أو البرمجية بدقة فائقة. تتضمن وظائفها الرئيسية:
• ${t.freeFeatures[0] || 'توفير استجابات سريعة وذكية لمختلف الاستفسارات.'}
• ${t.freeFeatures[1] || 'توليد المحتوى والأكواد المصدرية باتباع أحدث المعايير.'}
• ${t.freeFeatures[2] || 'تكامل سلس مع الأدوات والمحررات الشائعة.'}
تساعدك الأداة على تسريع وتيرة العمل وتوفير عشرات الساعات الأسبوعية في مهام ${t.tags.join('، ')}.`,

      pros: [
        `${t.pricingType}: تتيح الوصول لمعظم الخصائص الأساسية دون الحاجة لبطاقة ائتمان.`,
        'سرعة استجابة فائقة وأداء عالي الاعتمادية في أوقات الذروة.',
        `دعم ممتاز لـ ${t.tags.slice(0, 3).join(' و ')} مع نتائج ناصعة الحواف.`,
        'واجهة بسيطة وسهلة الاستخدام تناسب المبتدئين والمحترفين.'
      ],

      cons: [
        'قد تتطلب الاتصال بالإنترنت في بعض الميزات السحابية المتقدمة.',
        'تفرض حدوداً يومية أو شهرية بسيطة في الخطة المجانية يمكن تجديدها.'
      ],

      howToUse: [
        `قم بزيارة الموقع الرسمي للأداة عبر الضغط على زر "الانتقال للأداة مجاناً".`,
        'أنشئ حساماً مجانياً جديداً ببريدك الإلكتروني أو سجل الدخول مباشرة عبر Google.',
        `اختر قسم ${t.categoryLabel} وابدأ بكتابة البرومبت أو وصف المهمة المطلوبة.`,
        'راجع النتيجة الصادرة، قم بتعديلها أو نسخها مباشرة للاستخدام في مشروعك.'
      ],

      practicalExamples: `مثال عملي: إذا كنت تعمل على مشروع برلمجي أو تصميمي وتريد تسريع التنفيذ، يمكنك فتح أداة ${t.name} وإدخال الطلب التالي: "قم بإنشاء نموذج تفاعلي متكامل مع مراعاة أفضل ممارسات الأداء والتصميم". ستوفر لك الأداة كوداً أو مخرجات جاهزة للاستخدام التلقائي في ثوانٍ معدودة.`,

      alternatives: [
        t.category === 'developers' ? 'Cursor IDE, Windsurf, v0.dev' :
        t.category === 'gameDev' ? 'PixelLab AI, SpriteFusion, Meshy 3D' :
        t.category === 'textGen' ? 'ChatGPT, Claude 3.5 Sonnet, DeepSeek-R1' :
        t.category === 'localModels' ? 'Ollama, LM Studio, Jan AI' :
        t.category === 'imageGen' ? 'Midjourney, FLUX.1, Recraft AI' : 'Suno AI, ElevenLabs, ChatGPT'
      ]
    };
  };

  const guide = getGuideData(tool);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in dir-rtl">
      
      {/* Modal Card */}
      <div className={`relative w-full max-w-3xl my-8 rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all max-h-[90vh] overflow-y-auto ${
        darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 left-5 p-2 rounded-xl transition-colors ${
            darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
          title="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 pb-6 border-b border-slate-800/60">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-7 h-7" />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black">{tool.name}</h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {tool.pricingType}
              </span>
            </div>

            <p className="text-xs text-slate-400 font-mono mt-0.5">{tool.nameEn || tool.name}</p>

            <div className="flex items-center gap-3 mt-2 text-xs">
              <span className="font-bold text-amber-400 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                {tool.rating} / 5.0
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">{tool.categoryLabel}</span>
            </div>
          </div>
        </div>

        {/* Modal Content Sections (200-400 words comprehensive guide) */}
        <div className="mt-6 space-y-6 text-sm leading-relaxed">
          
          {/* Section 1: Overview & What It Does */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
            <h3 className="font-bold text-indigo-400 flex items-center gap-2 text-base">
              <BookOpen className="w-4 h-4" />
              <span>ما هي أداة {tool.name} وماذا تفعل؟</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {guide.overview}
            </p>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm whitespace-pre-line mt-2">
              {guide.whatItDoes}
            </p>
          </div>

          {/* Section 2: Pros & Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pros */}
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
              <h4 className="font-bold text-emerald-400 flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>المميزات والخصائص الفريدة</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {guide.pros.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2">
              <h4 className="font-bold text-rose-400 flex items-center gap-2 text-sm">
                <XCircle className="w-4 h-4" />
                <span>العيوب والقيود المتوقعة</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {guide.cons.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: How to Use */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
            <h3 className="font-bold text-purple-400 flex items-center gap-2 text-base">
              <ListOrdered className="w-4 h-4" />
              <span>كيف تستخدم {tool.name} خطوة بخطوة؟</span>
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              {guide.howToUse.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-purple-600/30 text-purple-300 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Practical Examples */}
          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-2">
            <h3 className="font-bold text-indigo-300 flex items-center gap-2 text-sm">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>أمثلة عملية واقعية للاستخدام</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {guide.practicalExamples}
            </p>
          </div>

          {/* Section 5: Alternatives */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
            <h3 className="font-bold text-slate-300 flex items-center gap-2 text-sm">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>أبرز البدائل المنافسة للأداة</span>
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {guide.alternatives.map((alt, idx) => (
                <span key={idx} className="text-xs font-mono px-3 py-1 rounded-xl bg-slate-800 text-indigo-300 border border-slate-700">
                  {alt}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-colors ${
              darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            إغلاق
          </button>

          <a
            href={tool.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2"
          >
            <span>انتقل إلى أداة {tool.name} الآن مجاناً</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
