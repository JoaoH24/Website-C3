import Text from "../atoms/Text";
import Heading from "../atoms/Heading";
import { IconMapPinShare, IconCalendarEvent } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const AdCard = ({ title, place, date, pathImage, descriptionImage, url }) => {
  return (
    <div
      className="flex flex-col bg-card border-main border-2 rounded-4xl p-10 max-w-100 gap-5 
                    transition-all duration-500 ease-in-out 
                    shadow-[0_0_15px_rgba(0,255,106,0.3)] hover:shadow-[0_0_30px_rgba(0,255,106,0.7)] 
                    hover:animate-glow"
    >
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
          <IconMapPinShare size={32} color="var(--color-main)" stroke={2} />
          {place}
        </Text>
        <Text className="flex items-center gap-2">
          <IconCalendarEvent size={32} color="var(--color-main)" stroke={2} />
          {date}
        </Text>
      </div>
      <div className="flex justify-end">
        <Link to={url} target="_blank">
          <Text type={"neon-green"} weight={"bold"} size={"2xl"}>
            Ver más
          </Text>
        </Link>
      </div>
    </div>
  );
};

export default AdCard;
