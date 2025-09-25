import Text from "../atoms/Text";
import Heading from "../atoms/Heading";
import { Link } from "react-router-dom";

const AdCard = ({ title, place, date }) => {
  return (
    <div>
      <Heading>{title}</Heading>
      <div>
        <Icon></Icon>
        <Text>{place}</Text>
      </div>
      <div>
        <Icon></Icon>
        <Text>{date}</Text>
      </div>
      <Link to={"/"}>
        <Text>Ver más</Text>
      </Link>
    </div>
  );
};

export default AdCard;
