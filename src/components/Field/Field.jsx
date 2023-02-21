import "./Field.css";

export const Field = ({
  id,
  label,
  placeholder,
  handleChange,
  type = "text",
}) => {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        onChange={handleChange}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};
