import { AIPrompt } from '../types';

export const AI_PROMPTS_DATA: AIPrompt[] = [
  // --- 1. البرمجة وتتبع الأخطاء (Coding) ---
  {
    id: 'p-code-debugger',
    title: 'محلل ومصحح الأخطاء البرمجية (Ultimate Code Debugger)',
    category: 'coding',
    categoryLabel: 'البرمجة وتتبع الأخطاء',
    recommendedModel: 'DeepSeek-R1 / Claude 3.5 Sonnet',
    description: 'برومبت متخصص يحلل الكود البرمجي، يحدد سبب الخطأ بدقة، ويشرح الحل خطوة بخطوة مع الكود المصلح.',
    tags: ['تتبع أخطاء', 'إصلاح كود', 'شرح خطأ', 'كود نظيف'],
    copyCount: 4200,
    variables: [
      { key: 'language', label: 'لغة البرمجة', placeholder: 'مثل: Python / React TypeScript', defaultValue: 'TypeScript' },
      { key: 'error_msg', label: 'رسالة الخطأ', placeholder: 'أدخل نص الخطأ الصادر في Terminal', defaultValue: 'TypeError: Cannot read property of undefined' },
      { key: 'code_snippet', label: 'الكود الحالي', placeholder: 'الصق الكود هنا...', defaultValue: 'const user = data.user;\nconsole.log(user.profile.name);' }
    ],
    promptTemplate: `أنت خبير هندسة برمجيات متقدم. أريدك أن تحلل الكود التالي بلغة [language].

المشكلة أو رسالة الخطأ الظاهرة:
[error_msg]

الكود الحالي:
\`\`\`[language]
[code_snippet]
\`\`\`

يرجى إتباع الخطة التالية في ردك:
1. تحديد السبب الرئيسي والروتيني للمشكلة (Root Cause Analysis).
2. تقديم الكود المصحح المكتمل والمطابق لأفضل ممارسات [language].
3. شرح التغييرات التي أجريتها ولماذا تحل المشكلة.
4. إعطاء نصيحة لمنع وقوع نفس الخطأ مستقبلاً.`
  },
  {
    id: 'p-code-refactor',
    title: 'تحسين كفاءة الكود وإعادة الهيكلة (Clean Code Refactor)',
    category: 'coding',
    categoryLabel: 'البرمجة وتتبع الأخطاء',
    recommendedModel: 'Qwen 2.5 Coder / Claude 3.5 Sonnet',
    description: 'تحويل الكود الفوضوي والمستعجل إلى كود نظيف، سريع، ومقسّم وفق مبادئ SOLID مع تحسين الأداء والتسميات.',
    tags: ['Clean Code', 'SOLID', 'تحسين أداء', 'Refactoring'],
    copyCount: 3890,
    variables: [
      { key: 'language', label: 'لغة البرمجة / الإطار', placeholder: 'مثل: Python / Node.js Express', defaultValue: 'Node.js Express' },
      { key: 'code_snippet', label: 'الكود المراد تحسينه', placeholder: 'الصق الكود هنا...', defaultValue: 'async function getData(req, res) { let d = await db.find(); res.json(d); }' }
    ],
    promptTemplate: `أنت مهندس معمارية برمجيات (Software Architect). قم بإعادة هيكلة الكود التالي المكتوب بلغة [language] ليكون مطابقاً لأعلى معايير الكود النظيف (Clean Code):

\`\`\`[language]
[code_snippet]
\`\`\`

المطلوب:
1. تحسين تسمية المتغيرات والدوال لتكون معبرة وواضحة (Self-documenting).
2. معالجة كافة الاستثناءات والحالات الخاصة (Error Handling & Edge Cases).
3. تطبيق معايير DRY (Don't Repeat Yourself) وتسهيل قراءة الكود.
4. تقديم الكود النهائي المحسّن جاهزاً للنسخ مباشرة مع تعليقات تشريحية.`
  },
  {
    id: 'p-unit-test-gen',
    title: 'توليد اختبارات الوحدة البرمجية (Unit Tests Generator)',
    category: 'coding',
    categoryLabel: 'البرمجة وتتبع الأخطاء',
    recommendedModel: 'DeepSeek-R1 / Qwen 2.5 Coder',
    description: 'إنشاء اختبارات برمجية شاملة بكافة حالات الحافة (Edge Cases) باستخدام مكتبات الاختبار الحديثة.',
    tags: ['Unit Tests', 'Jest', 'PyTest', 'Vitest', 'جودة الكود'],
    copyCount: 2950,
    variables: [
      { key: 'framework', label: 'إطار الاختبار', placeholder: 'مثل: Vitest / Jest / PyTest', defaultValue: 'Vitest' },
      { key: 'code_snippet', label: 'الدالة أو الكود المراد اختباره', placeholder: 'الصق الدالة هنا...', defaultValue: 'export function calculateDiscount(price: number, discountRatio: number) { return price - (price * discountRatio); }' }
    ],
    promptTemplate: `أنت مهندس ضمان جودة واختبار برمجيات (QA Engineer). اكتب مجموعة كاملة من اختبارات الوحدة (Unit Tests) باستخدام إطار [framework] للدالة التالية:

\`\`\`
[code_snippet]
\`\`\`

شروط الاختبارات:
1. تغطية المسار الطبيعي (Happy Path).
2. تغطية حالات الحافة (Edge Cases) والأرقام السالبة والقيم الفارغة (Null/Undefined).
3. تنظيم حالات الاختبار بوصف صريح وواضح باللغة الإنجليزية أو العربية.`
  },

  // --- 2. تطوير الألعاب والـ Pixel Art (Game Dev) ---
  {
    id: 'p-pixel-art-gen',
    title: 'مولّد الأوصاف الاحترافية لشخصيات Pixel Art للألعاب',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    recommendedModel: 'FLUX.1 / Leonardo.ai / ChatGPT',
    description: 'برومبت هندسي دقيق لصياغة أوصاف صور Pixel Art خالية من التغبيش وجاهزة للاستخدام في محركات الألعاب.',
    tags: ['Pixel Art', 'توليد شخصيات', 'Sprite Sheet', '2D Games'],
    copyCount: 5120,
    variables: [
      { key: 'character', label: 'وصف الشخصية', placeholder: 'مثل: محارب روبوتي بسيف ضوئي', defaultValue: 'محارب روبوتي سايبورغ يحمل سيفاً متوهجاً' },
      { key: 'style', label: 'نمط البكسل', placeholder: 'مثل: 16-bit SNES style / 32-bit GameBoy Color', defaultValue: '16-bit retro arcade pixel art' },
      { key: 'background', label: 'الخلفية', placeholder: 'مثل: خلفية شفافة بيضاء صلبة', defaultValue: 'isolated clean solid dark background, transparent style' }
    ],
    promptTemplate: `Detailed pixel art sprite of [character], [style], crisp pixel edges, sharp details, vibrant color palette, [background], full body view, game asset sprite, high contrast, clean contours, 2D indie game style, no blurry gradients, pixel-perfect rendering.`
  },
  {
    id: 'p-godot-script-gen',
    title: 'كاتب سكربتات محرك الألعاب Godot GDScript',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    recommendedModel: 'Claude 3.5 Sonnet / DeepSeek-R1',
    description: 'توليد كود GDScript نظيف وموثق لإدارة حركة الشخصيات، التصادمات، وحفظ التقدم في محرك Godot 4.',
    tags: ['Godot 4', 'GDScript', 'حركة شخصيات', 'تطوير ألعاب'],
    copyCount: 3100,
    variables: [
      { key: 'node_type', label: 'نوع النود (Node Type)', placeholder: 'مثل: CharacterBody2D / RigidBody3D', defaultValue: 'CharacterBody2D' },
      { key: 'mechanic', label: 'الميكانيكية المطلوبة', placeholder: 'مثل: حركة 8 اتجاهات مع Dash سريعة', defaultValue: 'حركة منصات 2D مع قفزة مزدوجة (Double Jump) وانزلاق على الجدران' }
    ],
    promptTemplate: `أنت مطور ألعاب خبير بمحرك Godot 4. اكتب سكربت GDScript متكامل ومحسن للـ Node من نوع [node_type] لتحقيق الميكانيكية التالية:
[mechanic]

يرجى مراعاة:
1. استخدام أفضل الممارسات في Godot 4 (مثل move_and_slide و delta).
2. إضافة متغيرات قابل للتعديل من محرر Godot باستخدام @export.
3. كتابة تعليقات توضيحية أمام كل دالة.`
  },
  {
    id: 'p-game-design-doc',
    title: 'صياغة وثيقة تصميم لعبة كاملة (Game Design Document - GDD)',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    recommendedModel: 'Claude 3.5 Sonnet / Gemini 2.0 Flash',
    description: 'تحويل فكرة لعبة عابرة إلى وثيقة تصميم متكاملة تشمل آليات اللعب (Mechanics)، القصة، والشخصيات.',
    tags: ['GDD', 'تصميم ألعاب', 'Godot', 'Unity', 'آليات اللعب'],
    copyCount: 2850,
    variables: [
      { key: 'game_idea', label: 'فكرة اللعبة الرئيسية', placeholder: 'مثل: لعبة منصات 2D لشخص يمتلك سلاحاً يتحكم بالزمن', defaultValue: 'لعبة منصات 2D مع إمكانية إيقاف الزمن لمدة 3 ثوانٍ لحل الألغاز' },
      { key: 'genre', label: 'تصنيف اللعبة', placeholder: 'مثل: Puzzle Platformer / Action RPG', defaultValue: '2D Puzzle Platformer' }
    ],
    promptTemplate: `أنت مصمم ألعاب رئيسي (Lead Game Designer). أريد منك إنشاء وثيقة تصميم لعبة (Game Design Document) تفصيلية لمشروع لعبة جديد.

فكرة اللعبة الأساسية: [game_idea]
نوع اللعبة: [genre]

يرجى هيكلة الوثيقة كالتالي:
1. **الملخص التنفيذي (Elevator Pitch)**: شريحة الاستهداف وسبب تميز الفكرة.
2. **آليات اللعب الرئيسية (Core Mechanics)**: أزرار التحكم، الفيزياء، وحلقة اللعب الأساسية (Core Loop).
3. **نظام التقدم والألغاز (Progression & Puzzles)**: كيف تتصاعد الصعوبة تدريجياً.
4. **الأسلوب البصري والصوتي (Art & Audio Direction)**: التوجيه البصري والموسيقي المقترح.`
  },

  // --- 3. الطلاب والأكاديميا (Academic) ---
  {
    id: 'p-academic-paper-explainer',
    title: 'شرح وتلخيص الأوراق العلمية للطلاب (Paper Summarizer)',
    category: 'academic',
    categoryLabel: 'الطلاب والأكاديميا',
    recommendedModel: 'Perplexity / Gemini 2.0 Flash',
    description: 'تحويل الأوراق البحثية والمذكرات المعقدة إلى ملخصات سريعة وسهلة الفهم بأسلوب تعليمي مبسط.',
    tags: ['تلخيص أوراق', 'أبحاث طلاب', 'جامعة', 'تبسيط العلوم'],
    copyCount: 3600,
    variables: [
      { key: 'topic', label: 'عنوان الورقة البحثية أو الموضوع', placeholder: 'أدخل موضوع أو نص الورقة...', defaultValue: 'خوارزميات الذكاء الاصطناعي في تحسين شبكات الطاقة الكهربائية' },
      { key: 'target_level', label: 'المستوى العلمي', placeholder: 'مثل: طالب بكالوريوس / مبتدئ', defaultValue: 'طالب جامعي يدرس هندسة الحاسوب' }
    ],
    promptTemplate: `أنت أستاذ جامعي ومبسط علوم قدير. اشرح وشخص الموضوع الأكاديمي التالي لمستوى [target_level]:

الموضوع أو الورقة البحثية:
[topic]

يرجى الالتزام بالهيكل التالي:
1. **الفكرة الجوهرية (Core Concept)**: ملخص في 3 أسطر بدون تعقيد.
2. **المشكلة التي يحلها البحث (Problem Statement)**: لماذا تم إعداد هذا البحث؟
3. **المنهجية والأدوات (Methodology)**: كيف تم الوصول للنتائج؟
4. **أهم 3 نتائج وتوصيات (Key Takeaways)**.`
  },

  // --- 4. التلخيص ونسخ النصوص (Summarization) ---
  {
    id: 'p-youtube-video-summarizer',
    title: 'تلخيص فيديوهات يوتيوب والمحاضرات الطويلة (Video Summarizer)',
    category: 'summarization',
    categoryLabel: 'التلخيص ونسخ النصوص',
    recommendedModel: 'Gemini 2.0 Flash / Claude 3.5 Sonnet',
    description: 'تحويل التفريغ النصي للفيديوهات والمحاضرات إلى نقاط رئيسية وجدول بالنقاط الزمنية.',
    tags: ['تلخيص يوتيوب', 'محاضرات', 'نقاط رئيسية', 'تدوين'],
    copyCount: 3100,
    variables: [
      { key: 'transcript_text', label: 'النص المفرغ من الفيديو', placeholder: 'الصق نص الفيديو هنا...', defaultValue: 'مرحباً بكم في هذه المحاضرة حول أساسيات التعلم العميق والشبكات العصبية...' }
    ],
    promptTemplate: `أنت كاتب ومحرر محتوى محترف. قمت بتوفير التفريغ النصي التالي لفيديو تعليمي/محاضرة:

[transcript_text]

المطلوب:
1. كتابة ملخص تنفيذي للمحاضرة في فقرة واحدة مركزة.
2. استخراج أهم 5 أفكار رئيسية تمت مناقشتها مع شرح قصير لكل فكرة.
3. صياغة قادمة من 3 أسئلة وإجاباتها لاختبار مدى فهم المادة.`
  },

  // --- 5. الهندسة المعمارية للنظم (Engineering) ---
  {
    id: 'p-database-schema-designer',
    title: 'تصميم مخطط قواعد البيانات (Database Schema Designer)',
    category: 'engineering',
    categoryLabel: 'الهندسة وتصميم النظم',
    recommendedModel: 'DeepSeek-R1 / Qwen 2.5 Coder',
    description: 'توليد مخطط قواعد بيانات علائقية (PostgreSQL) أو غير علائقية (Firestore) مع الجداول والعلاقات المفاتيح.',
    tags: ['قواعد بيانات', 'PostgreSQL', 'Firestore', 'ERD', 'Database Schema'],
    copyCount: 2700,
    variables: [
      { key: 'db_type', label: 'نوع قاعدة البيانات', placeholder: 'مثل: PostgreSQL / Firestore', defaultValue: 'PostgreSQL' },
      { key: 'app_description', label: 'وصف التطبيق', placeholder: 'مثل: تطبيق حجز عيادات طبية وأطباء ومواعيد', defaultValue: 'تطبيق إدارة ممتلكات وإيجار عقارات مع مدفوعات شهرية' }
    ],
    promptTemplate: `أنت مهندس قواعد بيانات متخصص (Database Architect). قم بتصميم مخطط كامل لقواعد البيانات من نوع [db_type] للتطبيق التالي:
[app_description]

المطلوب:
1. تحديد الجداول الرئيسية (Tables/Collections) مع كافة الحقول وأنواعها (Data Types).
2. تحديد المفاتيح الأساسية (Primary Keys) والمفاتيح الأجنبية (Foreign Keys) والعلاقات (1-to-Many / Many-to-Many).
3. تقديم كود DDL جاهز للتشغيل مباشرة باللغة المناسبة.`
  },

  // --- 6. توليد الأوصاف البصرية (Image Generation Prompts) ---
  {
    id: 'p-midjourney-vector-logo',
    title: 'صانع الشعارات المينيمال والـ Vector للمشاريع التقنية',
    category: 'imageGen',
    categoryLabel: 'توليد الأوصاف البصرية',
    recommendedModel: 'Recraft.ai / Leonardo.ai / Ideogram',
    description: 'برومبت لتوليد شعارات حديثة، بسيطة، وبألوان متناسقة تناسب التطبيقات والمشاريع البرمجية.',
    tags: ['شعارات', 'Vector Logo', 'Logo Design', 'هوية بصرية'],
    copyCount: 4400,
    variables: [
      { key: 'brand_name', label: 'اسم المشروع أو الفكرة', placeholder: 'مثل: AI Code Assistant', defaultValue: 'CodePulse AI' },
      { key: 'symbol', label: 'الرمز المراد تجسيده', placeholder: 'مثل: نبضات قلب مدمجة مع أقواس برمجية', defaultValue: 'glowing code brackets merged with pulse wave' },
      { key: 'colors', label: 'الألوان المفضل', placeholder: 'مثل: Indigo and Electric Cyan', defaultValue: 'neon indigo and vibrant cyan on solid dark background' }
    ],
    promptTemplate: `Modern flat vector logo for [brand_name], featuring [symbol], minimalist geometric design, clean lines, [colors], high contrast, 8k resolution, graphic design style, no realistic 3d drop shadows, vector graphic format, isolated background.`
  },

  // --- 7. البرومبتات الإضافية المتقدمة (Advanced Developer Prompts) ---
  {
    id: 'p-2d-physics-movement',
    title: 'خوارزمية حركة الفيزياء والقفز في الألعاب 2D/3D (Game Physics)',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    recommendedModel: 'Claude 3.5 Sonnet / DeepSeek-R1',
    description: 'توليد خوارزميات حركة دقيقة تشمل التسارع، الاحتكاك، القفز الناعم، وحساب التصادفات لمحركات الألعاب.',
    tags: ['Godot 4', 'Unity C#', 'فيزياء ألعاب', 'حركة الكائنات'],
    copyCount: 3200,
    variables: [
      { key: 'engine', label: 'محرك الألعاب', placeholder: 'مثل: Godot 4 GDScript / Unity C#', defaultValue: 'Godot 4 GDScript' },
      { key: 'movement_type', label: 'نوع الحركة والفيزياء', placeholder: 'مثل: 2D Platformer with Jump Buffer & Coyote Time', defaultValue: 'Platformer 2D with Coyote Time & Jump Buffering' }
    ],
    promptTemplate: `أنت خبير فيزيائيات وحركة ألعاب (Game Physics Engineer). اكتب كوداً خبيراً لمسار حركة الكائنات بلغة [engine] للوظيفة التالية:
[movement_type]

المطلوب:
1. تطبيق ميكانيكية Coyote Time (السماح بالقفز لعدة أجزاء من الثانية بعد مغادرة الحافة).
2. تطبيق ميكانيكية Jump Buffering (تسجيل ضغطة زر القفز قبل اللمس الفعلي للأرض).
3. معالجة التسارع (Acceleration) والتلكؤ (Deceleration) بدلاً من الحركة اللحظية الصلبة.
4. كتابة تعليقات توضيحية لضبط القيم السرعية بسهولة.`
  },
  {
    id: 'p-cpp-to-js-converter',
    title: 'محول الأكواد الخبير من C++ إلى JavaScript / TypeScript',
    category: 'coding',
    categoryLabel: 'البرمجة وتتبع الأخطاء',
    recommendedModel: 'DeepSeek-R1 / Qwen 2.5 Coder',
    description: 'تحويل خوارزميات وهياكل البيانات المكتوبة بلغة C++ إلى كود حديث بلغة JavaScript أو TypeScript مع معالجة المؤشرات (Pointers) والمصفوفات.',
    tags: ['C++', 'TypeScript', 'تحويل كود', 'خوارزميات'],
    copyCount: 2890,
    variables: [
      { key: 'target_lang', label: 'اللغة الهدف', placeholder: 'مثل: TypeScript / Modern Node.js', defaultValue: 'TypeScript' },
      { key: 'cpp_code', label: 'كود C++ الحالي', placeholder: 'الصق كود C++ هنا...', defaultValue: '#include <iostream>\nusing namespace std;\nint main() { cout << "Hello"; return 0; }' }
    ],
    promptTemplate: `أنت مهندس أنظمة ومبرمج لغات متعددة. قم بتحويل كود C++ التالي بدقة عالية إلى كود [target_lang] حديث ونظيف:

\`\`\`cpp
[cpp_code]
\`\`\`

يرجى الاتباع:
1. استبدال المؤشرات (Pointers) وإدارة الذاكرة بالهياكل المناسبة في [target_lang].
2. تحويل الأنواع والبيانات (Data Types) إلى Typescript Types مكافئة تماماً.
3. معالجة المصفوفات والدوال المتزامنة/غير المتزامنة.
4. شرح الفرق العملياتي إن وُجد.`
  },
  {
    id: 'p-regex-generator',
    title: 'مولد الشفرات والتعبيرات النمطية المعقدة (Regex Generator & Explainer)',
    category: 'coding',
    categoryLabel: 'البرمجة وتتبع الأخطاء',
    recommendedModel: 'DeepSeek-R1 / Gemini 2.0 Flash',
    description: 'توليد تعبيرات Regular Expressions معقدة ومحمية من ثغرات ReDoS لشفرات التحقق من النصوص مع شرح كل حرف.',
    tags: ['Regex', 'RegEx Generator', 'التحقق من البيانات', 'فحص النصوص'],
    copyCount: 3950,
    variables: [
      { key: 'validation_goal', label: 'هدف التحقق أو النمط', placeholder: 'مثل: التحقق من كلمة مرور قوية / استخراج روابط URL', defaultValue: 'التحقق من رقم هاتف دولي مع رمز الدولة ومعالجة المسافات والأقواس' }
    ],
    promptTemplate: `أنت خبير التعبيرات النمطية (Regular Expressions Master). أنشئ تعبير Regex حاسم ومحسن للهدف التالي:
[validation_goal]

المطلوب:
1. تقديم ناص التعبير النمطي (Regex Pattern).
2. إعطاء شرح تفصيلي ومفكك لكل رمز وجزء داخل النمط (Breakdown).
3. تقديم 3 أمثلة لنصوص مطابقة (Valid Inputs) و 3 أمثلة لنصوص غير مطابقة (Invalid Inputs).
4. تقديم كود اختبار سريع بلغات JavaScript و Python.`
  },
  {
    id: 'p-api-mock-server-gen',
    title: 'مولد سيرفرات البيانات الوهمية (Mock API Server Code)',
    category: 'coding',
    categoryLabel: 'البرمجة وتتبع الأخطاء',
    recommendedModel: 'Claude 3.5 Sonnet / Qwen 2.5 Coder',
    description: 'توليد سيرفر Express.js كامل ببيانات وهمية واقعية باستخدام Faker.js لتسهيل تطوير واجهات الـ Frontend.',
    tags: ['Mock API', 'Express.js', 'Faker.js', 'REST API', 'Frontend Dev'],
    copyCount: 2600,
    variables: [
      { key: 'entity_name', label: 'اسم الكيان / البيانات', placeholder: 'مثل: المنتجات مع تقييمات العملاء والأسعار', defaultValue: 'مستخدمون، طلبات شراء، وسلة تسوق' }
    ],
    promptTemplate: `أنت مطور Backend خبير. قم بإنشاء سيرفر محاكي (Mock REST API Server) بلغة Node.js Express يتضمن خيارات CRUD كاملة لكيان:
[entity_name]

المطلوب:
1. توليد بيانات وهمية غنية وواقعية.
2. إضافة ميزات البحث (Search)، التصفية (Filtering)، والصفحات (Pagination).
3. إضافة تأخير محاكي للشبكة (Simulated Network Delay 300ms) لاختبار حالة التحميل (Loading state) في الـ Frontend.
4. تقديم الكود بملف واحد جاهز للتشغيل مباشرة.`
  },
  {
    id: 'p-sql-query-optimizer',
    title: 'محلل ومحسن استعلامات قواعد البيانات البطيئة (SQL Query Optimizer)',
    category: 'engineering',
    categoryLabel: 'الهندسة وتصميم النظم',
    recommendedModel: 'DeepSeek-R1 / Qwen 2.5 Coder',
    description: 'تسريع الاستعلامات البطيئة في PostgreSQL/MySQL عبر اقتراح الفهارس المناسبة (Indexes) وتجنب N+1 problem.',
    tags: ['SQL Optimization', 'PostgreSQL', 'Indexes', 'تسريع الاستعلامات'],
    copyCount: 3100,
    variables: [
      { key: 'sql_query', label: 'استعلام SQL البطيء', placeholder: 'الصق استعلام SQL هنا...', defaultValue: 'SELECT * FROM orders o JOIN users u ON o.user_id = u.id WHERE u.country = "SA" ORDER BY o.created_at DESC' }
    ],
    promptTemplate: `أنت مهندس قواعد بيانات عالي المستوى (Database Administrator). قم بتحليل وتصحيح استعلام SQL البطيء التالي:

\`\`\`sql
[sql_query]
\`\`\`

المطلوب:
1. إعادة كتابة الاستعلام بأفضل صيغة أداء ممكنة.
2. اقتراح الفهارس (Indexes) الدقيقة التي يجب إنشاؤها على الجدول مع توضيح السبب.
3. التنبيه إلى أي مشكلة معالجة مثل Full Table Scan أو N+1 Query Problem.`
  },
  {
    id: 'p-tailwind-ui-builder',
    title: 'مصمم مكونات الواجهة التفاعلية (React + Tailwind UI Component)',
    category: 'coding',
    categoryLabel: 'البرمجة وتتبع الأخطاء',
    recommendedModel: 'Claude 3.5 Sonnet / Gemini 2.0 Flash',
    description: 'توليد مكونات واجهة مستخدم ناعمة وفاخرة بلغة React TypeScript و Tailwind CSS مع حالات Hover و Focus.',
    tags: ['React', 'Tailwind CSS', 'UI Component', 'TypeScript', 'واجهات'],
    copyCount: 4800,
    variables: [
      { key: 'component_type', label: 'نوع المكون المطلوب', placeholder: 'مثل: بطاقة سعر بريميوم / جدول بيانات متفاعل', defaultValue: 'لوحة قياس أحصائيات دائرية مع بطاقات ملخص أنيقة' }
    ],
    promptTemplate: `أنت مهندس واجهات أسطوري (UI/UX Specialist). أنشئ مكون React TypeScript متكامل لـ:
[component_type]

المطلوب:
1. استخدام Tailwind CSS فقط للتنسيق، مع مظهر داكن فاخر (Dark Luxury UI).
2. إضافة تأثيرات حركية ناعمة عند الـ Hover و Focus.
3. التأكد من أن المكون تجاوبي 100% للشاشات الصغرى والكبرى (Responsive Design).
4. كتابة كود موديولاري ونظيف مع Types مكتملة.`
  },
  {
    id: 'p-python-async-scraper',
    title: 'كاشط البيانات السريع غير المتزامن (Async Python Web Scraper)',
    category: 'coding',
    categoryLabel: 'البرمجة وتتبع الأخطاء',
    recommendedModel: 'Qwen 2.5 Coder / Claude 3.5 Sonnet',
    description: 'إنشاء سكربت Python غير متزامن لاستخراج وتحليل البيانات من المواقع الكبيرة وتخزينها في ملفات JSON.',
    tags: ['Python Scraper', 'Playwright', 'Asyncio', 'كشط بيانات'],
    copyCount: 2900,
    variables: [
      { key: 'target_data', label: 'البيانات المراد كشطها', placeholder: 'مثل: أسعار المنتجات والمراجعات', defaultValue: 'عناوين وأسعار العقارات المتاحة مع الصور' }
    ],
    promptTemplate: `أنت خبير هندسة البيانات واستخراج المعلومات. اكتب سكربت Python احترافي باستخدام مكتبة BeautifulSoup أو Playwright مع Asyncio لاستخراج:
[target_data]

الشروط:
1. دعم المعالجة غير المتزامنة (Async/Await) لسرعة الأداء.
2. معالجة الحظر والأنماط المعقدة (User-Agent Rotation & Error Retries).
3. تصدير البيانات النهائية في ملف JSON منسق ونظيف.`
  },
  {
    id: 'p-shader-pixel-art-effect',
    title: 'كاتب شيدرات المؤثرات البصرية للألعاب (Godot/Unity Shaders)',
    category: 'gameDev',
    categoryLabel: 'تطوير الألعاب والـ Pixel Art',
    recommendedModel: 'Claude 3.5 Sonnet / DeepSeek-R1',
    description: 'توليد كود Shaders مخصص للتأثيرات الضوئية، المياه، التوهج النيون، والاهتزاز لمشاهد الألعاب.',
    tags: ['Shader', 'Godot Shaders', 'HLSL', 'مؤثرات بصرية', 'Pixel Art'],
    copyCount: 2400,
    variables: [
      { key: 'shader_effect', label: 'المؤثر البصري المطلوب', placeholder: 'مثل: توهج نيون عند الإصابة / تموج الماء', defaultValue: 'تأثير توهج ونبض النيون للمواد المضيئة Pixel Art Glow Effect' }
    ],
    promptTemplate: `أنت مهندس جرافيكس وشيدرات ألعاب (Graphics Shader Engineer). اكتب كود Shader مخصص لمحرك Godot أو Unity لتحقيق التأثير التالي:
[shader_effect]

المطلوب:
1. تقديم كود Shader شغال ومكتمل.
2. إتاحة متغيرات شريط التمرير (Uniforms/Properties) للتحكم في السرعة والشدة والألوان من المحرر.
3. شرح آلية عمل الحسابات الرياضية المستعملة داخل الـ Fragment/Vertex Shader.`
  }
];

