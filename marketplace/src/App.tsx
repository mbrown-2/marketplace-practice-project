import { Box, HStack, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";

// Where previous state hook variables/functions ( i.e. selectedGenre, selectedPlatform) have been encapsulated into.
// All-purpose interface for handling user actions between app and appropriate calls to API.
export interface UserQuery {
  genreId?: number; // old implementation: genre: Genre | null;
  platformId?: number; // old implementation: platform: Platform | null;
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
          lg: "250px 1fr", // Where "1fr" will stretch to take rest of All-200px pixels
          xl: "250px 1fr",
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
          <GridItem area={"aside"} paddingX={2}>
            <GenreList
              selectedGenreId={selectionQuery.genreId}
              onSelectGenre={(genre) =>
                setSelectionQuery({ ...selectionQuery, genreId: genre.id })
              }
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box padding={2}>
            <GameHeading userQuery={selectionQuery} />
            <HStack>
              <PlatformSelector
                selectedPlatformId={selectionQuery.platformId}
                onSelectPlatform={(platform) =>
                  setSelectionQuery({
                    ...selectionQuery,
                    platformId: platform.id,
                  })
                }
              />
              <SortSelector
                sortOrder={selectionQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setSelectionQuery({ ...selectionQuery, sortOrder })
                }
              />
            </HStack>
          </Box>
          <GameGrid userSelection={selectionQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
