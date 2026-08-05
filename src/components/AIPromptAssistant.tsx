import React, { useState } from 'react';
import { X, Bot, Sparkles, Send, RefreshCw, Wand2, ArrowRight } from 'lucide-react';

interface AIPromptAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  initialPromptToTest?: string;
}

export const AIPromptAssistant: React.FC<AIPromptAssistantProps> = ({
  isOpen,
  onClose,
  darkMode,
  initialPromptToTest = '',
}) => {
  const [activeMode, setActiveMode] = useState<'recommend' | 'enhance'>(
    initialPromptToTest ? 'enhance' : 'recommend'
  );
  const [queryInput, setQueryInput] = useState(
    initialPromptToTest ? initialPromptToTest : ''
  );
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string>('');

  React.useEffect(() => {
    if (initialPromptToTest) {
      setQueryInput(initialPromptToTest);
      setActiveMode('enhance');
    }
  }, [initialPromptToTest]);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!queryInput.trim()) return;

    setLoading(true);
    setAiResponse('');

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userQuery: queryInput,
          actionType: activeMode === 'enhance' ? 'enhancePrompt' : 'recommendTool',
          promptText: queryInput,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setAiResponse(data.response);
      } else {
        setAiResponse('حدث خطأ أثناء الحصول على الرد. يرجى إعادة المحاولة.');
      }
    } catch (err) {
      setAiResponse('عذراً، حدث خطأ في الاتصال بالذكاء الاصطناعي.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className={`relative w-full max-w-2xl rounded-2xl overflow-hidden border shadow-2xl p-6 flex flex-col max-h-[90vh] ${
        darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <Bot className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <h3 className="font-extrabold text-base">مساعد الذكاء الاصطناعي الذكي</h3>
              <p className="text-[11px] text-slate-400">اقترح الأدوات المناسبة وحسّن برومبتاتك بنقرة واحدة</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-bold mb-4">
          <button
            type="button"
            onClick={() => setActiveMode('recommend')}
            className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
              activeMode === 'recommend' ? 'bg-indigo-600 text-white' : 'text-slate-400'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ترشيح الأداة المناسبة لحاجتك</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('enhance')}
            className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
              activeMode === 'enhance' ? 'bg-indigo-600 text-white' : 'text-slate-400'
            }`}
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>تحسين وتجربة البرومبتات</span>
          </button>
        </div>

        {/* Query Input Area */}
        <div className="space-y-3 mb-4">
          <label className="text-xs font-semibold block text-slate-300">
            {activeMode === 'recommend'
              ? 'صف ماذا تريد أن تنجز ليرشح لك الذكاء الاصطناعي أفضل أداة مجانية:'
              : 'أدخل البرومبت أو السؤال المراد تحسينه والرد عليه:'}
          </label>
          <div className="relative">
            <textarea
              rows={3}
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
              placeholder={
                activeMode === 'recommend'
                  ? 'مثال: أريد أداة مجانية لتوليد رسومات Pixel Art شخصية العاب...'
                  : 'الصق البرومبت هنا لتحسينه واختباره...'
              }
              className={`w-full p-3 rounded-xl border text-xs outline-none ${
                darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
              }`}
            />
            <button
              onClick={handleSend}
              disabled={loading || !queryInput.trim()}
              className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1 disabled:opacity-50"
            >
              {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
              <span>{loading ? 'جاري التحليل...' : 'توليد الإجابة'}</span>
            </button>
          </div>
        </div>

        {/* Response Box */}
        {aiResponse && (
          <div className="flex-1 overflow-y-auto p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 leading-relaxed font-sans space-y-2 scrollbar-thin">
            <div className="flex items-center gap-2 text-indigo-400 font-bold border-b border-slate-800 pb-2">
              <Bot className="w-4 h-4" />
              <span>رد مساعد الذكاء الاصطناعي:</span>
            </div>
            <div className="whitespace-pre-wrap">{aiResponse}</div>
          </div>
        )}
      </div>
    </div>
  );
};
