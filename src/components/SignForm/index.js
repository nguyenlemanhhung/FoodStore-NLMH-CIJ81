import React, { useState } from "react";
// import styled from "styled-components";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import { useStepContext } from "@mui/material";
import { motion } from "framer-motion";
import { SignFormContext } from "./SignFormContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

// const BoxContainer = styled("div")({
//   width: "350px",
//   minHeight: "650px",
//   display: "flex",
//   flexDirection: "column",
//   borderRadius: "19px",
//   backgroundColor: "#fff",
//   boxShadow: "0 0 2px rgba(15, 15, 15, 0.28)",
//   position: "relative",
//   overflow: "hidden",
// });
const TopContainer = styled("div")({
  width: "100%",
  height: "250px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
const HeaderContainer = styled("h5")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});
const HeaderText = styled("h5")({
  fontSize: "30px",
  fontWeight: "600",
  lineHeight: "1.24",
  color: "#fff",
  zIndex: "10",
  margin: "0",
});
const BackDrop = styled("div")({
  width: "160%",
  height: "550px",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  borderRadius: "50%",
  transform: "rotate(60deg)",
  top: "-290px",
  left: "-70px",
  background: "rgb(241, 196, 15)",
  //   background:
  //     "linear-gradient(58deg,rgba(241, 196, 15, 1) 20%,rgba(243, 172, 18, 1) 100%)",
});
const SmallText = styled("h6")({
  color: "#fff",
  fontWeight: "500",
  fontSize: "11px",
  zIndex: "10",
  margin: "0",
  marginTop: "7px",
});

const InnerContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});
const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

export default function SignForm() {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");
  const switchToSignup = () => {
    // playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    // playExpandingAnimation();
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
  //   const [isExpanded, setExpanded] = useState(false);
  //   const playExpandingAnimation = () => {
  //     setExpanded(true);
  //     setTimeout(() => {
  //       setExpanded(false);
  //     }, 3000);
  //   };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const contextValue = { switchToSignup, switchToSignin };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <SignFormContext.Provider value={contextValue}>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent
            sx={{
              width: "350px",
              minHeight: "650px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              boxShadow: "0 0 2px rgba(15, 15, 15, 0.28)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <TopContainer>
              <BackDrop
                initial={false}
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={backdropVariants}
                transition={expandingTransition}
              />

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
            </TopContainer>
            <InnerContainer>
              {active === "signin" && <SigninForm />}
              {active === "signup" && <SignupForm />}
              <p onClick={playExpandingAnimation}>click</p>
            </InnerContainer>

            {/* <BoxContainer>
            <TopContainer>
              <BackDrop
                initial
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={backdropVariants}
                className="back-drop"
              />
              <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
              </HeaderContainer>
            </TopContainer>
            <SigninForm />
            <p onClick={playExpandingAnimation}>click</p>
          </BoxContainer> */}
          </DialogContent>
        </Dialog>
      </SignFormContext.Provider>
    </>
  );
}
