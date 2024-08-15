import { useQuery } from "@tanstack/react-query";
import { UserQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";


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
    queryFn: () => apiClient.get<FetchResponse<Game>>("/games", {
      params: {
        genres: userQuery.genre?.id, 
        parent_platforms: userQuery.platform?.id,
        ordering: userQuery.sortOrder,
        search: userQuery.searchText
      }
    }).then(res => res.data),
  })

export default useGames;