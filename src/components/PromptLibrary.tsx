import React, { useState } from 'react';
import { AIPrompt, PromptCategory } from '../types';
import { 
  Terminal, 
  Copy, 
  Check, 
  Sparkles, 
  Code2, 
  Gamepad2, 
  BookOpen, 
  Sliders, 
  Bot, 
  Search,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

interface PromptLibraryProps {
  prompts: AIPrompt[];
  darkMode: boolean;
  onTestPromptWithAI: (promptText: string) => void;
}

export const PromptLibrary: React.FC<PromptLibraryProps> = ({
  prompts,
  darkMode,
  onTestPromptWithAI,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchPromptQuery, setSearchPromptQuery] = useState<string>('');
  
  // Track customized variable values per prompt ID: { promptId: { varKey: val } }
  const [userVariableValues, setUserVariableValues] = useState<{ [promptId: string]: { [varKey: string]: string } }>({});
  
  // Track copied status per prompt ID: { promptId: boolean }
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  const categories: { id: string; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: 'كافة البرومبتات', icon: Sparkles },
    { id: 'coding', label: 'البرمجة والأخطاء', icon: Code2 },
    { id: 'gameDev', label: 'تطوير الألعاب والـ Pixel Art', icon: Gamepad2 },
    { id: 'academic', label: 'الدراسة والأبحاث', icon: BookOpen },
    { id: 'engineering', label: 'هندسة البرومبتات', icon: Sliders },
  ];

  // Helper to handle input change for prompt variables
  const handleVariableChange = (promptId: string, varKey: string, value: string) => {
    setUserVariableValues((prev) => ({
      ...prev,
      [promptId]: {
        ...(prev[promptId] || {}),
        [varKey]: value,
      },
    }));
  };

  // Generate final filled prompt string
  const getFilledPrompt = (prompt: AIPrompt): string => {
    let result = prompt.promptTemplate;
    const currentVars = userVariableValues[prompt.id] || {};

    prompt.variables.forEach((v) => {
      const val = currentVars[v.key] !== undefined ? currentVars[v.key] : v.defaultValue;
      // Replace [key] placeholders
      const regex = new RegExp(`\\[${v.key}\\]`, 'g');
      result = result.replace(regex, val);
    });

    return result;
  };

  // Copy to clipboard function with feedback animation
  const handleCopy = async (prompt: AIPrompt) => {
    const finalPrompt = getFilledPrompt(prompt);
    try {
      await navigator.clipboard.writeText(finalPrompt);
      setCopiedPromptId(prompt.id);
      setTimeout(() => setCopiedPromptId(null), 2500);
    } catch (err) {
      console.error('Failed to copy prompt:', err);
    }
  };

  // Filter prompts
  const filteredPrompts = prompts.filter((p) => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) {
      return false;
    }
    if (searchPromptQuery.trim() !== '') {
      const q = searchPromptQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <section id="prompts" className="py-12 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>مكتبة تفاعلية - جاهزة للنسخ والتخصيص</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            مكتبة البرومبتات البرمجية والأكاديمية
          </h2>

          <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            اختر البرومبت المناسب، خصص المتغيرات المباشرة، ثم انقر على "نسخ إلى الحافظة" لتجربته مباشرة على نماذج الذكاء الاصطناعي.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                      : darkMode
                        ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar for Prompts */}
          <div className={`relative w-full md:w-72 rounded-xl p-1.5 border flex items-center gap-2 ${
            darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
          }`}>
            <Search className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
            <input
              type="text"
              value={searchPromptQuery}
              onChange={(e) => setSearchPromptQuery(e.target.value)}
              placeholder="ابحث في البرومبتات..."
              className={`w-full text-xs bg-transparent outline-none ${
                darkMode ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* Prompt Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPrompts.map((prompt) => {
            const finalPromptText = getFilledPrompt(prompt);
            const isCopied = copiedPromptId === prompt.id;

            return (
              <div
                key={prompt.id}
                id={`prompt-card-${prompt.id}`}
                className={`rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                  darkMode
                    ? 'bg-slate-900/90 border-slate-800 hover:border-purple-500/40'
                    : 'bg-white border-slate-200 shadow-sm hover:border-purple-300'
                }`}
              >
                <div>
                  {/* Prompt Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-bold text-base text-purple-300">
                        {prompt.title}
                      </h3>
                      <p className={`text-xs mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {prompt.description}
                      </p>
                    </div>

                    <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold px-2 py-1 rounded-md border border-purple-500/30 shrink-0">
                      موصى به: {prompt.recommendedModel}
                    </span>
                  </div>

                  {/* Interactive Variables Customization Form */}
                  {prompt.variables.length > 0 && (
                    <div className={`p-3 rounded-xl mb-3 space-y-2 border ${
                      darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <span className="text-[11px] font-bold text-indigo-400 flex items-center gap-1">
                        <Sliders className="w-3.5 h-3.5" />
                        <span>خصص المتغيرات المباشرة قبل النسخ:</span>
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {prompt.variables.map((v) => {
                          const currentVal =
                            userVariableValues[prompt.id]?.[v.key] !== undefined
                              ? userVariableValues[prompt.id][v.key]
                              : v.defaultValue;

                          return (
                            <div key={v.key} className="space-y-1">
                              <label className="text-[10px] font-medium text-slate-400 block">
                                {v.label}
                              </label>
                              <input
                                type="text"
                                value={currentVal}
                                onChange={(e) => handleVariableChange(prompt.id, v.key, e.target.value)}
                                placeholder={v.placeholder}
                                className={`w-full px-2.5 py-1.5 rounded-lg text-xs font-mono outline-none border ${
                                  darkMode
                                    ? 'bg-slate-900 border-slate-700 text-slate-200 focus:border-purple-500'
                                    : 'bg-white border-slate-300 text-slate-800 focus:border-purple-500'
                                }`}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Live Prompt Preview Terminal Box */}
                  <div className="relative group rounded-xl bg-slate-950 p-4 border border-slate-800 font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto max-h-48 scrollbar-thin">
                    <pre className="whitespace-pre-wrap break-words">
                      {finalPromptText}
                    </pre>
                  </div>
                </div>

                {/* Prompt Card Footer Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-800/60">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Copy className="w-3.5 h-3.5" />
                    <span>تم النسخ {prompt.copyCount} مرة</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Test with AI Button */}
                    <button
                      onClick={() => onTestPromptWithAI(finalPromptText)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600 hover:text-white border border-indigo-500/30 transition-colors"
                      title="اختبر هذا البرومبت مع المساعد الذكي المدمج"
                    >
                      <Bot className="w-4 h-4" />
                      <span>اختبر بـ AI</span>
                    </button>

                    {/* Copy to Clipboard Main Button */}
                    <button
                      id={`copy-btn-${prompt.id}`}
                      onClick={() => handleCopy(prompt)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
                        isCopied
                          ? 'bg-emerald-600 text-white ring-2 ring-emerald-400'
                          : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 animate-bounce" />
                          <span>تم النسخ إلى الحافظة!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>نسخ إلى الحافظة</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
