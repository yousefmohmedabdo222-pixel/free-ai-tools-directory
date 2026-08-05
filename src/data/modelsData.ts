import { AIModelSpec } from '../types';

export const AI_MODELS_DATA: AIModelSpec[] = [
  {
    id: 'deepseek-r1',
    name: 'DeepSeek-R1',
    nameEn: 'DeepSeek-R1',
    provider: 'DeepSeek AI',
    releaseYear: '2026',
    contextWindow: '64K Token',
    freeDailyTier: 'مجاني 100% عبر Chat + مفتوح المصدر بالكامل للتحميل',
    speedRating: 8,
    codingRating: 10,
    arabicRating: 9,
    strengths: [
      'تفوق ساحق في حل الألغاز المعقدة والبرمجة',
      'يعرض سلسلة التفكير بالتفصيل (Chain-of-Thought)',
      'متاح للتنزيل محلياً بحجم 7B وحتى 671B',
      'دعم ممتاز للغة العربية والرياضيات'
    ],
    limitations: [
      'بطيء نسبياً بسبب توليد خطوات التفكير التفصيلية',
      'غير مخصص لتوليد الصور المباشرة'
    ],
    bestUseCases: 'معالجة المسائل البرمجية المعقدة، التفكير المنطقي، وتحليل البيانات الشاقة مجاناً.',
    freeAccessUrl: 'https://chat.deepseek.com',
    badge: 'الأفضل في البرمجة والمنطق'
  },
  {
    id: 'claude-35-sonnet',
    name: 'Claude 3.5 Sonnet',
    nameEn: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    releaseYear: '2025',
    contextWindow: '200K Token',
    freeDailyTier: 'حدود يومية مجانية تتجدد كل بضع ساعات',
    speedRating: 9,
    codingRating: 10,
    arabicRating: 10,
    strengths: [
      'أفضل أسلوب كتابة طبيعي باللغة العربية',
      'ميزة Artifacts لمعاينة الأكواد والواجهات فوراً',
      'تفوق هائل في تحليل المستندات والصور',
      'فهم دقيق للبرومبتات المعقدة'
    ],
    limitations: [
      'الحد اليومي المجاني قد ينتهي عند الضغط العالي',
      'غير مفتوح المصدر للتشغيل المحلي'
    ],
    bestUseCases: 'صياغة المقالات، بناء واجهات React و HTML، والتحليل اللغوي الدقيق.',
    freeAccessUrl: 'https://claude.ai',
    badge: 'الأفضل في الكتابة والواجهات'
  },
  {
    id: 'gemini-2-flash',
    name: 'Gemini 2.0 Flash',
    nameEn: 'Gemini 2.0 Flash',
    provider: 'Google AI',
    releaseYear: '2026',
    contextWindow: '1,000,000 Token',
    freeDailyTier: 'مجاني عبر Google AI Studio (15 طلب/دقيقة)',
    speedRating: 10,
    codingRating: 9,
    arabicRating: 9,
    strengths: [
      'سرعة استجابة فائقة للغاية (Ultra-fast)',
      'نافذة سياق عملاقة تتسع لـ 1,000,000 توكن',
      'دعم متعدد الوسائط (فيديو، صوت، صور، نصوص)',
      'بحث مباشر متصل بمحرك Google'
    ],
    limitations: [
      'قد يتطلب تحديد البرومبت بدقة للأمور الأكاديمية الصارمة'
    ],
    bestUseCases: 'تلخيص الملفات الضخمة والفيديوهات، الاستجابات السريعة، والتطبيقات التفاعلية.',
    freeAccessUrl: 'https://aistudio.google.com',
    badge: 'الأسرع + أضخم سياق'
  },
  {
    id: 'gpt-4o-mini',
    name: 'GPT-4o mini',
    nameEn: 'GPT-4o mini',
    provider: 'OpenAI',
    releaseYear: '2025',
    contextWindow: '128K Token',
    freeDailyTier: 'مجاني وغير محدود تقريباً لجميع مستخدمي ChatGPT',
    speedRating: 9,
    codingRating: 8.5,
    arabicRating: 9,
    strengths: [
      'خفيف جداً وسريع ومتاح للجميع بلا قيود صارمة',
      'دعم ممتاز للمحادثات اليومية والترجمة',
      'متصل بالإنترنت وميزة تحليل الملفات والصور',
      'دعم واسع في التطبيقات والمكتبات'
    ],
    limitations: [
      'أقل في القدرات التفكيرية مقارنة بـ DeepSeek-R1'
    ],
    bestUseCases: 'الاستخدام اليومي العام، الترجمة السريعة، وتلخيص المقالات.',
    freeAccessUrl: 'https://chatgpt.com',
    badge: 'الأكثر انتشاراً للمحادثات'
  },
  {
    id: 'qwen-25-coder-32b',
    name: 'Qwen 2.5 Coder 32B',
    nameEn: 'Qwen 2.5 Coder 32B',
    provider: 'Alibaba Cloud',
    releaseYear: '2025',
    contextWindow: '128K Token',
    freeDailyTier: 'مجاني عبر منصة Qwen Chat ومفتوح المصدر',
    speedRating: 9,
    codingRating: 9.5,
    arabicRating: 8.5,
    strengths: [
      'أقوى نموذج مفتوح المصدر متخصص حصراً في الكود',
      'دعم أجنحة برمجية واسعة و 40+ لغة برمجة',
      'قابل للتشغيل محلياً بسهولة عبر Ollama'
    ],
    limitations: [
      'مركز بشكل رئيسي على البرمجة مقارنة بالمهام الأدبية'
    ],
    bestUseCases: 'توليد ومراجعة الكود، بناء تطبيقات كاملة، وتجربة النماذج محلياً.',
    freeAccessUrl: 'https://chat.qwenlm.ai',
    badge: 'بطل الكود مفتوح المصدر'
  },
  {
    id: 'llama-33-70b',
    name: 'Llama 3.3 70B',
    nameEn: 'Llama 3.3 70B',
    provider: 'Meta AI',
    releaseYear: '2025',
    contextWindow: '128K Token',
    freeDailyTier: 'مجاني عبر HuggingChat و Meta AI ومفتوح المصدر',
    speedRating: 8.5,
    codingRating: 9,
    arabicRating: 8.5,
    strengths: [
      'نموذج دقيق ومتزن جداً مع معايير أمان عالية',
      'مرونة هائلة في التعديل والاستضافة المحلية',
      'قوة استدلال لغوي وتحليل نصوص متفوقة'
    ],
    limitations: [
      'يتطلب إمكانيات عتادية ضخمة لتشغيله محلياً بالكامل'
    ],
    bestUseCases: 'المشاريع المؤسسية، التحليل اللغوي، وبناء المساعدين المخصصين.',
    freeAccessUrl: 'https://huggingface.co/chat',
    badge: 'عملاق Meta مفتوح المصدر'
  },
  {
    id: 'mistral-large',
    name: 'Mistral Large 2',
    nameEn: 'Mistral Large 2',
    provider: 'Mistral AI',
    releaseYear: '2025',
    contextWindow: '128K Token',
    freeDailyTier: 'مجاني عبر Le Chat (Mistral Web)',
    speedRating: 9,
    codingRating: 9,
    arabicRating: 8.8,
    strengths: [
      'دعم ممتاز للغات متعددة واللغة الفرنسية والعربية',
      'مهارات جبارة في الرياضيات وحل المسائل البرمجية',
      'تصميم خفيف وأداء سريع وموثوق'
    ],
    limitations: [
      'أقل انتشاراً في مجتمعات البرمجة العربية مقارنة بـ Claude'
    ],
    bestUseCases: 'الترجمة الاحترافية متعدة اللغات، الرياضيات، والتوليد البرمجي.',
    freeAccessUrl: 'https://chat.mistral.ai',
    badge: 'القوة الأوربية الفائقة'
  }
];
