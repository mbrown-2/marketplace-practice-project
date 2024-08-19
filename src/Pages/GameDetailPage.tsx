import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../Components/ExpandableText";
import DefinitionItem from "../Components/DefinitionItem";
import CriticScore from "../Components/CriticScore";
import GameAttributes from "../Components/GameAttributes";

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
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
