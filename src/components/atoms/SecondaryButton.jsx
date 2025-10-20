const SecondaryButton = ({
  text,
  children,
  positionChilden,
  typeButton = "button",
  actionClick,
  className,
}) => {
  const baseStyles = `
    relative overflow-hidden
    bg-transparent
    border-2 border-[var(--color-mid)]
    text-[var(--color-mid)]
    rounded-md
    font-hs font-bold text-sm p-3 px-6 box-border
    transition-all duration-500 ease-in-out
    shadow-[0_0_10px_rgba(15,185,144,0.3)] hover:shadow-[0_0_20px_rgba(15,185,144,0.6)]
  `;

  const content = (
    <>
      {positionChilden === "start" && children}
      {text}
      {positionChilden === "end" && children}
    </>
  );

  return (
    <button
      type={typeButton}
      onClick={actionClick}
      className={`${baseStyles} ${className}`}
    >
      {content}
    </button>
  );
};

export default SecondaryButton;
