import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SignForm from "./SignForm";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";

const SocialItem = styled(IconButton)(({ theme }) => ({
  color: "#faaf00",
  backgroundColor: "transparent",
  borderRadius: 0,
  "&:hover": {
    background: "#faaf00",
    color: "#fff",
    borderRadius: "5px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0 10px",
    height: "100%",
  },
}));

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
  const theme = useTheme();
  return (
    <Box>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#ceecff",
              width: "100%",
              borderRadius: "10px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              [theme.breakpoints.down("md")]: {
                width: "auto",
              },
            }}
          >
            <Box sx={{ width: "100%", padding: "10px" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {topBarContents.map((item, index) => {
                  return (
                    <Grid item xs={6} md={3} key={index}>
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
            <Box>
              <Link href="#" sx={{ marginRight: "20px" }}>
                <img
                  src={require("../assets/image/google-play.png")}
                  style={{
                    height: "35px",
                  }}
                />
              </Link>
              <Link href="#">
                <img
                  src={require("../assets/image/app-store.png")}
                  style={{
                    height: "35px",
                  }}
                />
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              [theme.breakpoints.down("sm")]: {
                marginTop: "10px",
              },
            }}
          >
            <Box
              sx={{
                marginLeft: "10px",
                backgroundColor: "#ceecff",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                [theme.breakpoints.down("sm")]: {
                  marginLeft: 0,
                  width: "50%",
                },
              }}
            >
              <Stack
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  },
                }}
              >
                <SocialItem>
                  <FacebookIcon />
                </SocialItem>
                <SocialItem>
                  <InstagramIcon />
                </SocialItem>
                <SocialItem>
                  <TwitterIcon />
                </SocialItem>
              </Stack>
            </Box>
            <Box
              sx={{
                backgroundColor: "#ceecff",
                borderRadius: "10px",
                padding: "10px",
                marginLeft: "10px",
                display: "flex",
                alignItems: "center",
                [theme.breakpoints.down("sm")]: {
                  marginLeft: "20px",
                  width: "50%",
                },
              }}
            >
              <SignForm />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TopBar;
