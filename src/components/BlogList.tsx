import React, { useState } from 'react';
import { BlogPost } from '../types';
import { AdSensePlaceholder } from './AdSensePlaceholder';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Search, 
  Sparkles, 
  Tag,
  Share2,
  Check
} from 'lucide-react';

interface BlogListProps {
  posts: BlogPost[];
  darkMode: boolean;
  onSelectArticle: (post: BlogPost) => void;
}

export const BlogList: React.FC<BlogListProps> = ({
  posts,
  darkMode,
  onSelectArticle,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // Collect all unique tags
  const allTags = Array.from(
    new Set(posts.flatMap((p) => p.tags))
  );

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    if (selectedTag !== 'all' && !post.tags.includes(selectedTag)) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <section id="blog-section" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <BookOpen className="w-4 h-4" />
            <span>مركز المقالات الشاملة والشروحات التقنية</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
            الشروحات والمقالات التقنية (AdSense Ready)
          </h1>

          <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            استكشف المقالات والمقارنات الشاملة لمساعدتك في اختيار أدوات الذكاء الاصطناعي الأنسب لمشاريعك البرمجية والدراسية مجاناً.
          </p>
        </div>

        {/* Top AdSense Banner Placeholder */}
        <div className="mb-8">
          <AdSensePlaceholder type="ad-banner-top" darkMode={darkMode} />
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/60">
          
          {/* Tags Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full sm:w-auto">
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedTag === 'all'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : darkMode ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700' : 'bg-slate-200 text-slate-700'
              }`}
            >
              كافة المقالات
            </button>

            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1 ${
                  selectedTag === tag
                    ? 'bg-indigo-600 text-white shadow-md'
                    : darkMode ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700' : 'bg-slate-200 text-slate-700'
                }`}
              >
                <Tag className="w-3 h-3" />
                <span>{tag}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className={`relative w-full sm:w-72 rounded-xl p-1.5 border flex items-center gap-2 ${
            darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
          }`}>
            <Search className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في المقالات والشروحات..."
              className={`w-full text-xs bg-transparent outline-none ${
                darkMode ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onSelectArticle(post)}
                className={`group rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/90 border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10'
                    : 'bg-white border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-lg'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Article Header Info */}
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="bg-indigo-500/20 text-indigo-300 font-bold px-2.5 py-1 rounded-full border border-indigo-500/30">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h3 className="font-extrabold text-lg sm:text-xl leading-snug group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* Article Excerpt */}
                  <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {post.excerpt}
                  </p>

                  {/* Article Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${
                          darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <User className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{post.author}</span>
                  </div>

                  <button className="flex items-center gap-1.5 font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    <span>اقرأ المقال الكامل</span>
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-slate-400 text-xs">
            لم نجد مقالات تطابق بحثك الحالي.
          </div>
        )}

      </div>
    </section>
  );
};
