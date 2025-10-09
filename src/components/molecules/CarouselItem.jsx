import Heading from "../atoms/Heading";
import ProfileImage from "../atoms/ProfileImage";
import Text from "../atoms/Text";

const CarouselItem = ({
  phraseProfile,
  pathProfileImage,
  descriptionProfile,
  rolProfile,
  nameProfile,
}) => {
  return (
    <div className="flex flex-col bg-bgd gap-2 items-center">
      <Text type={"green"} size={"xl"} children={phraseProfile}></Text>
      <ProfileImage
        type={"profile"}
        description={descriptionProfile}
        path={pathProfileImage}
        className="my-4"
      ></ProfileImage>
      <Heading level={3} size={2} children={nameProfile}></Heading>
      <Text children={rolProfile} size={"xl"}></Text>
    </div>
  );
};

export default CarouselItem;
