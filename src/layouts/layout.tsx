import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import SidebarMobile from "./SidebarMobile";
import Header from "./header";

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden sm:block">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 pb-16 sm:pb-0">
          <div className="px-0 sm:px-6 sm:py-8">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile sidebar hidden - uncomment below to show mobile sidebar */}
      {/* <div className="sm:hidden">
        <SidebarMobile />
      </div> */}
    </div>
  );
};

export default Layout;
