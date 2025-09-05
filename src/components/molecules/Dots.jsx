import Dot from "../atoms/Dot";

const Dots = ({ total, direction, className }) => {
  return (
    <div className={`flex flex-${direction} gap-4`}>
      {Array.from({ length: total }).map((_, i) => (
        <Dot className={className} index={i} key={i}></Dot>
      ))}
    </div>
  );
};

export default Dots;
