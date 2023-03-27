import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Foods from "../components/Foods";
import CartContainer from "../components/CartContainer";
import Banner from "../components/Banner";
import { useTheme } from "@mui/material/styles";

function HomePage() {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: "20px",
        paddingBottom: "20px",
        position: "relative",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "calc(100% - 350px)",
            paddingRight: "20px",
            [theme.breakpoints.down("md")]: {
              paddingRight: "0",
              width: "100%",
            },
          }}
        >
          <Banner />
          <Foods />
        </Box>
        <CartContainer />
      </Box>
    </Container>
  );
}

export default HomePage;
