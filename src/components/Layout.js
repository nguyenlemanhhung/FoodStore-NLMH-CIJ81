import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Categories from "./Categories";
import CartContainer from "./CartContainer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Layout() {
  return (
    <>
      <Header />
      <main style={{ background: "#faf9fb" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", position: "relative" }}>
            <Box sx={{ display: "block" }}>
              <Banner />
              <Categories />
            </Box>
            {/* <CartContainer /> */}
          </Box>
        </Container>
        <Outlet />
        <SideBar />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
