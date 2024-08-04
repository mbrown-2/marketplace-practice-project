import { HStack, Image, Text } from "@chakra-ui/react";
import SiteLogo from "../assets/site-logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={SiteLogo} boxSize="100px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
