import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main style={{ background: "#faf9fb" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
