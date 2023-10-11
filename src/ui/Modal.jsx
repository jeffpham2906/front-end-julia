/* eslint-disable react/prop-types */
function Modal({ children, onCloseModal, position = "center" }) {
  let stylePosition = () => {
    if (position === "center")
      return "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:left-4 sm:right-4 sm:translate-x-0";
    if (position === "left") return "left-0 top-0 bottom-0";
    if (position === "spinner")
      return "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ";
  };
  const styledPosition = stylePosition();
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10">
      <div
        onClick={onCloseModal}
        className="absolute bottom-0 left-0 right-0 top-0 z-20 bg-gray-800 opacity-10"
      ></div>
      <div
        className={`${"absolute z-30 rounded-md bg-white p-10 sm:p-4"} ${styledPosition}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
