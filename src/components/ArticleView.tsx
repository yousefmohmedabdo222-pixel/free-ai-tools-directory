import React, { useState } from 'react';
import { BlogPost } from '../types';
import { AdSensePlaceholder } from './AdSensePlaceholder';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Check, 
  Bookmark, 
  Sparkles,
  BookOpen,
  MessageSquare
} from 'lucide-react';

interface ArticleViewProps {
  post: BlogPost;
  darkMode: boolean;
  onBackToList: () => void;
  onOpenAssistantWithTopic?: (topic: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  post,
  darkMode,
  onBackToList,
  onOpenAssistantWithTopic,
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <article className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
      
      {/* Back Button */}
      <button
        onClick={onBackToList}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all mb-8 border ${
          darkMode
            ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
        }`}
      >
        <ArrowRight className="w-4 h-4" />
        <span>العودة إلى قائمة الشروحات والمقالات</span>
      </button>

      {/* Article Container Card */}
      <div className={`rounded-3xl p-6 sm:p-10 border shadow-2xl ${
        darkMode ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Article Meta Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-800/60">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="bg-indigo-600 text-white font-extrabold px-3 py-1 rounded-full shadow-sm">
              {post.category}
            </span>

            <div className="flex items-center gap-1 text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.publishDate}</span>
            </div>

            <div className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>زمن القراءة: {post.readTime}</span>
            </div>
          </div>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
              copied
                ? 'bg-emerald-600 text-white border-emerald-500'
                : darkMode
                  ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'تم نسخ الرابط!' : 'مشاركة المقال'}</span>
          </button>
        </div>

        {/* Article Title */}
        <h1 className="text-2xl sm:text-4xl font-black leading-tight tracking-tight mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
          {post.title}
        </h1>

        {/* Author Bio Line */}
        <div className="flex items-center gap-3 mb-8 p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 max-w-fit">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
            <User className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-300 block">{post.author}</span>
            <span className="text-[10px] text-slate-400">محرر تقني خبير في الذكاء الاصطناعي والبرمجة</span>
          </div>
        </div>

        {/* Excerpt Box */}
        <div className={`p-4 rounded-2xl mb-8 border-l-4 border-indigo-500 font-medium text-xs sm:text-sm leading-relaxed ${
          darkMode ? 'bg-slate-950/60 text-slate-300' : 'bg-slate-50 text-slate-700'
        }`}>
          {post.excerpt}
        </div>

        {/* CRITICAL ADSENSE REQUIREMENT 1: AdSense Placeholder after intro/first section */}
        <div className="my-8">
          <AdSensePlaceholder type="ad-in-article" darkMode={darkMode} />
        </div>

        {/* Article HTML Body Content */}
        <div 
          className="prose prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-6 dir-rtl text-slate-200"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* CRITICAL ADSENSE REQUIREMENT 2: AdSense Placeholder at the end of the article */}
        <div className="mt-12 pt-6 border-t border-slate-800/60">
          <AdSensePlaceholder type="ad-in-article" darkMode={darkMode} />
        </div>

        {/* Tags Footer */}
        <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-slate-800/60">
          <span className="text-xs font-bold text-slate-400 ml-2">الوسوم:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-medium px-3 py-1 rounded-xl border ${
                darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* AI Assistant Callout Box */}
        {onOpenAssistantWithTopic && (
          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-indigo-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>هل لديك استفسار حول هدا المقال؟</span>
              </h4>
              <p className="text-xs text-slate-300">
                استعن بمساعد الذكاء الاصطناعي المدمج للإجابة عن أي أسئلة تقنية وتطبيق الكود فوراً.
              </p>
            </div>

            <button
              onClick={() => onOpenAssistantWithTopic(`لدي استفسار بخصوص المقال: ${post.title}`)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-colors shrink-0"
            >
              اسأل AI حول المقال
            </button>
          </div>
        )}

      </div>
    </article>
  );
};
