import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MainContent from "../components/MainContent";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import BottomMenu from "../components/BottomMenu";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import SideBar from "../components/SideBar";

const ButtonContact = styled(Button)({
  position: "fixed",
  bottom: "60px",
  left: "10px",
  zIndex: 100,
  backgroundColor: "#FC6011",
  borderRadius: "50px",
  padding: 0,
  width: "50px",
  height: "50px",
  overflow: "hidden",
  transition: "width 0.5s ease",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  minWidth: "50px",
  color: "#fff",
  "&:hover": {
    width: "137px",
    backgroundColor: "#FC6011",
    padding: "0 10px 0 0 ",
  },
});

function HomePage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [anchor, setAnchor] = useState(false);

  const toggleDrawer = (open) => {
    if (isDesktop) return;

    setAnchor(open);
  };

  return (
    <Box>
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: "20px",
          paddingBottom: "20px",
          position: "relative",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <MainContent />
          {isDesktop ? (
            <SideBar />
          ) : (
            <Drawer
              anchor={"right"}
              open={anchor}
              onClose={() => toggleDrawer(false)}
            >
              <SideBar toggleDrawer={() => toggleDrawer(false)} />
            </Drawer>
          )}
        </Box>
      </Container>
      <BottomMenu handleDrawer={() => toggleDrawer(true)} />
      <Tooltip title="Hotline" placement="bottom" arrow>
        <Box>
          <ButtonContact>
            <img
              style={{ width: "50px" }}
              src={require("../assets/icons/support.png")}
            />
            <Typography>1800.6936</Typography>
          </ButtonContact>
        </Box>
      </Tooltip>
    </Box>
  );
}

export default HomePage;
