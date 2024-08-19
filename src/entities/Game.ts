import { Platform } from "./Platform";


export interface Game {
  id: number;
  name: string;
  slug: string;
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
