import { HStack, Image, Text } from "@chakra-ui/react";
import SiteLogo from "../assets/site-logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <Image src={SiteLogo} boxSize="100px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
