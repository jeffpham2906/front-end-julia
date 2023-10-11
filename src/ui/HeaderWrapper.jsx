/* eslint-disable react/prop-types */
function HeaderWrapper({ children }) {
  return (
    <div className="mb-10 flex items-center justify-between gap-4">{children}</div>
  );
}

export default HeaderWrapper;
