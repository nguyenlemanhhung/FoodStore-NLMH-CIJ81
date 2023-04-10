import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function ButtonScrollTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <Tooltip
      title="Back to top"
      placement="left"
      arrow
      sx={{ backgroundColor: "#FC6011" }}
    >
      <Fab
        onClick={scrollToTop}
        size="small"
        color="secondary"
        sx={{
          display: visible ? "inline" : "none",
          position: "fixed",
          right: "10px",
          bottom: "60px",
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
  );
}

export default ButtonScrollTop;
