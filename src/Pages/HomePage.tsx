import { Grid, Show, GridItem, Box, HStack } from "@chakra-ui/react";
import GameGrid from "../Components/GameGrid";
import GameHeading from "../Components/GameHeading";
import GenreList from "../Components/GenreList";
import PlatformSelector from "../Components/PlatformSelector";
import SortSelector from "../Components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        // Define layouts based on screen size (i.e. mobile vs. PC)
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        // Base scenario: one column, vs. two for larger device screens
        base: "1fr", // "1 fraction" --> takes all space
        lg: "250px 1fr", // Where "1fr" will stretch to take rest of All-200px pixels
        xl: "250px 1fr",
      }}
    >
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
  );
};

export default HomePage;
