import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";
import Platform from "../entities/Platform";

const connection = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: connection.getAll,
    staleTime: ms("24hrs"),
    initialData: platforms
});

export default usePlatforms;