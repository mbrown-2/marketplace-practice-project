import { HStack, Image } from "@chakra-ui/react";
import SiteLogo from "../assets/site-logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchBar } from "./SearchBar";

const NavBar = () => {
  return (
    <HStack padding="15px">
      <Image src={SiteLogo} objectFit={"cover"} boxSize="100px" />
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
