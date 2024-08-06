import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={15} overflow="hidden">
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <Text>Release date: {game.released}</Text>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((pf) => pf.platform)}
            />
            <CriticScore
              score={game.metacritic}
              numReviews={game.ratings_count}
            />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
