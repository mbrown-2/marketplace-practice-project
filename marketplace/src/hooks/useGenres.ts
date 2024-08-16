import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";

const connection = new APIClient<Genre>("/genres");

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: connection.getAll,
    staleTime: ms("24hrs"),
    initialData: genres
});

export default useGenres;