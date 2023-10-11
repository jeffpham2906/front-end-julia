/* eslint-disable react/prop-types */
import { useState } from "react";

function DropDownMenu({
  listOptions = [],
  name = "",
  icon,
  type = "",
  onClick,
  disabled,
}) {
  const [selected, setSelected] = useState(name);
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.preventDefault();
          setDropMenu(true);
        }}
        className="flex items-center gap-2 font-normal"
        disabled={disabled}
      >
        {name && <span>{selected}</span>}
        {icon}
      </button>
      {dropMenu && (
        <>
          <div
            onClick={() => setDropMenu(false)}
            className="fixed bottom-0 left-0 right-0 top-0 bg-gray-800 opacity-10"
          ></div>
          <ul className="absolute right-2 top-0 z-10 w-24 translate-y-2 rounded-md bg-white p-1 font-normal shadow-md">
            {listOptions.map((e, i) => (
              <li
                onClick={function () {
                  setDropMenu(!dropMenu);
                  if (type === "selection") setSelected(e);
                  if (onClick) onClick(e);
                }}
                key={i}
                style={selected === e ? { backgroundColor: "#ccfbf1" } : {}}
                className="grid place-content-center rounded-md py-1 hover:bg-teal-100 sm:text-sm"
              >
                {e}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default DropDownMenu;
