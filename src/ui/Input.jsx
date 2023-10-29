const defaultStyle = "w-full rounded-md border border-gray-400 px-2 py-1 ";
const hiddenStyle = "w-full bg-inherit py-1";
function Input({ type, register, hiddenBorder = false, ...rest }) {
  return (
    <input
      type={type}
      className={hiddenBorder ? hiddenStyle : defaultStyle}
      {...register}
      {...rest}
    />
  );
}

export default Input;
