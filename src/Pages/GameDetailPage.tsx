import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { SimpleGrid, Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../Components/ExpandableText";
import DefinitionItem from "../Components/DefinitionItem";
import CriticScore from "../Components/CriticScore";

const GameDetailPage = () => {
  // Destructure the params, retrieve "slug" from query.
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  // In Typescript, using "!" forces compiler to know this will never be null.
  // Note: ![var] != [var]!

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText text={game.description_raw} />
      <SimpleGrid columns={2} as={"dl"}>
        <DefinitionItem term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Metascore">
          <CriticScore
            score={game.metacritic}
            numReviews={game.ratings_count}
          />
        </DefinitionItem>
        <DefinitionItem term="Genres">
          {game.genres?.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Publishers">
          {game.publishers?.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
