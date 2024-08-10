import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          borderRadius={20}
          variant="filled"
          type="string"
          placeholder="Search games..."
        ></Input>
      </InputGroup>
    </>
  );
};
