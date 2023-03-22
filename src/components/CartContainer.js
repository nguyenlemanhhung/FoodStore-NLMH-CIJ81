import React from "react";
import Box from "@mui/material/Box";
import OrderingSteps from "./ordering-steps/OrderingSteps";

function CartContainer() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "350px",
        position: "fixed",
        right: "0",
        height: "calc(100vh - 70px)",
        padding: "30px 10px",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        zIndex: "100",
      }}
    >
      <OrderingSteps />
    </Box>
  );
}

export default CartContainer;
