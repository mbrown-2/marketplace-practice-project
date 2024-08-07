import useData from "./useData";
import { Genre } from "./useGenres";

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
  
const useGames = (selectedGenre: Genre | null) => {
  return useData<Game>("/games", { params: { genres: selectedGenre?.id }}, [selectedGenre?.id]);
}

export default useGames;