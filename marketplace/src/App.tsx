import { Button, HStack, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./Components/SortSelector";

// Where previous state hook variables/functions ( i.e. selectedGenre, selectedPlatform) have been encapsulated into.
// All-purpose interface for handling user actions between app and appropriate calls to API.
export interface UserQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  // Create generic
  const [selectionQuery, setSelectionQuery] = useState<UserQuery>(
    {} as UserQuery
  );

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
          <NavBar
            onSearch={(searchText) =>
              setSelectionQuery({ ...selectionQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              highlightedGenre={selectionQuery.genre}
              onSelectGenre={(genre) =>
                setSelectionQuery({ ...selectionQuery, genre })
              }
            />
          </GridItem>
        </Show>
        <GridItem area={"main"} bg="#2F4F4F" textColor="white">
          <HStack spacing={5} margin={2}>
            <PlatformSelector
              selectedPlatform={selectionQuery.platform}
              onSelectPlatform={(platform) =>
                setSelectionQuery({ ...selectionQuery, platform })
              }
            />
            <SortSelector
              sortOrder={selectionQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setSelectionQuery({ ...selectionQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid userSelection={selectionQuery} />
        </GridItem>
      </Grid>

      <Button colorScheme="blue">Button</Button>
    </>
  );
}

export default App;
