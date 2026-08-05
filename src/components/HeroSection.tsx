import React from 'react';
import { 
  Search, 
  Sparkles, 
  Code2, 
  Gamepad2, 
  BrainCircuit, 
  Image as ImageIcon, 
  Volume2, 
  HardDrive, 
  MessageSquare,
  CheckCircle2,
  XCircle,
  SlidersHorizontal
} from 'lucide-react';
import { ToolCategory } from '../types';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: ToolCategory;
  setSelectedCategory: (cat: ToolCategory) => void;
  selectedPricingFilter: string;
  setSelectedPricingFilter: (pricing: string) => void;
  darkMode: boolean;
  totalToolsCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedPricingFilter,
  setSelectedPricingFilter,
  darkMode,
  totalToolsCount,
}) => {
  const categories: { id: ToolCategory; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: 'كافة الأدوات', icon: Sparkles },
    { id: 'developers', label: 'المبرمجين والطلاب', icon: Code2 },
    { id: 'gameDev', label: 'تطوير الألعاب', icon: Gamepad2 },
    { id: 'imageGen', label: 'إنشاء الصور والـ Pixel Art', icon: ImageIcon },
    { id: 'localModels', label: 'نماذج محلية (Offline)', icon: HardDrive },
    { id: 'textGen', label: 'توليد النصوص والتحليل', icon: MessageSquare },
    { id: 'voiceAudio', label: 'الصوت والألحان', icon: Volume2 },
  ];

  const quickTags = [
    { label: '#DeepSeek_R1', query: 'DeepSeek' },
    { label: '#مجاني_100%', query: 'مجاني' },
    { label: '#PixelArt_2D', query: 'Pixel' },
    { label: '#بدون_إنترنت', query: 'محلي' },
    { label: '#Cursor_IDE', query: 'Cursor' },
    { label: '#Claude_3.5', query: 'Claude' },
    { label: '#Ollama', query: 'Ollama' }
  ];

  return (
    <section id="hero-section" className="relative pt-8 pb-12 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Title Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>تحديثات عام 2026 | دليل الأدوات والبرومبتات المجانية</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            دليل أدوات{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              الذكاء الاصطناعي المجانية
            </span>
          </h1>

          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            استكشف، قارن، وجرب أفضل وأقوى أدوات الذكاء الاصطناعي المجانية بالكامل للمبرمجين، الطلاب، ومطوري الألعاب مع مكتبة برومبتات جاهزة للنسخ بنقرة واحدة.
          </p>

          {/* Key Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold">
            <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              أدوات مجانية 100%
            </span>
            <span className="inline-flex items-center gap-1 text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              جاهز لقواعد Google AdSense
            </span>
            <span className="inline-flex items-center gap-1 text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              مكتبة برومبتات تفاعلية
            </span>
          </div>
        </div>

        {/* Live Search Bar Box */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className={`relative rounded-2xl p-2 transition-all shadow-xl ${
            darkMode 
              ? 'bg-slate-900/90 border border-slate-700/80 focus-within:border-indigo-500' 
              : 'bg-white border border-slate-200 focus-within:border-indigo-500 shadow-indigo-100'
          }`}>
            <div className="flex items-center gap-3 px-3">
              <Search className="w-5 h-5 text-indigo-400 shrink-0" />
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن أداة (مثل: DeepSeek, Pixel Art, Cursor, Ollama)..."
                className={`w-full py-2.5 text-sm sm:text-base outline-none bg-transparent ${
                  darkMode ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-full text-slate-400 hover:text-white"
                  title="مسح البحث"
                >
                  <XCircle className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Tag Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
            <span className="text-xs font-semibold text-slate-400">وسوم سريعة:</span>
            {quickTags.map((tag, idx) => (
              <button
                key={idx}
                onClick={() => setSearchQuery(tag.query)}
                className={`text-xs px-2.5 py-1 rounded-full transition-colors font-medium ${
                  searchQuery === tag.query
                    ? 'bg-indigo-600 text-white font-bold'
                    : darkMode
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-indigo-300'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Filter Dropdown / Tabs */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t pt-6 border-slate-800/60">
          
          {/* Category Filter Scrollable Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 ring-1 ring-indigo-400'
                      : darkMode
                        ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-90" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Pricing Model Filter */}
          <div className="flex items-center gap-2 text-xs font-medium">
            <SlidersHorizontal className="w-4 h-4 text-slate-400" />
            <span className="text-slate-400">نوع المجانية:</span>
            <select
              id="pricing-filter-select"
              value={selectedPricingFilter}
              onChange={(e) => setSelectedPricingFilter(e.target.value)}
              className={`px-3 py-1.5 rounded-lg border outline-none text-xs font-semibold cursor-pointer ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-slate-200'
                  : 'bg-white border-slate-200 text-slate-800'
              }`}
            >
              <option value="all">الكل ({totalToolsCount})</option>
              <option value="مجاني 100%">مجاني 100% بالكامل</option>
              <option value="خطة مجانية سخية">خطة مجانية سخية</option>
              <option value="مفتوح المصدر">مفتوح المصدر (Open Source)</option>
            </select>
          </div>
        </div>

      </div>
    </section>
  );
};
