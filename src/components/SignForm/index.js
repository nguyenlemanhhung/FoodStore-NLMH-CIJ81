import React, { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import { motion } from "framer-motion";
import { SignFormContext } from "../../context/SignFormContext";
import { UserContext } from "../../context/UserContext";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const SignButton = styled(Button)({
  width: "max-content",
  fontSize: "12px",
  fontWeight: "bold",
  color: "#f47900",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#faaf00",
  },
});
const dialogContent = {
  width: "350px",
  minHeight: "500px",
  padding: "30px 20px 40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  boxShadow: "0 0 2px rgba(15, 15, 15, 0.28)",
  position: "relative",
  overflow: "hidden",
};
const formTitle = {
  width: "100%",
  height: "250px",
  display: "flex",
  flexDirection: "column",
};

const HeaderContainer = styled("h5")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});
const HeaderText = styled("span")({
  fontSize: "30px",
  fontWeight: "700",
  lineHeight: "1.24",
  color: "#fff",
  zIndex: "10",
  margin: "0",
});
const BackDrop = styled(motion.div)({
  width: "200%",
  height: "600px",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  borderRadius: "50%",
  transform: "rotate(60deg)",
  top: "-600px",
  left: "-200px",
  // background: "rgb(241, 196, 15)",
  background:
    "linear-gradient(58deg,rgba(241, 196, 15, 1) 20%,rgba(243, 172, 18, 1) 100%)",
  zIndex: "5",
});
const SmallText = styled("span")({
  color: "#fff",
  fontWeight: "500",
  fontSize: "16px",
  zIndex: "10",
  margin: "0",
  marginTop: "7px",
});

const formContainer = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
};
const backdropVariants = {
  expanded: {
    width: "300%",
    height: "2000px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "200%",
    height: "800px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};
const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export default function SignForm() {
  const { setUserData } = useContext(UserContext);

  const getData = () => {
    fetch("https://641ab895c152063412df56eb.mockapi.io/api/v1/user")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setUserData(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const [isExpanded, setExpanded] = useState(false);

  const [active, setActive] = useState("signin");

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };
  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const contextValue = { switchToSignup, switchToSignin };

  const handleClickSignIn = () => {
    setOpen(true);
    setActive("signin");
  };
  const handleClickSignUp = () => {
    setOpen(true);
    setActive("signup");
  };

  return (
    <>
      <Box>
        <SignButton onClick={handleClickSignIn}>Sign In</SignButton>
        <Divider>Or</Divider>
        <SignButton onClick={handleClickSignUp}>Sign Up</SignButton>
      </Box>
      <SignFormContext.Provider value={contextValue}>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent sx={dialogContent}>
            <BackDrop
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={backdropVariants}
              transition={expandingTransition}
            />
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: "5px",
                right: "5px",
                color: "#000",
                zIndex: 10,
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box sx={formTitle}>
              {active === "signin" && (
                <HeaderContainer>
                  <HeaderText>Welcome</HeaderText>
                  <HeaderText>Back</HeaderText>
                  <SmallText>Please sign-in to continue!</SmallText>
                </HeaderContainer>
              )}
              {active === "signup" && (
                <HeaderContainer>
                  <HeaderText>Create</HeaderText>
                  <HeaderText>Account</HeaderText>
                  <SmallText>Please sign-up to continue!</SmallText>
                </HeaderContainer>
              )}
            </Box>
            <Box sx={formContainer}>
              {active === "signin" && <SigninForm handleClose={handleClose} />}
              {active === "signup" && <SignupForm />}
            </Box>
          </DialogContent>
        </Dialog>
      </SignFormContext.Provider>
    </>
  );
}
