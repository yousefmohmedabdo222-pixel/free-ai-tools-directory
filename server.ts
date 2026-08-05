import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

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
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
