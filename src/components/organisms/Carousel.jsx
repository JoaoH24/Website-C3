import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CarouselItem from "../molecules/CarouselItem";
import Dots from "../molecules/Dots";
import Text from "../atoms/Text";
import { useDirectiva } from "../../hooks/useDirectiva";

const Carousel = () => {
  const { Members, loading } = useDirectiva();
  const [activeIndex, setActiveIndex] = useState(5);

  if (loading)
    return (
      <Text type={"green"} className="text-center">
        Cargando datos...
      </Text>
    );
  if (Members.length === 0) return <p>No hay miembros.</p>;

  const member = Members[activeIndex];

  return (
    <div className="flex flex-col items-center gap-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <CarouselItem
            phraseProfile={member.Objetivos?.[0]}
            pathProfileImage={member.Foto}
            nameProfile={member.Nombre}
            rolProfile={member.id}
          />
        </motion.div>
      </AnimatePresence>

      <Dots
        total={Members.length}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
    </div>
  );
};

export default Carousel;
