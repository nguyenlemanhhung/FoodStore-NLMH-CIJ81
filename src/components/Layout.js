import React from "react";
import TopBar from "./Header";
import { Outlet } from "react-router-dom";
import ButtonScrollTop from "./ButtonScrollTop";

function Layout() {
  return (
    <>
      <TopBar />
      <main style={{ background: "#fff" }}>
        <Outlet />
        <ButtonScrollTop />
      </main>
    </>
  );
}

export default Layout;
