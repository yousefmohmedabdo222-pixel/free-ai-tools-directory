import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ToolsGrid } from './components/ToolsGrid';
import { PromptLibrary } from './components/PromptLibrary';
import { ModelComparison } from './components/ModelComparison';
import { BlogList } from './components/BlogList';
import { ArticleView } from './components/ArticleView';
import { AdSensePlaceholder } from './components/AdSensePlaceholder';
import { LegalPagesModal } from './components/LegalPagesModal';
import { SubmitModal } from './components/SubmitModal';
import { AIPromptAssistant } from './components/AIPromptAssistant';
import { FavoritesModal } from './components/FavoritesModal';
import { ToolDetailModal } from './components/ToolDetailModal';
import { Footer } from './components/Footer';

import { AI_TOOLS_DATA } from './data/toolsData';
import { AI_PROMPTS_DATA } from './data/promptsData';
import { AI_MODELS_DATA } from './data/modelsData';
import { BLOG_POSTS_DATA, findBlogPostBySlug } from './data/blogData';

import { AITool, ToolCategory, LegalPageType, BlogPost } from './types';
import { Check, BookOpen, ArrowLeft, Sparkles } from 'lucide-react';

export default function App() {
  // Dark mode state (default dark)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('ai_directory_dark_mode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory>('all');
  const [selectedPricingFilter, setSelectedPricingFilter] = useState<string>('all');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Selected article for reading
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  // Tools state (prepopulated + allows user submissions)
  const [toolsList, setToolsList] = useState<AITool[]>(AI_TOOLS_DATA);

  // Favorites list state (stored in localStorage)
  const [favoritesList, setFavoritesList] = useState<string[]>(() => {
    const saved = localStorage.getItem('ai_directory_favorites');
    return saved ? JSON.parse(saved) : ['deepseek-r1', 'cursor-free', 'pixellab-ai'];
  });

  // Modals state
  const [submitModalOpen, setSubmitModalOpen] = useState<boolean>(false);
  const [assistantModalOpen, setAssistantModalOpen] = useState<boolean>(false);
  const [assistantTestPrompt, setAssistantTestPrompt] = useState<string>('');
  const [legalModalOpen, setLegalModalOpen] = useState<boolean>(false);
  const [legalPageType, setLegalPageType] = useState<LegalPageType>('privacy');
  const [favoritesModalOpen, setFavoritesModalOpen] = useState<boolean>(false);
  const [selectedToolForGuide, setSelectedToolForGuide] = useState<AITool | null>(null);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('ai_directory_dark_mode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#020617'; // slate-950
      document.body.style.color = '#f8fafc';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc'; // slate-50
      document.body.style.color = '#0f172a';
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('ai_directory_favorites', JSON.stringify(favoritesList));
  }, [favoritesList]);

  // Handle URL route mapping and browser back/forward buttons
  useEffect(() => {
    const syncRouteFromLocation = () => {
      const pathname = window.location.pathname;
      if (pathname.startsWith('/blog/')) {
        const slug = pathname.replace(/^\/blog\//, '');
        const post = findBlogPostBySlug(slug);
        if (post) {
          setSelectedArticle(post);
          setActiveSection('blog');
          document.title = `${post.title} | دليل أدوات الذكاء الاصطناعي المجانية`;
          return;
        }
      }
      if (pathname === '/blog' || pathname === '/blog/') {
        setSelectedArticle(null);
        setActiveSection('blog');
        document.title = 'قسم المقالات والشروحات التقنية | دليل أدوات الذكاء الاصطناعي المجانية';
        return;
      }
      // Home / main directory view
      setSelectedArticle(null);
      if (pathname === '/' || pathname === '') {
        setActiveSection('home');
        document.title = 'دليل أدوات الذكاء الاصطناعي المجانية 2026 | للمبرمجين والطلاب ومطوري الألعاب';
      }
    };

    syncRouteFromLocation();
    window.addEventListener('popstate', syncRouteFromLocation);
    return () => window.removeEventListener('popstate', syncRouteFromLocation);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setSelectedArticle(null);
    if (sectionId === 'blog') {
      if (window.location.pathname !== '/blog') {
        window.history.pushState({}, '', '/blog');
      }
      document.title = 'قسم المقالات والشروحات التقنية | دليل أدوات الذكاء الاصطناعي المجانية';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
      }
      document.title = 'دليل أدوات الذكاء الاصطناعي المجانية 2026 | للمبرمجين والطلاب ومطوري الألعاب';
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  // Select an article to view in detailed mode with URL update
  const handleSelectArticle = (post: BlogPost) => {
    setSelectedArticle(post);
    setActiveSection('blog');
    const targetUrl = `/blog/${post.slug}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({ articleSlug: post.slug }, '', targetUrl);
    }
    document.title = `${post.title} | دليل أدوات الذكاء الاصطناعي المجانية`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return to blog list from article view
  const handleBackToBlogList = () => {
    setSelectedArticle(null);
    setActiveSection('blog');
    if (window.location.pathname !== '/blog') {
      window.history.pushState({}, '', '/blog');
    }
    document.title = 'قسم المقالات والشروحات التقنية | دليل أدوات الذكاء الاصطناعي المجانية';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle favorite status
  const handleToggleFavorite = (id: string) => {
    if (favoritesList.includes(id)) {
      setFavoritesList(favoritesList.filter((fId) => fId !== id));
      showToast('تمت إزالة الأداة من القائمة المفضلة');
    } else {
      setFavoritesList([...favoritesList, id]);
      showToast('تمت إضافة الأداة للمفضلة بنجاح ⭐');
    }
  };

  // Share Tool
  const handleShareTool = (tool: AITool) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${tool.name} - ${tool.directUrl}`);
      showToast(`تم نسخ رابط أداة ${tool.name} إلى الحافظة!`);
    }
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedPricingFilter('all');
  };

  // Open specific Legal Page
  const handleOpenLegalPage = (type: LegalPageType) => {
    setLegalPageType(type);
    setLegalModalOpen(true);
  };

  // Open AI Assistant with prompt test or query
  const handleTestPromptWithAI = (promptText: string) => {
    setAssistantTestPrompt(promptText);
    setAssistantModalOpen(true);
  };

  // User Submission Handler
  const handleSubmitSuccess = (data: any) => {
    if (data.submitType === 'tool') {
      const newTool: AITool = {
        id: `custom-${Date.now()}`,
        name: data.name,
        description: data.description || 'أداة ذكاء اصطناعي مضافة حديثاً بواسطة أحد الزوار.',
        category: (data.category as ToolCategory) || 'developers',
        categoryLabel: 'مقتُرح حديثاً',
        iconName: 'Sparkles',
        pricingType: 'مجاني 100%',
        rating: 5.0,
        directUrl: data.urlOrText || '#',
        tags: ['جديد', 'مقترح'],
        freeFeatures: ['استخدام مجاني', 'دعم مباشر'],
        featured: true,
        popularityCount: 100,
        addedDate: new Date().toISOString().split('T')[0],
      };
      setToolsList([newTool, ...toolsList]);
      showToast(`تمت إضافة أداة "${data.name}" بنجاح إلى الدليل!`);
    } else {
      showToast('تم استلام البرومبت بنجاح وسيتوفر في المكتبة بعد المراجعة!');
    }
  };

  const favoriteToolsObjects = toolsList.filter((t) => favoritesList.includes(t.id));

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Toast Notification Floating Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-indigo-500/40 flex items-center gap-2 text-xs font-bold animate-bounce dir-rtl">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Navigation */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={handleSelectSection}
        onOpenSubmitModal={() => setSubmitModalOpen(true)}
        onOpenAssistantModal={() => {
          setAssistantTestPrompt('');
          setAssistantModalOpen(true);
        }}
        savedFavoritesCount={favoritesList.length}
        onOpenFavoritesModal={() => setFavoritesModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1">
        
        {/* CONDITIONAL RENDERING FOR ROUTING */}
        {selectedArticle ? (
          /* Single Article Reading View */
          <ArticleView
            post={selectedArticle}
            darkMode={darkMode}
            onBackToList={handleBackToBlogList}
            onOpenAssistantWithTopic={(topic) => handleTestPromptWithAI(topic)}
          />
        ) : activeSection === 'blog' ? (
          /* Full Blog List View */
          <BlogList
            posts={BLOG_POSTS_DATA}
            darkMode={darkMode}
            onSelectArticle={handleSelectArticle}
          />
        ) : (
          /* Main Directory View */
          <>
            {/* Hero Section */}
            <HeroSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedPricingFilter={selectedPricingFilter}
              setSelectedPricingFilter={setSelectedPricingFilter}
              darkMode={darkMode}
              totalToolsCount={toolsList.length}
            />

            {/* Section: Developers & Students Tools Spotlight */}
            <section id="developers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-slate-900 border border-indigo-500/20 flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-extrabold text-sm sm:text-base text-indigo-300">
                    🚀 قسم خاص بأدوات المبرمجين والطلاب
                  </h3>
                  <p className="text-xs text-slate-300 max-w-xl">
                    أدوات توفر عليك مئات الساعات في كتابة الأكواد، تتبع الأخطاء، وحل المعضلات البرمجية والأكاديمية مجاناً بالكامل.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory('developers');
                    const el = document.getElementById('tools-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-colors"
                >
                  عرض أدوات البرمجة فقط ({toolsList.filter(t => t.category === 'developers').length})
                </button>
              </div>
            </section>

            {/* Tools Display Grid */}
            <ToolsGrid
              tools={toolsList}
              darkMode={darkMode}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              selectedPricingFilter={selectedPricingFilter}
              favoritesList={favoritesList}
              onToggleFavorite={handleToggleFavorite}
              onShareTool={handleShareTool}
              onResetFilters={handleResetFilters}
              onOpenToolGuide={(tool) => setSelectedToolForGuide(tool)}
            />

            {/* Section: Game Dev AI Spotlight */}
            <section id="gameDev" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-900/40 via-pink-900/30 to-slate-900 border border-purple-500/20 flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-extrabold text-sm sm:text-base text-purple-300">
                    🎮 قسم أدوات تطوير الألعاب والـ Pixel Art
                  </h3>
                  <p className="text-xs text-slate-300 max-w-xl">
                    ولّد أصول 2D، شخصيات Pixel Art ناصعة، مجسمات 3D، وسكاي بوكس عوالم كاملة مجاناً لمشاريع ألعابك المستقبلية.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory('gameDev');
                    const el = document.getElementById('tools-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-md transition-colors"
                >
                  عرض أدوات الألعاب والـ Pixel Art
                </button>
              </div>
            </section>

            {/* Featured Blog Banner Preview Section */}
            <section id="blog-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 border border-indigo-500/30 shadow-2xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>جديد الشروحات والمقالات (AdSense Content Hub)</span>
                    </div>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-white">
                      اقرأ أحدث المقالات والمقارنات التفصيلية
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                      محتوى حصري ومكتوب بدقة عالية لتغطية مقارنات النماذج والتطبيقات العملية لمطوري الويب والطلاب.
                    </p>
                  </div>

                  <button
                    onClick={() => handleSelectSection('blog')}
                    className="px-5 py-3 rounded-2xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg transition-all flex items-center gap-2 shrink-0"
                  >
                    <span>استعرض كافة المقالات ({BLOG_POSTS_DATA.length})</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>

                {/* Featured 2 Articles Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {BLOG_POSTS_DATA.slice(0, 2).map((post) => (
                    <div
                      key={post.id}
                      onClick={() => handleSelectArticle(post)}
                      className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 cursor-pointer transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/20 inline-block">
                          {post.category}
                        </span>
                        <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-indigo-300 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                        <span>{post.readTime} قراءة</span>
                        <span className="text-indigo-400 font-bold group-hover:underline flex items-center gap-1">
                          اقرأ المقال <ArrowLeft className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* AdSense Sidebar / Mid-page Banner */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AdSensePlaceholder type="ad-banner-top" darkMode={darkMode} />
            </div>

            {/* Interactive Model Comparison Section */}
            <ModelComparison
              models={AI_MODELS_DATA}
              darkMode={darkMode}
            />

            {/* Interactive Prompt Library Section */}
            <PromptLibrary
              prompts={AI_PROMPTS_DATA}
              darkMode={darkMode}
              onTestPromptWithAI={handleTestPromptWithAI}
            />
          </>
        )}

      </main>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        onOpenLegalPage={handleOpenLegalPage}
        setActiveSection={handleSelectSection}
      />

      {/* Modals */}
      <SubmitModal
        isOpen={submitModalOpen}
        onClose={() => setSubmitModalOpen(false)}
        darkMode={darkMode}
        onSubmitSuccess={handleSubmitSuccess}
      />

      <AIPromptAssistant
        isOpen={assistantModalOpen}
        onClose={() => setAssistantModalOpen(false)}
        darkMode={darkMode}
        initialPromptToTest={assistantTestPrompt}
      />

      <LegalPagesModal
        isOpen={legalModalOpen}
        pageType={legalPageType}
        onClose={() => setLegalModalOpen(false)}
        darkMode={darkMode}
      />

      <FavoritesModal
        isOpen={favoritesModalOpen}
        onClose={() => setFavoritesModalOpen(false)}
        favorites={favoriteToolsObjects}
        darkMode={darkMode}
        onRemoveFavorite={handleToggleFavorite}
      />

      <ToolDetailModal
        tool={selectedToolForGuide}
        isOpen={!!selectedToolForGuide}
        onClose={() => setSelectedToolForGuide(null)}
        darkMode={darkMode}
      />

    </div>
  );
}
