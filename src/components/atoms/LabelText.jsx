const LabelText = ({ id, label, className }) => {
  return (
    <label
      htmlFor={id}
      className={`font-ps font-normal text-white ${className}`}
    >
      {label}
    </label>
  );
};

export default LabelText;
