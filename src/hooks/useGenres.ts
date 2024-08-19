import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";
import Genre from "../entities/Genre";

const connection = new APIClient<Genre>("/genres");

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: connection.getAll,
    staleTime: ms("24hrs"),
    initialData: genres
});

export default useGenres;