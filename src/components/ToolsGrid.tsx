import React, { useState } from 'react';
import { AITool, ToolCategory } from '../types';
import { ToolCard } from './ToolCard';
import { AdSensePlaceholder } from './AdSensePlaceholder';
import { Sparkles, SlidersHorizontal, RefreshCw } from 'lucide-react';

interface ToolsGridProps {
  tools: AITool[];
  darkMode: boolean;
  searchQuery: string;
  selectedCategory: ToolCategory;
  selectedPricingFilter: string;
  favoritesList: string[];
  onToggleFavorite: (id: string) => void;
  onShareTool: (tool: AITool) => void;
  onResetFilters: () => void;
  onOpenToolGuide?: (tool: AITool) => void;
}

export const ToolsGrid: React.FC<ToolsGridProps> = ({
  tools,
  darkMode,
  searchQuery,
  selectedCategory,
  selectedPricingFilter,
  favoritesList,
  onToggleFavorite,
  onShareTool,
  onResetFilters,
  onOpenToolGuide,
}) => {
  const [sortBy, setSortBy] = useState<'popularity' | 'rating' | 'newest'>('popularity');

  // Filter tools
  const filteredTools = tools.filter((tool) => {
    // Category match
    if (selectedCategory !== 'all' && tool.category !== selectedCategory) {
      return false;
    }
    // Pricing match
    if (selectedPricingFilter !== 'all' && tool.pricingType !== selectedPricingFilter) {
      return false;
    }
    // Search query match
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const nameMatch = tool.name.toLowerCase().includes(q) || (tool.nameEn && tool.nameEn.toLowerCase().includes(q));
      const descMatch = tool.description.toLowerCase().includes(q);
      const tagMatch = tool.tags.some((t) => t.toLowerCase().includes(q));
      const featMatch = tool.freeFeatures.some((f) => f.toLowerCase().includes(q));
      return nameMatch || descMatch || tagMatch || featMatch;
    }
    return true;
  });

  // Sort tools
  const sortedTools = [...filteredTools].sort((a, b) => {
    if (sortBy === 'popularity') {
      return b.popularityCount - a.popularityCount;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'newest') {
      return (b.addedDate || '').localeCompare(a.addedDate || '');
    }
    return 0;
  });

  return (
    <section id="tools-section" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar for Grid: Count and Sorting */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/50">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              الأدوات المتاحة
            </h2>
            <span className="bg-indigo-600/20 text-indigo-300 font-bold text-xs px-2.5 py-1 rounded-full border border-indigo-500/30">
              {sortedTools.length} أداة
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">ترتيب بحسب:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className={`px-3 py-1.5 rounded-lg border outline-none font-semibold cursor-pointer ${
                darkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
              }`}
            >
              <option value="popularity">الأكثر شعبية واستخداماً</option>
              <option value="rating">الأعلى تقييماً (Rating)</option>
              <option value="newest">الأحدث إضافة (2026)</option>
            </select>
          </div>
        </div>

        {/* Tools Display Grid */}
        {sortedTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedTools.map((tool, idx) => (
              <React.Fragment key={tool.id}>
                <ToolCard
                  tool={tool}
                  darkMode={darkMode}
                  isFavorite={favoritesList.includes(tool.id)}
                  onToggleFavorite={onToggleFavorite}
                  onShareTool={onShareTool}
                  onOpenToolGuide={onOpenToolGuide}
                />
                
                {/* Insert AdSense In-Article Placeholder after every 6th card */}
                {(idx + 1) % 6 === 0 && (
                  <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <AdSensePlaceholder type="ad-in-article" darkMode={darkMode} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          /* Empty Search Results State */
          <div className={`text-center py-16 px-4 rounded-2xl border ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <Sparkles className="w-12 h-12 text-indigo-400 mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold">لم نجد أدوات تطابق البحث الحالي</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto mt-1 mb-4">
              جرب تغيير كلمة البحث أو إعادة ضبط الفلاتر لاستعراض باقي أدوات الذكاء الاصطناعي.
            </p>
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>إعادة ضبط كافة الفلاتر والبحث</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
