import { HStack, Image, Text } from "@chakra-ui/react";
import SiteLogo from "../assets/site-logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchBar } from "./SearchBar";

const NavBar = () => {
  return (
    <HStack padding="15px">
      <Image src={SiteLogo} boxSize="100px" />
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
