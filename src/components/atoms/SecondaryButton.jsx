const SecondaryButton = ({ text, children, positionChilden, className }) => {
  if (positionChilden === "start") {
    return (
      <button
        className={`bg-transparent border-main border-2 font-hs p-3 box-border text-xs font-bold text-main rounded-md ${className}`}
      >
        {children}
        {text}
      </button>
    );
  } else if (positionChilden === "end") {
    return (
      <button
        className={`bg-transparent border-main border-2 font-hs p-3 box-border text-xs font-bold text-main rounded-md ${className}`}
      >
        {text}
        {children}
      </button>
    );
  } else {
    return (
      <button
        className={`bg-transparent border-main border-2 font-hs p-3 box-border text-xs font-bold text-main rounded-md ${className}`}
      >
        {text}
      </button>
    );
  }
};

export default SecondaryButton;
