import React from 'react';
import { 
  AITool 
} from '../types';
import { 
  ExternalLink, 
  Star, 
  Bookmark, 
  Share2, 
  Check, 
  BrainCircuit, 
  Code2, 
  Terminal, 
  Layout, 
  Cpu, 
  Search, 
  BookOpen, 
  Gamepad2, 
  Globe, 
  Box, 
  Layers, 
  Music, 
  HardDrive, 
  Monitor, 
  Image as ImageIcon, 
  Sparkles, 
  MessageSquare, 
  Bot, 
  Volume2 
} from 'lucide-react';

interface ToolCardProps {
  tool: AITool;
  darkMode: boolean;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onShareTool: (tool: AITool) => void;
  onOpenToolGuide?: (tool: AITool) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  tool,
  darkMode,
  isFavorite,
  onToggleFavorite,
  onShareTool,
  onOpenToolGuide,
}) => {
  // Map icon name string to Lucide icon component
  const getIcon = (name: string) => {
    switch (name) {
      case 'BrainCircuit': return BrainCircuit;
      case 'Code2': return Code2;
      case 'Terminal': return Terminal;
      case 'Layout': return Layout;
      case 'Cpu': return Cpu;
      case 'Search': return Search;
      case 'BookOpen': return BookOpen;
      case 'Gamepad2': return Gamepad2;
      case 'Globe': return Globe;
      case 'Box': return Box;
      case 'Layers': return Layers;
      case 'Music': return Music;
      case 'HardDrive': return HardDrive;
      case 'Monitor': return Monitor;
      case 'Image': return ImageIcon;
      case 'Sparkles': return Sparkles;
      case 'MessageSquare': return MessageSquare;
      case 'Bot': return Bot;
      case 'Volume2': return Volume2;
      default: return Sparkles;
    }
  };

  const IconComponent = getIcon(tool.iconName);

  // Badge color based on pricing type
  const getPricingBadgeStyle = (type: string) => {
    switch (type) {
      case 'مجاني 100%':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'خطة مجانية سخية':
        return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
      case 'مفتوح المصدر':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default:
        return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <div 
      id={`tool-card-${tool.id}`}
      className={`group relative rounded-2xl p-5 transition-all duration-200 border flex flex-col justify-between hover:-translate-y-1 ${
        darkMode
          ? 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10'
          : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100'
      }`}
    >
      <div>
        {/* Card Header: Icon, Titles, Favorite Star */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
              darkMode 
                ? 'bg-gradient-to-tr from-indigo-900/50 to-purple-900/50 text-indigo-400 border border-indigo-500/20' 
                : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
            }`}>
              <IconComponent className="w-6 h-6" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg group-hover:text-indigo-400 transition-colors">
                  {tool.name}
                </h3>
                {tool.featured && (
                  <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-500/30">
                    مميز
                  </span>
                )}
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {tool.nameEn || tool.name}
              </span>
            </div>
          </div>

          {/* Bookmark & Share Action Buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => onShareTool(tool)}
              className={`p-1.5 rounded-lg transition-colors ${
                darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title="مشاركة رابط الأداة"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => onToggleFavorite(tool.id)}
              className={`p-1.5 rounded-lg transition-colors ${
                isFavorite 
                  ? 'text-amber-400 bg-amber-500/10' 
                  : darkMode ? 'text-slate-400 hover:text-amber-400 hover:bg-slate-800' : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100'
              }`}
              title={isFavorite ? 'إزالة من المفضلة' : 'حفظ في المفضلة'}
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-amber-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Badges: Category Label & Pricing Type */}
        <div className="flex flex-wrap items-center gap-2 mt-3 text-xs">
          <span className={`px-2.5 py-0.5 rounded-full font-bold border ${getPricingBadgeStyle(tool.pricingType)}`}>
            {tool.pricingType}
          </span>
          <span className={`px-2.5 py-0.5 rounded-full font-medium ${
            darkMode ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-600 border border-slate-200'
          }`}>
            {tool.categoryLabel}
          </span>
          <div className="flex items-center gap-1 mr-auto text-amber-400 font-bold text-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{tool.rating}</span>
          </div>
        </div>

        {/* Short Description */}
        <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${
          darkMode ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {tool.description}
        </p>

        {/* Key Free Plan Features Checklist */}
        <div className="mt-4 pt-3 border-t border-slate-800/50 space-y-1.5">
          <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block">
            الميزات والخيارات المجانية:
          </span>
          {tool.freeFeatures.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tool.tags.map((tag, idx) => (
            <span 
              key={idx}
              className={`text-[11px] px-2 py-0.5 rounded font-mono ${
                darkMode ? 'bg-slate-800/60 text-slate-400' : 'bg-slate-100 text-slate-600'
              }`}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Action Buttons */}
      <div className="mt-5 pt-3 border-t border-slate-800/40 flex items-center gap-2">
        {onOpenToolGuide && (
          <button
            onClick={() => onOpenToolGuide(tool)}
            className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border transition-all ${
              darkMode 
                ? 'bg-slate-800/90 hover:bg-slate-700 text-indigo-300 border-indigo-500/30' 
                : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200'
            }`}
            title="اقرأ الشرح التفصيلي والمميزات والعيوب والأمثلة"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>الشرح والتقييم</span>
          </button>
        )}

        <a
          href={tool.directUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md shadow-indigo-600/20 transition-all active:scale-[0.98]"
        >
          <span>جرب الأداة</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
