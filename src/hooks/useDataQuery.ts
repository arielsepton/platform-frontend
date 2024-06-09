import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { useFetch } from "./useFetch";
import { FetchResponse } from "@models/response/response";

export function useDataQuery(
  url: string,
  options: UseQueryOptions<FetchResponse, Error, FetchResponse>,
  headers?: HeadersInit
): UseQueryResult<FetchResponse> {
  const { fetchInstance } = useFetch();

  return useQuery<FetchResponse>({
    ...options,
    queryKey: options?.queryKey,
    queryFn: () => fetchInstance.get(url, headers),
  });
}
