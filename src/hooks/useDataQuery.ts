import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useFetch } from "./useFetch";

export function useDataQuery(
  queryKey: string | string[],
  url: string,
  headers?: HeadersInit
): UseQueryResult<Response> {
  const { fetchInstance } = useFetch();

  const key = Array.isArray(queryKey) ? queryKey : [queryKey];
  return useQuery<Response>({
    queryKey: key,
    queryFn: () => fetchInstance.get(url, headers),
  });
}
