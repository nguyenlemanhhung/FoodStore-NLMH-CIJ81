import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import SignForm from "./SignForm";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ButtonSocial = styled(IconButton)({
  color: "#fff",
  borderRadius: 0,
  border: "1px solid #FAAF00",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#FAAF00",
  },
});
function Banner() {
  return (
    <Box
      sx={{
        height: "70vh",
        background: "linear-gradient(110deg, #fff 68%, #FAAF00  32%)",
        // backgroundColor: "#FFEBE4",
        position: "relative",
        transform: "translateY(-70px)",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "5px",
          backgroundColor: "#FAAF00",
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translate(50%, -50%)",
        }}
      >
        <Tooltip title="Facebook" placement="right" arrow>
          <ButtonSocial>
            <FacebookIcon />
          </ButtonSocial>
        </Tooltip>
        <Tooltip title="Instagram" placement="right" arrow>
          <ButtonSocial>
            <InstagramIcon />
          </ButtonSocial>
        </Tooltip>
        <Tooltip title="LinkedIn" placement="right" arrow>
          <ButtonSocial>
            <LinkedInIcon />
          </ButtonSocial>
        </Tooltip>
      </Box>
      <Box
        sx={
          {
            // flex: "1 1 400px",
          }
        }
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: "20px",
            color: "#555",
          }}
        >
          Hello Jeremy
        </Typography>
        <Typography
          sx={{
            color: "#777",
            marginBottom: "20px",
          }}
        >
          lorem ipsum dolor sit amet, consectetur adip
        </Typography>
        <SignForm />
      </Box>
      <img
        style={{
          height: "70%",

          // animation: "c 5s linear infinite";
          // "@keyframes c{
          //   0%, 100%{
          //       transform: translateY(0px);
          //   }
          //   50%{
          //       transform: translateY(30px);
          //   }
          // }"
        }}
        src={require("../assets/image/burger.png")}
        // src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
      />
    </Box>
  );
}

export default Banner;
