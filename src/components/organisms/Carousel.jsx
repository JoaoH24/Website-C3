import CarouselItem from "../molecules/CarouselItem";
import Dots from "../molecules/Dots";
import { useDirectiva } from "../../hooks/useDirectiva";

const Carousel = () => {
  const { Members, loading } = useDirectiva();

  if (loading)
    return <p className="text-center text-gray-400">Cargando datos...</p>;

  return (
    <div className="flex flex-col items-center gap-10">
      {Members.map((member) => (
        <CarouselItem
          key={member.id}
          phraseProfile={member.Objetivos?.[0]}
          pathProfileImage={member.Foto}
          nameProfile={member.Nombre}
          rolProfile={member.id}
        />
      ))}
      <Dots total={Members.length} />
    </div>
  );
};

export default Carousel;
