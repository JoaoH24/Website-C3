const Dot = ({ className, index }) => {
  return (
    <button
      className={`rounded-full w-4 h-4 bg-main ${className}`}
      id={`dot-${index}`}
    ></button>
  );
};

export default Dot;
