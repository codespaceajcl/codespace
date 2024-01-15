import React from "react";
import BlackHeader from "../Component/Header/BlackHeader";
import { Outlet } from "react-router-dom";

const InnerLayout = () => {
  return (
    <>
      <BlackHeader />
      <Outlet />
    </>
  );
};

export default InnerLayout;
