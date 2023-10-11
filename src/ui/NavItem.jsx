/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const base =
  "flex items-center gap-4 rounded-md px-4 py-2 hover:bg-teal-100 transition-all duration-300 ease-in-out ";
const actived = `${base} bg-teal-100 hover:shadow-md `;
function NavItem({ icon, name, to, onClick }) {
  return (
    <li onClick={onClick}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? `${actived} stroke-gray-800` : `${base} stroke-gray-400`
        }
      >
        {icon}
        <span className="text-inherit">{name}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
