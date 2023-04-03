import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const topBarContents = [
  {
    imgSrc: require("../../assets/icons/location.webp"),
    text: "154 Cửa hàng khắp cả nước",
  },
  {
    imgSrc: require("../../assets/icons/phone.webp"),
    text: "Đặt hàng: 1800.6936",
  },
  {
    imgSrc: require("../../assets/icons/shipping.webp"),
    text: "Freeship từ 50.000vnd",
  },
];

function TopBar() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0",
        }}
      >
        {topBarContents.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  height: "20px",
                  marginRight: "10px",
                }}
                src={item.imgSrc}
              />
              <Typography
                variant="body1"
                sx={{
                  color: "#00000099",
                  fontsize: "12px",
                  "&:hover": {
                    color: "#ea8025",
                  },
                }}
              >
                {item.text}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}

export default TopBar;
