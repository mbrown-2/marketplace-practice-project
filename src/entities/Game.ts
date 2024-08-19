import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";


export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  released: string;
  tba: boolean;
  background_image: string;
  metacritic: number;
  ratings_count: number;
  parent_platforms: { platform: Platform; }[] | null;
  ordering: string;
  rating_top: number; // whole
  rating: number; // floating
}
