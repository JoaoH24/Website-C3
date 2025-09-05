const InputText = ({
  id,
  form,
  name,
  type,
  maxLength,
  minLength,
  required,
  placeholder,
  rowsArea,
  className,
}) => {
  if (type == "textarea") {
    return (
      <textarea
        id={id}
        style={{ resize: "none" }}
        rows={rowsArea}
        placeholder={placeholder}
        className={`p-2 border-2 rounded-lg border-main text-white ${className}`}
      ></textarea>
    );
  } else {
    return (
      <input
        className={`p-2 border-2 rounded-lg border-main text-white ${className}`}
        form={form}
        id={id}
        name={name}
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        required={required}
        placeholder={placeholder}
      ></input>
    );
  }
};

export default InputText;
