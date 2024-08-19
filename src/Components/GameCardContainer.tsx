import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <>
      <Box
        borderRadius={15}
        overflow="hidden"
        width="100%"
        transition="transform 0.3s ease-in-out"
        _hover={{
          transform: "scale(1.05)", // Slightly increase size on hover
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default GameCardContainer;
