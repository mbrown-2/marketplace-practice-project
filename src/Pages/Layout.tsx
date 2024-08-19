import { Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

// Where we define the organization of each of our app's pages.
// For example: a navbar should always be at the top.
// Hence, NavBar is static, whereas contents beneath are not (Outlet used).
const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
