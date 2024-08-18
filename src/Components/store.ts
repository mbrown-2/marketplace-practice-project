import { create } from "Zustand";

interface UserQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}

interface GameQueryStore {
    userQuery: UserQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    userQuery: {},
    setSearchText: (searchText) => set(() => ({userQuery : {searchText}})),
    setGenreId: (genreId) => set(store => ({userQuery : {...store.userQuery, genreId}})),
    setPlatformId: (platformId) => set(store =>  ({ userQuery: {...store.userQuery, platformId}})),
    setSortOrder: (sortOrder) => set(store => ({userQuery: {...store.userQuery, sortOrder}}))
}));

// search text will reset rest of parameters for filtering
// hense, no use of store as we are not storing previous params to query

export default useGameQueryStore;