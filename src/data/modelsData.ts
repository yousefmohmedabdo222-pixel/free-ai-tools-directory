import { AIModelSpec } from '../types';

export const AI_MODELS_DATA: AIModelSpec[] = [
  {
    id: 'deepseek-r1',
    name: 'DeepSeek-R1',
    nameEn: 'DeepSeek-R1 Reasoning Engine',
    provider: 'DeepSeek AI',
    releaseYear: '2026',
    contextWindow: '128K Token',
    parameterCount: '671B MoE (37B نشط) + نسخ مقطرة (1.5B - 70B)',
    architecture: 'DeepSeek-V3-Base مع تدريب تعزيزي استدلالي مكثف (Large-scale RL)',
    modelType: 'reasoning',
    freeDailyTier: 'مجاني 100% وبلا حدود عبر الويب والتطبيق + مفتوح المصدر (MIT) للتحميل',
    speedRating: 8.5,
    codingRating: 10,
    reasoningRating: 10,
    arabicRating: 9.3,
    visionAudioSupport: 'نصوص وأكواد برمجية ومسائل رياضية معقدة',
    strengths: [
      'تفوق قياسي عالمي في الرياضيات والبرمجة التنافسية والمنطق الخالص',
      'شفافية كاملة عبر عرض خطوات وسلسلة التفكير (Chain-of-Thought)',
      'مفتوح المصدر بالكامل (MIT License) وقابل للتشغيل محلياً عبر Ollama',
      'دعم ممتاز للغة العربية والتعامل مع الأخطاء البرمجية الصعبة'
    ],
    limitations: [
      'يستغرق وقتاً أطول في الاستجابة بسبب إنتاج خطوات التفكير المعمقة',
      'غير مخصص لتوليد الصور أو الصوت المباشر'
    ],
    bestUseCases: 'معالجة المسائل البرمجية المستعصية، التفكير المنطقي العميق، تحليل البيانات الشاقة، والبحث الأكاديمي مجاناً.',
    freeAccessUrl: 'https://chat.deepseek.com',
    badge: 'الأقوى في المنطق والرياضيات'
  },
  {
    id: 'claude-37-sonnet',
    name: 'Claude 3.7 Sonnet',
    nameEn: 'Claude 3.7 Sonnet Hybrid',
    provider: 'Anthropic',
    releaseYear: '2026',
    contextWindow: '200K Token (مع خرج يصل إلى 64K)',
    parameterCount: 'Frontier Model Scale',
    architecture: 'Hybrid Dual-Mode (استجابة لحظية قياسية + تفكير استدلالي موسع Extended Thinking)',
    modelType: 'reasoning',
    freeDailyTier: 'حدود يومية مجانية تتجدد كل بضع ساعات على Claude.ai',
    speedRating: 9.4,
    codingRating: 10,
    reasoningRating: 10,
    arabicRating: 9.8,
    visionAudioSupport: 'نصوص، وثائق معقدة، ورؤية بصرية (Vision) متقدمة',
    strengths: [
      'المرونة الفائقة بين الرد اللحظي الفوري والتفكير العميق القابل للتحكم',
      'ميزة Artifacts الثورية لمعاينة واجهات React و HTML وتطبيقات الويب حياً',
      'أفضل وأفصح أسلوب كتابة طبيعي وسلس باللغة العربية في العالم',
      'فهم بنيوي دقيق للأنظمة البرمجية متعددة الملفات والمكتبات الحديثة'
    ],
    limitations: [
      'الحصة المجانية على منصة الويب قد تنفذ سريعاً أثناء فترات الذروة',
      'غير مفتوح الأوزان للاستضافة الذاتية بدون سحابة'
    ],
    bestUseCases: 'بناء واجهات المستخدم وتطبيقات الويب الكاملة، الكتابة والتحرير اللغوي الفاخر، والتحليل المنطقي المعقد.',
    freeAccessUrl: 'https://claude.ai',
    badge: 'الأفضل في الواجهات والتطوير'
  },
  {
    id: 'gemini-2-flash',
    name: 'Gemini 2.0 Flash',
    nameEn: 'Gemini 2.0 Flash Multimodal',
    provider: 'Google DeepMind',
    releaseYear: '2026',
    contextWindow: '1,000,000 Token (مليون توكن كامل)',
    parameterCount: 'Ultra-Fast Frontier Scale',
    architecture: 'Native Multimodal متزامن مع سرعة استجابة لا تتعدى أجزاء من الثانية',
    modelType: 'multimodal',
    freeDailyTier: 'مجاني عبر Google AI Studio (15 طلب/دقيقة) وتطبيق Gemini اليومي',
    speedRating: 10,
    codingRating: 9.2,
    reasoningRating: 9.0,
    arabicRating: 9.4,
    visionAudioSupport: 'نصوص، صور، صوت ثنائي الاتجاه بالزمن الحقيقي، وفيديوهات طويلة',
    strengths: [
      'أسرع زمن استجابة وتوليد في العالم بين كافة النماذج الرائدة (Ultra-Low Latency)',
      'نافذة سياق عملاقة تتسع لـ 1,000,000 توكن لتحليل كتب وفيديوهات كاملة',
      'اتصال وتأريض مباشر (Grounding) بمحرك بحث Google للبيانات اللحظية',
      'دعم تفاعلي متقدم متعدد الوسائط للصوت والفيديو والصور'
    ],
    limitations: [
      'قد يحتاج إلى برومبت دقيق ومحدد للمسائل التنافسية شديدة التعقيد'
    ],
    bestUseCases: 'تلخيص المستندات الضخمة والفيديوهات، المساعدات الصوتية الحية، والأنظمة التفاعلية فائقة السرعة.',
    freeAccessUrl: 'https://aistudio.google.com',
    badge: 'الأسرع وسياق مليون توكن'
  },
  {
    id: 'gemini-2-pro',
    name: 'Gemini 2.0 Pro',
    nameEn: 'Gemini 2.0 Pro Experimental',
    provider: 'Google DeepMind',
    releaseYear: '2026',
    contextWindow: '2,000,000 Token (2 مليون توكن)',
    parameterCount: 'Frontier Scale MoE',
    architecture: 'High-Capacity Multimodal مع قدرات استدعاء أدوات وكود متطورة',
    modelType: 'coding',
    freeDailyTier: 'متاح مجاناً للمطورين والباحثين عبر Google AI Studio',
    speedRating: 8.8,
    codingRating: 9.8,
    reasoningRating: 9.7,
    arabicRating: 9.6,
    visionAudioSupport: 'نصوص، صور فائقة النقاء، صوت، أكواد، وفيديو',
    strengths: [
      'أضخم نافذة سياق في تاريخ الذكاء الاصطناعي (2 مليون توكن)',
      'قدرة استثنائية على استيعاب مستودعات برمجية كاملة (Full Codebases)',
      'تفوق ملحوظ في البرمجة متعددة اللغات وحل الأخطاء المعمارية',
      'ربط عميق بخدمات Google والأدوات الخارجية (Tool-use)'
    ],
    limitations: [
      'أبطأ في التوليد مقارنة بـ Gemini 2.0 Flash'
    ],
    bestUseCases: 'هندسة المشاريع البرمجية الضخمة، تحليل الأبحاث والمكتبات العملاقة، والحلول متعددة الوسائط.',
    freeAccessUrl: 'https://aistudio.google.com',
    badge: 'أضخم سياق عالمي (2M)'
  },
  {
    id: 'openai-o3-mini',
    name: 'OpenAI o3-mini',
    nameEn: 'OpenAI o3-mini Reasoning',
    provider: 'OpenAI',
    releaseYear: '2026',
    contextWindow: '200K Token (مع 100K توكن خرج استدلالي)',
    parameterCount: 'Compact STEM Reasoning',
    architecture: 'Reinforcement Learning Reasoning مع تحكم في مستوى التفكير (Low/Med/High)',
    modelType: 'reasoning',
    freeDailyTier: 'متاح بحصص يومية لجميع مستخدمي منصة ChatGPT المجانية',
    speedRating: 9.2,
    codingRating: 9.7,
    reasoningRating: 9.8,
    arabicRating: 9.0,
    visionAudioSupport: 'نصوص وأكواد برمجية مع دعم Function Calling و Structured JSON',
    strengths: [
      'سرعة استدلال مضاعفة مقارنة بنماذج o1 السابقة مع كفاءة استهلاك طاقة عالية',
      'تألق جبار في مسابقات الرياضيات (AIME) والبرمجة التنافسية',
      'إمكانية التحكم في زمن التفكير المطلوب للمهمة (Reasoning Effort)',
      'دعم كامل لإخراج البيانات المهيكلة (Structured Outputs)'
    ],
    limitations: [
      'لا يدعم رفع وتحليل الصور في بعض الواجهات مقارنة بـ GPT-4o'
    ],
    bestUseCases: 'المعادلات الرياضية والفيزيائية، الخوارزميات وهياكل البيانات الصعبة، وبناء عملاء الذكاء الاصطناعي (AI Agents).',
    freeAccessUrl: 'https://chatgpt.com',
    badge: 'استدلال STEM فائق السرعة'
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o (Omni)',
    nameEn: 'GPT-4o Omni Flagship',
    provider: 'OpenAI',
    releaseYear: '2025',
    contextWindow: '128K Token',
    parameterCount: 'Frontier Multimodal Scale',
    architecture: 'Native End-to-End Multimodal Transformer',
    modelType: 'multimodal',
    freeDailyTier: 'متاح يومياً مع تجديد دوري لجميع مستخدمي ChatGPT مجاناً',
    speedRating: 9.3,
    codingRating: 9.2,
    reasoningRating: 9.2,
    arabicRating: 9.5,
    visionAudioSupport: 'صوت طبيعي تفاعلي، رؤية صور وكاميرا، نصوص وملفات',
    strengths: [
      'تفاعل صوتي ناعم وطبيعي للغاية بدون تأخير ملحوظ',
      'قدرات رؤية ممتازة لتحليل الرسوم والمخططات ولقطات الشاشة',
      'تكامل هائل مع متجر المساعدين المخصصين (Custom GPTs)',
      'بحث وتصفح حي للويب واستخراج المعلومات المحدثة'
    ],
    limitations: [
      'أقل عمقاً في خطوات التفكير الاستدلالي الصرف مقارنة بـ DeepSeek-R1 و o3-mini'
    ],
    bestUseCases: 'المحادثات العامة المتنوعة، تحليل المستندات والصور، والمساعد الصوتي التفاعلي اليومي.',
    freeAccessUrl: 'https://chatgpt.com',
    badge: 'الرائد المتعدد الوسائط'
  },
  {
    id: 'gpt-4o-mini',
    name: 'GPT-4o mini',
    nameEn: 'GPT-4o mini Fast',
    provider: 'OpenAI',
    releaseYear: '2025',
    contextWindow: '128K Token',
    parameterCount: 'Lightweight Efficient Model',
    architecture: 'Small-scale Highly Optimized Multimodal Transformer',
    modelType: 'general',
    freeDailyTier: 'مجاني وغير محدود تقريباً لجميع مستخدمي ChatGPT',
    speedRating: 9.8,
    codingRating: 8.5,
    reasoningRating: 8.5,
    arabicRating: 9.1,
    visionAudioSupport: 'نصوص وصور ووثائق',
    strengths: [
      'خفيف جداً وسريع ومتاح للجميع بدون قيود استخدام خانقة',
      'دعم ممتاز للمحادثات اليومية والترجمة وتدقيق النصوص',
      'متصل بالإنترنت وميزة تحليل الملفات والصور البسيطة',
      'أعلى استقرار وجهوزية بين الخدمات السحابية'
    ],
    limitations: [
      'محدود في كتابة المشاريع البرمجية الضخمة وحل الألغاز المعقدة'
    ],
    bestUseCases: 'الاستخدام اليومي العام، صياغة الرسائل والإيميلات، والترجمة الفورية السريعة.',
    freeAccessUrl: 'https://chatgpt.com',
    badge: 'الأكثر انتشاراً وسرعة'
  },
  {
    id: 'qwen-25-coder-32b',
    name: 'Qwen 2.5 Coder 32B',
    nameEn: 'Qwen 2.5 Coder 32B Instruct',
    provider: 'Alibaba Cloud (Qwen)',
    releaseYear: '2025',
    contextWindow: '128K Token',
    parameterCount: '32.5 Billion Parameters',
    architecture: 'Dense Transformer مدرب على 5.5 تريليون توكن برمجي متخصص',
    modelType: 'coding',
    freeDailyTier: 'مجاني 100% عبر منصة Qwen Chat + مفتوح المصدر بالكامل',
    speedRating: 9.1,
    codingRating: 9.7,
    reasoningRating: 9.2,
    arabicRating: 8.9,
    visionAudioSupport: 'نصوص وأكواد برمجية لأكثر من 40 لغة',
    strengths: [
      'أقوى نموذج مفتوح المصدر متخصص في الكود البرمجي في العالم',
      'يتفوق على نماذج أكبر حجماً بأضعاف في تقييمات EvalPlus و HumanEval',
      'قابل للتشغيل محلياً بسهولة على كروت 16GB-24GB VRAM عبر Ollama',
      'دعم شامل لأطر العمل الحديثة وإصلاح الأخطاء البرمجية (Debugging)'
    ],
    limitations: [
      'مركز بشكل رئيسي على البرمجة مقارنة بالمهام الأدبية والفلسفية'
    ],
    bestUseCases: 'مساعد كود محلي بديل لـ GitHub Copilot، توليد واجهات التطبيقات، ومراجعة الأكواد.',
    freeAccessUrl: 'https://chat.qwenlm.ai',
    badge: 'بطل البرمجة مفتوح المصدر'
  },
  {
    id: 'qwen-25-72b',
    name: 'Qwen 2.5 72B',
    nameEn: 'Qwen 2.5 72B Instruct',
    provider: 'Alibaba Cloud (Qwen)',
    releaseYear: '2025',
    contextWindow: '128K Token',
    parameterCount: '72.7 Billion Parameters',
    architecture: 'Dense Multilingual Transformer مدرب على 18 تريليون توكن',
    modelType: 'open-source',
    freeDailyTier: 'مجاني عبر Qwen Chat و HuggingChat ومفتوح الأوزان',
    speedRating: 8.7,
    codingRating: 9.4,
    reasoningRating: 9.5,
    arabicRating: 9.6,
    visionAudioSupport: 'دعم متعدد اللغات لأكثر من 29 لغة عالمية',
    strengths: [
      'دعم فصيح واستثنائي للغاية لقواعد ومفردات اللغة العربية',
      'تفوق هائل في الرياضيات وحل المسائل العلمية والمنطقية',
      'قدرات منافسة لأقوى النماذج التجارية المغلقة بأوزان مفتوحة',
      'نافذة سياق 128K موثوقة تلتقط التفاصيل بدقة عالية'
    ],
    limitations: [
      'يتطلب عتاداً قوياً (Dual GPUs أو محطات عمل) لتشغيله محلياً بأقصى سرعة'
    ],
    bestUseCases: 'الترجمة الاحترافية، التحليل اللغوي العربي المتقدم، والبحوث الأكاديمية والمنطقية.',
    freeAccessUrl: 'https://chat.qwenlm.ai',
    badge: 'الأقوى في العربية المفتوحة'
  },
  {
    id: 'llama-33-70b',
    name: 'Llama 3.3 70B',
    nameEn: 'Llama 3.3 70B Instruct',
    provider: 'Meta AI',
    releaseYear: '2025',
    contextWindow: '128K Token',
    parameterCount: '70 Billion Parameters',
    architecture: 'Dense Grouped-Query Attention (GQA) Transformer',
    modelType: 'open-source',
    freeDailyTier: 'مجاني عبر Meta.ai و HuggingFace ومفتوح الأوزان عالمياً',
    speedRating: 8.8,
    codingRating: 9.1,
    reasoningRating: 9.3,
    arabicRating: 8.8,
    visionAudioSupport: 'نصوص وأكواد برمجية ودعم استدعاء الأدوات',
    strengths: [
      'يقدم نفس أداء نموذج Llama 3.1 405B الأكبر بوزن 70B فقط',
      'دعم مجتمعي وأدوات استضافة لا مثيل لها عبر العالم',
      'توازن واستقرار فائق في الأداء ومعايير أمان عالية جداً',
      'مرونة هائلة في التعديل الدقيق (Fine-Tuning) والتطويع المؤسسي'
    ],
    limitations: [
      'اللغة العربية جيدة ولكن Qwen 2.5 و Claude أكثر ثراءً لغوياً'
    ],
    bestUseCases: 'الاستضافة الذاتية للشركات، بناء روبوتات الدردشة المخصصة، وتطبيقات RAG للوثائق.',
    freeAccessUrl: 'https://huggingface.co/chat',
    badge: 'عملاق Meta مفتوح المصدر'
  },
  {
    id: 'deepseek-v3',
    name: 'DeepSeek-V3',
    nameEn: 'DeepSeek-V3 671B MoE',
    provider: 'DeepSeek AI',
    releaseYear: '2025',
    contextWindow: '128K Token',
    parameterCount: '671B MoE (37B نشط مع Multi-Head Latent Attention)',
    architecture: 'Mixture-of-Experts عالي الكفاءة مع Multi-Token Prediction',
    modelType: 'open-source',
    freeDailyTier: 'مجاني 100% وبلا حدود عبر موقع وتطبيق DeepSeek',
    speedRating: 9.7,
    codingRating: 9.5,
    reasoningRating: 9.3,
    arabicRating: 9.4,
    visionAudioSupport: 'نصوص وأكواد برمجية متقدمة',
    strengths: [
      'سرعة توليد قياسية مذهلة تتجاوز 60 توكن بالثانية',
      'ذكاء لغوي وبرمجي مذهل بتكلفة تدريب وتخديم ثورية',
      'أوزان مفتوحة بالكامل وتوافق مع محركات vLLM و SGLang',
      'استيعاب عميق للبرمجة والمحادثات الطويلة'
    ],
    limitations: [
      'ليس نموذج استدلال صرف؛ للمسائل الرياضية القصوى يفضل DeepSeek-R1'
    ],
    bestUseCases: 'الكتابة السريعة، إنتاج وتعديل الأكواد البرمجية، والمحادثات الشاملة عالية الكفاءة.',
    freeAccessUrl: 'https://chat.deepseek.com',
    badge: 'أسرع عملاق MoE مفتوح'
  },
  {
    id: 'mistral-large-2',
    name: 'Mistral Large 2',
    nameEn: 'Mistral Large 2 (123B)',
    provider: 'Mistral AI',
    releaseYear: '2025',
    contextWindow: '128K Token',
    parameterCount: '123 Billion Parameters',
    architecture: 'Dense Multilingual Transformer مع تركيز مكثف على البرمجة والمنطق',
    modelType: 'open-source',
    freeDailyTier: 'مجاني عبر منصة Le Chat (chat.mistral.ai)',
    speedRating: 9.0,
    codingRating: 9.3,
    reasoningRating: 9.2,
    arabicRating: 9.0,
    visionAudioSupport: 'نصوص وأكواد و 80+ لغة برمجة',
    strengths: [
      'ريادة عالمية في استدعاء الدوال والتكامل مع واجهات الـ API (Function Calling)',
      'دعم ممتاز للغات متعددة واللغة الفرنسية والعربية والإنجليزية',
      'مهارات جبارة في الرياضيات وتوليد الأكواد المقننة مع تجنب الهلوسة',
      'واجهة Le Chat المجانية تشمل تصفح الويب وتوليد الصور عبر Flux'
    ],
    limitations: [
      'يتطلب موارد حوسبة ضخمة جداً لتشغيله محلياً بالكامل'
    ],
    bestUseCases: 'بناء عملاء الذكاء الاصطناعي (Agents)، الترجمة متعددة اللغات، والأنظمة المعتمدة على الـ APIs.',
    freeAccessUrl: 'https://chat.mistral.ai',
    badge: 'القوة الأوروبية الرائدة'
  },
  {
    id: 'codestral-25',
    name: 'Codestral 25.01',
    nameEn: 'Codestral 25.01 by Mistral',
    provider: 'Mistral AI',
    releaseYear: '2025',
    contextWindow: '256K Token (سياق برمجي رائد)',
    parameterCount: '22 Billion Parameters',
    architecture: 'Dense Code-Specific Model مع قدرة Fill-in-the-Middle (FIM)',
    modelType: 'coding',
    freeDailyTier: 'مجاني عبر Le Chat ومفتاح API مجاني للمطورين',
    speedRating: 9.6,
    codingRating: 9.5,
    reasoningRating: 8.8,
    arabicRating: 8.4,
    visionAudioSupport: 'برمجة متخصصة في أكثر من 80 لغة برمجية',
    strengths: [
      'نافذة سياق ضخمة تصل إلى 256K توكن لقراءة ملفات ومستودعات كاملة',
      'سرعة استثنائية في إكمال منتصف الأكواد البرمجية (Fill-in-the-Middle)',
      'حجم 22B مثالي جداً للاستضافة الذاتية على كرت شاشة واحد (16GB VRAM)',
      'تكامل رائع مع محرري VS Code و Continue.dev و Cursor'
    ],
    limitations: [
      'مخصص حصراً للبرمجة ولا يناسب المهام الإنشائية أو الأدبية'
    ],
    bestUseCases: 'الإكمال التلقائي فائق السرعة للكود، إعادة الهيكلة (Refactoring)، وتوليد اختبارات الوحدة.',
    freeAccessUrl: 'https://chat.mistral.ai',
    badge: 'سياق 256K متخصص في الكود'
  },
  {
    id: 'phi-4-14b',
    name: 'Phi-4 (14B)',
    nameEn: 'Microsoft Phi-4 14B Reasoning',
    provider: 'Microsoft Research',
    releaseYear: '2025',
    contextWindow: '16K / 32K Token',
    parameterCount: '14 Billion Parameters',
    architecture: 'Dense Synthetic-Data-Driven Transformer',
    modelType: 'reasoning',
    freeDailyTier: 'مجاني ومفتوح المصدر عبر HuggingFace و Azure AI Studio',
    speedRating: 9.5,
    codingRating: 9.0,
    reasoningRating: 9.4,
    arabicRating: 8.6,
    visionAudioSupport: 'نصوص، رياضيات، ومنطق استدلالي',
    strengths: [
      'كفاءة رياضية ومنطقية استثنائية تضاهي نماذج 70B بفضل جودة بيانات التدريب',
      'حجم 14B خفيف جداً يتيح التشغيل بسرعة فائقة على الحواسيب الشخصية',
      'تدريب متطور على بيانات تركيبية نقية خالية من الضوضاء (Textbooks Quality)'
    ],
    limitations: [
      'نافذة السياق أقصر مقارنة بالنماذج السحابية العملاقة'
    ],
    bestUseCases: 'الاستدلال الرياضي والمنطقي على الأجهزة المحمولة والمعالجات المدمجة (Edge AI).',
    freeAccessUrl: 'https://huggingface.co/microsoft/phi-4',
    badge: 'معجزة الرياضيات الخفيفة'
  }
];
