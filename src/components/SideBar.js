import React from "react";
import Box from "@mui/material/Box";
import OrderingSteps from "./ordering-steps/OrderingSteps";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";

function SideBar({ toggleDrawer }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        width: "350px",
        position: "sticky",
        right: "0",
        top: "0",
        height: "100vh",
        zIndex: "10",
        [theme.breakpoints.down("md")]: {
          display: "block",
          margin: "10px",
        },
      }}
    >
      {!isDesktop ? (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: "absolute",
            top: "5px",
            left: "5px",
            color: "#000",
            zIndex: 10,
            padding: 0,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
      <OrderingSteps />
    </Box>
  );
}

export default SideBar;
