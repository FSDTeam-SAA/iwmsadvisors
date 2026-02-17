export interface BlogImage {
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url?: string;
  path?: string;
}

export interface Blog {
  _id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: BlogImage;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface BlogResponse {
  success: boolean;
  message: string;
  data: Blog[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
