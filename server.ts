import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { BLOG_POSTS_DATA, findBlogPostBySlug } from './src/data/blogData';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve Sitemap.xml directly
app.get('/sitemap.xml', (req, res) => {
  const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    res.setHeader('Content-Type', 'application/xml');
    return res.sendFile(sitemapPath);
  }
  return res.status(404).send('Sitemap not found');
});

// Helper for dynamic SEO Meta & HTML Injection for View Source (Ctrl+U)
function injectSeoIntoHtml(htmlTemplate: string, reqPath: string): string {
  let html = htmlTemplate;

  if (reqPath.startsWith('/blog/')) {
    const slug = reqPath.replace(/^\/blog\//, '');
    const post = findBlogPostBySlug(slug);

    if (post) {
      const pageTitle = `${post.title} | دليل أدوات الذكاء الاصطناعي المجانية`;
      const pageDesc = post.excerpt.replace(/"/g, '&quot;');
      const canonicalUrl = `https://free-ai-tools-directory-three.vercel.app/blog/${post.slug}`;

      // Update Title & Meta Description
      html = html.replace(/<title>.*?<\/title>/i, `<title>${pageTitle}</title>`);
      html = html.replace(
        /<meta name="description" content=".*?" \/>/i,
        `<meta name="description" content="${pageDesc}" />`
      );

      // Inject Canonical & Open Graph
      const extraMeta = `
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${post.title.replace(/"/g, '&quot;')}" />
    <meta property="og:description" content="${pageDesc}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="article:published_time" content="${post.publishDate}" />
    <meta property="article:author" content="${post.author}" />
`;
      html = html.replace('</head>', `${extraMeta}</head>`);

      // Pre-render content in #root for Googlebot View Source (Ctrl+U)
      const prerenderHtml = `
      <article id="seo-prerender-article" style="max-width:850px;margin:0 auto;padding:20px;direction:rtl;font-family:sans-serif;">
        <header>
          <span style="color:#6366f1;font-weight:bold;">${post.category}</span>
          <h1 style="font-size:28px;margin-top:10px;color:#1e293b;">${post.title}</h1>
          <p style="color:#64748b;font-size:14px;">بقلم: ${post.author} | بتاريخ: ${post.publishDate} | زمن القراءة: ${post.readTime}</p>
        </header>
        <hr style="border-color:#e2e8f0;margin:20px 0;" />
        <div style="font-size:16px;line-height:1.8;color:#334155;">
          ${post.contentHtml}
        </div>
      </article>
      `;

      html = html.replace('<div id="root"></div>', `<div id="root">${prerenderHtml}</div>`);
      return html;
    }
  }

  if (reqPath === '/blog' || reqPath === '/blog/') {
    const pageTitle = 'قسم المقالات والشروحات التقنية | دليل أدوات الذكاء الاصطناعي المجانية';
    const pageDesc = 'اقرأ أحدث المقالات والشروحات العملاقة في الذكاء الاصطناعي للمبرمجين، مقارنة النماذج، وهندسة البرومبتات.';

    html = html.replace(/<title>.*?<\/title>/i, `<title>${pageTitle}</title>`);
    html = html.replace(
      /<meta name="description" content=".*?" \/>/i,
      `<meta name="description" content="${pageDesc}" />`
    );

    let blogListHtml = '<div id="seo-prerender-bloglist" style="max-width:850px;margin:0 auto;padding:20px;direction:rtl;"><h1>قسم الشروحات والمقالات التقنية</h1><ul style="list-style:none;padding:0;">';
    BLOG_POSTS_DATA.forEach((p) => {
      blogListHtml += `<li style="margin-bottom:20px;padding:15px;border:1px solid #e2e8f0;border-radius:12px;"><a href="/blog/${p.slug}" style="color:#4f46e5;font-weight:bold;font-size:18px;text-decoration:none;">${p.title}</a><p style="color:#475569;font-size:14px;margin-top:8px;">${p.excerpt}</p></li>`;
    });
    blogListHtml += '</ul></div>';

    html = html.replace('<div id="root"></div>', `<div id="root">${blogListHtml}</div>`);
    return html;
  }

  return html;
}

// Initialize Gemini SDK with User-Agent header as required by AI Studio guidelines
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// API Endpoint for AI Assistant & Prompt Enhancer
app.post('/api/assistant', async (req, res) => {
  try {
    const { userQuery, actionType, promptText } = req.body;

    const ai = getGeminiClient();
    if (!ai) {
      return res.status(200).json({
        success: true,
        response: 'عذراً، لم يتم ضبط مفتاح GEMINI_API_KEY. يرجى توفيره عبر الإعدادات، ولكن يمكنك تصفح دليل الأدوات ومكتبة البرومبتات كاملاً بدون قيود!',
      });
    }

    let systemInstruction = `أنت المساعد الذكي الرسمي لـ "دليل أدوات الذكاء الاصطناعي المجانية".
أنت خبير في أدوات الذكاء الاصطناعي للمبرمجين، الطلاب، ومطوري الألعاب.
تحدث باللغة العربية الفصحى المبسطة بأسلوب مشجع، مباشر، واحترافي.
قدم إجابات منظمة باستخدام القوائم والأبرز بدقة.`;

    let prompt = '';

    if (actionType === 'enhancePrompt') {
      systemInstruction += ` قم بتحسين البرومبت المقدم ليصبح برومبت احترافي عالي الجودة متوافق مع نماذج الذكاء الاصطناعي مثل Claude, ChatGPT, DeepSeek.`;
      prompt = `يرجى تحسين وتطوير هذا البرومبت الأصلي ليكون أعلى دقة واحترافية:
"${promptText}"

ضع البرومبت المحسن في صندوق واضح مع شرح مختصر للتعديلات.`;
    } else if (actionType === 'recommendTool') {
      systemInstruction += ` اقترح أفضل أداة مجانية تناسب حاجة المستخدم بناءً على معايير المجانية 100%، السرعة، وسهولة الاستخدام.`;
      prompt = `طلب المستخدم: "${userQuery}"
اقترح 2-3 أدوات مجانية مناسبة مع روابطها ومميزاتها.`;
    } else {
      prompt = userQuery || 'مرحباً، كيف يمكنك مساعدتي في اختيار أفضل أدوات الذكاء الاصطناعي المجانية؟';
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || 'لم يتم توليد نص.';
    return res.json({ success: true, response: replyText });
  } catch (err: any) {
    console.error('Gemini API Error:', err);
    return res.status(500).json({
      success: false,
      error: 'حدث خطأ أثناء الاتصال بالذكاء الاصطناعي. يرجى المحاولة لاحقاً.',
    });
  }
});

// Setup Vite in development or static serving in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, port: Number(PORT) },
      appType: 'custom',
    });

    app.use(vite.middlewares);

    app.get('*', async (req, res, next) => {
      if (
        req.path.startsWith('/api') ||
        req.path.startsWith('/@') ||
        req.path.startsWith('/node_modules') ||
        req.path.startsWith('/src') ||
        (req.path.includes('.') && !req.path.endsWith('.html'))
      ) {
        return next();
      }
      try {
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(req.originalUrl, template);
        const html = injectSeoIntoHtml(template, req.path);
        res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist'), { index: false }));
    app.get('*', (req, res) => {
      const templatePath = path.resolve(__dirname, 'dist', 'index.html');
      if (fs.existsSync(templatePath)) {
        let template = fs.readFileSync(templatePath, 'utf-8');
        const html = injectSeoIntoHtml(template, req.path);
        res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
      } else {
        res.status(404).send('Not Found');
      }
    });
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();

