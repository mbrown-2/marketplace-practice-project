import { Heading } from "@chakra-ui/react";
import { UserQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  userQuery: UserQuery;
}

const GameHeading = ({ userQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = useGenre(userQuery.genreId);

  const platform = usePlatform(userQuery.platformId);

  return (
    <>
      <Heading as="h1" marginY={5}>
        {genre?.name || ""} {platform?.name || ""} Games
      </Heading>
    </>
  );
};

export default GameHeading;

/* [Genre] [Platform] Games */
