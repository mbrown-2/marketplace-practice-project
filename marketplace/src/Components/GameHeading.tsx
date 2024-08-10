import { Heading } from "@chakra-ui/react";
import { UserQuery } from "../App";

interface Props {
  userQuery: UserQuery;
}

const GameHeading = ({ userQuery }: Props) => {
  return (
    <>
      <Heading as="h1" marginY={5}>
        {userQuery.genre?.name || ""} {userQuery.platform?.name || ""} Games
      </Heading>
    </>
  );
};

export default GameHeading;

/* [Genre] [Platform] Games */
