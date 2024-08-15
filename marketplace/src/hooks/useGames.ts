
import { useInfiniteQuery } from "@tanstack/react-query";
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

  // Key difference (useQuery vs useInfinteQuery)
  // useQuery --> queryKey, queryFn
  // Infinite --> require pages (every load of new data is an additional frame from a list of records)
  const useGames = (userQuery: UserQuery) =>
    useInfiniteQuery<FetchResponse<Game>, Error>({
      queryKey: ["games", userQuery],
      queryFn: ({ pageParam = 1 }) => 
        connection.getAll({
          params: {
            genres: userQuery.genre?.id, 
            parent_platforms: userQuery.platform?.id,
            ordering: userQuery.sortOrder,
            search: userQuery.searchText,
            page: pageParam
          },
        }),
        // called to compute the next page number
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
      },
      initialPageParam: 1,
      staleTime: 24 * 60 * 60 * 1000 // 24h
    })

export default useGames;