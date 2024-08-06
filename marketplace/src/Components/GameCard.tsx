import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={15} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <Text>Release date: {game.released}</Text>
          <Text>
            Rating: {game.rating}/5 (<i>{game.ratings_count} Reviews</i>)
          </Text>
          <PlatformIconList
            platforms={game.parent_platforms.map((pf) => pf.platform)}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
