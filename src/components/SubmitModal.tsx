import React, { useState } from 'react';
import { X, PlusCircle, CheckCircle2, Sparkles } from 'lucide-react';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onSubmitSuccess: (data: any) => void;
}

export const SubmitModal: React.FC<SubmitModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  onSubmitSuccess,
}) => {
  const [submitType, setSubmitType] = useState<'tool' | 'prompt'>('tool');
  const [name, setName] = useState('');
  const [urlOrText, setUrlOrText] = useState('');
  const [category, setCategory] = useState('developers');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmitSuccess({ submitType, name, urlOrText, category, description });
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setUrlOrText('');
      setDescription('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className={`relative w-full max-w-lg rounded-2xl overflow-hidden border shadow-2xl p-6 ${
        darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 mb-4">
          <div className="flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-indigo-400" />
            <h3 className="font-extrabold text-lg">إضافة أداة أو برومبت جديد</h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-2">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="font-bold text-base text-emerald-400">شكراً لمشاركتك!</h4>
            <p className="text-xs text-slate-300">تم استلام اقتراحك وسيتم مراجعته وإضافته للـ دليل مباشرة.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Toggle Tool or Prompt */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-bold">
              <button
                type="button"
                onClick={() => setSubmitType('tool')}
                className={`py-2 rounded-lg transition-colors ${
                  submitType === 'tool' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                }`}
              >
                إضافة أداة ذكاء اصطناعي
              </button>
              <button
                type="button"
                onClick={() => setSubmitType('prompt')}
                className={`py-2 rounded-lg transition-colors ${
                  submitType === 'prompt' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                }`}
              >
                إضافة برومبت جاهز
              </button>
            </div>

            <div>
              <label className="text-xs font-semibold block mb-1">
                {submitType === 'tool' ? 'اسم الأداة' : 'عنوان البرومبت'}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={submitType === 'tool' ? 'مثال: DeepSeek Code' : 'مثال: مصحح أخطاء بايثون'}
                className={`w-full p-2.5 rounded-xl border text-xs outline-none ${
                  darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              />
            </div>

            <div>
              <label className="text-xs font-semibold block mb-1">
                {submitType === 'tool' ? 'رابط الأداة المباشر' : 'نص البرومبت الكامل'}
              </label>
              {submitType === 'tool' ? (
                <input
                  type="url"
                  required
                  value={urlOrText}
                  onChange={(e) => setUrlOrText(e.target.value)}
                  placeholder="https://..."
                  className={`w-full p-2.5 rounded-xl border text-xs outline-none ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                />
              ) : (
                <textarea
                  required
                  rows={3}
                  value={urlOrText}
                  onChange={(e) => setUrlOrText(e.target.value)}
                  placeholder="الصق البرومبت هنا..."
                  className={`w-full p-2.5 rounded-xl border text-xs outline-none ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                />
              )}
            </div>

            <div>
              <label className="text-xs font-semibold block mb-1">التصنيف الرئيسي</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={`w-full p-2.5 rounded-xl border text-xs outline-none ${
                  darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              >
                <option value="developers">أدوات المبرمجين والطلاب</option>
                <option value="gameDev">أدوات تطوير الألعاب والـ Pixel Art</option>
                <option value="imageGen">إنشاء الصور والوسائط</option>
                <option value="localModels">نماذج محلية Offline</option>
                <option value="textGen">توليد النصوص والأبحاث</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold block mb-1">وصف مختصر والمميزات المجانية</label>
              <textarea
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="اشرح الخيارات المجانية المتاحة..."
                className={`w-full p-2.5 rounded-xl border text-xs outline-none ${
                  darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>إرسال للاعتماد في الدليل</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
