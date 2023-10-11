function FormRow({ children, direction = "col" }) {
  return (
    <div
      className={`mb-4 flex gap-2 ${
        direction === "col" ? "flex-col" : "flex-row"
      }`}
    >
      {children}
    </div>
  );
}

export default FormRow;
