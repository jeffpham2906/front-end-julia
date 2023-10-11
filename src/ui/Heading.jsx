/* eslint-disable react/prop-types */
function Heading({ children, type = "" }) {
  const style = `${type === "secondary" ? "text-3xl" : "text-4xl"}`;
  return <h1 className={`${style} font-medium mb-4`}>{children} </h1>;
}

export default Heading;
