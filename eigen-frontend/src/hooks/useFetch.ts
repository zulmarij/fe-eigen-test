/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  ApiResponse,
  NewsApiResponse,
  NewsArticle,
} from "../types";

const newsApiUrl = process.env.REACT_APP_NEWS_API_URL as string;
const newsApiKey = process.env.REACT_APP_NEWS_API_KEY as string;

const useFetch = (
  endpoint: string,
  query: { [key: string]: string }
): ApiResponse<NewsArticle[]> => {
  const [data, setData] = useState<NewsArticle[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const params = new URLSearchParams();
  for (const key in query) {
    params.append(key, query[key]);
  }
  params.append("apiKey", newsApiKey);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${newsApiUrl}/${endpoint}?${params.toString()}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result: NewsApiResponse = await response.json();

      if (result.status === "ok") {
        setData(result.articles);
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("An unexpected error occurred")
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(query)]);

  return { error, isLoading, data };
};

export default useFetch;
