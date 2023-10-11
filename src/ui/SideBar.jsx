import MainNav from "./MainNav";
function SideBar() {
  return (
    <>
      <aside className="col-span-1 row-span-2 h-screen border-r border-teal-100 px-5 py-10 md:hidden">
        <MainNav />
      </aside>
    </>
  );
}

export default SideBar;
