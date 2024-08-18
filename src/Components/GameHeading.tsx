import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "./store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.userQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.userQuery.platformId);
  const platform = usePlatform(platformId);

  // heading re-renders based on: name of genre, name of platform

  return (
    <>
      <Heading as="h1" marginY={5}>
        {genre?.name || ""} {platform?.name || ""} Games
      </Heading>
    </>
  );
};

export default GameHeading;

/* Naming format: [Genre] [Platform] Games */
