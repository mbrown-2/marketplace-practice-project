import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "./store";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  // Of the entire store, the query is only dependent on the setSearchText function.
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            setSearchText(ref.current.value);
            navigate("/");
          }
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />}></InputLeftElement>
          <Input
            ref={ref}
            borderRadius={20}
            variant="filled"
            type="string"
            placeholder="Search games..."
          ></Input>
        </InputGroup>
      </form>
    </>
  );
};
1;
