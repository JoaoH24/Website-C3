import CarouselItem from "../molecules/CarouselItem";
import Dots from "../molecules/Dots";

const Members = {
  member1: {
    phrase:
      '"Liderar en ciberseguridad significa inspirar confianza y construir un futuro digital seguro."',
    photo: '""',
    name: "Piero Aliaga Fenández",
    rol: "Presidente",
  },
  member2: {
    phrase:
      '"La verdadera fortaleza de la ciberseguridad está en el trabajo en equipo y la visión compartida."',
    photo: '""',
    name: "Jose Menendez Acosta",
    rol: "Vicepresidente",
  },
  member3: {
    phrase:
      '"Organizar el conocimiento es proteger el futuro; la seguridad empieza con disciplina y orden."',
    photo: '""',
    name: "Alejandro Melgarejo Sotelo",
    rol: "Secretario General",
  },
  member4: {
    phrase:
      '"La comunicación efectiva es el puente que une la tecnología con las personas."',
    photo: '""',
    name: "Brenda Mendoza Jaime",
    rol: "Directora de Relaciones Publicas",
  },
  member5: {
    phrase:
      '"La seguridad también es inversión: cada recurso bien gestionado fortalece nuestro futuro digital."',
    photo: '""',
    name: "Flavio Garcia Ferrer",
    rol: "Director de Economía y Finanzas",
  },
  member6: {
    phrase:
      '"El marketing en ciberseguridad no solo informa, también educa y transforma comunidades."',
    photo: '""',
    name: "Valeria Solís Córdova",
    rol: "Directora de Marketing",
  },
  member7: {
    phrase:
      '"La educación es la primera defensa: formar mentes es proteger sistemas."',
    photo: '""',
    name: "Anghelo Principe Ostos",
    rol: "Director de Asuntos Académicos",
  },
  member8: {
    phrase:
      '"Investigar en ciberseguridad es abrir caminos hacia un mundo digital más resiliente."',
    photo: '""',
    name: "Fabrizio Valencia Casanova",
    rol: "Director de Proyectos de Investigación",
  },
};

const Carousel = () => {
  return (
    <div className="flex flex-col">
      {Object.entries(Members).map(([key, member]) => (
        <CarouselItem
          key={key}
          phraseProfile={member.phrase}
          pathProfileImage={member.photo}
          nameProfile={member.name}
          rolProfile={member.rol}
        ></CarouselItem>
      ))}
      <Dots total={5}></Dots>
    </div>
  );
};

export default Carousel;
