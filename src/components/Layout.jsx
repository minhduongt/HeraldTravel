import { BrowserRouter } from "react-router-dom";

import { Box, Container } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }, props) => {
  return (
    // <Container sx={{ maxWidth: "4xl" }}>
    <Box>
      <Navbar />

      {children}
      <ScrollToTop />
      <Footer />
    </Box>
    // </Container>
  );
};

export default Layout;
