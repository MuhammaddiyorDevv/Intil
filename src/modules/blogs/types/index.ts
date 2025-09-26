export interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  authorAvatar?: string;
  publishedAt: string;
  category: BlogCategory;
  tags: string[];
  imageUrl?: string;
  readTime: number; // in minutes
  views: number;
  likes: number;
  isPopular: boolean;
  isScientific: boolean;
}

export type BlogCategory = 'all' | 'popular' | 'latest' | 'scientific';

export interface BlogFilters {
  category: BlogCategory;
  search?: string;
  page: number;
  limit: number;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface BlogResponse {
  blogs: Blog[];
  pagination: PaginationInfo;
}
