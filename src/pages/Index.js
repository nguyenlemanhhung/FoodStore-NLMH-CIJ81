import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Foods from "../components/Foods";
import CartContainer from "../components/CartContainer";
import Banner from "../components/Banner";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ButtonContact = styled(Button)({
  position: "fixed",
  bottom: "50px",
  left: "90px",
  zIndex: 100,
  "&::before": {
    content: '"1800.6936"',
    backgroundColor: "#FC6011",
    color: "#fff ",
    padding: "5px 10px",
    position: "absolute",
    left: "-113%",
    top: "50%",
    transform: "translateY(-50%)",
    borderRadius: "20px 0 0 20px",
  },
});

function HomePage() {
  const theme = useTheme();
  return (
    <Box>
      <Banner />
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
            <Foods />
          </Box>
          <CartContainer />
        </Box>
      </Container>
      <ButtonContact>
        <img
          style={{ width: "50px" }}
          src={require("../assets/icons/support.png")}
        />
      </ButtonContact>
    </Box>
  );
}

export default HomePage;
