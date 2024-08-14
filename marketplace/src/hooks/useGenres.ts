import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import apiClient from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 1 day,
    initialData: { count: genres.length, results: genres }
});

export default useGenres;