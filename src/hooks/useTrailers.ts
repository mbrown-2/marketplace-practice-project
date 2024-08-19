import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import Trailer from "../entities/Trailer";



const useTrailers = (gameId: number) => { 
    const connection = new APIClient<Trailer>(`/games/${gameId}/movies`);

    return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: connection.getAll,
    staleTime: ms("24hrs")
})
};

export default useTrailers;