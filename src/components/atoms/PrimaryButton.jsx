const PrimaryButton = ({ text, children, positionChilden, className }) => {
  if (positionChilden == "start") {
    return (
      <button
        className={`bg-main font-hs p-3 box-border text-xs font-bold text-bgd rounded-md ${className}`}
      >
        {children}
        {text}
      </button>
    );
  } else if (positionChilden == "end") {
    return (
      <button
        className={`bg-main font-hs p-3 box-border text-xs font-bold text-bgd rounded-md ${className}`}
      >
        {text}
        {children}
      </button>
    );
  } else {
    return (
      <button
        className={`bg-main font-hs p-3 box-border text-xs font-bold text-bgd rounded-md ${className}`}
      >
        {text}
      </button>
    );
  }
};
export default PrimaryButton;
