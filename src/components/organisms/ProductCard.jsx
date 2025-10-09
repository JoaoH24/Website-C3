import { IconShoppingCart } from "@tabler/icons-react";
import Text from "../atoms/Text";
import Heading from "../atoms/Heading";
import PrimaryButton from "../atoms/PrimaryButton";

const ProductCard = ({ name, price, image, description }) => {
  return (
    <div
      className="flex flex-col justify-between bg-card 
                 border-2 border-main rounded-2xl w-100 min-h-40 
                 transition-all duration-500 ease-in-out 
                 shadow-[0_0_15px_rgba(0,255,106,0.2)] 
                 hover:shadow-[0_0_30px_rgba(0,255,106,0.6)] 
                 hover:-translate-y-2 hover:scale-[1.02]"
    >
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt={name}
          className=" object-contain rounded-t-2xl w-full"
        />
      </div>
      <div className="flex flex-col gap-5 p-4 text-center text-[var(--color-bgl)]">
        <Heading level={4} size={3}>
          {name}
        </Heading>
        <Text size="base" className="text-gray-400">
          {description}
        </Text>
        <div className="flex justify-between px-7">
          <PrimaryButton text={"Comprar"} positionChilden={"start"}>
            <IconShoppingCart size={22} />
          </PrimaryButton>
          <Text
            size="xl"
            weight="bold"
            className="text-[var(--color-main)] mt-2"
          >
            S/ {price}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
