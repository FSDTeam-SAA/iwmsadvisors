export interface FAQItem {
  _id: string;
  question: string;
  answer: string;
  __v?: number;
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
  data: FAQItem[];
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
  data: FAQItem;
}
