import { Button, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

// Initial NavBar background: bg="Cornsilk"

function App() {
  // Need to bridge onClick in GenreList with App component...
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <Grid
        templateAreas={{
          // Define layouts based on screen size (i.e. mobile vs. PC)
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          // Base scenario: one column, vs. two for larger device screens
          base: "1fr", // "1 fraction" --> takes all space
          lg: "220px 1fr", // Where "1fr" will stretch to take rest of All-200px pixels
          xl: "220px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area={"main"} bg="#2F4F4F" textColor="white">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>

      <Button colorScheme="blue">Button</Button>
    </>
  );
}

export default App;
