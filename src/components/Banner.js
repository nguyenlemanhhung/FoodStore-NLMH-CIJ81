import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SignForm from "./SignForm";

function Banner() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          backgroundColor: "#FFEBE4",
          position: "relative",
          padding: "20px",
          borderRadius: "10px",
          margin: "20px 0",
        }}
      >
        <Box>
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
          {/* <Button
            // variant="contained"
            sx={{
              borderRadius: "25px",
              backgroundColor: "#faaf00",
              padding: "5px 10px",
              color: "#fff",
              fontWeight: "600",
              "&:hover": {
                color: "#faaf00",
                backgroundColor: "#fff",
              },
            }}
          >
            sign up
          </Button> */}
        </Box>
        <img
          style={{
            height: "100%",
            position: "absolute",
            right: "0",
            top: "0",
          }}
          src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
        />
      </Box>
    </Container>
  );
}

export default Banner;
