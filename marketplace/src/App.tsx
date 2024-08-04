import { Button, ButtonGroup, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          // Define layouts based on screen size (i.e. mobile vs. PC)
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"} bg="Cornsilk">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg="DimGray" textColor="white">
            Aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg="#2F4F4F" textColor="white">
          Main
        </GridItem>
      </Grid>

      <Button colorScheme="blue">Button</Button>
    </>
  );
}

export default App;
