import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Fab from "@mui/material/Fab";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Tooltip from "@mui/material/Tooltip";

function Layout() {
  return (
    <>
      <Header />
      <main style={{ background: "#faf9fb" }}>
        <Outlet />
      </main>
      <Footer />
      <Tooltip
        title="Back to top"
        placement="left"
        arrow
        sx={{ backgroundColor: "#FC6011" }}
      >
        <Fab
          size="small"
          color="secondary"
          sx={{
            position: "fixed",
            right: "10px",
            bottom: "20px",
            backgroundColor: "#FC6011",
            "&:hover": {
              backgroundColor: "#fff",
              border: "2px solid #FC6011",
              color: "#FC6011",
            },
          }}
        >
          <KeyboardDoubleArrowUpIcon />
        </Fab>
      </Tooltip>
    </>
  );
}

export default Layout;
