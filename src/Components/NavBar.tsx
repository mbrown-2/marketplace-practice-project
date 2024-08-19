import { HStack, Image } from "@chakra-ui/react";
import SiteLogo from "../assets/site-logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="15px">
      <Link to="/">
        <Image src={SiteLogo} objectFit={"cover"} boxSize="60px" />
      </Link>
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
