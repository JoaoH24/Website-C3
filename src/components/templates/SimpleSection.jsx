import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

const SimpleSection = ({ children, className = "" }) => {
  return (
    <section className={`flex flex-col justify-center bg-bgd ${className}`}>
      {children}
    </section>
  );
};

export default SimpleSection;
