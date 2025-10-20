const Dot = ({ index, isActive, onClick, className = "" }) => {
  return (
    <button
      onClick={() => onClick(index)}
      className={`
        w-3 h-3 rounded-full transition-all duration-300
        ${isActive ? "bg-[var(--color-main)] scale-125" : "bg-gray-500"}
        ${className}
      `}
    ></button>
  );
};

export default Dot;
