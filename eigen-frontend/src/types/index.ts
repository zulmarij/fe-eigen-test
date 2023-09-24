export interface UseFetchProps {
  endpoint: string;
  query: Record<string, string>;
}
export interface ApiResponse<T> {
  error: Error | null;
  isLoading: boolean;
  data: T | null;
}

export interface NewsArticle {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export type NewsApiResponse = NewsApiResponseSuccess | NewsApiResponseError;

export interface NewsApiResponseSuccess {
  status: "ok";
  totalResults: number;
  articles: NewsArticle[];
}

export interface NewsApiResponseError {
  status: "error";
  code: string;
  message: string;
}