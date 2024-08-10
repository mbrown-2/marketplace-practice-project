import { HStack, Image } from "@chakra-ui/react";
import SiteLogo from "../assets/site-logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchBar } from "./SearchBar";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="15px">
      <Image src={SiteLogo} boxSize="100px" />
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
