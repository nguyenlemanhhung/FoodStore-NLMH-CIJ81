import React from "react";
import Box from "@mui/material/Box";

function MainBanner() {
  return (
    <Box sx={{ margin: "20px 0" }}>
      <img
        style={{ width: "200px" }}
        src={require("../assets/image/shipping3.jpeg")}
      />
    </Box>
  );
}

export default MainBanner;
