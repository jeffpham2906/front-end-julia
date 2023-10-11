/* eslint-disable react/prop-types */

import SideBar from "../ui/SideBar";
import HeaderUser from "../ui/HeaderUser";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div className="grid grid-cols-[200px,1fr] grid-rows-[auto,1fr] overflow-hidden bg-teal-50 md:flex md:flex-col">
      <SideBar />
      <HeaderUser />
      <main className=" h-[90vh] overflow-auto bg-gray-100 px-24 py-10 md:px-5">
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default AppLayout;
