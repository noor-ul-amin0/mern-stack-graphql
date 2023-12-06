import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="mt-12">
      <Outlet />
    </div>
  );
};

export default RootLayout;
