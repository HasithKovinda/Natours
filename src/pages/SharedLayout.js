import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "../components/TourOverView";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
