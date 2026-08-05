import { AITool } from '../types';

export const AI_TOOLS_DATA: AITool[] = [
  // ==========================================
  // 1. أدوات البرمجة والمساعدات الذكية (25 أداة)
  // ==========================================
  {
    id: 'cursor-ide',
    name: 'Cursor IDE',
    nameEn: 'Cursor Code Editor',
    description: 'محرر أكواد متطور مبني على VS Code مدمج بنماذج Claude 3.5 و GPT-4o للتطوير السريع وتعديل المشاريع متعددة الملفات.',
    detailedGuide: {
      overview: 'أداة Cursor IDE هي محرر أكواد ثوري قائم على بيئة VS Code تم تطويره خصيصاً لدمج الذكاء الاصطناعي في صلب عملية كتابة الأكواد المصدرية. يتيح لك المحرر العمل المباشر مع أحدث النماذج مثل Claude 3.5 Sonnet و GPT-4o لتعديل المشاريع كاملة وبناء الميزات المعقدة في ثوانٍ.',
      whatItDoes: 'تتيح Cursor قراءة مجلدات المشروع بالكامل وفهم العلاقات بين الملفات. تقوم الأداة بإكمال الكود التلقائي الذكي أثناء الكتابة (Tab Autocomplete)، وإنشاء وتعديل عدة ملفات متزامنة عبر نافذة Composer، بالإضافة للقدرة على الإجابة عن الاستفسارات المعمارية وتتبع سجلات الأخطاء بدون مغادرة المحرر.',
      pros: [
        'دعم كامل لكافة إضافات وثيمات ومرافق VS Code الأصلية.',
        'ميزة Composer لتعديل عدة ملفات برمجية في نفس الوقت بنقرة زر.',
        'تكامل ممتاز مع نماذج Claude 3.5 Sonnet و DeepSeek-R1 و GPT-4o.',
        'فهم كامل لبنية المشروع والملفات المرفقة وتأمين الأنواع (TypeScript).'
      ],
      cons: [
        'تطلب اتصالاً ثابتاً بالإنترنت للاستفادة من النماذج السحابية.',
        'استهلاك أعلى للذاكرة مقارنة بمحرر VS Code التجريدي.'
      ],
      howToUse: [
        'حمل برنامج Cursor IDE وتثبيته مباشرة من الموقع الرسمي cursor.com.',
        'افتح مجلد مشروعك البرمجي، واضغط على Ctrl + Shift + P لاستيراد إضافات VS Code.',
        'استخدم اختصار Ctrl + K لتعديل الأسطر المحددة، أو Ctrl + I لفتح Composer وتطوير ميزة كاملة.',
        'شاهد مراجعة التغييرات (Diff View) واضغط Accept لتطبيق التعديلات على الملفات.'
      ],
      practicalExamples: 'أثناء بناء تطبيق React، استخدم اختصار Ctrl + I واكتب: "أنشئ مكون جدول بيانات تفاعلي يدعم الفلترة والترتيب باستخدام Tailwind CSS و Lucide icons". سينشئ Cursor ملف Component جديد ويحدث ملف Types و App.tsx تلقائياً!',
      alternatives: ['Windsurf Editor', 'VS Code with Continue.dev', 'GitHub Copilot', 'Replit AI']
    },
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Code2',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://cursor.com',
    tags: ['محرر أكواد', 'VS Code', 'Claude 3.5', 'تطوير سريع'],
    freeFeatures: [
      'نسخة برمجية حرة مع 2,000 إكمال تلقائي شهرياً',
      '50 طلب سريع مع محرر Composer ذكي',
      'فهم كامل لمجلدات وصور المشروع'
    ],
    featured: true,
    popularityCount: 45200,
    addedDate: '2026-01-15'
  },
  {
    id: 'windsurf-ide',
    name: 'Windsurf Editor',
    nameEn: 'Windsurf by Codeium',
    description: 'محرر أوديو مخصص يعمل بنظام Agentic AI يحلل العلاقات بين الأكواد وينفذ خطوات بناء التطبيقات تلقائياً.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Sparkles',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://codeium.com/windsurf',
    tags: ['Agentic Editor', 'Windsurf Cascade', 'برمجة ذكية', 'تطوير كامل'],
    freeFeatures: [
      'حدود مجانية شهرية سخية للمطورين',
      'ميزة Cascade Flow لبناء الميزات خطوة بخطوة',
      'دعم كامل لملفات TypeScript و Python و C++'
    ],
    featured: true,
    popularityCount: 38900,
    addedDate: '2026-01-20'
  },
  {
    id: 'v0-dev',
    name: 'v0.dev by Vercel',
    nameEn: 'v0 Web UI Generator',
    description: 'أداة Vercel الثورية لتوليد واجهات المستخدم React و Tailwind CSS و Shadcn UI بمجرد وصفها نصياً.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Layers',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://v0.dev',
    tags: ['React', 'Tailwind CSS', 'Shadcn UI', 'Vercel', 'توليد واجهات'],
    freeFeatures: [
      '200 رصيد مجاني شهرياً لتوليد المكونات',
      'معاينة حية وتفاعلية فورية للواجهات',
      'تصدير الكود المباشر بنقرة زر واحدة'
    ],
    featured: true,
    popularityCount: 51200,
    addedDate: '2026-01-10'
  },
  {
    id: 'replit-ai',
    name: 'Replit AI Agent',
    nameEn: 'Replit Web IDE & Agent',
    description: 'بيئة تطوير سحابية متكاملة تتيح لك بناء وتجربة ونشر تطبيقات الويب والخوادم من المتصفح مباشرة.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Zap',
    pricingType: 'خطة مجانية سخية',
    rating: 4.7,
    directUrl: 'https://replit.com',
    tags: ['بيئة سحابية', 'تطبيق ويب', 'Node.js', 'Python', 'نشر مجاني'],
    freeFeatures: [
      'استضافة مشاريع مصغرة مجاناً مع دكتات سريعة',
      'مساعد إكمال الكود وتصحيح الأخطاء من المتصفح',
      'مشاركة المشاريع البرمجية بروابط مباشرة'
    ],
    featured: false,
    popularityCount: 32100,
    addedDate: '2026-01-12'
  },
  {
    id: 'bolt-new',
    name: 'Bolt.new',
    nameEn: 'Bolt.new StackBlitz',
    description: 'منصة تطوير سريعة بالكامل داخل المتصفح من StackBlitz تتيح بناء وتشغيل تطبيقات WebContainers كاملة ببرومبت.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Code2',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://bolt.new',
    tags: ['WebContainers', 'Vite', 'React', 'Full-stack', 'توليد فوري'],
    freeFeatures: [
      'توليد تطبيقات Full-stack كاملة في المتصفح',
      'تشغيل السيرفر وحزم Node.js محلياً عبر WebContainers',
      'تصدير فورى إلى Netlify و GitHub'
    ],
    featured: true,
    popularityCount: 41000,
    addedDate: '2026-01-25'
  },
  {
    id: 'hugging-chat',
    name: 'HuggingChat',
    nameEn: 'Hugging Face Open Chat',
    description: 'منصة حرة ومفتوحة المصدر من Hugging Face توفر الوصول المجاني لأقوى النماذج العالمية مثل Llama 3.3 و Qwen 2.5.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Bot',
    pricingType: 'مجاني 100%',
    rating: 4.8,
    directUrl: 'https://huggingface.co/chat',
    tags: ['مفتوح المصدر', 'Llama 3.3', 'Qwen 2.5', 'HuggingFace', 'بدون تسجيل'],
    freeFeatures: [
      'مجاني 100% وبدون حدود استخدام صارمة',
      'التنقل بين عشرات النماذج العالمية مفتوحة المصدر',
      'البحث في الإنترنت وتحليل المستندات والأكواد'
    ],
    featured: true,
    popularityCount: 36500,
    addedDate: '2026-01-08'
  },
  {
    id: 'continue-dev',
    name: 'Continue.dev',
    nameEn: 'Continue.dev VS Code Extension',
    description: 'إضافة مفتوحة المصدر لمحرري VS Code و JetBrains تتيح لك ربط أي نموذج محلي عبر Ollama أو نموذج سحابي لمساعدتك في الكود.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Code2',
    pricingType: 'مفتوح المصدر',
    rating: 4.8,
    directUrl: 'https://continue.dev',
    tags: ['VS Code', 'JetBrains', 'Ollama', 'مفتوح المصدر'],
    freeFeatures: [
      'مفتوح المصدر بالكامل مع تخصيص كامل للبرومبتات',
      'ربط مجاني مع Ollama و LM Studio محلياً',
      'شات متكامل لفهم ملفات المشروع (Context Files)'
    ],
    featured: true,
    popularityCount: 22400,
    addedDate: '2026-02-05'
  },
  {
    id: 'codeium-free',
    name: 'Codeium',
    nameEn: 'Codeium AI Extension',
    description: 'إضافة إكمال الأكواد المجانية السريعة جداً مع دعم أكثر من 70 لغة برمجية وكافة المحررات المعروفة.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Zap',
    pricingType: 'مجاني 100%',
    rating: 4.9,
    directUrl: 'https://codeium.com',
    tags: ['إكمال تلقائي', 'مجاني للأفراد', 'VS Code', 'شات برمجتي'],
    freeFeatures: [
      'مجاني للأفراد مدى الحياة بدون أي حدود للسرعة',
      'دعم كامل لـ VS Code, JetBrains, Vim, Neovim, Eclipse',
      'شات متكامل لتفسير وإعادة كتابة الأكواد'
    ],
    featured: true,
    popularityCount: 38200,
    addedDate: '2026-01-18'
  },
  {
    id: 'tabby-ml',
    name: 'Tabby ML',
    nameEn: 'Tabby Self-Hosted Coding Assistant',
    description: 'مساعد برمجتي للتكملة التلقائية قابل للاستضافة الذاتية مع التوافق التام مع Gitlab و VS Code بدون أي اتصالات خارجية.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Terminal',
    pricingType: 'مفتوح المصدر',
    rating: 4.7,
    directUrl: 'https://tabby.tabbyml.com',
    tags: ['استضافة ذاتية', 'خصوصية', 'إكمال تلقائي', 'Docker'],
    freeFeatures: [
      'سيرفر محلي مفتوح المصدر يمكن تشغيله عبر Docker',
      'دعم نماذج StarCoder و Qwen Coder',
      'بديل آمن بالكامل لـ GitHub Copilot للشركات والطلاب'
    ],
    featured: false,
    popularityCount: 13900,
    addedDate: '2026-02-02'
  },
  {
    id: 'aider-ai',
    name: 'Aider AI',
    nameEn: 'Aider Terminal Pair Programmer',
    description: 'أداة سطر أوامر (CLI) برمجية تُعد من أسرع مساعدي التطوير الثنائي؛ ترتبط مباشرة بـ Git وتنفذ التغييرات عبر ملفات متعددة تلقائياً.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Terminal',
    pricingType: 'مفتوح المصدر',
    rating: 4.9,
    directUrl: 'https://aider.chat',
    tags: ['سطر أوامر', 'Git', 'Terminal', 'تعديل متعدد الملفات'],
    freeFeatures: [
      'أداة مفتوحة المصدر 100% للعمل مباشرة في شاشة الـ Terminal',
      'دعم الاتصال بـ Ollama و DeepSeek-R1 و Claude API',
      'تتبع ملفات Git وإجراء Commit تلقائي بصفة مرتبة'
    ],
    featured: true,
    popularityCount: 19800,
    addedDate: '2026-02-10'
  },
  {
    id: 'ollama-ai',
    name: 'Ollama',
    nameEn: 'Ollama Local AI Runner',
    description: 'الأداة القياسية الأكثر شهرة لتنزيل وتدريب وتشغيل أحدث النماذج اللغوية والبرمجية محلياً على جهازك الشخصي بدون إنترنت.',
    category: 'localModels',
    categoryLabel: 'النماذج المحلية والخصوصية',
    iconName: 'Cpu',
    pricingType: 'مفتوح المصدر',
    rating: 5.0,
    directUrl: 'https://ollama.com',
    tags: ['تشغيل محلي', 'DeepSeek-R1', 'Llama 3', 'Qwen', 'خصوصية'],
    freeFeatures: [
      'برنامج مجاني ومفتوح المصدر 100% لأنظمة Windows, Mac, Linux',
      'تنزيل بنقرة واحدة لأقوى النماذج (DeepSeek-R1, Qwen 2.5 Coder)',
      'توفير خادم API محلي متوافق مع كافة الإضافات والمحررات'
    ],
    featured: true,
    popularityCount: 58000,
    addedDate: '2026-01-05'
  },
  {
    id: 'lm-studio',
    name: 'LM Studio',
    nameEn: 'LM Studio Local AI App',
    description: 'تطبيق سطح مكتب احترافي بواجهة رسومية خيالية للاكتشاف والتنزيل والدردشة مع كافة النماذج المحلية بصيغة GGUF.',
    category: 'localModels',
    categoryLabel: 'النماذج المحلية والخصوصية',
    iconName: 'ShieldCheck',
    pricingType: 'مجاني 100%',
    rating: 4.9,
    directUrl: 'https://lmstudio.ai',
    tags: ['واجهة رسومية', 'GGUF', 'HuggingFace', 'سيرفر محلي'],
    freeFeatures: [
      'مجاني بالكامل للاستخدام الشخصي والتطوير',
      'البحث المباشر في HuggingFace وتنزيل الملفات',
      'تشغيل سيرفر محلي متوافق مع OpenAI Local API'
    ],
    featured: true,
    popularityCount: 42300,
    addedDate: '2026-01-14'
  },
  {
    id: 'jan-ai',
    name: 'Jan.ai',
    nameEn: 'Jan.ai Offline AI',
    description: 'بديل مفتوح المصدر لتطبيق ChatGPT يعمل بنسبة 100% بدون إنترنت على حاسوبك الشخصي مع إدارة النماذج المحلية بسهولة.',
    category: 'localModels',
    categoryLabel: 'النماذج المحلية والخصوصية',
    iconName: 'ShieldCheck',
    pricingType: 'مفتوح المصدر',
    rating: 4.8,
    directUrl: 'https://jan.ai',
    tags: ['تطبيق سطح المكتب', 'بدون إنترنت', 'خصوصية', 'Ollama'],
    freeFeatures: [
      'مجاني ومفتوح المصدر بالكامل على Windows و Mac و Linux',
      'تنزيل بنقرة واحدة لـ DeepSeek-R1 و Llama 3 و Qwen',
      'واجهة أنيقة شبيهة بـ ChatGPT مع الحفاظ التام على أسرارك'
    ],
    featured: true,
    popularityCount: 26100,
    addedDate: '2026-02-12'
  },
  {
    id: 'everything-claude-code',
    name: 'Everything Claude Code Hub',
    nameEn: 'Everything Claude Code Tools',
    description: 'حزمة أدوات وسكربتات مفتوحة المصدر لتوسيع قدرات المساعد البرمجي Claude ليغطي المشاريع المعقدة وتتبع الأخطاء.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Terminal',
    pricingType: 'مفتوح المصدر',
    rating: 4.8,
    directUrl: 'https://github.com/afforai/everything-claude-code',
    tags: ['Claude 3.5', 'GitHub', 'أتمتة برمجية', 'سكربتات'],
    freeFeatures: [
      'سكربتات مجانية ومفتوحة المصدر للمطورين',
      'تحسين إعدادات الـ Context وإدارة الـ Memory',
      'دعم كامل لربط مشاريع Python و TypeScript'
    ],
    featured: false,
    popularityCount: 14500,
    addedDate: '2026-02-01'
  },
  {
    id: 'phind-ai',
    name: 'Phind AI',
    nameEn: 'Phind Developer Search Engine',
    description: 'محرك بحث ومساعد برمجتي مخصص للمطورين يقدم إجابات دقيقة موثقة بالكود وشروحات مخصصة لمشاكل التكوين.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Search',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://phind.com',
    tags: ['محرك بحث برمجي', 'حل المشاكل', 'تتبع الأخطاء', 'إجابات كود'],
    freeFeatures: [
      'بحث برمجي غير محدود مجاناً عبر الإنترنت',
      'دعم نماذج Phind Model الخاصة ومقارنتها',
      'توليد كود وشرح سريع مع إضافة للـ VS Code'
    ],
    featured: false,
    popularityCount: 31000,
    addedDate: '2026-01-16'
  },
  {
    id: 'supermaven-ai',
    name: 'Supermaven',
    nameEn: 'Supermaven Fast Auto-complete',
    description: 'أسرع أداة إكمال كود متقدمة تعمل بسياق ضخم يبلغ 300,000 توكنز وبسرعة زمن استجابة لا تتعدى 10 مللي ثانية.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Zap',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://supermaven.com',
    tags: ['سرعة فائقة', 'سياق عملاق', 'إكمال تلقائي', 'VS Code'],
    freeFeatures: [
      'نسخة مجانية مع أسرع محرك إكمال كود في العالم',
      'سياق يصل لـ 300K توكن لجميع ملفات المشروع',
      'تكامل ناعم مع VS Code و JetBrains و Neovim'
    ],
    featured: true,
    popularityCount: 21500,
    addedDate: '2026-02-04'
  },
  {
    id: 'warp-ai',
    name: 'Warp AI Terminal',
    nameEn: 'Warp Terminal for Developers',
    description: 'تطبيق Terminal حديث ومكتوب بلغة Rust ومزود بذكاء اصطناعي مدمج لتوليد وتشخيص أوامر الـ Shell و Bash بسهولة.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Terminal',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://warp.dev',
    tags: ['Terminal Rust', 'Bash AI', 'سطر أوامر', 'أوامر سريعة'],
    freeFeatures: [
      'نسخة مجانية فردية كاملة المميزات على Mac و Linux و Windows',
      'توليد أوامر Terminal وتفسير رسائل الأخطاء',
      'مشاركة الأوامر والمجموعات البرمجية مع الفريق'
    ],
    featured: false,
    popularityCount: 28400,
    addedDate: '2026-01-22'
  },
  {
    id: 'pieces-for-developers',
    name: 'Pieces for Developers',
    nameEn: 'Pieces AI Copilot & Snippets',
    description: 'منصة لإدارة وقصاصات الأكواد (Code Snippets) مع مساعد ذكي يعمل محلياً بالكامل لحفظ وتنظيم المقتطفات البرمجية.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Box',
    pricingType: 'مجاني 100%',
    rating: 4.8,
    directUrl: 'https://pieces.app',
    tags: ['Snippets', 'ملاحظات برمجة', 'تشغيل محلي', 'تنظيم الكود'],
    freeFeatures: [
      'تطبيق مجاني بالكامل للأفراد والمطورين',
      'حفظ وتنظيم الأكواد مع المراجع البرمجية تلقائياً',
      'مساعد ذكي يعمل أوفلاين مع التكامل في VS Code'
    ],
    featured: false,
    popularityCount: 19200,
    addedDate: '2026-01-28'
  },
  {
    id: 'localai',
    name: 'LocalAI Engine',
    nameEn: 'LocalAI OpenAI Drop-in Alternative',
    description: 'بديل مفتوح المصدر بالكامل لخدمات OpenAI API يتيح لك استضافة سيرفر توليد نصوص وصور وصوت محلياً على أجهزتك.',
    category: 'localModels',
    categoryLabel: 'النماذج المحلية والخصوصية',
    iconName: 'Cpu',
    pricingType: 'مفتوح المصدر',
    rating: 4.7,
    directUrl: 'https://localai.io',
    tags: ['Local REST API', 'OpenAI Alternative', 'Docker', 'Self-Hosted'],
    freeFeatures: [
      'مشروع مفتوح المصدر 100% بدعم Docker',
      'تشغيل توليد النصوص والصور والصوت في محطة واحدة',
      'توافق كامل مع مكتبات Python و Node.js المعتادة'
    ],
    featured: false,
    popularityCount: 16800,
    addedDate: '2026-01-19'
  },
  {
    id: 'vllm-engine',
    name: 'vLLM Fast Serving',
    nameEn: 'vLLM High-throughput Engine',
    description: 'المحرك الأسرع والأكثر كفاءة عالمياً لاستضافة وتخديم النماذج اللغوية الضخمة على كروت الشاشة المحلية و خوادم الشركات.',
    category: 'localModels',
    categoryLabel: 'النماذج المحلية والخصوصية',
    iconName: 'Zap',
    pricingType: 'مفتوح المصدر',
    rating: 4.9,
    directUrl: 'https://vllm.ai',
    tags: ['تسريع سيرفرات', 'PagedAttention', 'Python GPU', 'استضافة ضخمة'],
    freeFeatures: [
      'مكتبة مفتوحة المصدر مجانية مع تقنية PagedAttention',
      'مضاعفة السرعة وتخفيض استهلاك VRAM بنسبة 50%',
      'دعم كامل لـ DeepSeek, Llama, Qwen, Mistral'
    ],
    featured: false,
    popularityCount: 24000,
    addedDate: '2026-02-06'
  },
  {
    id: 'open-webui',
    name: 'Open WebUI',
    nameEn: 'Open WebUI for Ollama',
    description: 'واجهة المستخدم الأكثر فخامة وسلاسة لدردشة وإدارة النماذج المحلية المربوطة بـ Ollama مع دعم الصوت والتصوير.',
    category: 'localModels',
    categoryLabel: 'النماذج المحلية والخصوصية',
    iconName: 'Bot',
    pricingType: 'مفتوح المصدر',
    rating: 5.0,
    directUrl: 'https://openwebui.com',
    tags: ['Web UI', 'Ollama Interface', 'RAG Document', 'مفتوح المصدر'],
    freeFeatures: [
      'واجهة مجانية ومفتوحة المصدر بالكامل شبيهة بـ ChatGPT Plus',
      'دعم رفع الملفات وتوليد الصور وتوليد الصوت',
      'إدارة المستخدمين والصلاحيات والربط المباشر بـ Ollama'
    ],
    featured: true,
    popularityCount: 48900,
    addedDate: '2026-01-09'
  },
  {
    id: 'cody-sourcegraph',
    name: 'Cody by Sourcegraph',
    nameEn: 'Cody Code Intelligence',
    description: 'مساعد برمجتي يفهم قاعدة الكود البرمجية الضخمة للشركات والمشاريع مفتوحة المصدر عبر تقنيات الكود جراف المتقدمة.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Code2',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://sourcegraph.com/cody',
    tags: ['Sourcegraph', 'فهم مشاريع عملاقة', 'VS Code', 'Claude 3.5'],
    freeFeatures: [
      'خطة مجانية كاملة للمطورين المستقلين بدون رسوم',
      'البحث الذكي في كافة ملفات المستودع (Codebase Graph)',
      'تكامل سلس مع VS Code و JetBrains'
    ],
    featured: false,
    popularityCount: 23100,
    addedDate: '2026-01-27'
  },
  {
    id: 'goose-ai',
    name: 'Goose Open Agent',
    nameEn: 'Goose Open Source AI Agent',
    description: 'عميل ذكاء اصطناعي برمجتي مفتوح المصدر من Block يكتب وينفذ ويختبر الأكواد مباشرة على جهازك.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Terminal',
    pricingType: 'مفتوح المصدر',
    rating: 4.7,
    directUrl: 'https://block.github.io/goose',
    tags: ['Block', 'مفتوح المصدر', 'Agentic CLI', 'أتمتة التطوير'],
    freeFeatures: [
      'مشروع مفتوح المصدر بالكامل مجاني المدى',
      'تشغيل أي نموذج محلي أو سحابي عبر اختيار المستفيد',
      'إدارة وتنفيذ المهام التكرارية وتحديث المجلدات'
    ],
    featured: false,
    popularityCount: 15300,
    addedDate: '2026-02-11'
  },
  {
    id: 'anything-llm',
    name: 'AnythingLLM',
    nameEn: 'AnythingLLM Desktop & Server',
    description: 'منصة شاملة لتحويل وثائقك وملفاتك (PDF/Word/Code) إلى قاعدة معرفية تفاعلية تعمل محلياً بكتام الخصوصية عبر تقنية RAG.',
    category: 'localModels',
    categoryLabel: 'النماذج المحلية والخصوصية',
    iconName: 'Cpu',
    pricingType: 'مفتوح المصدر',
    rating: 4.9,
    directUrl: 'https://anythingllm.com',
    tags: ['RAG', 'مستندات', 'PDF Chat', 'خصوصية فائقة'],
    freeFeatures: [
      'برنامج سطح مكتب مجاني بالكامل بدون حد للمستندات',
      'ربط محلي بـ Ollama و LM Studio و LocalAI',
      'بناء بروتكولات البحث والاسترجاع RAG في ثوانٍ'
    ],
    featured: false,
    popularityCount: 18900,
    addedDate: '2026-02-14'
  },
  {
    id: 'claude-code-cli',
    name: 'Claude Code Agent CLI',
    nameEn: 'Claude Code Terminal Agent',
    description: 'عميل برمجتي ذكي يعمل داخل سطر الأوامر (Terminal) يمتلك صلاحيات قراءة الأكواد وتنفيذ أوامر Git واختبارات التطبيق.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Terminal',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://docs.anthropic.com/en/docs/agents-and-tools/claude-code',
    tags: ['Agentic CLI', 'Claude 3.5', 'أتمتة برمجية', 'Terminal'],
    freeFeatures: [
      'تنفيذ العمليات البرمجية المعقدة في الـ Terminal ببرومبت واحد',
      'البحث الآلي في أخطاء الكود وتصحيحها ذاتياً',
      'إجراء عمليات Git commit و PR بنظام خبير'
    ],
    featured: true,
    popularityCount: 29800,
    addedDate: '2026-02-15'
  },

  // ==========================================
  // 2. أدوات تطوير الألعاب والـ Pixel Art والـ 3D (20 أداة)
  // ==========================================
  {
    id: 'pixellab-ai',
    name: 'PixelLab AI',
    nameEn: 'PixelLab AI Sprite Generator',
    description: 'الأداة الرائدة المتخصصة في توليد أصول وشخصيات Pixel Art ورسم شبكات الحركة (Sprite Sheets) لمطوري الألعاب المستقلين.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Gamepad2',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://pixellab.ai',
    tags: ['Pixel Art', 'Sprite Sheet', '2D Games', 'Godot Unity'],
    freeFeatures: [
      'توليد شخصيات بكسل بدقة 16-bit و 32-bit بنقاء عالي',
      'تصدير شبكة إطارات الحركات (Walk, Jump, Attack) مجاناً',
      'تحكم كامل بألوان اللوحة الخلفية الشفافة'
    ],
    featured: true,
    popularityCount: 29500,
    addedDate: '2026-01-11'
  },
  {
    id: 'spritefusion',
    name: 'SpriteFusion AI',
    nameEn: 'SpriteFusion Map Editor',
    description: 'أداة مجانية وبسيطة لبناء خرائط الألعاب ثنائية الأبعاد (Tilemap) مباشرة داخل المتصفح وتصديرها لـ Unity و Godot.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Layers',
    pricingType: 'مجاني 100%',
    rating: 4.8,
    directUrl: 'https://spritefusion.com',
    tags: ['Tilemaps', 'خرائط 2D', 'Godot', 'Unity', 'تصميم مراحل'],
    freeFeatures: [
      'مجانية 100% ورسم الخرائط مباشرة عبر المتصفح',
      'تصدير ملفات TileMap جاهزة بنسق JSON و Godot Resource',
      'مكتبة بلاطات مسبقة الصنع مجانية مع دعم الرفع الخاص'
    ],
    featured: true,
    popularityCount: 21000,
    addedDate: '2026-01-18'
  },
  {
    id: 'meshy-3d',
    name: 'Meshy 3D',
    nameEn: 'Meshy Text to 3D Model',
    description: 'تحويل النصوص والأفكار والرسومات ثنائية الأبعاد إلى مجسمات 3D احترافية خلال 60 ثانية متوافقة مع جميع محركات الألعاب.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Box',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://meshy.ai',
    tags: ['Text to 3D', 'Image to 3D', 'GLTF', 'FBX', 'مجسمات ألعاب'],
    freeFeatures: [
      '200 رصيد مجاني شهرياً لتوليد النماذج ثلاثية الأبعاد',
      'تحويل الصور الرسم إلى مجسم 3D بملفات GLB و FBX',
      'إمكانية تحميل الخامات (Textures) المجهزة بالكامل'
    ],
    featured: true,
    popularityCount: 31200,
    addedDate: '2026-01-22'
  },
  {
    id: 'layer-ai',
    name: 'Layer.ai',
    nameEn: 'Layer.ai Game Asset Generator',
    description: 'منصة توليد الأصول البصرية ومستويات الألعاب مع الحفاظ التام على أسلوب رسم لعبتك الخاص (Consistent Style).',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Wand2',
    pricingType: 'خطة مجانية سخية',
    rating: 4.7,
    directUrl: 'https://layer.ai',
    tags: ['أصول ألعاب', 'Style Consistency', '2D Assets', 'توليد أثاث'],
    freeFeatures: [
      'نسخة تجريبية مجانية شهرية لتوليد أصول اللعبة',
      'تدريب النموذج على رسوماتك الخاصة لتوحيد النمط',
      'تصدير الصور بدقة عالية بدون خلفية'
    ],
    featured: false,
    popularityCount: 16200,
    addedDate: '2026-02-01'
  },
  {
    id: 'scenario-ai',
    name: 'Scenario AI',
    nameEn: 'Scenario Custom Game Models',
    description: 'محرك توليد الفن للألعاب يتيح للمطورين تدريب نماذج الذكاء الاصطناعي المخصصة لإنتاج مئات العناصر بنفس الهوية.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Gamepad2',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://scenario.com',
    tags: ['تدريب نماذج', 'هوية بصرية', '2D Game Art', 'Unity Plugin'],
    freeFeatures: [
      'خطة مجانية تتجدد شهرياً لتوليد الأصول والبطاقات',
      'ميزة إزالة الخلفية والتكبير الاحترافي (Upscaling)',
      'تكامل مباشر عبر API وإضافة خاصة لـ Unity'
    ],
    featured: false,
    popularityCount: 22800,
    addedDate: '2026-01-26'
  },
  {
    id: 'blockade-labs',
    name: 'Blockade Labs (Skybox AI)',
    nameEn: 'Skybox AI Blockade Labs',
    description: 'أداة توليد البيئات ثلاثية الأبعاد وخرائط الـ 360 درجة لمطوري الألعاب والواقع الافتراضي بمجرد وصف المشهد.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Gamepad2',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://skybox.blockadelabs.com',
    tags: ['360 Panorama', 'بيئات ألعاب', '3D Asset', 'Unity Godot'],
    freeFeatures: [
      'توليد مجاني لخرائط سماء وسحر 360° Panorama',
      'تصدير كخلفيات جاهزة لمحركات Unity و Godot و Unreal',
      'أنماط بصرية متعددة تشمل Pixel Art, Anime, و Sci-Fi'
    ],
    featured: true,
    popularityCount: 17500,
    addedDate: '2026-02-08'
  },
  {
    id: 'ludo-ai',
    name: 'Ludo.ai',
    nameEn: 'Ludo AI Game Studio',
    description: 'منصة ذكاء اصطناعي لبحوث صناعة الألعاب تولد أفكار اللعب، أنماط الرسم، وتحليلات الترندات والمنافسين لمطوري الألعاب.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Sparkles',
    pricingType: 'خطة مجانية سخية',
    rating: 4.7,
    directUrl: 'https://ludo.ai',
    tags: ['ابتكار ألعاب', 'Game Ideation', 'تحليل الترندات', 'GDD'],
    freeFeatures: [
      'توليد أفكار وميكانيكيات لعب مبتكرة مجاناً',
      'البحث في قواعد بيانات ألعاب الهواتف الناجحة',
      'صياغة وثائق تصميم ألعاب GDD تفاعلية'
    ],
    featured: false,
    popularityCount: 14200,
    addedDate: '2026-01-28'
  },
  {
    id: 'rosebud-ai',
    name: 'Rosebud AI',
    nameEn: 'Rosebud AI Game Creator',
    description: 'منصة إبداعية تتيح لك وصف لعبتك باللغة الطبيعية لتوليد الأكواد ثنائية الأبعاد والشخصيات وتشغيلها فوراً بالمترجم.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Wand2',
    pricingType: 'خطة مجانية سخية',
    rating: 4.7,
    directUrl: 'https://rosebud.ai',
    tags: ['صناعة ألعاب', '2D Games', 'PhaserJS', 'تشغيل في المتصفح'],
    freeFeatures: [
      'إنشاء وتجربة الألعاب مباشرة في المتصفح',
      'توليد شخصيات وأصول صور مخصصة برومبتياً',
      'تصدير الكود وتطوير الألعاب بدقة HTML5/JS'
    ],
    featured: false,
    popularityCount: 15800,
    addedDate: '2026-02-03'
  },
  {
    id: 'sloyd-3d',
    name: 'Sloyd AI',
    nameEn: 'Sloyd 3D Generator',
    description: 'مولد مجسمات وثلاثيات الأبعاد عالي السرعة مخصص للمباني، السيارات، والمعدات لاستخدامها في محركات Unity و Unreal.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Box',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://sloyd.ai',
    tags: ['مجسمات 3D', 'Unity', 'Unreal', 'توليد أصول'],
    freeFeatures: [
      'توليد 3D UV Mapped Models خلال ثوانٍ معدودة',
      'تصدير أصول بملفات OBJ و FBX مجاناً',
      'التحكم في مستويات التفاصيل (Poly Count) لتناسب الألعاب'
    ],
    featured: true,
    popularityCount: 18300,
    addedDate: '2026-02-11'
  },
  {
    id: 'csm-3d',
    name: 'CSM 3D (Common Sense)',
    nameEn: 'CSM Cube3D Generator',
    description: 'منصة تحويل الصور والمقاطع ثنائية الأبعاد إلى مجسمات ثلاثية الأبعاد فائقة الدقة والشبك النظيف.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Box',
    pricingType: 'خطة مجانية سخية',
    rating: 4.7,
    directUrl: 'https://3d.csm.ai',
    tags: ['Image to 3D', 'Mesh Generation', '3D Asset', 'Game Dev'],
    freeFeatures: [
      'رصيد مجاني شهري لتوليد مجسمات من الصور',
      'تصدير النماذج بتنسيقات GLTF, USDZ, OBJ',
      'تقسيم الملمس والشكل الخارجي النظيف'
    ],
    featured: false,
    popularityCount: 13500,
    addedDate: '2026-01-29'
  },
  {
    id: 'masterpiece-x',
    name: 'Masterpiece X',
    nameEn: 'Masterpiece X Generative 3D',
    description: 'أداة مبتكرة لإنشاء وتحريك المجسمات ثلاثية الأبعاد والشخصيات والأسلحة ببرومبتات نصية تفاعلية.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Wand2',
    pricingType: 'خطة مجانية سخية',
    rating: 4.6,
    directUrl: 'https://masterpiecex.com',
    tags: ['3D Animation', 'شخصيات 3D', 'Rigging', 'Indie Dev'],
    freeFeatures: [
      'أرصدة مجانية يومية لإنشاء النماذج والشخصيات',
      'تأثيرات الهيكل العظمي والتحريك (Rigging & Animation)',
      'تحديث الخامات والتصدير بملفات FBX'
    ],
    featured: false,
    popularityCount: 11900,
    addedDate: '2026-02-07'
  },
  {
    id: 'playcanvas-ai',
    name: 'PlayCanvas Engine',
    nameEn: 'PlayCanvas WebGL Engine',
    description: 'محرك ألعاب ثلاثي الأبعاد يعتمد على WebGL في المتصفح مع دعم أدوات الذكاء الاصطناعي البرمجية التفاعلية.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Gamepad2',
    pricingType: 'مجاني 100%',
    rating: 4.8,
    directUrl: 'https://playcanvas.com',
    tags: ['WebGL Engine', 'HTML5 3D', 'تطوير تشاركي', 'Browser Games'],
    freeFeatures: [
      'محرك مجاني بالكامل وتطوير ألعاب عبر المتصفح',
      'العمل الجماعي التشاركي في نفس الوقت',
      'نشر الألعاب بنقرة واحدة على روابط خفيفة'
    ],
    featured: false,
    popularityCount: 17800,
    addedDate: '2026-01-24'
  },
  {
    id: 'tripo-3d',
    name: 'Tripo3D',
    nameEn: 'Tripo3D Fast Mesh',
    description: 'منصة توليد مجسمات 3D فائقة السرعة تستغرق أقل من 10 ثوانٍ لإنتاج مجسم ثلاثي الأبعاد ناعم ومجهز.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Box',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://tripo3d.ai',
    tags: ['Ultra Fast 3D', 'Text to 3D', 'Tripo', 'Draft Mesh'],
    freeFeatures: [
      'توليد مسودات 3D سريعة ورموز مجانية يومية',
      'تنزيل مجسمات خفيفة الوزن تناسب الألعاب',
      'تكامل عبر API لمطوري الأدوات'
    ],
    featured: true,
    popularityCount: 20400,
    addedDate: '2026-02-09'
  },
  {
    id: 'texture-lab',
    name: 'Texture Lab',
    nameEn: 'Texture Lab Seamless Textures',
    description: 'أداة مجانية لتوليد الخامات المتكررة (Seamless 3D Textures) لمواد الصخور والحديد والأحجار بخرائط النتوءات.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Layers',
    pricingType: 'مجاني 100%',
    rating: 4.7,
    directUrl: 'https://www.texturelab.io',
    tags: ['Seamless Textures', 'Normal Maps', 'خامات 3D', 'Game Textures'],
    freeFeatures: [
      'مولد خامات بلا حدود مجاني بالكامل',
      'تصدير Diffuse, Height, Normal, Roughness Maps',
      'تناسق حوافي مثالي بدون أي فواصل'
    ],
    featured: false,
    popularityCount: 14800,
    addedDate: '2026-01-21'
  },
  {
    id: 'pixelorama-app',
    name: 'Pixelorama Open Tools',
    nameEn: 'Pixelorama 2D Sprite Editor',
    description: 'محرر ومصمم بكسل آرت (Pixel Art) مفتوح المصدر ومبني بمحرك Godot يضم أدوات رسم وتحريك متقدمة.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Gamepad2',
    pricingType: 'مفتوح المصدر',
    rating: 4.9,
    directUrl: 'https://ora-interactive.itch.io/pixelorama',
    tags: ['Pixelorama', 'مفتوح المصدر', 'Godot App', 'أنيميشن بكسل'],
    freeFeatures: [
      'برنامج مفتوح المصدر ومجاني 100% بدون أي إعلانات',
      'أدوات رسم بكسل طبقية متقدمة (Layer System)',
      'تصدير Sprite Sheets و GIF و Palette Swaps'
    ],
    featured: true,
    popularityCount: 25600,
    addedDate: '2026-01-13'
  },
  {
    id: 'polycam-ai',
    name: 'Polycam AI 3D Scanner',
    nameEn: 'Polycam AI 3D Capture',
    description: 'تطبيق وبوابة مسح الأشياء الواقعية بتحويل الفيديو والصور إلى مجسمات ثلاثية الأبعاد بدقة استثنائية.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Box',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://poly.cam',
    tags: ['3D Scan', 'Photogrammetry', 'مسح ثلاثي الأبعاد', 'أصول واقعية'],
    freeFeatures: [
      'التقاط مسوحات مجانية على أجهزة iOS و Android و Web',
      'تصدير مجسمات OBJ و GLTF لمشاريعك',
      'مكتبة مسوحات مجتمعية ضخمة مجهزة للتحميل'
    ],
    featured: false,
    popularityCount: 22100,
    addedDate: '2026-02-02'
  },
  {
    id: 'spline-ai',
    name: 'Spline AI',
    nameEn: 'Spline 3D Design & AI',
    description: 'أداة تصميم المشاهد ثلاثية الأبعاد التفاعلية في المتصفح مع توليد الأشكال بالذكاء الاصطناعي وتضمينها في الويب.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Box',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://spline.design',
    tags: ['Spline 3D', '3D Web', 'توليد بالذكاء الاصطناعي', 'React 3D'],
    freeFeatures: [
      'تصميم ثلاثي الأبعاد مجاني كامل في المتصفح',
      'تصدير كود المكون لـ React و HTML مباشرة',
      'ميزة توليد المواد والأشكال بواسطة البرومبت النصي'
    ],
    featured: true,
    popularityCount: 39100,
    addedDate: '2026-01-17'
  },
  {
    id: 'deepmotion-ai',
    name: 'DeepMotion Animate 3D',
    nameEn: 'DeepMotion AI Motion Capture',
    description: 'تحويل مقاطع فيديو حركات البشر العادية إلى حركات مقتنسة (Motion Capture - FBX) ثلاثية الأبعاد دون معدات.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Zap',
    pricingType: 'خطة مجانية سخية',
    rating: 4.7,
    directUrl: 'https://deepmotion.com',
    tags: ['Motion Capture', 'Mocap AI', 'تحريك شخصيات', 'FBX Animation'],
    freeFeatures: [
      'رصيد حركة مجاني شهري لتمرير الفيديو',
      'تصدير حركات المفاصل بملفات BVH و FBX',
      'توافق مع شخصيات Mixamo و Unreal MetaHuman'
    ],
    featured: false,
    popularityCount: 18700,
    addedDate: '2026-01-31'
  },
  {
    id: 'promethean-ai',
    name: 'Promethean AI',
    nameEn: 'Promethean AI Asset Placement',
    description: 'مساعد ذكي لمصممي البيئات الافتراضية يقوم بتنسيق الأثاث، الأشجار، والمباني داخل المشهد بتناغم واقعي.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Layers',
    pricingType: 'مجاني 100%',
    rating: 4.8,
    directUrl: 'https://prometheanai.com',
    tags: ['تصميم بيئات', 'Unreal Engine', 'إخراج سينمائي', 'مجاني للمستقلين'],
    freeFeatures: [
      'مجاني بالكامل للمطورين المستقلين والمشاريع غير التجارية',
      'تكامل مباشر مع محرك Unreal Engine و Maya',
      'بناء مشاهد كاملة بأوامر صوتية ونصية بسيطة'
    ],
    featured: false,
    popularityCount: 16400,
    addedDate: '2026-01-22'
  },
  {
    id: 'meshy-2d-to-3d',
    name: 'Meshy 2D Asset Convert',
    nameEn: 'Meshy Image to Asset',
    description: 'أداة تكميلية تحول الرسومات اليدوية والشخصيات ثنائية الأبعاد إلى مجسمات 3D قابلة للطباعة وللألعاب.',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    iconName: 'Box',
    pricingType: 'خطة مجانية سخية',
    rating: 4.7,
    directUrl: 'https://meshy.ai/image-to-3d',
    tags: ['2D to 3D', 'Convert Image', 'FBX Model', 'Texture mapping'],
    freeFeatures: [
      'تحويل الصور الثابتة بنقرة واحدة بدون خوادم معقدة',
      'توليد خرائط الإضاءة والتحجيم مجاناً',
      'معاينة 360 درجة مباشرة في المتصفح'
    ],
    featured: false,
    popularityCount: 14100,
    addedDate: '2026-02-05'
  },

  // ==========================================
  // 3. أدوات إنشاء وتعديل الصور والتصميم (20 أداة)
  // ==========================================
  {
    id: 'leonardo-ai',
    name: 'Leonardo.ai',
    nameEn: 'Leonardo AI Asset Studio',
    description: 'المنصة الأكثر تكاملاً لتوليد الصور والتصاميم والفنون الرقمية والأصول المتناسقة بمحركات Phoenix و SDXL.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Image',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://leonardo.ai',
    tags: ['توليد صور', 'Phoenix Model', 'أصول تصاميم', 'Canvas'],
    freeFeatures: [
      '150 نقطة مجانية تتجدد يومياً مجاناً بالكامل',
      'أدوات تحسين الجودة والإزالة وإعادة الرسم (Inpainting)',
      'توليد صور بدقة تصل لـ 4K مع تحكم بالحواف'
    ],
    featured: true,
    popularityCount: 54000,
    addedDate: '2026-01-02'
  },
  {
    id: 'recraft-ai',
    name: 'Recraft.ai',
    nameEn: 'Recraft Design & Vector Generator',
    description: 'أقوى أداة مخصصة للمصممين لتوليد الرسومات المتجهية (Vector SVG) والشعارات والأيقونات والرسومات التوضيحية.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Wand2',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://recraft.ai',
    tags: ['Vector SVG', 'شعارات', 'توليد أيقونات', 'Recraft V3'],
    freeFeatures: [
      'نقاط مجانية يومية لتوليد ملفات Vector SVG ناصعة',
      'تعديل الألوان و توحيد اللوحة الإبداعية للمشروع',
      'تصدير مباشر بصيغ SVG و PNG شفافة'
    ],
    featured: true,
    popularityCount: 42100,
    addedDate: '2026-01-15'
  },
  {
    id: 'playground-ai',
    name: 'Playground AI',
    nameEn: 'Playground v3 Generator',
    description: 'استوديو ابتكار صور ذكي يدمج بين التحكم الطبقي وقدرات التوليد السريعة مع سهولة تعديل المكونات.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Image',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://playground.com',
    tags: ['توليد صور', 'محرر طبقات', 'Playground v3', 'تصميم مجاني'],
    freeFeatures: [
      'توليد مئات الصور مجاناً شهرياً',
      'لوحة قماشية تفاعلية (Infinite Canvas) للدمج',
      'دعم التحكم بالـ Prompts والأنماط البصرية'
    ],
    featured: false,
    popularityCount: 31500,
    addedDate: '2026-01-20'
  },
  {
    id: 'seaart-ai',
    name: 'SeaArt AI',
    nameEn: 'SeaArt AI Painting Studio',
    description: 'منصة توليد صور وفنون أنمي ورسومات واقعية تضم آلاف النماذج المصغرة (LoRAs) وأدوات التحكم الفائق.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Image',
    pricingType: 'خطة مجانية سخية',
    rating: 4.7,
    directUrl: 'https://seaart.ai',
    tags: ['أنمي', 'LoRAs', 'ControlNet', 'توليد صور'],
    freeFeatures: [
      'عملات مجانية تتجدد يومياً لتوليد الصور',
      'استخدام تقنيات ControlNet لضبط وضعية الشخصية',
      'مكتبة ضخمة من النماذج المجتمعية الجاهزة'
    ],
    featured: false,
    popularityCount: 26800,
    addedDate: '2026-01-29'
  },
  {
    id: 'ideogram-ai',
    name: 'Ideogram AI',
    nameEn: 'Ideogram Typography & Logo',
    description: 'النموذج الأفضل عالمياً في دمج النصوص المكتوبة باللغة الإنجليزية والعربية بدقة داخل الصور والشعارات والملصقات.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Sparkles',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://ideogram.ai',
    tags: ['نصوص داخل الصور', 'Ideogram v2', 'تصميم شعارات', 'ملصقات'],
    freeFeatures: [
      '10 أرصدة بطيئة مجانية يومياً تتجدد بانتظام',
      'رسم الكلمات والعبارات النصية داخل الصور بدقة 100%',
      'أنماط تصوير فوتوغرافي، جرافيك، وبوستر'
    ],
    featured: true,
    popularityCount: 47200,
    addedDate: '2026-01-08'
  },
  {
    id: 'clipdrop-ai',
    name: 'Clipdrop by Stability AI',
    nameEn: 'Clipdrop AI Suite',
    description: 'مجموعة أدوات احترافية لتفريغ الصور، إزالة الأجسام، زيادة الدقة، وتعديل إضاءة التصوير بنقرة واحدة.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Wand2',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://clipdrop.co',
    tags: ['إزالة خلفية', 'Uncrop', 'Relight', 'Stability AI'],
    freeFeatures: [
      'إزالة خلفيات الصور مجاناً وبدقة عالية',
      'توسيع حدود الصور (Uncrop) وتصحيح الإضاءة',
      'إزالة العناصر والأشخاص غير المرغوب بهم'
    ],
    featured: false,
    popularityCount: 38000,
    addedDate: '2026-01-12'
  },
  {
    id: 'krea-ai',
    name: 'Krea AI',
    nameEn: 'Krea Realtime Canvas',
    description: 'توليد صور وفيديوهات حية ولحظية أثناء الرسم المباشر مع ميزة تحسين دقة الصور وتجسيد الملامح.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Sparkles',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://krea.ai',
    tags: ['Realtime Generation', 'رسم حي', 'Enhance HD', 'Patterns'],
    freeFeatures: [
      'توليد لحظي مباشر مع حركة الفرشاة مجاناً',
      'ميزة Krea Enhancer لتحويل الصور الباهتة لدقة 4K',
      'إنشاء الخدع البصرية والتصاميم المخفية'
    ],
    featured: true,
    popularityCount: 43500,
    addedDate: '2026-01-19'
  },
  {
    id: 'bing-designer',
    name: 'Microsoft Designer / Bing Creator',
    nameEn: 'Microsoft Designer Image Creator',
    description: 'محرك توليد الصور المجاني المدمج من Microsoft والمعتمد على نموذج DALL-E 3 لتوليد الصور والتصاميم بسهولة.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Image',
    pricingType: 'مجاني 100%',
    rating: 4.8,
    directUrl: 'https://designer.microsoft.com',
    tags: ['DALL-E 3', 'Microsoft', 'مجاني بالكامل', 'بطاقات وتصاميم'],
    freeFeatures: [
      '15 محفز سريع يومياً مجاناً بحساب مايكروسوفت',
      'جودة توليد فائقة معتمد على DALL-E 3',
      'تصميم منشورات وبوسترات مع نصوص وتعديلات'
    ],
    featured: false,
    popularityCount: 49000,
    addedDate: '2026-01-04'
  },
  {
    id: 'canva-magic-studio',
    name: 'Canva Magic Studio',
    nameEn: 'Canva Magic AI Tools',
    description: 'أدوات الذكاء الاصطناعي المدمجة داخل Canva لتوليد الصور والرسوم التوضيحية وإزالة العناصر وتصميم العروض.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Sparkles',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://canva.com',
    tags: ['Canva', 'عروض تقديمية', 'تحرير صور', 'تصميم سهل'],
    freeFeatures: [
      'أرصدة شهرية مجانية لتوليد الصور والكتابة',
      'مئات القوالب الجاهزة المدمجة بالذكاء الاصطناعي',
      'تعديل وإضافة التأثيرات البصرية بنقرة واحدة'
    ],
    featured: false,
    popularityCount: 52000,
    addedDate: '2026-01-06'
  },
  {
    id: 'adobe-firefly-free',
    name: 'Adobe Firefly',
    nameEn: 'Adobe Firefly Generative AI',
    description: 'محرك Adobe الأخلاقي لتوليد الصور والمؤثرات النصية وتعبئة المكونات المفقودة (Generative Fill) بأعلى أمان تجاري.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Wand2',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://firefly.adobe.com',
    tags: ['Adobe', 'Generative Fill', 'توليد تجاري آمن', 'Photoshop AI'],
    freeFeatures: [
      '25 رصيد توليد مجاني شهرياً مع خيار الحفظ',
      'ميزة التعبئة التوليدية (Generative Fill) في المتصفح',
      'إنشاء التأثيرات النصية المتشعبة بأعلى دقة'
    ],
    featured: true,
    popularityCount: 41200,
    addedDate: '2026-01-10'
  },
  {
    id: 'vectorizer-ai',
    name: 'Vectorizer.ai',
    nameEn: 'Vectorizer.ai Raster to Vector',
    description: 'تحويل الصور النقطية (PNG/JPG) إلى رسومات متجهية (Vector SVG) حادة وبخطوط هندسية متناسقة تلقائياً.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Layers',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://vectorizer.ai',
    tags: ['Raster to Vector', 'SVG Convert', 'تحويل شعارات', 'HD Vector'],
    freeFeatures: [
      'معاينة مجانية شاملة لتنقح الطبقات',
      'تحويل الرسومات المعقدة والشعارات لملفات SVG',
      'حواف حادة قابلة للتكبير اللانهائي بدون بكسلة'
    ],
    featured: false,
    popularityCount: 29800,
    addedDate: '2026-01-23'
  },
  {
    id: 'remove-bg-ai',
    name: 'Remove.bg',
    nameEn: 'Remove.bg Background Eraser',
    description: 'الأداة الأشهر والأسرع عالمياً لإزالة خلفيات الصور بدقة متناهية وبشكل آلي خلال 5 ثوانٍ فقط.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Wand2',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://remove.bg',
    tags: ['إزالة خلفية', 'تفريغ صور', 'تلقائي', 'PNG شفاف'],
    freeFeatures: [
      'إزالة خلفيات غير محدودة بجودة قياسية مجاناً',
      'تصدير ملفات PNG شفافة فوراً',
      'إضافة خلفيات ملونة أو مشاهد مخصصة'
    ],
    featured: false,
    popularityCount: 46000,
    addedDate: '2026-01-01'
  },
  {
    id: 'photoroom-ai',
    name: 'Photoroom AI',
    nameEn: 'Photoroom Studio Generator',
    description: 'استوديو تصوير المنتجات التجاري ومصمم استعراض السلع للمتاجر الإلكترونية مع إبدال الخلفيات بواقعية.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Image',
    pricingType: 'خطة مجانية سخية',
    rating: 4.7,
    directUrl: 'https://photoroom.com',
    tags: ['تصوير منتجات', 'متاجر إلكترونية', 'خلفيات متجر', 'E-commerce'],
    freeFeatures: [
      'إزالة خلفيات وتنسيق صور المنتجات مجاناً',
      'إضافة ظلال واقعية وخلفيات بيضاء صلبة',
      'تطبيقات مجانية للهاتف المتنقل والمتصفح'
    ],
    featured: false,
    popularityCount: 31000,
    addedDate: '2026-01-28'
  },
  {
    id: 'sd-webui',
    name: 'Stable Diffusion WebUI (A1111)',
    nameEn: 'AUTOMATIC1111 SD WebUI',
    description: 'البرنامج الأكثر قوة وانتشاراً لتوليد وإدارة صور Stable Diffusion محلياً مع التحكم الكامل في المخرجات.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Cpu',
    pricingType: 'مفتوح المصدر',
    rating: 5.0,
    directUrl: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
    tags: ['AUTOMATIC1111', 'SDXL', 'ControlNet', 'مفتوح المصدر', 'توليد محلي'],
    freeFeatures: [
      'برنامج مجاني ومفتوح المصدر 100% بدون أي قيود',
      'دعم كافة إضافات ControlNet و LoRAs و ControlNet',
      'إنشاء وتعديل الصور بأعلى جودة على حاسوبك الشخصي'
    ],
    featured: true,
    popularityCount: 52000,
    addedDate: '2026-01-03'
  },
  {
    id: 'tensor-art',
    name: 'Tensor.Art',
    nameEn: 'Tensor.Art Cloud Generation',
    description: 'منصة سحابية مجانية لتوليد الصور وتجربة آلاف نماذج Stable Diffusion و LoRAs دون الحاجة لكارت شاشة قوي.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Image',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://tensor.art',
    tags: ['سحابي', 'LoRAs مجانية', 'SDXL', 'بدون GPU'],
    freeFeatures: [
      '100 رصيد مجاني يتجدد يومياً بصفة دائمة',
      'تشغيل كافة نماذج Civitai مجاناً على السحابة',
      'تصدير واستعراض أساليب رسم متعددة'
    ],
    featured: false,
    popularityCount: 28900,
    addedDate: '2026-02-01'
  },
  {
    id: 'civitai-generators',
    name: 'Civitai On-Site Generator',
    nameEn: 'Civitai AI Community',
    description: 'أكبر مجتمع عالمي لمشاركة نماذج ومصغرات الذكاء الاصطناعي مع أداة توليد صور سحابية مجانية داخل الموقع.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Sparkles',
    pricingType: 'مجاني 100%',
    rating: 4.9,
    directUrl: 'https://civitai.com',
    tags: ['Civitai', 'نماذج مجانية', 'LoRA', 'مجتمع المصممين'],
    freeFeatures: [
      'تنزيل مئات الآلاف من النماذج المفتوحة مجاناً',
      'أرصدة Buzz مجانية يومية لتوليد الصور أونلاين',
      'استكشاف البرومبتات وطرق التوليد الفنية'
    ],
    featured: true,
    popularityCount: 56000,
    addedDate: '2026-01-07'
  },
  {
    id: 'upscayl-app',
    name: 'Upscayl Desktop AI',
    nameEn: 'Upscayl Free Image Upscaler',
    description: 'برنامج مفتوح المصدر لزيادة دقة الصور وتكبير الحجم حتى 8X بدون فقدان التفاصيل يعمل محلياً بالكامل.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'ShieldCheck',
    pricingType: 'مفتوح المصدر',
    rating: 5.0,
    directUrl: 'https://upscayl.org',
    tags: ['تكبير الصور', '4K Upscale', 'مفتوح المصدر', 'تطبيق محلي'],
    freeFeatures: [
      'مجاني ومفتوح المصدر 100% لأنظمة Windows و Mac و Linux',
      'مضاعفة دقة الصور 4X و 8X بنسق خارق الحجم',
      'معالجة دفعة صور كاملة (Batch Upscaling) محلياً'
    ],
    featured: true,
    popularityCount: 38700,
    addedDate: '2026-01-11'
  },
  {
    id: 'flux-image',
    name: 'FLUX.1 by Black Forest Labs',
    nameEn: 'FLUX.1 AI Generator',
    description: 'أقوى نموذج مفتوح المصدر لتوليد الصور الفوتوغرافية والـ Pixel Art والرسومات بدقة تفوق Midjourney v6.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Image',
    pricingType: 'مفتوح المصدر',
    rating: 4.9,
    directUrl: 'https://blackforestlabs.ai',
    tags: ['توليد صور', 'مفتوح المصدر', 'FLUX.1', 'دقة فائقة'],
    freeFeatures: [
      'استخدام مجاني عبر HuggingFace و Replicate و Fal.ai',
      'فهم مذهل للأنصوص المكتوبة داخل الصورة',
      'تنزيل النموذج محلياً وتشغيله عبر ComfyUI'
    ],
    featured: true,
    popularityCount: 34100,
    addedDate: '2026-01-25'
  },
  {
    id: 'lexica-art',
    name: 'Lexica.art',
    nameEn: 'Lexica Search & Generator',
    description: 'محرك بحث استكشافي وضخم لملايين الصور المولدة بالذكاء الاصطناعي مع البرومبتات المستعملة وأداة توليد سريعة.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Search',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://lexica.art',
    tags: ['محرك بحث صور', 'Lexica Aperture', 'استكشاف البرومبت'],
    freeFeatures: [
      'بحث وتصفح مجاني لجميع الصور والبرومبتات',
      'توليد صور مجاني شهرياً عبر نموذج Aperture',
      'نسخ أسلوب وتكوين البرومبتات بلمسة واحدة'
    ],
    featured: false,
    popularityCount: 33000,
    addedDate: '2026-01-16'
  },
  {
    id: 'fooocus-app',
    name: 'Fooocus Open Generator',
    nameEn: 'Fooocus SDXL Local Generator',
    description: 'برنامج مفتوح المصدر مستوحى من بساطة Midjourney يقدم أفضل جودة توليد صور محلياً بدون إعدادات معقدة.',
    category: 'imageGen',
    categoryLabel: 'توليد الصور والهويات البصرية',
    iconName: 'Cpu',
    pricingType: 'مفتوح المصدر',
    rating: 4.9,
    directUrl: 'https://github.com/lllyasviel/Fooocus',
    tags: ['Fooocus', 'Midjourney Alternative', 'مفتوح المصدر', 'SDXL'],
    freeFeatures: [
      'برنامج مجاني بالكامل يعمل على كافة الحاسبات',
      'توليد صور بجودة Midjourney ببرومبتات بسيطة',
      'دعم خيارات Face Swap و Inpainting تلقائياً'
    ],
    featured: true,
    popularityCount: 27500,
    addedDate: '2026-02-04'
  },

  // ==========================================
  // 4. أدوات الطلاب والأبحاث والأتمتة (20 أداة)
  // ==========================================
  {
    id: 'notebook-lm',
    name: 'NotebookLM by Google',
    nameEn: 'Google NotebookLM AI',
    description: 'المساعد الأكاديمي البحثي الأول من Google الذي يقرأ مستنداتك وكتبك ويدير محادثات صوتية وتلخيصات احترافية منها.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'BookOpen',
    pricingType: 'مجاني 100%',
    rating: 5.0,
    directUrl: 'https://notebooklm.google.com',
    tags: ['Google', 'أبحاث أجهزة', 'Audio Overview', 'تلخيص كتب', 'مجاني'],
    freeFeatures: [
      'مجاني 100% لجميع مستخدمي حسابات Google',
      'تحويل الكتب والمستندات إلى بودكاست صلب تفاعلي (Audio Overview)',
      'توثيق دقيق للمصادر مع الإشارة للصفحة المباشرة'
    ],
    featured: true,
    popularityCount: 59000,
    addedDate: '2026-01-01'
  },
  {
    id: 'consensus-ai',
    name: 'Consensus AI',
    nameEn: 'Consensus Academic Search',
    description: 'محرك بحث علمي ذكي يستخرج الإجابات الموثوقة من أكثر من 200 مليون ورقة علمية معتمدة ومحكمة.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'Search',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://consensus.app',
    tags: ['أبحاث علمية', 'أوراق محكمة', 'توثيق أكاديمي', 'دراسات'],
    freeFeatures: [
      'بحث أكاديمي غير محدود مجاناً في قاعدة البيانات',
      'تلخيص النتائج العلمية وإظهار نسبة الاتفاق بين العلماء',
      'تصدير المراجع الموثوقة بصيغة APA و IEEE'
    ],
    featured: true,
    popularityCount: 37500,
    addedDate: '2026-01-14'
  },
  {
    id: 'elicit-ai',
    name: 'Elicit Research Assistant',
    nameEn: 'Elicit AI Paper Analyzer',
    description: 'مساعد بحثي يحلل أوراق المجلات العلمية ويستخرج المنهجيات والنتائج والجداول تلقائياً للباحثين.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'BookOpen',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://elicit.com',
    tags: ['تحليل أوراق', 'ماجستير ودكتوراه', 'استخراج بيانات', 'أبحاث'],
    freeFeatures: [
      'أرصدة بحثية مجانية شهرية لاستخراج المفاهيم',
      'إنشاء جداول مقارنة بين الدراسات السابقة',
      'تلخيص النقاط الرئيسية في الأوراق العلمية الضخمة'
    ],
    featured: false,
    popularityCount: 29400,
    addedDate: '2026-01-22'
  },
  {
    id: 'scispace-ai',
    name: 'SciSpace (Typeset)',
    nameEn: 'SciSpace Copilot for Research',
    description: 'منصة تفاعلية لشرح وقراءة الأوراق العلمية الصعبة وتبسيط الخوارزميات والمعادلات الرياضية المعقدة.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'BookOpen',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://typeset.io',
    tags: ['شرح معادلات', 'PDF Copilot', 'ترجمة أبحاث', 'طلاب جامعات'],
    freeFeatures: [
      'قراءة وتظليل نصوص الـ PDF والشات معها مجاناً',
      'تبسيط الخوارزميات والجداول بالنقر عليها',
      'ترجمة الفقرات العلمية إلى اللغة العربية بدقة'
    ],
    featured: false,
    popularityCount: 31000,
    addedDate: '2026-01-27'
  },
  {
    id: 'gamma-app',
    name: 'Gamma App',
    nameEn: 'Gamma AI Presentations',
    description: 'إنشاء العروض التقديمية (PowerPoint/Presentations) والمستندات وصفحات الويب التفاعلية خلال دقائق ببرومبت.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'Sparkles',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://gamma.app',
    tags: ['عروض تقديمية', 'PowerPoint', 'تصميم سلايدات', 'مستندات'],
    freeFeatures: [
      '400 رصيد مجاني عند التسجيل لإنشاء العروض',
      'تصاميم ومخططات ناعمة وجاهزة للعرض فوراً',
      'تصدير الملفات بصيغة PDF و PPTX'
    ],
    featured: true,
    popularityCount: 48500,
    addedDate: '2026-01-09'
  },
  {
    id: 'perplexity-free',
    name: 'Perplexity AI Search',
    nameEn: 'Perplexity Search Engine',
    description: 'محرك البحث الذكي الأفضل عالمياً لتصفح الإنترنت مباشر واستخراج الإجابات الملخصة مع المراجع الموثقة.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'Search',
    pricingType: 'خطة مجانية سخية',
    rating: 5.0,
    directUrl: 'https://perplexity.ai',
    tags: ['محرك بحث', 'بحث مباشر', 'توثيق مصادر', 'Pro Search'],
    freeFeatures: [
      'بحث سريع غير محدود مجاناً مع توثيق المصادر',
      '5 أبحاث عميقة (Pro Search) يومياً مجاناً',
      'تطبيقات مجانية ممتازة للهواتف الذكية'
    ],
    featured: true,
    popularityCount: 62000,
    addedDate: '2026-01-02'
  },
  {
    id: 'claude-35-free',
    name: 'Claude.ai Free',
    nameEn: 'Claude 3.5 Sonnet Web',
    description: 'منصة الدردشة الخاصة بشركة Anthropic التي تقدم نموذج Claude 3.5 Sonnet المتفوق في الكتابة والتحليل والبرمجة.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'Bot',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://claude.ai',
    tags: ['Claude 3.5', 'Anthropic', 'Artifacts', 'كتابة عربية'],
    freeFeatures: [
      'وصول مجاني يومي لنموذج Claude 3.5 Sonnet',
      'ميزة Artifacts لمعاينة الأكواد والتصاميم فوراً',
      'رفع وتحليل المستندات والصور بذكاء عالي'
    ],
    featured: true,
    popularityCount: 57000,
    addedDate: '2026-01-03'
  },
  {
    id: 'chatgpt-free',
    name: 'ChatGPT Free (GPT-4o mini)',
    nameEn: 'ChatGPT OpenAI Web',
    description: 'الخدمة الأكثر انتشاراً عالمياً للدردشة وتوليد النصوص والترجمة مع دعم GPT-4o mini والبحث أونلاين.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'Bot',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://chatgpt.com',
    tags: ['OpenAI', 'ChatGPT', 'GPT-4o mini', 'محادثات'],
    freeFeatures: [
      'محادثات مجانية غير محدودة تقريباً بـ GPT-4o mini',
      'إمكانية رفع الصور والملفات للتحليل',
      'الوصول لمتجر GPTs والبحث المباشر في الويب'
    ],
    featured: true,
    popularityCount: 65000,
    addedDate: '2026-01-01'
  },
  {
    id: 'deepseek-web',
    name: 'DeepSeek Chat',
    nameEn: 'DeepSeek-R1 Web Portal',
    description: 'البوابة المجانية الكاملة لاستخدام نموذج DeepSeek-R1 التفكيري ونموذج DeepSeek-V3 فائق السرعة بدون أي رسوم.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'Zap',
    pricingType: 'مجاني 100%',
    rating: 5.0,
    directUrl: 'https://chat.deepseek.com',
    tags: ['DeepSeek-R1', 'منطق وتفكير', 'مجاني 100%', 'توليد كود'],
    freeFeatures: [
      'مجاني 100% لجميع المستخدمين بصفة دائمة',
      'عرض خطوات التفكير والتحليل المنطقي (Chain-of-Thought)',
      'دعم كامل وممتاز للغة العربية والرياضيات'
    ],
    featured: true,
    popularityCount: 58000,
    addedDate: '2026-01-20'
  },
  {
    id: 'gemini-free',
    name: 'Google Gemini Web',
    nameEn: 'Google Gemini 2.0 Flash',
    description: 'منصة الذكاء الاصطناعي السريعة من Google المدمجة مع كافة خدمات Google Drive و Workspace و YouTube.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'Sparkles',
    pricingType: 'مجاني 100%',
    rating: 4.8,
    directUrl: 'https://gemini.google.com',
    tags: ['Google Gemini', 'سياق عملاق', 'ربط يوتيوب', 'بحث مباشر'],
    freeFeatures: [
      'استخدام مجاني لنموذج Gemini 2.0 Flash',
      'سياق عملاق يتسع لملفات وفيديوهات كاملة',
      'تكامل مباشر مع تطبيقات Google والخرائط'
    ],
    featured: true,
    popularityCount: 53000,
    addedDate: '2026-01-05'
  },
  {
    id: 'notion-ai-free',
    name: 'Notion AI Workspace',
    nameEn: 'Notion AI Workspace Helper',
    description: 'تطبيق إدارة المهام والملاحظات الأشهر عالمياً المدمج بالذكاء الاصطناعي لكتابة وتلخيص المذكرات والإنتاجية.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'FileText',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://notion.so',
    tags: ['Notion', 'إدارة ملاحظات', 'تدوين', 'إنتاجية'],
    freeFeatures: [
      'تطبيق إدارة ملاحظات كامل ومجاني للأفراد',
      'تجربة مجانية لتوليد وتلخيص النصوص داخل الجداول',
      'تنظيم المشاريع وجداول الدراسة الأكاديمية'
    ],
    featured: false,
    popularityCount: 42000,
    addedDate: '2026-01-11'
  },
  {
    id: 'humata-ai',
    name: 'Humata AI',
    nameEn: 'Humata PDF Analyzer',
    description: 'أداة سريعة لتحليل ملفات الـ PDF الضخمة والتقارير المالية واستخراج الإجابات والجداول بأسلوب دقيق.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'FileText',
    pricingType: 'خطة مجانية سخية',
    rating: 4.7,
    directUrl: 'https://humata.ai',
    tags: ['PDF Chat', 'تحليل تقارير', 'ملفات ضخمة', 'استخراج حقائق'],
    freeFeatures: [
      '60 صفحة مجانية شهرياً لتحليل الملفات',
      'إجابات موثوقة بروابط للمواقع المباشرة في الملف',
      'تلخيص فوري للكتيبات والوثائق الرسمية'
    ],
    featured: false,
    popularityCount: 26500,
    addedDate: '2026-01-25'
  },
  {
    id: 'chatpdf-ai',
    name: 'ChatPDF',
    nameEn: 'ChatPDF Document Reader',
    description: 'الأداة الأسرع والأبسط لقراءة وتحليل مذكرات الدراسات والـ PDF عبر واجهة محادثة بسيطة بدون تعقيد.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'FileText',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://chatpdf.com',
    tags: ['ChatPDF', 'قراءة كتب', 'طلاب مدارس', 'مذكرات'],
    freeFeatures: [
      'رفع ملفين يومياً بحجم يصل لـ 120 صفحة مجاناً',
      'محادثة وإجابات فورية بلغات متعددة',
      'لا تتطلب إنشاء حساب لتجربة الملفات السريعة'
    ],
    featured: false,
    popularityCount: 39000,
    addedDate: '2026-01-13'
  },
  {
    id: 'popai-app',
    name: 'PopAi Pro',
    nameEn: 'PopAi Academic Workspace',
    description: 'منصة متكاملة تجمع بين قراءة الـ PDF، توليد العروض التقديمية، ورسم المخططات الذهنية في مكان واحد.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'Sparkles',
    pricingType: 'خطة مجانية سخية',
    rating: 4.7,
    directUrl: 'https://popai.pro',
    tags: ['Mind Maps', 'PPT Generator', 'PDF Chat', 'مخططات ذكية'],
    freeFeatures: [
      'محادثات واستخدام يومي مجاني للأدوات',
      'تحويل الأفكار إلى مخططات ذهنية (Mind Maps)',
      'إنشاء مسودات سلايدات وعروض دراسية'
    ],
    featured: false,
    popularityCount: 21000,
    addedDate: '2026-02-02'
  },
  {
    id: 'taskade-ai',
    name: 'Taskade AI',
    nameEn: 'Taskade Productivity Agents',
    description: 'منصة إدارة مهام الفرق والمشاريع المزودة بـ Agents أوتوماتيكية لتخطيط وجدولة الأعمال والمسارات.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'Workflow',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://taskade.com',
    tags: ['Taskade', 'إدارة مهام', 'AI Agents', 'مخططات مشاريع'],
    freeFeatures: [
      'مساحة عمل مجانية غير محدودة للمشاريع الشخصية',
      'توليد قوائم المهام ومراحل التنفيذ ببرومبت',
      'دعم تطبيق الهواتف والكمبيوتر ومتصفح الويب'
    ],
    featured: false,
    popularityCount: 27800,
    addedDate: '2026-01-30'
  },
  {
    id: 'flowise-ai',
    name: 'Flowise AI Engine',
    nameEn: 'Flowise Drag & Drop LLM',
    description: 'أداة مفتوحة المصدر لبناء وتجميع تطبيقات وسلاسل العمل الذكية (LangChain) بسحب وإفلات المكونات visual flow.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Workflow',
    pricingType: 'مفتوح المصدر',
    rating: 4.9,
    directUrl: 'https://flowiseai.com',
    tags: ['Flowise', 'No-Code LLM', 'LangChain', 'مفتوح المصدر'],
    freeFeatures: [
      'برنامج مجاني ومفتوح المصدر 100% يُشغل بـ Node.js',
      'بناء وتجربة الـ Custom Chatbots وسلاسل RAG',
      'تصدير التطبيق كـ API جاهزة للربط فوراً'
    ],
    featured: true,
    popularityCount: 28100,
    addedDate: '2026-01-17'
  },
  {
    id: 'langflow-app',
    name: 'Langflow Workspace',
    nameEn: 'Langflow Visual UI for RAG',
    description: 'واجهة رسومية تفاعلية ومفتوحة المصدر لبناء واختبار تطبيقات الذكاء الاصطناعي وربط قواعد البيانات ومحركات RAG.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Workflow',
    pricingType: 'مفتوح المصدر',
    rating: 4.8,
    directUrl: 'https://langflow.org',
    tags: ['Langflow', 'Python', 'Visual RAG', 'مفتوح المصدر'],
    freeFeatures: [
      'مشروع مفتوح المصدر بالكامل مدعوم ببيئة Python',
      'سحب وإفلات مكونات النماذج وقواعد البيانات Vector DB',
      'معاينة واختبار سير العمل بدقة متناهية'
    ],
    featured: false,
    popularityCount: 22000,
    addedDate: '2026-01-26'
  },
  {
    id: 'crewai-studio',
    name: 'CrewAI Multi-Agent System',
    nameEn: 'CrewAI Framework & Studio',
    description: 'إطار العمل الأشهر لبناء وتنظيم الفرق البرمجية الذكية (Multi-Agent Systems) حيث يعمل كل Agent على مهمة مخصصة.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Bot',
    pricingType: 'مفتوح المصدر',
    rating: 4.9,
    directUrl: 'https://crewai.com',
    tags: ['CrewAI', 'Multi-Agent', 'Python Framework', 'أتمتة ذكية'],
    freeFeatures: [
      'إطار عمل مفتوح المصدر 100% لبناء عملاء أوتوماتيكية',
      'توزيع الصلاحيات والأدوار والتفاعل بين Agents',
      'ربط النماذج المحلية والسحابية بسهولة'
    ],
    featured: true,
    popularityCount: 34500,
    addedDate: '2026-02-03'
  },
  {
    id: 'dify-ai',
    name: 'Dify.AI Platform',
    nameEn: 'Dify Open Source LLM App Platform',
    description: 'منصة تطوير تطبيقات الذكاء الاصطناعي الأكثر تكاملاً والمفتوحة المصدر لإدارة الـ Prompts، RAG، و Agentic Workflows.',
    category: 'developers',
    categoryLabel: 'أدوات المبرمجين والطلاب',
    iconName: 'Workflow',
    pricingType: 'مفتوح المصدر',
    rating: 4.9,
    directUrl: 'https://dify.ai',
    tags: ['Dify', 'LLMOps', 'RAG Engine', 'مفتوح المصدر', 'استضافة ذاتية'],
    freeFeatures: [
      'منصة مفتوحة المصدر بالكامل يمكن استضافتها عبر Docker',
      'دعم كامل لـ Ollama, DeepSeek, OpenAI, Claude',
      'إنشاء تطبيقات وتصدير خوادم API ومراقبة الأداء'
    ],
    featured: true,
    popularityCount: 37100,
    addedDate: '2026-01-15'
  },
  {
    id: 'make-ai-automation',
    name: 'Make.com AI Modules',
    nameEn: 'Make.com Visual Automations',
    description: 'منصة الربط والأتمتة الرائدة التي تتيح لك ربط خدمات الذكاء الاصطناعي مع آلاف التطبيقات البرمجية وقواعد البيانات.',
    category: 'textGen',
    categoryLabel: 'كتابة النصوص والأبحاث',
    iconName: 'Workflow',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://make.com',
    tags: ['Make.com', 'أتمتة العمل', 'ربط APIs', 'سلاسل أوتوماتيكية'],
    freeFeatures: [
      '1,000 عملية أتمتة مجانية شهرياً',
      'ربط برمجيات الشات والمحتوى مع قواعد البيانات',
      'سحب وإفلات المسارات التفاعلية بسهولة'
    ],
    featured: false,
    popularityCount: 41000,
    addedDate: '2026-01-10'
  },

  // ==========================================
  // 5. أدوات الصوت والفيديو والموسيقى (15 أداة)
  // ==========================================
  {
    id: 'elevenlabs-free',
    name: 'ElevenLabs Voice AI',
    nameEn: 'ElevenLabs Text to Speech',
    description: 'المنصة المتفوقة عالمياً في توليد الأصوات البشرية الواقعية واستنساخ الأصوات وترجمة الفيديوهات بدقة متناهية.',
    category: 'voiceAudio',
    categoryLabel: 'أدوات الصوت والفيديو',
    iconName: 'Mic',
    pricingType: 'خطة مجانية سخية',
    rating: 5.0,
    directUrl: 'https://elevenlabs.io',
    tags: ['تحويل النص لصوت', 'صوت واقعي', 'دبلجة', 'استنساخ صوت'],
    freeFeatures: [
      '10,000 حرف مجاني شهرياً لتوليد الأصوات',
      'دعم ناطق خارق باللغة العربية مع كافة اللهجات',
      'مكتبة أصوات واقعية متنوعة جاهزة للاستخدام'
    ],
    featured: true,
    popularityCount: 61000,
    addedDate: '2026-01-01'
  },
  {
    id: 'suno-ai',
    name: 'Suno AI Music',
    nameEn: 'Suno AI Music Generator',
    description: 'تأليف أغاني ومقاطع موسيقية كاملة بالكلمات والألحان والصوت الغنائي بمجرد وصف نمط الموسيقى المطلوب.',
    category: 'voiceAudio',
    categoryLabel: 'أدوات الصوت والفيديو',
    iconName: 'Music',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://suno.com',
    tags: ['تأليف موسيقى', 'Suno v4', 'أغاني بالذكاء الاصطناعي', '8-bit Music'],
    freeFeatures: [
      '50 رصيد مجاني يتجدد يومياً لتأليف الموسيقى',
      'توليد مقطعين غنائيين كاملين ببرومبت واحد',
      'دعم كافة الأنواع الموسيقية الشائعة والـ Chiptune'
    ],
    featured: true,
    popularityCount: 58000,
    addedDate: '2026-01-04'
  },
  {
    id: 'udio-ai',
    name: 'Udio AI Music Generator',
    nameEn: 'Udio Music Studio',
    description: 'منصة تأليف موسيقي عالية النقاء والوضوح تتيح لك التحكم الدقيق في المقاطع الصوتية وهياكل الأغاني.',
    category: 'voiceAudio',
    categoryLabel: 'أدوات الصوت والفيديو',
    iconName: 'Music',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://udio.com',
    tags: ['تأليف موسيقى', 'Udio v1.5', 'مؤثرات صوتية', 'HQ Audio'],
    freeFeatures: [
      'أرصدة مجانية شهرية لتأليف الأغاني والمقاطع',
      'التحكم في إضافة وتمديد المقاطع (Extend Music)',
      'تصدير ملفات صوتیة بجودة عالي الوضوح'
    ],
    featured: false,
    popularityCount: 39000,
    addedDate: '2026-01-18'
  },
  {
    id: 'luma-dream-machine',
    name: 'Luma Dream Machine',
    nameEn: 'Luma Dream Machine Video',
    description: 'مولد مقاطع الفيديو فائق الواقعية والسرعة الذي يحول الصور والنصوص إلى مشاهد سينمائية بحركة عالية التناسق.',
    category: 'voiceAudio',
    categoryLabel: 'أدوات الصوت والفيديو',
    iconName: 'Video',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://lumalabs.ai/dream-machine',
    tags: ['توليد فيديو', 'Text-to-Video', 'Image-to-Video', 'مشاهد سينمائية'],
    freeFeatures: [
      '30 عملية توليد فيديو مجانية شهرياً',
      'تحويل الصور الثابتة إلى فيديو متحرك واقعي',
      'حركة كاميرا فيزياء سينمائية متناسقة'
    ],
    featured: true,
    popularityCount: 49500,
    addedDate: '2026-01-12'
  },
  {
    id: 'runway-ml',
    name: 'Runway ML Gen-2 / Gen-3',
    nameEn: 'Runway AI Video Studio',
    description: 'الاستوديو السينمائي الشامل لصناعة وتحرير مقاطع الفيديو، إزالة الأجسام، وتوليد المشاهد ثلاثية الأبعاد.',
    category: 'voiceAudio',
    categoryLabel: 'أدوات الصوت والفيديو',
    iconName: 'Video',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://runwayml.com',
    tags: ['Runway Gen-3', 'صناعة أفلام', 'تعديل فيديو', 'Visual FX'],
    freeFeatures: [
      '125 رصيد مجاني دائم لتجربة توليد الفيديوهات',
      'أدوات احترافية للتحكم بالحركة وتوجيه الكاميرا',
      'تعديل وإضافة التأثيرات البصرية بنقرة زر'
    ],
    featured: false,
    popularityCount: 44000,
    addedDate: '2026-01-07'
  },
  {
    id: 'kling-ai',
    name: 'Kling AI Video',
    nameEn: 'Kling AI Global',
    description: 'منصة توليد مقاطع الفيديو فائقة الواقعية والحركة بدقة عالية، ممتازة لمصممي الألعاب والمشاهد السينمائية.',
    category: 'voiceAudio',
    categoryLabel: 'أدوات الصوت والفيديو',
    iconName: 'Video',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://klingai.com',
    tags: ['توليد فيديو', 'Text-to-Video', 'مشاهد سينمائية', 'أنيميشن'],
    freeFeatures: [
      'نقاط مجانية يومية لتوليد الفيديوهات',
      'جودة سينمائية بدقة 1080p وحركة أجساد فيزيائية فائقة',
      'توليد مقاطع بطول يصل إلى 10 ثوانٍ'
    ],
    featured: true,
    popularityCount: 27900,
    addedDate: '2026-02-09'
  },
  {
    id: 'hailuo-ai-video',
    name: 'Hailuo AI (Minimax)',
    nameEn: 'Hailuo AI Video Generator',
    description: 'نموذج Minimax الرائد لتوليد مقاطع فيديو فيزيائية حرة وسريعة الحركة بواقعية تجذب انتباه المشاهدين.',
    category: 'voiceAudio',
    categoryLabel: 'أدوات الصوت والفيديو',
    iconName: 'Video',
    pricingType: 'مجاني 100%',
    rating: 4.9,
    directUrl: 'https://hailuoai.video',
    tags: ['Minimax Video', 'Hailuo AI', 'توليد فيديو مجاني', 'واقعية'],
    freeFeatures: [
      'استخدام مجاني لتوليد المقاطع برومبتياً',
      'فيزياء حركة طبيعية جداً للوجوه والأجساد',
      'تصدير مقاطع ناصعة الدقة بدون رسوم'
    ],
    featured: true,
    popularityCount: 32000,
    addedDate: '2026-01-28'
  },
  {
    id: 'pika-labs-free',
    name: 'Pika Labs AI',
    nameEn: 'Pika 1.5 Video Generator',
    description: 'منصة توليد وتحريك الفيديوهات الشهيرة التي تسمح بإضافة مؤثرات تفجير، قفز، وتمديد للعناصر داخل الفيديو.',
    category: 'voiceAudio',
    categoryLabel: 'أدوات الصوت والفيديو',
    iconName: 'Video',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://pika.art',
    tags: ['Pika 1.5', 'Melt Effects', 'Pikaffects', 'أنيميشن'],
    freeFeatures: [
      'أرصدة مجانية يومية لتوليد وتعديل الفيديو',
      'إضافة مؤثرات صدمة وتمديد العناصر (Pikaffects)',
      'تحريك المناطق المحددة في الصورة الشفافة'
    ],
    featured: false,
    popularityCount: 36800,
    addedDate: '2026-01-16'
  },
  {
    id: 'stable-audio',
    name: 'Stable Audio by Stability',
    nameEn: 'Stable Audio Generator',
    description: 'مولد المؤثرات الصوتية والخلفيات الموسيقية عالي النقاء والأمان التجاري من شركة Stability AI.',
    category: 'voiceAudio',
    categoryLabel: 'أدوات الصوت والفيديو',
    iconName: 'Mic',
    pricingType: 'خطة مجانية سخية',
    rating: 4.7,
    directUrl: 'https://stableaudio.com',
    tags: ['مؤثرات صوتية', 'Stable Audio', 'Sound FX', 'موسيقى خلفية'],
    freeFeatures: [
      '20 مقطع صوتي مجاني شهرياً للمشاريع',
      'توليد مؤثرات صوتية بدقة 44.1kHz ستيريو',
      'تصدير ملفات صوتية تناسب مونتاج الفيديو'
    ],
    featured: false,
    popularityCount: 22500,
    addedDate: '2026-01-24'
  },
  {
    id: 'voicemod-ai',
    name: 'Voicemod AI Voice Changer',
    nameEn: 'Voicemod Realtime AI Voice',
    description: 'تطبيق تغيير الصوت اللحظي المباشر أثناء الميكروفون والألعاب مع توليد مؤشرات صوتية وشخصيات تفاعلية.',
    category: 'voiceAudio',
    categoryLabel: 'أدوات الصوت والفيديو',
    iconName: 'Mic',
    pricingType: 'خطة مجانية سخية',
    rating: 4.7,
    directUrl: 'https://voicemod.net',
    tags: ['تغيير الصوت', 'ألعاب أونلاين', 'Realtime Voice', 'مؤثرات'],
    freeFeatures: [
      'تطبيق مجاني يتضمن أصوات متغيرة يومية',
      'تكامل مباشر مع Discord و OBS و Steam games',
      'لوحة أزرار المؤثرات الصوتية (Soundboard) المجانية'
    ],
    featured: false,
    popularityCount: 31000,
    addedDate: '2026-02-01'
  },
  {
    id: 'soundraw-ai',
    name: 'Soundraw AI Music',
    nameEn: 'Soundraw Custom Music Creator',
    description: 'مولد الموسيقى الخالية من حقوق الطبع والنشر للمبدعين وصناع المحتوى مع التحكم في الآلات والرتم واللحن.',
    category: 'voiceAudio',
    categoryLabel: 'أدوات الصوت والفيديو',
    iconName: 'Music',
    pricingType: 'خطة مجانية سخية',
    rating: 4.7,
    directUrl: 'https://soundraw.io',
    tags: ['موسيقى بدون حقوق', 'صناع محتوى', 'تعديل آلات', 'Royalty Free'],
    freeFeatures: [
      'توليد غير محدود للموسيقى والاستماع إليها مجاناً',
      'تعديل طول المقطع والسرعة والطبقات الموسيقية',
      'تناسب فيديوهات اليوتيوب والمحتوى الرقمي'
    ],
    featured: false,
    popularityCount: 24800,
    addedDate: '2026-01-21'
  },
  {
    id: 'lalal-ai-free',
    name: 'Lalal.ai Vocal Remover',
    nameEn: 'Lalal.ai Stem Splitter',
    description: 'فصل الصوت البشري عن الموسيقى والآلات الموسيقية في المقاطع الصوتية بدقة فائقة المعتمدة على الذكاء الاصطناعي.',
    category: 'voiceAudio',
    categoryLabel: 'أدوات الصوت والفيديو',
    iconName: 'Mic',
    pricingType: 'خطة مجانية سخية',
    rating: 4.8,
    directUrl: 'https://lalal.ai',
    tags: ['فصل الصوت', 'Vocal Remover', 'عزل الموسيقى', 'Stem Splitter'],
    freeFeatures: [
      'دقائق مجانية لتجربة وفصل المقاطع الصوتية',
      'عزل صوت الغناء عن الآلات (Drums, Bass, Piano)',
      'جودة صوت عالية بدون تشويش للترددات'
    ],
    featured: false,
    popularityCount: 29000,
    addedDate: '2026-01-29'
  },
  {
    id: 'descript-free',
    name: 'Descript Editor',
    nameEn: 'Descript Video & Audio Editor',
    description: 'محرر الفيديو والصوت الثوري الذي يتيح لك تعديل الفيديو عبر تعديل النص المفرغ منه كأنه ملف Word.',
    category: 'voiceAudio',
    categoryLabel: 'أدوات الصوت والفيديو',
    iconName: 'Video',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://descript.com',
    tags: ['تعديل بالنص', 'بودكاست', 'Descript', 'إزالة الفراغات'],
    freeFeatures: [
      'تفريغ نصي وصوت مجاني شهرياً للمشاريع',
      'إزالة الكلمات المكررة والوقفات (Uh, Um) بنقرة زر',
      'ميزة Studio Sound لتحسين نبرة الصوت المكتوم'
    ],
    featured: true,
    popularityCount: 37500,
    addedDate: '2026-01-14'
  },
  {
    id: 'capcut-ai-tools',
    name: 'CapCut AI Video Suite',
    nameEn: 'CapCut Online AI Tools',
    description: 'مجموعة أدوات CapCut الذكية أونلاين لتوليد التسميات التوضيحية (Auto Subtitles)، إزالة الخلفيات، وتتبع الحركة.',
    category: 'voiceAudio',
    categoryLabel: 'أدوات الصوت والفيديو',
    iconName: 'Video',
    pricingType: 'مجاني 100%',
    rating: 4.9,
    directUrl: 'https://capcut.com',
    tags: ['CapCut', 'توليد كابشن', 'تعديل فيديو', 'TikTok Reels'],
    freeFeatures: [
      'توليد الكابشن والتلقين النصي مجاناً باللغة العربية',
      'مئات التأثيرات والانتقالات الذكية مجاناً',
      'تطبيق متاح على الهاتف والمكتب والمتصفح'
    ],
    featured: true,
    popularityCount: 59000,
    addedDate: '2026-01-05'
  },
  {
    id: 'elevenlabs-sfx',
    name: 'ElevenLabs Sound Effects',
    nameEn: 'ElevenLabs AI Sound Generator',
    description: 'مولد المؤثرات الصوتية (SFX) المتخصص لتطوير الألعاب وصناعة الأفلام والمشاريع بمجرد وصف الصوت.',
    category: 'voiceAudio',
    categoryLabel: 'أدوات الصوت والفيديو',
    iconName: 'Mic',
    pricingType: 'خطة مجانية سخية',
    rating: 4.9,
    directUrl: 'https://elevenlabs.io/sound-effects',
    tags: ['مؤثرات ألعاب', 'SFX Generator', 'ElevenLabs', 'أصوات سينمائية'],
    freeFeatures: [
      'توليد مؤثرات صوتية بدقة استثنائية ضمن الرصيد المجاني',
      'وصف أي صوت مثل "انفجار سيف ليزر" أو "خطوات على العشب"',
      'تصدير ملفات MP3 صافية وقابلة للاستخدام في الألعاب'
    ],
    featured: true,
    popularityCount: 34000,
    addedDate: '2026-01-26'
  }
];
