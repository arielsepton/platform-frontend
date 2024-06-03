import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useState } from "react";
import { useFetch } from "src/hooks/useFetch";

export interface MutateInstance<T> {
  post: UseMutationResult<Response, string, T, unknown>;
  put: UseMutationResult<Response, string, T, unknown>;
  delete: UseMutationResult<Response, string, T, unknown>;
}

export function useDataMutation<T>(
  url: string,
  headers?: HeadersInit
): {
  mutateInstance: MutateInstance<T>;
} {
  const { fetchInstance } = useFetch();

  const [mutateInstance] = useState<MutateInstance<T>>({
    post: useMutation<Response, string, T, unknown>({
      mutationFn: (variables: T) =>
        fetchInstance.post(url, JSON.stringify(variables), headers),
    }),
    put: useMutation<Response, string, T, unknown>({
      mutationFn: (variables: T) =>
        fetchInstance.put(url, JSON.stringify(variables), headers),
    }),
    delete: useMutation<Response, string, T, unknown>({
      mutationFn: () => fetchInstance.delete(url, headers),
    }),
  });

  return { mutateInstance: mutateInstance };
}
