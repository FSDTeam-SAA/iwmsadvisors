export interface CaseStudyImage {
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url?: string;
  path?: string;
}

export interface CaseStudy {
  _id: string;
  title: string;
  description: string;
  image: CaseStudyImage;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CaseStudyResponse {
  success: boolean;
  message: string;
  data: CaseStudy[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
