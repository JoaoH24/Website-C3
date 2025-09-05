import InputText from "../atoms/InputText";
import LabelText from "../atoms/LabelText";

const Field = ({
  id,
  label,
  type,
  required,
  placeholder,
  rowsArea,
  className = "",
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <LabelText id={id} label={label}></LabelText>
      <InputText
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        rowsArea={rowsArea}
      ></InputText>
    </div>
  );
};

export default Field;
