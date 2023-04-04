import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import bgFooter from "../assets/image/bg-footer.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Button, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import TelegramIcon from "@mui/icons-material/Telegram";

const ButtonSocial = styled(IconButton)({
  color: "#000",
  borderRadius: 0,
  // border: "1px solid #FAAF00",
  "&:hover": {
    // backgroundColor: "#fff",
    color: "#FAAF00",
  },
});
const TextHightLight = styled("span")({
  color: "#faaf00",
  fontSize: "14px",
});
export default function Footer() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgFooter})`,
        backgroundColor: "rgba(255,255,255, 0.9) ",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        padding: "30px 0",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Divider
              sx={{
                "&::before": {
                  borderTop: "2px solid #faaf00",
                },
                "&::after": {
                  borderTop: "2px solid #faaf00",
                },
              }}
            >
              <img
                style={{ width: "200px" }}
                src={require("../assets/image/burger.png")}
              />
            </Divider>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button>
              <img
                style={{ width: "150px" }}
                src={require("../assets/icons/google-play.png")}
              />
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Tooltip title="Facebook" placement="bottom" arrow>
                <ButtonSocial>
                  <FacebookIcon />
                </ButtonSocial>
              </Tooltip>
              <Tooltip title="Instagram" placement="bottom" arrow>
                <ButtonSocial>
                  <InstagramIcon />
                </ButtonSocial>
              </Tooltip>
              <Tooltip title="LinkedIn" placement="bottom" arrow>
                <ButtonSocial>
                  <LinkedInIcon />
                </ButtonSocial>
              </Tooltip>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button>
              <img
                style={{ width: "150px" }}
                src={require("../assets/icons/app-store.png")}
              />
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Divider
              orientation="vertical"
              sx={{ height: "40px", borderColor: "#faaf00" }}
            />
            <Typography mt={1} sx={{ fontSize: "12px" }}>
              <TextHightLight>Sign up</TextHightLight> to receive{" "}
              <TextHightLight>promotional information</TextHightLight> and{" "}
              <TextHightLight>discount codes</TextHightLight>
            </Typography>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="send-email">Your Email</InputLabel>
              <OutlinedInput
                id="send-email"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      sx={{
                        color: "#faaf00",
                      }}
                    >
                      <TelegramIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
