import React, { useState } from "react";
import NavbarComponent from "./components/Navbar";
import SidebarComponent from "./components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="wrapper">
      <NavbarComponent onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <SidebarComponent isOpen={sidebarOpen} />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
}
