function Label({ name }) {
  return (
    <label htmlFor={name} className="font-medium">
      {name}
    </label>
  );
}

export default Label;
