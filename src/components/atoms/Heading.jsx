const sizeMap = {
  1: "text-xl",
  2: "text-2xl",
  3: "text-3xl",
  4: "text-4xl",
  5: "text-5xl",
  6: "text-6xl",
  7: "text-7xl",
  8: "text-8xl",
  9: "text-9xl",
};

const Heading = ({ children, level = 1, type, size = 1, className = "" }) => {
  const safeLevel = Math.min(Math.max(parseInt(level), 1), 6);
  const safeSize = Math.min(Math.max(parseInt(size), 1), 9);
  const Tag = `h${safeLevel}`;
  const sizeClass = sizeMap[safeSize] || "text-xl";

  const baseClass = `font-bold font-hs ${sizeClass} ${className}`;
  const gradientClass =
    "bg-linear-140 from-main to-complement bg-clip-text text-transparent";

  return (
    <Tag
      className={
        type === "gradient"
          ? `${gradientClass} ${baseClass}`
          : baseClass + " text-white"
      }
    >
      {children}
    </Tag>
  );
};

export default Heading;
