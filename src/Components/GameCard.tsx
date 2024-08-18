import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl" marginBottom={2}>
            {game.name}
          </Heading>
          <Text as="i">Release date: {game.released}</Text>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms?.map((pf) => pf.platform) || []}
            />
            <CriticScore
              score={game.metacritic}
              numReviews={game.ratings_count}
            />
          </HStack>
          <Emoji rating={game.rating_top} />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
