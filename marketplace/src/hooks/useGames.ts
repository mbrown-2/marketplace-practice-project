import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
    rating: number;
    ratings_count: number;
    parent_platforms: { platform: Platform }[];
  }
  
  interface FetchGamesResponse {
    id: number;
    count: number;
    next: string;
    previous: string;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
      
    // Use EffectHook to call upon first render to make GET request
    useEffect(() => {
        const controller = new AbortController();
      apiClient
        .get<FetchGamesResponse>("/games", { signal: controller.signal })
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
        });
      return () => controller.abort();
    }, []);
    return { games, error };
};

export default useGames;