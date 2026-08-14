import { AIModelSpec } from '../types';

export const AI_MODELS_DATA: AIModelSpec[] = [
  {
    id: 'gemini-37-flash',
    name: 'Gemini 3.7 Flash',
    nameEn: 'Gemini 3.7 Flash Workhorse',
    provider: 'Google DeepMind',
    releaseYear: '2026',
    contextWindow: '1,000,000 Token (مليون توكن كامل)',
    parameterCount: 'Frontier Multimodal Workhorse Scale',
    architecture: 'Native Multimodal متقدم مع محرك استدلال برمجي فائق الدقة (Agentic Core)',
    modelType: 'coding',
    freeDailyTier: 'متاح مجاناً عبر Google AI Studio (15 طلب/دقيقة) وتطبيق Gemini مع Spark Agent',
    speedRating: 10,
    codingRating: 10,
    reasoningRating: 9.8,
    arabicRating: 9.7,
    visionAudioSupport: 'نصوص، صور، صوت حي ثنائي الاتجاه، وفيديو بزمن استجابة لحظي',
    strengths: [
      'أحدث وأقوى نموذج عملي لتطوير الويب وهندسة البرمجيات وبناء الوكلاء (AI Agents)',
      'دقة برمجية استثنائية من المحاولة الأولى (First-pass Code Accuracy)',
      'نافذة سياق عملاقة 1,000,000 توكن مع معالجة وتحليل فائقة السرعة للمستندات والوسائط',
      'تأريض مباشر ومحدث بنتائج محرك بحث Google مع أدوات استدعاء برمجية مدمجة'
    ],
    limitations: [
      'للمسائل الرياضية الفلسفية المعقدة جداً قد يتطلب توجيه برومبت تفصيلي'
    ],
    bestUseCases: 'بناء تطبيقات الويب الكاملة، تصحيح مستودعات الأكواد (Debugging)، الوكلاء الأذكياء (Autonomous Agents)، وتحليل البيانات الضخمة.',
    freeAccessUrl: 'https://aistudio.google.com',
    badge: 'الأحدث عالمياً وأقوى كود 2026'
  },
  {
    id: 'openai-gpt-5',
    name: 'OpenAI GPT-5',
    nameEn: 'OpenAI GPT-5 Unified Flagship',
    provider: 'OpenAI',
    releaseYear: '2026',
    contextWindow: '400K Token (272K دخل + 128K تفكير وخرج)',
    parameterCount: 'Next-Gen Frontier Multimodal Scale',
    architecture: 'Unified System مع موجه ذكي (Smart Router) يوازن تلقائياً بين Fast Mode و Thinking Mode',
    modelType: 'reasoning',
    freeDailyTier: 'متاح بحصص يومية متجددة لجميع مستخدمي ChatGPT مع التبديل التلقائي',
    speedRating: 9.4,
    codingRating: 9.9,
    reasoningRating: 9.9,
    arabicRating: 9.6,
    visionAudioSupport: 'نصوص، رؤية بصرية عالية الدقة، صوت طبيعي، وتحليل ملفات معقدة',
    strengths: [
      'نظام موحد ذكي يتنقل تلقائياً بين التوليد اللحظي السريع والتفكير الاستدلالي العميق',
      'انخفاض الهلوسة بنسبة 45% مقارنة بالجيل السابق مع دقة 94.6% في AIME 2025 و 74.9% في SWE-bench',
      'قدرات تنفيذية فائقة للمهام متعددة المراحل والوكلاء المستقلين',
      'تكامل شامل مع تصفح الويب المباشر وتوليد الصور وتشغيل كود بايثون'
    ],
    limitations: [
      'الحصص المتاحة للتفكير العميق المقنن تتطلب اشتراكاً موسعاً عند الضغط العالي'
    ],
    bestUseCases: 'حل المسائل العلمية والبرمجية المعقدة، التحليل المؤسسي، والتطبيقات متعددة الوسائط.',
    freeAccessUrl: 'https://chatgpt.com',
    badge: 'الجيل الرائد من OpenAI'
  },
  {
    id: 'claude-37-sonnet',
    name: 'Claude 3.7 Sonnet',
    nameEn: 'Claude 3.7 Sonnet Hybrid',
    provider: 'Anthropic',
    releaseYear: '2026',
    contextWindow: '200K Token (خرج يصل إلى 128K في وضع التفكير)',
    parameterCount: 'Frontier Hybrid Model Scale',
    architecture: 'Hybrid Dual-Mode (استجابة لحظية قياسية + تفكير استدلالي موسع Extended Thinking)',
    modelType: 'reasoning',
    freeDailyTier: 'متاح مجاناً بحصص تتجدد دورياً عبر Claude.ai ومنصة المطورين',
    speedRating: 9.3,
    codingRating: 10,
    reasoningRating: 10,
    arabicRating: 9.8,
    visionAudioSupport: 'نصوص، وثائق معقدة، ورؤية بصرية (Vision) دقيقة',
    strengths: [
      'أول نموذج هجين يجمع بين السرعة الفورية وعمق التفكير الاستدلالي مع إظهار خطوات التفكير',
      'ميزة Artifacts المتطورة لمعاينة واجهات React و HTML والتطبيقات التفاعلية مباشرة',
      'الأعلى فصاحة وبلاغة في صياغة اللغة العربية وتنسيق المحتوى الفاخر',
      'تكامل مذهل مع بيئة Claude Code لتطوير المشاريع البرمجية من الطرفية'
    ],
    limitations: [
      'الحدود المجانية اليومية قد تتأثر في أوقات ذروة الاستخدام العالمي'
    ],
    bestUseCases: 'تصميم وبناء واجهات المستخدم Frontend، كتابة النصوص والبحوث الراقية، وهندسة البرمجيات.',
    freeAccessUrl: 'https://claude.ai',
    badge: 'بطل واجهات React والأدب'
  },
  {
    id: 'deepseek-r1',
    name: 'DeepSeek-R1',
    nameEn: 'DeepSeek-R1 Reasoning Engine',
    provider: 'DeepSeek AI',
    releaseYear: '2026',
    contextWindow: '128K Token',
    parameterCount: '671B MoE (37B نشط) + نسخ مقطرة خفيفة (1.5B - 70B)',
    architecture: 'DeepSeek-V3-Base مع تدريب تعزيزي استدلالي ضخم (Large-scale RL)',
    modelType: 'reasoning',
    freeDailyTier: 'مجاني 100% وبلا حدود عبر موقع وتطبيق DeepSeek + مفتوح المصدر (MIT)',
    speedRating: 8.6,
    codingRating: 9.9,
    reasoningRating: 10,
    arabicRating: 9.3,
    visionAudioSupport: 'نصوص وأكواد برمجية ومسائل رياضية معقدة',
    strengths: [
      'تفوق قياسي عالمي في الرياضيات والبرمجة التنافسية والمنطق الرياضي الخالص',
      'شفافية تامة عبر عرض خطوات وسلسلة التفكير (Chain-of-Thought) بالتفصيل',
      'مفتوح المصدر بالكامل (MIT License) وقابل للتشغيل محلياً عبر Ollama و vLLM',
      'أحدث ثورة في كفاءة التكلفة والتدريب مفتوح المصدر'
    ],
    limitations: [
      'يستغرق بضع ثوانٍ إضافية في صياغة خطوات التفكير قبل إخراج الإجابة النهائية'
    ],
    bestUseCases: 'حل المسائل الرياضية المستعصية، الخوارزميات وهياكل البيانات المعقدة، والتشغيل المحلي على الخوادم الخاصة.',
    freeAccessUrl: 'https://chat.deepseek.com',
    badge: 'الاستدلال المفتوح الأقوى'
  },
  {
    id: 'grok-3',
    name: 'Grok 3',
    nameEn: 'xAI Grok 3 Frontier',
    provider: 'xAI (Elon Musk)',
    releaseYear: '2026',
    contextWindow: '128K Token',
    parameterCount: 'Frontier Scale (مدرب على 200 ألف كرت H100 في Colossus)',
    architecture: 'Multimodal Transformer مع أنماط Think Mode و Big Brain و DeepSearch الحية',
    modelType: 'multimodal',
    freeDailyTier: 'متاح مجاناً عبر منصة Grok.com وتطبيق X مع فترات استخدام مجانية',
    speedRating: 9.6,
    codingRating: 9.6,
    reasoningRating: 9.7,
    arabicRating: 9.1,
    visionAudioSupport: 'نصوص، صور، بيانات لحظية من منصة X والويب المباشر',
    strengths: [
      'مدعوم بأقوى حاسوب فائق في العالم (Colossus Supercomputer)',
      'ميزة DeepSearch للبحث والتقصي العميق في الإنترنت ومنصة X في الزمن الحقيقي',
      'وضع Big Brain لتخصيص طاقة حوسبة إضافية للمسائل الشاقة والمعقدة',
      'تفكير استدلالي متقدم وخفة ظل وتعبير غير مقيد'
    ],
    limitations: [
      'بعض المزايا المتقدمة مثل Big Brain تتطلب خطط اشتراك في فترات الذروة'
    ],
    bestUseCases: 'التحري والبحث الصحفي والتقني اللحظي، التحليل المالي والسياسي، وحل المعضلات البرمجية.',
    freeAccessUrl: 'https://grok.com',
    badge: 'مدعوم بحاسوب Colossus الفائق'
  },
  {
    id: 'openai-o3-mini',
    name: 'OpenAI o3-mini',
    nameEn: 'OpenAI o3-mini STEM Reasoning',
    provider: 'OpenAI',
    releaseYear: '2026',
    contextWindow: '200K Token (مع 100K توكن خرج استدلالي)',
    parameterCount: 'Compact High-Efficiency Reasoning Scale',
    architecture: 'Advanced Reinforcement Learning مع تحكم في جهد التفكير (Reasoning Effort: Low/Med/High)',
    modelType: 'reasoning',
    freeDailyTier: 'متاح مجاناً بحصص يومية سخية في ChatGPT لجميع المستخدمين',
    speedRating: 9.3,
    codingRating: 9.7,
    reasoningRating: 9.8,
    arabicRating: 9.0,
    visionAudioSupport: 'نصوص، أكواد، ودعم إخراج بيانات JSON المهيكلة (Structured Outputs)',
    strengths: [
      'سرعة استدلال مضاعفة مقارنة بنماذج o1 السابقة مع كفاءة استهلاك طاقة عالية',
      'تألق جبار في مسابقات الرياضيات (AIME) والبرمجة التنافسية',
      'إمكانية التحكم في زمن التفكير المطلوب للمهمة (Reasoning Effort)',
      'دعم كامل لإخراج البيانات المهيكلة (Structured Outputs)'
    ],
    limitations: [
      'غير مخصص لمعالجة الصور في بعض الواجهات'
    ],
    bestUseCases: 'المعادلات الرياضية والفيزيائية، الخوارزميات وهياكل البيانات الصعبة، وبناء عملاء الذكاء الاصطناعي (AI Agents).',
    freeAccessUrl: 'https://chatgpt.com',
    badge: 'استدلال STEM فائق السرعة'
  },
  {
    id: 'gemini-2-pro',
    name: 'Gemini 2.0 Pro',
    nameEn: 'Gemini 2.0 Pro Long-Context',
    provider: 'Google DeepMind',
    releaseYear: '2026',
    contextWindow: '2,000,000 Token (2 مليون توكن كاملة)',
    parameterCount: 'Frontier Scale MoE',
    architecture: 'High-Capacity Multimodal مع قدرات استدعاء أدوات وكود متطورة',
    modelType: 'coding',
    freeDailyTier: 'متاح مجاناً للمطورين والباحثين عبر Google AI Studio',
    speedRating: 8.9,
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
      'أبطأ قليلاً في زمن البدء مقارنة بـ Gemini 3.7 Flash'
    ],
    bestUseCases: 'هندسة المشاريع البرمجية الضخمة، تحليل الأبحاث والمكتبات العملاقة، والحلول متعددة الوسائط.',
    freeAccessUrl: 'https://aistudio.google.com',
    badge: 'أضخم سياق عالمي (2M)'
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o (Omni)',
    nameEn: 'GPT-4o Multimodal Flagship',
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
      'أقل عمقاً في خطوات التفكير الاستدلالي الصرف مقارنة بـ GPT-5 و DeepSeek-R1'
    ],
    bestUseCases: 'المحادثات العامة المتنوعة، تحليل المستندات والصور، والمساعد الصوتي التفاعلي اليومي.',
    freeAccessUrl: 'https://chatgpt.com',
    badge: 'الرائد المتعدد الوسائط'
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
