import React, { useState, useMemo } from 'react';
import { AIModelSpec } from '../types';
import { 
  BarChart3, 
  Check, 
  ExternalLink, 
  Zap, 
  Code2, 
  Globe, 
  Sparkles,
  Sliders,
  Cpu,
  BrainCircuit,
  Eye,
  AlertCircle,
  CheckCircle2,
  Layers,
  Filter
} from 'lucide-react';

interface ModelComparisonProps {
  models: AIModelSpec[];
  darkMode: boolean;
}

export const ModelComparison: React.FC<ModelComparisonProps> = ({
  models,
  darkMode,
}) => {
  // Category filter for the selector bar
  const [filterType, setFilterType] = useState<'all' | 'reasoning' | 'coding' | 'multimodal' | 'open-source'>('all');

  // Selected models for side-by-side comparison (default 3 top models)
  const [selectedModelIds, setSelectedModelIds] = useState<string[]>([
    'deepseek-r1',
    'claude-37-sonnet',
    'gemini-2-flash',
  ]);

  const filteredModels = useMemo(() => {
    if (filterType === 'all') return models;
    return models.filter((m) => {
      if (filterType === 'reasoning') return m.modelType === 'reasoning';
      if (filterType === 'coding') return m.modelType === 'coding';
      if (filterType === 'multimodal') return m.modelType === 'multimodal';
      if (filterType === 'open-source') return m.modelType === 'open-source';
      return true;
    });
  }, [models, filterType]);

  const toggleModelSelection = (id: string) => {
    if (selectedModelIds.includes(id)) {
      if (selectedModelIds.length > 1) {
        setSelectedModelIds(selectedModelIds.filter((mId) => mId !== id));
      }
    } else {
      if (selectedModelIds.length < 4) {
        setSelectedModelIds([...selectedModelIds, id]);
      } else {
        // Replace oldest item
        setSelectedModelIds([...selectedModelIds.slice(1), id]);
      }
    }
  };

  const selectedModels = models.filter((m) => selectedModelIds.includes(m.id));

  return (
    <section id="comparison" className="py-12 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <BarChart3 className="w-4 h-4 text-indigo-400" />
            <span>مصفوفة مقارنة ومواصفات نماذج الذكاء الاصطناعي 2026</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            مقارنة تقنية شاملة بين أقوى النماذج الذكية
          </h2>

          <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            استكشف أحدث مواصفات نماذج التفكير والاستدلال، والبرمجة، والوسائط المتعددة مع تحليل دقيق لنوافذ السياق، والحدود المجانية، والأداء العملي.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === 'all'
                ? 'bg-indigo-600 text-white shadow-md'
                : darkMode
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            جميع النماذج ({models.length})
          </button>
          <button
            onClick={() => setFilterType('reasoning')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === 'reasoning'
                ? 'bg-indigo-600 text-white shadow-md'
                : darkMode
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            نماذج التفكير والاستدلال (Reasoning)
          </button>
          <button
            onClick={() => setFilterType('coding')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === 'coding'
                ? 'bg-indigo-600 text-white shadow-md'
                : darkMode
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            نماذج الكود والبرمجة (Coding)
          </button>
          <button
            onClick={() => setFilterType('multimodal')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === 'multimodal'
                ? 'bg-indigo-600 text-white shadow-md'
                : darkMode
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            متعددة الوسائط (Multimodal)
          </button>
          <button
            onClick={() => setFilterType('open-source')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === 'open-source'
                ? 'bg-indigo-600 text-white shadow-md'
                : darkMode
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            مفتوحة المصدر والمحلية (Open-Weights)
          </button>
        </div>

        {/* Model Selector Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-slate-900/40 p-4 rounded-2xl border border-slate-800/80">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 w-full sm:w-auto text-center justify-center mb-1 sm:mb-0 ml-2">
            <Sliders className="w-4 h-4 text-indigo-400" />
            <span>اختر حتى 4 نماذج للمقارنة المباشرة:</span>
          </div>
          {filteredModels.map((model) => {
            const isSelected = selectedModelIds.includes(model.id);
            return (
              <button
                key={model.id}
                onClick={() => toggleModelSelection(model.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-md ring-2 ring-indigo-500/30'
                    : darkMode
                      ? 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {isSelected ? (
                  <Check className="w-3.5 h-3.5 text-white" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-slate-500" />
                )}
                <span>{model.name}</span>
                {model.badge && (
                  <span className="text-[10px] opacity-75 font-normal">
                    ({model.provider})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 shadow-2xl bg-slate-950/40 backdrop-blur-sm">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className={darkMode ? 'bg-slate-900/90 border-b border-slate-800' : 'bg-slate-100 border-b border-slate-200'}>
                <th className="p-4 text-xs font-extrabold text-slate-400 min-w-[170px] align-middle">المعيار التقني</th>
                {selectedModels.map((model) => (
                  <th key={model.id} className="p-4 text-center min-w-[260px] align-top">
                    <div className="font-extrabold text-lg text-indigo-400 flex items-center justify-center gap-1.5">
                      <span>{model.name}</span>
                    </div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">
                      {model.provider} • {model.releaseYear}
                    </div>
                    {model.badge && (
                      <span className="inline-block mt-2 bg-indigo-500/20 text-indigo-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-indigo-500/30 shadow-sm">
                        {model.badge}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={`divide-y text-xs ${darkMode ? 'divide-slate-800/80 text-slate-200' : 'divide-slate-200 text-slate-800'}`}>
              
              {/* Context Window */}
              <tr className={darkMode ? 'hover:bg-slate-900/40' : 'hover:bg-slate-50'}>
                <td className="p-4 font-bold text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <span>نافذة السياق (Context Window)</span>
                </td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center font-mono font-extrabold text-sm text-indigo-300">
                    {m.contextWindow}
                  </td>
                ))}
              </tr>

              {/* Parameters & Architecture */}
              <tr className={darkMode ? 'hover:bg-slate-900/40' : 'hover:bg-slate-50'}>
                <td className="p-4 font-bold text-slate-400 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>حجم المعاملات والمعمارية</span>
                </td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center">
                    <div className="font-bold text-xs text-slate-200 mb-1">{m.parameterCount || 'غير معلن'}</div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">{m.architecture || 'Transformer Architecture'}</div>
                  </td>
                ))}
              </tr>

              {/* Free Daily Tier */}
              <tr className={darkMode ? 'hover:bg-slate-900/40' : 'hover:bg-slate-50'}>
                <td className="p-4 font-bold text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>الحد والاستخدام المجاني</span>
                </td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center leading-relaxed">
                    <span className="inline-block bg-emerald-500/10 text-emerald-400 px-2.5 py-1.5 rounded-lg border border-emerald-500/20 font-semibold">
                      {m.freeDailyTier}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Reasoning & Math Rating */}
              <tr className={darkMode ? 'hover:bg-slate-900/40' : 'hover:bg-slate-50'}>
                <td className="p-4 font-bold text-slate-400 flex items-center gap-1.5">
                  <BrainCircuit className="w-4 h-4 text-purple-400" />
                  <span>الاستدلال وحل المسائل المعقدة</span>
                </td>
                {selectedModels.map((m) => {
                  const rating = m.reasoningRating || m.codingRating;
                  return (
                    <td key={m.id} className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-24 h-2.5 rounded-full bg-slate-800 overflow-hidden">
                          <div 
                            className="h-full bg-purple-500 rounded-full transition-all duration-500" 
                            style={{ width: `${(rating / 10) * 100}%` }}
                          />
                        </div>
                        <span className="font-bold text-xs text-purple-300">{rating}/10</span>
                      </div>
                    </td>
                  );
                })}
              </tr>

              {/* Coding Rating */}
              <tr className={darkMode ? 'hover:bg-slate-900/40' : 'hover:bg-slate-50'}>
                <td className="p-4 font-bold text-slate-400 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span>جودة الكود والبرمجة</span>
                </td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-24 h-2.5 rounded-full bg-slate-800 overflow-hidden">
                        <div 
                          className="h-full bg-indigo-500 rounded-full transition-all duration-500" 
                          style={{ width: `${(m.codingRating / 10) * 100}%` }}
                        />
                      </div>
                      <span className="font-bold text-xs text-indigo-300">{m.codingRating}/10</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Speed Rating */}
              <tr className={darkMode ? 'hover:bg-slate-900/40' : 'hover:bg-slate-50'}>
                <td className="p-4 font-bold text-slate-400 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>سرعة التوليد والاستجابة</span>
                </td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-24 h-2.5 rounded-full bg-slate-800 overflow-hidden">
                        <div 
                          className="h-full bg-amber-400 rounded-full transition-all duration-500" 
                          style={{ width: `${(m.speedRating / 10) * 100}%` }}
                        />
                      </div>
                      <span className="font-bold text-xs text-amber-300">{m.speedRating}/10</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Arabic Support Rating */}
              <tr className={darkMode ? 'hover:bg-slate-900/40' : 'hover:bg-slate-50'}>
                <td className="p-4 font-bold text-slate-400 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>فصاحة ودعم اللغة العربية</span>
                </td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-24 h-2.5 rounded-full bg-slate-800 overflow-hidden">
                        <div 
                          className="h-full bg-emerald-400 rounded-full transition-all duration-500" 
                          style={{ width: `${(m.arabicRating / 10) * 100}%` }}
                        />
                      </div>
                      <span className="font-bold text-xs text-emerald-300">{m.arabicRating}/10</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Supported Modalities */}
              <tr className={darkMode ? 'hover:bg-slate-900/40' : 'hover:bg-slate-50'}>
                <td className="p-4 font-bold text-slate-400 flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>الوسائط والمدخلات المدعومة</span>
                </td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center text-[11px] text-slate-300 leading-relaxed">
                    {m.visionAudioSupport || 'نصوص وأكواد برمجية'}
                  </td>
                ))}
              </tr>

              {/* Strengths */}
              <tr className={darkMode ? 'hover:bg-slate-900/40' : 'hover:bg-slate-50'}>
                <td className="p-4 font-bold text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>أبرز نقاط القوة</span>
                </td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-right">
                    <ul className="space-y-1.5">
                      {m.strengths.map((str, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300 leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Limitations */}
              <tr className={darkMode ? 'hover:bg-slate-900/40' : 'hover:bg-slate-50'}>
                <td className="p-4 font-bold text-slate-400 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  <span>نقاط القصور والتحديات</span>
                </td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-right">
                    <ul className="space-y-1.5">
                      {m.limitations.map((lim, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-400 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                          <span>{lim}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Best Use Cases */}
              <tr className={darkMode ? 'hover:bg-slate-900/40' : 'hover:bg-slate-50'}>
                <td className="p-4 font-bold text-slate-400">الاستخدام الأمثل</td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center text-xs leading-relaxed text-slate-300">
                    {m.bestUseCases}
                  </td>
                ))}
              </tr>

              {/* Direct Link */}
              <tr>
                <td className="p-4 font-bold text-slate-400">تجربة مباشرة</td>
                {selectedModels.map((m) => (
                  <td key={m.id} className="p-4 text-center">
                    <a
                      href={m.freeAccessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl text-xs font-extrabold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-500/25 transition-all"
                    >
                      <span>تجربة {m.name}</span>
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
