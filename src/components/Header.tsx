import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  PlusCircle, 
  Bot, 
  Layers, 
  Code2, 
  Gamepad2, 
  Terminal, 
  BookOpen, 
  BarChart3, 
  Bookmark 
} from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenSubmitModal: () => void;
  onOpenAssistantModal: () => void;
  savedFavoritesCount: number;
  onOpenFavoritesModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  activeSection,
  setActiveSection,
  onOpenSubmitModal,
  onOpenAssistantModal,
  savedFavoritesCount,
  onOpenFavoritesModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: Layers },
    { id: 'developers', label: 'أدوات المبرمجين والطلاب', icon: Code2 },
    { id: 'gameDev', label: 'أدوات تطوير الألعاب', icon: Gamepad2 },
    { id: 'blog', label: 'الشروحات والمقالات', icon: BookOpen },
    { id: 'comparison', label: 'مقارنة النماذج', icon: BarChart3 },
    { id: 'prompts', label: 'مكتبة البرومبتات', icon: Terminal },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
        darkMode 
          ? 'bg-slate-900/90 border-slate-800/80 text-slate-100 backdrop-blur-md' 
          : 'bg-white/90 border-slate-200 text-slate-800 backdrop-blur-md shadow-xs'
      }`}
    >
      {/* AdSense Top Header Banner Notice / Placeholder */}
      <div id="ad-banner-top-container" className="bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-slate-900 text-white text-xs py-1.5 px-4 text-center border-b border-indigo-500/20 flex items-center justify-center gap-2">
        <span className="bg-indigo-500/30 text-indigo-200 text-[10px] font-bold px-2 py-0.5 rounded border border-indigo-400/30">إعلان</span>
        <span className="font-medium">دليل 2026 المحدث لأفضل أدوات الذكاء الاصطناعي المجانية بالكامل وبدون قيود</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 ring-2 ring-indigo-500/30">
              <Sparkles className="w-5.5 h-5.5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
                  دليل أدوات الذكاء الاصطناعي
                </span>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-emerald-500/30">
                  مجاني 2026
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                أكبر دليل للمبرمجين، الطلاب ومطوري الألعاب
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? darkMode
                        ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                        : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      : darkMode
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-80" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Tools & Settings */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* AI Assistant Generator Trigger */}
            <button
              id="ai-assistant-btn"
              onClick={onOpenAssistantModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-sm transition-transform active:scale-95"
              title="مساعد الذكاء الاصطناعي لاقترح الأدوات وتحسين البرومبتات"
            >
              <Bot className="w-4 h-4 animate-bounce" />
              <span className="hidden sm:inline">مساعد AI</span>
            </button>

            {/* Saved Favorites Trigger */}
            <button
              id="favorites-btn"
              onClick={onOpenFavoritesModal}
              className={`relative p-2 rounded-lg transition-colors ${
                darkMode ? 'bg-slate-800 text-slate-300 hover:text-amber-400' : 'bg-slate-100 text-slate-700 hover:text-amber-600'
              }`}
              title="الأدوات المفضلة المحفوظة"
            >
              <Bookmark className="w-4.5 h-4.5" />
              {savedFavoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-slate-950 font-bold text-[10px] rounded-full flex items-center justify-center animate-pulse">
                  {savedFavoritesCount}
                </span>
              )}
            </button>

            {/* Submit Tool / Prompt Modal Trigger */}
            <button
              id="submit-tool-btn"
              onClick={onOpenSubmitModal}
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                darkMode 
                  ? 'border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-indigo-400 bg-slate-800/40' 
                  : 'border-slate-300 hover:border-indigo-500 text-slate-700 hover:text-indigo-600 bg-slate-50'
              }`}
            >
              <PlusCircle className="w-4 h-4" />
              <span>إضافة أداة / برومبت</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors border ${
                darkMode 
                  ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700' 
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
              aria-label="تغيير النمط"
              title={darkMode ? 'التحويل للوضع الفاتح' : 'التحويل للوضع الداكن'}
            >
              {darkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg border ${
                darkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className={`lg:hidden border-b px-4 py-4 space-y-2 transition-all ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
        }`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-600 text-white font-bold'
                    : darkMode
                      ? 'hover:bg-slate-800 text-slate-300'
                      : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                <Icon className="w-4.5 h-4.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenSubmitModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 text-white"
            >
              <PlusCircle className="w-4.5 h-4.5" />
              <span>إضافة أداة أو برومبت مجاني</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
