import { useQuery } from "@tanstack/react-query";
import { UserQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const connection = new APIClient<Game>("/games");

export interface Game {
    id: number;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    metacritic: number;
    ratings_count: number;
    parent_platforms: { platform: Platform }[] | null;
    ordering: string;
    rating_top: number;   // whole
    rating: number;       // floating
  }


  const useGames = (userQuery: UserQuery) => useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", userQuery],
    queryFn: () => connection.getAll({
      params: {
        genres: userQuery.genre?.id, 
        parent_platforms: userQuery.platform?.id,
        ordering: userQuery.sortOrder,
        search: userQuery.searchText
      }})
  })

export default useGames;