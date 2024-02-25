import React, { Children } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-root">
      <Outlet />
    </div>
  );
}
