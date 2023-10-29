/* eslint-disable react/prop-types */
function Heading({ children, type = "" }) {
  const style = `${
    type === "secondary md:text-2xl" ? "text-3xl" : "text-4xl md:text-3xl"
  }`;
  return <h1 className={`${style} mb-4 font-medium `}>{children} </h1>;
}

export default Heading;
