import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const topBarContents = [
  {
    imgSrc: require("../assets/icons/location.webp"),
    text: "154 Cửa hàng khắp cả nước",
  },
  {
    imgSrc: require("../assets/icons/phone.webp"),
    text: "Đặt hàng: 1800.6936",
  },
  {
    imgSrc: require("../assets/icons/time-clock.png"),
    text: "Monday-Sunday: 8h - 22h",
  },
  {
    imgSrc: require("../assets/icons/shipping.webp"),
    text: "Freeship từ 50.000vnd",
  },
];
const Item = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function TopBar() {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "rgba(255,255,255, 0.5)" }}>
      <Box sx={{ width: "100%", padding: "10px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {topBarContents.map((item, index) => {
            return (
              <Grid item xs={6} md={3}>
                <Item key={index}>
                  <img
                    style={{
                      height: "18px",
                      marginRight: "10px",
                    }}
                    src={item.imgSrc}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#00000099",
                      fontSize: "14px",
                      "&:hover": {
                        color: "#ea8025",
                      },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}

export default TopBar;
