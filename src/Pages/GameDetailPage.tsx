import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  // Destructure the params, retrieve "slug" from query.
  const { slug } = useParams();
  const { data: gameDetails, isLoading, error } = useGame(slug!);
  // In Typescript, using "!" forces compiler to know this will never be null.
  // Note: ![var] != [var]!

  if (isLoading) return <Spinner />;
  if (error || !gameDetails) throw error;

  return (
    <>
      <Heading>{gameDetails.name}</Heading>
      <Text>{gameDetails.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
