import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Foods from "./Foods";
import MainHeader from "./MainHeader";
import MainBanner from "./MainBanner";

function MainContent() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "calc(100% - 350px)",
        padding: "20px 20px 50px 20px",
        backgroundColor: "#ceecff",
        borderRadius: "10px",
        marginRight: "20px",
        [theme.breakpoints.down("md")]: {
          marginRight: 0,
          width: "100%",
        },
      }}
    >
      <MainHeader />
      <MainBanner />
      <Foods />
    </Box>
  );
}

export default MainContent;
