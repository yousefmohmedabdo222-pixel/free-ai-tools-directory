export type ToolCategory = 
  | 'all'
  | 'developers' 
  | 'gameDev' 
  | 'textGen' 
  | 'localModels' 
  | 'imageGen' 
  | 'voiceAudio';

export type PricingBadge = 'مجاني 100%' | 'خطة مجانية سخية' | 'مفتوح المصدر';

export interface ToolDetailedGuide {
  overview: string;           // ما هي الأداة
  whatItDoes: string;         // ماذا تفعل
  pros: string[];             // المميزات
  cons: string[];             // العيوب
  howToUse: string[];         // كيف تستخدمها
  practicalExamples: string;  // أمثلة عملية
  alternatives: string[];     // البدائل
}

export interface AITool {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  detailedGuide?: ToolDetailedGuide;
  category: ToolCategory;
  categoryLabel: string;
  iconName: string;
  pricingType: PricingBadge;
  rating: number;
  directUrl: string;
  tags: string[];
  freeFeatures: string[];
  featured?: boolean;
  popularityCount: number;
  addedDate?: string;
}

export type PromptCategory = 
  | 'coding' 
  | 'gameDev' 
  | 'academic' 
  | 'summarization' 
  | 'engineering' 
  | 'imageGen';

export interface PromptVariable {
  key: string;
  label: string;
  placeholder: string;
  defaultValue: string;
}

export interface AIPrompt {
  id: string;
  title: string;
  category: PromptCategory;
  categoryLabel: string;
  promptTemplate: string;
  variables: PromptVariable[];
  recommendedModel: string;
  copyCount: number;
  tags: string[];
  description: string;
}

export interface AIModelSpec {
  id: string;
  name: string;
  nameEn?: string;
  provider: string;
  releaseYear: string;
  contextWindow: string;
  parameterCount?: string;
  architecture?: string;
  modelType?: 'reasoning' | 'coding' | 'multimodal' | 'open-source' | 'general';
  freeDailyTier: string;
  speedRating: number; // 1-10
  codingRating: number; // 1-10
  arabicRating: number; // 1-10
  reasoningRating?: number; // 1-10
  visionAudioSupport?: string;
  strengths: string[];
  limitations: string[];
  bestUseCases: string;
  freeAccessUrl: string;
  badge?: string;
}

export interface UserSubmission {
  type: 'tool' | 'prompt';
  name: string;
  urlOrText: string;
  category: string;
  description: string;
  contactEmail?: string;
}

export type LegalPageType = 'privacy' | 'terms' | 'about' | 'contact';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  contentHtml: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  coverImage?: string;
  tags: string[];
}
