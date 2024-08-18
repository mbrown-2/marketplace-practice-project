import { Box, HStack, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import PlatformSelector from "./Components/PlatformSelector";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";

function App() {
  // Create generic
  // const [] = useGameQueryStore();

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
          lg: "250px 1fr", // Where "1fr" will stretch to take rest of All-200px pixels
          xl: "250px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={2}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box padding={2}>
            <GameHeading />
            <HStack>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
