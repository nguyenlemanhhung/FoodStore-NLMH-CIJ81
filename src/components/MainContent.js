import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Foods from "./Foods";
import MainHeader from "./MainHeader";
import MainBanner from "./MainBanner";

function MainContent() {
  const theme = useTheme();
  const [searchText, setSearchText] = useState();
  const handleSearch = (value) => {
    setSearchText(value);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          width: "calc(100% - 350px)",
          backgroundColor: "#ceecff",
          borderRadius: "10px",
          marginRight: "10px",
          [theme.breakpoints.down("md")]: {
            marginRight: 0,
            width: "100%",
          },
        }}
      >
        <Box sx={{ padding: "20px 20px 50px 20px" }}>
          <MainHeader handleSearch={handleSearch} />
          <MainBanner />
          <Foods searchText={searchText} />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default MainContent;
