import {
  useQuery,
  UseQueryResult,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

async function fetchHttp<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...options,
  });

  if (response.ok) {
    return (await response.json()) as T;
  } else {
    throw new Error("Error message not found.");
  }
}

export function useFetchQuery<T>(
  key: string,
  url: string,
  options?: RequestInit
): UseQueryResult<T> {
  const queryFn: () => Promise<T> = () => fetchHttp<T>(url, options);
  return useQuery<T>({ queryKey: [key], queryFn });
}

export function useFetchMutation<V, T>(
  url: string,
  key: string,
  options?: RequestInit
): UseMutationResult<T, Error, V, unknown> {
  const queryClient = useQueryClient();

  const mutationFn = (variables: V) =>
    fetchHttp<T>(url, {
      ...options,
      body: JSON.stringify(variables),
    });

  return useMutation<T, Error, V, unknown>({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
}
