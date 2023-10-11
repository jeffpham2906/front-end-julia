/* eslint-disable react/prop-types */
function Avatar({ type }) {
  const normal = "h-8 w-8";
  const small = "h-6 w-6";
  const style = type === "small" ? small : normal;
  return (
    <div className={`${style}`}>
      <img
        src="src/assets/face.jpg"
        alt="avatar user"
        className="h-full w-full rounded-full"
      />
    </div>
  );
}

export default Avatar;
