import NavItem from "./NavItem";

import {
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineTableCells,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
  HiOutlineArrowsUpDown,
  HiOutlineSquaresPlus,
} from "react-icons/hi2";

function MainNav({ onCloseModal }) {
  const listNavOptions = [
    { name: "Home", to: "home", icon: <HiOutlineHome stroke="inherit" /> },
    {
      name: "Orders",
      to: "orders",
      icon: <HiOutlineShoppingCart stroke="inherit" />,
    },
    {
      name: "Salary",
      to: "salary",
      icon: <HiOutlineTableCells stroke="inherit" />,
    },
    { name: "Users", to: "users", icon: <HiOutlineUsers stroke="inherit" /> },
    {
      name: "Checking",
      to: "checking",
      icon: <HiOutlineArrowsUpDown stroke="inherit" />,
    },
    {
      name: "Gallery",
      to: "gallery",
      icon: <HiOutlineSquaresPlus stroke="inherit" />,
    },
    {
      name: "Settings",
      to: "settings",
      icon: <HiOutlineCog6Tooth stroke="inherit" />,
    },
  ];
  return (
    <>
      <div className="mb-10 flex items-end justify-center text-3xl">
        <img src="src/assets/logo.png" alt="logo" className="w-40 md:w-32" />
      </div>
      <nav>
        <ul className="flex flex-col gap-4 text-xl ">
          {listNavOptions.map((nav, index) => (
            <NavItem
              key={index}
              to={nav.to}
              name={nav.name}
              icon={nav.icon}
              onClick={onCloseModal}
            />
          ))}
        </ul>
      </nav>
    </>
  );
}

export default MainNav;
