import APIClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Screenshot } from '../entities/Screenshot';


const useScreenshots = (gameId: number) => {
    const connection = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: connection.getAll,
    staleTime: ms("24hrs")
})
}

export default useScreenshots;