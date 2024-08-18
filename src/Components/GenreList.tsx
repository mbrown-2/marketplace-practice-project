import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();

  // Can be removed after shfiting to static data.
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginX={2}>
        Genres
      </Heading>
      <List paddingY={5}>
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={"cover"}
                boxSize={10}
                borderRadius={10}
                overflow={"hidden"}
                margin={2}
              />
              <Button
                textAlign={"left"}
                whiteSpace={"normal"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
