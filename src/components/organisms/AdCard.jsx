import Text from "../atoms/Text";
import Heading from "../atoms/Heading";
import { IconMapPinShare } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const AdCard = ({ title, place, date, pathImage, descriptionImage }) => {
  return (
    <div className="flex flex-col bg-card border-main border-2 rounded-4xl p-10 w-120 gap-5">
      <div className="flex flex-col items-center gap-10">
        <img
          src={pathImage}
          alt={descriptionImage}
          className="h-50 object-scale-down"
        />
        <Heading className="min-h-20 text-center" level={4} size={3}>
          {title}
        </Heading>
      </div>
      <div className="flex flex-col items-start gap-2">
        <Text className="flex items-center gap-2">
          <IconMapPinShare size={32} color="#00ff6a" stroke={2} />
          {place}
        </Text>
        <Text className="flex items-center gap-2">
          <IconCalendarEvent size={32} color="#00ff6a" stroke={2} />
          {date}
        </Text>
      </div>
      <div className="flex justify-end">
        <Link to={"/directiva"} target="_self">
          <Text type={"green"} weight={"bold"} size={"2xl"}>
            Ver más
          </Text>
        </Link>
      </div>
    </div>
  );
};

export default AdCard;
