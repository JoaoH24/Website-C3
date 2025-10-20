import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

const SimpleSection = ({ id, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`flex flex-col justify-center bg-bgd ${className}`}
    >
      {children}
    </section>
  );
};

export default SimpleSection;
