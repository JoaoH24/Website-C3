const PrimaryButton = ({
  text,
  children,
  positionChilden,
  typeButton = "button",
  actionClick,
  className,
}) => {
  const baseStyles = `
    flex justify-center gap-2
    relative overflow-hidden
    bg-[var(--color-main)]
    transition-all duration-500 ease-in-out
    font-hs p-3 px-6 box-border text-sm font-bold text-[var(--color-bgd)] rounded-md
    shadow-[0_0_10px_rgba(0,255,106,0.3)] hover:shadow-[0_0_20px_rgba(0,255,106,0.6)]
    hover:bg-[linear-gradient(140deg,var(--color-main),var(--color-complement))]
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

export default PrimaryButton;
