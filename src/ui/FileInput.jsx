function FileInput({ register }) {
  return (
    <input
      type="file"
      className="w-full font-medium file:cursor-pointer file:rounded-md file:border-none file:bg-teal-800 file:px-3 file:py-1 file:text-teal-50 file:hover:bg-teal-900 file:hover:shadow-md"
      accept="image/*"
      {...register}
    />
  );
}

export default FileInput;
