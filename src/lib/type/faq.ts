export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  _id: string;
  title: string;
  subtitle: string;
  items: FAQItem[];
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface FAQResponse {
  success: boolean;
  message: string;
  data: FAQCategory[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SingleFAQResponse {
  success: boolean;
  message: string;
  data: FAQCategory;
}
