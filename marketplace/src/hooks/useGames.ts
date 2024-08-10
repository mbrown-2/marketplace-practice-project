import { UserQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
    id: number;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    metacritic: number;
    ratings_count: number;
    parent_platforms: { platform: Platform }[];
    ordering: string;
  }
  
const useGames = (userQuery: UserQuery) => {
  return useData<Game>("/games", { 
    params: { 
      genres: userQuery.genre?.id, 
      platforms: userQuery.platform?.id,
      ordering: userQuery.sortOrder,
      search: userQuery.searchText
    }
  }, 
  [userQuery.genre?.id, userQuery.platform?.id, userQuery.sortOrder, userQuery.searchText]);
}

export default useGames;