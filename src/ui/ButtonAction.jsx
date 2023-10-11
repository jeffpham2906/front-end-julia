/* eslint-disable react/prop-types */
function ButtonAction({ onClick, icon, name }) {
  return (
    <div
      onClick={onClick}
      className=" grid cursor-pointer grid-cols-[1fr,0.4fr] items-center gap-2 gap-y-2 rounded-md px-4 py-2 hover:bg-teal-100"
    >
      <span>{name}</span>
      {icon}
    </div>
  );
}

export default ButtonAction;
