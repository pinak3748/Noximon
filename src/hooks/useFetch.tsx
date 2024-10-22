import { useEffect, useState } from 'react';

type FetchFunction<T> = () => Promise<{ result: T }>;

interface FetchDataResult<T> {
  data: T | null;
  isLoading: boolean;
  isSuccess: boolean;
  error: Error | null;
}

function useFetchData<T>(fetchFunction: FetchFunction<T>): FetchDataResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { result } = await fetchFunction();
        setData(result);
        setSuccess(true);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('An unknown error occurred'));
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [fetchFunction]);

  return { data, isLoading, isSuccess, error };
}

export default function useFetch<T>(fetchFunction: FetchFunction<T>) {
  const { data, isLoading, isSuccess, error } = useFetchData<T>(fetchFunction);

  return { result: data, isLoading, isSuccess, error };
}
