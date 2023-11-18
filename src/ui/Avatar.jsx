import { IMAGE_URL_API } from "../Constants/IMAGE_URL_API";

function Avatar({ type }) {
  const normal = "h-8 w-8";
  const small = "h-6 w-6";
  const style = type === "small" ? small : normal;
  return (
    <div className={`${style}`}>
      <img
        src={`${IMAGE_URL_API}/assets/face.jpg`}
        alt="avatar user"
        className="h-full w-full rounded-full"
      />
    </div>
  );
}

export default Avatar;
