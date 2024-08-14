import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import genres from "../data/genres";
import apiClient from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

// Initial implementation: loading "snapshot" of data, instead of live HTTP connection.
// const useGenres = () => ({data: genres, isLoading: false, error: null});

// considered: useData<Genre>("/genres"),
// Not good: useData is a generic implementation of a state hook for interacting with the HTTP endpoint
// Instead:  access HTTP endpoint directly via useQuery, not useQuery --> hook --> HTTP

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 1 day,
    initialData: { count: genres.length, results: genres }
});

export default useGenres;