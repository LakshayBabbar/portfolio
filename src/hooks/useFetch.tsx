import { useState, useCallback } from "react";

type FetchResponse<T> = {
  data: T | null;
  error: string | null;
  fetchData: (url: string, method: string) => void;
  loading: boolean;
};

function useFetch<T>(): FetchResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async (url: string, method: string = "GET") => {
    setLoading(true);
    try {
      const response = await fetch(url, { method });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  return { data, error, fetchData, loading };
}

export default useFetch;
