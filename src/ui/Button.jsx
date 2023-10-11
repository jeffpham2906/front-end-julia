/* eslint-disable react/prop-types */
const base =
  "relative rounded-md px-4 py-2 transition-all duration-300 ease-in-out";
const primary = "bg-teal-800 text-teal-50 hover:bg-teal-900 hover:shadow-md";
const secondary = "bg-teal-100 hover:bg-teal-200 hover:shadow-md";

function Button({
  children,
  spinner,
  type,
  icon,
  onClick,
  disableBtn = false,
  width,
}) {
  const styleAdditional = `${base} ${
    type === "primary" ? primary : type === "secondary" ? secondary : base
  }`;
  return (
    <button
      disabled={disableBtn}
      onClick={onClick}
      className={`${styleAdditional} ${disableBtn && "cursor-not-allowed"} ${
        width === "full" && "w-full"
      }`}
    >
      <span className="relative flex items-center justify-center gap-2 font-medium text-inherit">
        {spinner && <span>{spinner}</span>}
        {children}
        {icon && <span>{icon}</span>}
      </span>
    </button>
  );
}

export default Button;
