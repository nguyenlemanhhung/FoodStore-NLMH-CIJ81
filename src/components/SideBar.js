import React from "react";
import Box from "@mui/material/Box";
import OrderingSteps from "./ordering-steps/OrderingSteps";
import { useTheme } from "@mui/material/styles";

function SideBar() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        // backgroundColor: "#ceecff",
        width: "350px",
        position: "sticky",
        right: "0",
        top: "0",
        height: "100vh",
        // padding: "20px 10px",
        // borderRadius: "10px",
        // boxShadow:
        //   "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        zIndex: "100",
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      }}
    >
      <OrderingSteps />
    </Box>
  );
}

export default SideBar;
