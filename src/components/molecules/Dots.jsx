import Dot from "../atoms/Dot";

const Dots = ({
  total,
  activeIndex,
  onSelect,
  direction = "row",
  className,
}) => {
  return (
    <div className={`flex flex-${direction} gap-4 justify-center mt-4`}>
      {Array.from({ length: total }).map((_, i) => (
        <Dot
          key={i}
          index={i}
          isActive={i === activeIndex}
          onClick={onSelect}
          className={className}
        />
      ))}
    </div>
  );
};

export default Dots;
