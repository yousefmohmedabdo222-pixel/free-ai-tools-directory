import React from 'react';
import { AITool } from '../types';
import { X, Bookmark, ExternalLink, Trash2 } from 'lucide-react';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: AITool[];
  darkMode: boolean;
  onRemoveFavorite: (id: string) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favorites,
  darkMode,
  onRemoveFavorite,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className={`relative w-full max-w-xl rounded-2xl overflow-hidden border shadow-2xl p-6 max-h-[85vh] flex flex-col ${
        darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 mb-4">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-400 fill-amber-400" />
            <h3 className="font-extrabold text-base">الأدوات المحفوظة والمفضلة ({favorites.length})</h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {favorites.length > 0 ? (
          <div className="flex-1 overflow-y-auto space-y-3 scrollbar-thin">
            {favorites.map((tool) => (
              <div
                key={tool.id}
                className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${
                  darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm">{tool.name}</h4>
                    <span className="text-[10px] bg-indigo-500/20 text-indigo-300 font-bold px-1.5 py-0.5 rounded border border-indigo-500/30">
                      {tool.pricingType}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                    {tool.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={tool.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1"
                  >
                    <span>تجربة</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onRemoveFavorite(tool.id)}
                    className="p-2 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-colors"
                    title="حذف من المفضلة"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-400 text-xs">
            لم تقم بالحفظ في المفضلة بعد. انقر على أيقونة النجمة ⭐ بجانب أي أداة لحفظها هنا!
          </div>
        )}
      </div>
    </div>
  );
};
