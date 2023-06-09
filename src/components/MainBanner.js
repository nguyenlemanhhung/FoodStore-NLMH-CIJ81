import React from "react";
import Box from "@mui/material/Box";
import OverlayBanner from "../assets/image/overlay-banner.png";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function MainBanner() {
  return (
    <Box
      sx={{
        padding: "20px",
        margin: "20px 0",
        position: "relative",
        backgroundImage: `url(${OverlayBanner})`,
        backgroundColor: "#054f7a",
        borderRadius: "20px",
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={7}>
          <Typography
            sx={{
              fontSize: "24px",
              color: "#fff",
              fontWeight: 600,
              marginBottom: "30px",
            }}
          >
            Order Food and <br /> Get Discount Up To
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            50%
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          sx={{
            textAlign: "center",
          }}
        >
          <img
            style={{
              width: "100%",
            }}
            src={require("../assets/image/hero-banner.png")}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainBanner;
