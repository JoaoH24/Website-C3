import PrimaryButton from "../atoms/PrimaryButton";
import SecondaryButton from "../atoms/SecondaryButton";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

const Banner = () => {
  return (
    <div
      className={
        "flex flex-row justify-evenly items-center px-10 h-dvh bg-[radial-gradient(circle_at_0%_40%,rgb(13,17,23)_0%,transparent_100%),linear-gradient(180deg,transparent_0%,rgb(13,17,23)_85%),linear-gradient(270deg,transparent_0%,rgb(13,17,23)_80%),url('/src/assets/images/UNI.png')] bg-cover bg-no-repeat bg-center"
      }
    >
      <div className="flex flex-col gap-10 max-w-2xl">
        <div className="flex flex-col font-bold gap-5">
          <div className="flex flex-row flex-wrap">
            <Text type={"gradient"} size={"5xl"}>
              C
              <sup className="font-normal bg-linear-140 from-main to-complement bg-clip-text text-transparent">
                3
              </sup>
              :
            </Text>
            <Text size={"5xl"}> &nbsp;La intersección entre</Text>
          </div>
          <div className="flex flex-row flex-wrap">
            <Text type={"gradient"} size={"5xl"}>
              Cultura,
            </Text>
            <Text size={"5xl"}>Conocimiento y</Text>
          </div>
          <div className="flex flex-row flex-wrap">
            <Text type={"gradient"} size={"5xl"} className="pb-1">
              Ciberseguridad
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row ">
            <Text size={"xl"} className="break-normal">
              Únete como miembro o aliado y forma parte del crecimiento de un
              espacio donde el conocimiento es nuestra mejor defensa.
            </Text>
          </div>
          <div className="flex flex-row gap-4">
            <PrimaryButton text={"CONÓCENOS"}></PrimaryButton>
            <SecondaryButton text={"CONTÁCTANOS"}></SecondaryButton>
          </div>
        </div>
      </div>
      <div>
        <img src="/src/assets/Logo.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
