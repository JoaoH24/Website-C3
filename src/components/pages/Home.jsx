import Navbar from "../organisms/Navbar";
import Banner from "../organisms/Banner";
import Footer from "../organisms/Footer";
import PanelForm from "../organisms/PanelForm";
import SimpleSection from "../templates/SimpleSection";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Carousel from "../organisms/Carousel";

const Home = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-20">
      <Banner></Banner>
      <SimpleSection className="gap-10">
        <Heading level={2} size={3} className="text-center">
          ¿Quienes Somos?
        </Heading>
        <div>
          <Text size={"xl"} className="text-center px-100">
            El
            <Text type={"gradient"}>
              {" "}
              &nbsp;Centro Cultural de Ciberseguridad
            </Text>
            , es una comunidad activa y comprometida con la difusión de la
            cultura digital, la formación en ciberseguridad y el desarrollo del
            pensamiento crítico frente a los desafíos del mundo tecnológico
            actual.
          </Text>
          <Text size={"xl"} className="text-center px-100">
            Buscamos conectar a estudiantes, profesionales, instituciones y
            entusiastas en un espacio donde el conocimiento, la ética y la
            innovación se encuentren. A través de talleres, charlas, proyectos
            colaborativos y eventos culturales, promovemos una ciudadanía
            digital consciente, inclusiva y resiliente. Te invitamos a formar
            parte de este movimiento y construir juntos una cultura de seguridad
            digital con impacto social.
          </Text>
        </div>
      </SimpleSection>
      <SimpleSection className="gap-10">
        <Heading level={2} size={3} className="text-center">
          Junta Directiva
        </Heading>
        <Carousel></Carousel>
      </SimpleSection>

      <PanelForm></PanelForm>
    </div>
  );
};

export default Home;
