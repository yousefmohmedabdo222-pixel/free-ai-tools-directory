import React, { useState } from 'react';
import { AIModelSpec } from '../types';
import { 
  BarChart3, 
  Check, 
  X, 
  ExternalLink, 
  Zap, 
  Code2, 
  Globe, 
  Sparkles,
  Sliders
} from 'lucide-react';

interface ModelComparisonProps {
  models: AIModelSpec[];
  darkMode: boolean;
}

export const ModelComparison: React.FC<ModelComparisonProps> = ({
  models,
  darkMode,
}) => {
  // Selected models for side-by-side comparison (default first 3)
  const [selectedModelIds, setSelectedModelIds] = useState<string[]>([
    'deepseek-r1',
    'claude-35-sonnet',
    'gemini-2-flash',
  ]);

  const toggleModelSelection = (id: string) => {
    if (selectedModelIds.includes(id)) {
      if (selectedModelIds.length > 1) {
        setSelectedModelIds(selectedModelIds.filter((mId) => mId !== id));
      }
    } else {
      if (selectedModelIds.length < 3) {
        setSelectedModelIds([...selectedModelIds, id]);
      } else {
        // Replace last
        setSelectedModelIds([...selectedModelIds.slice(1), id]);
      }
    }
  };

  const selectedModels = models.filter((m) => selectedModelIds.includes(m.id));

  return (
    <section id="comparison" className="py-12 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>مصفوفة مقارنة النماذج المتطورة</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            مقارنة الشفافة بين نماذج الذكاء الاصطناعي المجانية
          </h2>

          <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            حدد النماذج المطلوبة لمقارنة الحدود المجانية، سرعة الاستجابة، جودة الكود، ودعم اللغة العربية جنباً إلى جنب.
          </p>
        </div>

        {/* Model Selector Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs font-bold text-slate-400 ml-2">حدد حتى 3 نماذج:</span>
          {models.map((model) => {
            const isSelected = selectedModelIds.includes(model.id);
            return (
              <button
                key={model.id}
                onClick={() => toggleModelSelection(model.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                    : darkMode
                      ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                {isSelected ? <Check className="w-3.5 h-3.5" /> : <Sliders className="w-3.5 h-3.5 opacity-50" />}
                <span>{model.name}</span>
              </button>
            );
          })}
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 shadow-xl">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className={darkMode ? 'bg-slate-900 border-b border-slate-800' : 'bg-slate-100 border-b border-slate-200'}>
                <th className="p-4 text-xs font-extrabold text-slate-400 min-w-[140px]">المعيار / النمط</th>
                {selectedModels.map((model) => (
                  <th key={model.id} className="p-4 text-center min-w-[240px]">
                    <div className="font-extrabold text-base text-indigo-400">{model.name}</div>
                    <div className="text-[11px] text-slate-400 font-normal">{model.provider}</div>
                    {model.badge && (
                      <span className="inline-block mt-1 bg-indigo-500/20 text-indigo-300 text-[10px] font-bold px-2 py-0.5 rounded border border-indigo-500/30">
                        {model.badge}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={`divide-y ${darkMode ? 'divide-slate-800 text-slate-200' : 'divide-slate-200 text-slate-800'}`}>
              
              {/* Context Window */}
              <tr className={darkMode ? 'hover:bg-slate-900/50' : 'hover:bg-slate-50'}>
                <td className="p-4 text-xs font-bold text-slate-400">نافذة السياق (Context)</td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center font-mono font-bold text-xs">
                    {m.contextWindow}
                  </td>
                ))}
              </tr>

              {/* Free Daily Tier */}
              <tr className={darkMode ? 'hover:bg-slate-900/50' : 'hover:bg-slate-50'}>
                <td className="p-4 text-xs font-bold text-slate-400">الحد والاستخدام المجاني</td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center text-xs font-medium leading-relaxed">
                    <span className="text-emerald-400 font-semibold">{m.freeDailyTier}</span>
                  </td>
                ))}
              </tr>

              {/* Speed Rating */}
              <tr className={darkMode ? 'hover:bg-slate-900/50' : 'hover:bg-slate-50'}>
                <td className="p-4 text-xs font-bold text-slate-400 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>سرعة التوليد والاستجابة</span>
                </td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-24 h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div 
                          className="h-full bg-amber-400 rounded-full" 
                          style={{ width: `${(m.speedRating / 10) * 100}%` }}
                        />
                      </div>
                      <span className="font-bold text-xs">{m.speedRating}/10</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Coding Rating */}
              <tr className={darkMode ? 'hover:bg-slate-900/50' : 'hover:bg-slate-50'}>
                <td className="p-4 text-xs font-bold text-slate-400 flex items-center gap-1">
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>جودة الكود والبرمجة</span>
                </td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-24 h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div 
                          className="h-full bg-indigo-500 rounded-full" 
                          style={{ width: `${(m.codingRating / 10) * 100}%` }}
                        />
                      </div>
                      <span className="font-bold text-xs">{m.codingRating}/10</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Arabic Support Rating */}
              <tr className={darkMode ? 'hover:bg-slate-900/50' : 'hover:bg-slate-50'}>
                <td className="p-4 text-xs font-bold text-slate-400 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>دعم اللغة العربية</span>
                </td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-24 h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div 
                          className="h-full bg-emerald-400 rounded-full" 
                          style={{ width: `${(m.arabicRating / 10) * 100}%` }}
                        />
                      </div>
                      <span className="font-bold text-xs">{m.arabicRating}/10</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Best Use Cases */}
              <tr className={darkMode ? 'hover:bg-slate-900/50' : 'hover:bg-slate-50'}>
                <td className="p-4 text-xs font-bold text-slate-400">الاستخدام الأمثل</td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center text-xs leading-relaxed">
                    {m.bestUseCases}
                  </td>
                ))}
              </tr>

              {/* Direct Link */}
              <tr>
                <td className="p-4 text-xs font-bold text-slate-400">تجربة مباشرة</td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center">
                    <a
                      href={m.freeAccessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                    >
                      <span>تجربة النموذج</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
