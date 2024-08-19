import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../Components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  // Differentiate between program and endpoint errors
  const isRouteError = isRouteErrorResponse(error);
  return (
    <>
      <Box padding={5}>
        <NavBar />
        <Heading>Oops...</Heading>
        {isRouteError ? (
          <Text>This page does not exist.</Text>
        ) : (
          <Text>Sorry, an unexpected error has occurred.</Text>
        )}
      </Box>
    </>
  );
};

export default ErrorPage;
