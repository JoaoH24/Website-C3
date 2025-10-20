import InputText from "../atoms/InputText";
import LabelText from "../atoms/LabelText";

const Field = ({
  id,
  label,
  type,
  formDad,
  required,
  placeholder,
  rowsArea,
  className = "",
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <LabelText id={id} form={formDad} label={label}></LabelText>
      <InputText
        id={id}
        type={type}
        name={id}
        form={formDad}
        required={required}
        placeholder={placeholder}
        rowsArea={rowsArea}
      ></InputText>
    </div>
  );
};

export default Field;
