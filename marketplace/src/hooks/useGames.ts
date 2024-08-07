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
  }
  
const useGames = () => {
  return useData<Game>("/games");
}

export default useGames;