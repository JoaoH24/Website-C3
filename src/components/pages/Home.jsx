import FadeInSection from "../FadeInSection";
import Banner from "../organisms/Banner";
import PanelForm from "../organisms/PanelForm";
import SimpleSection from "../templates/SimpleSection";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Carousel from "../organisms/Carousel";
import TwoColumnSection from "../templates/TwoColumnSection";
import AdCard from "../organisms/AdCard";

const Home = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-20">
      <Banner></Banner>

      <FadeInSection>
        <SimpleSection className="gap-10">
          <Heading level={2} size={4} className="text-center">
            ¿Quienes Somos?
          </Heading>
          <div>
            <Text size="2xl" className="text-center px-100">
              El
              <Text type="gradient">
                {" "}
                &nbsp;Centro Cultural de Ciberseguridad
              </Text>
              , es una comunidad activa y comprometida con la difusión de la
              cultura digital, la formación en ciberseguridad y el desarrollo
              del pensamiento crítico frente a los desafíos del mundo
              tecnológico actual.
            </Text>
            <Text size="2xl" className="text-center px-100">
              Buscamos conectar a estudiantes, profesionales, instituciones y
              entusiastas en un espacio donde el conocimiento, la ética y la
              innovación se encuentren. A través de talleres, charlas, proyectos
              colaborativos y eventos culturales, promovemos una ciudadanía
              digital consciente, inclusiva y resiliente. Te invitamos a formar
              parte de este movimiento y construir juntos una cultura de
              seguridad digital con impacto social.
            </Text>
          </div>
        </SimpleSection>
      </FadeInSection>

      <FadeInSection>
        <SimpleSection className="gap-10">
          <Heading level={2} size={4} className="text-center">
            Junta Directiva
          </Heading>
          <Carousel />
        </SimpleSection>
      </FadeInSection>

      <FadeInSection>
        <TwoColumnSection
          className="bg-[linear-gradient(135deg,rgba(0,191,255,0.2)_15%,rgba(0,255,106,0.2)_55%,rgba(46,46,46,0.2)_100%)]"
          dirChildenLeft="col"
          childrenLeft={
            <>
              <Heading level={3} size={4} className="max-w-xl">
                ¿Te gustaría colaborar con nosotros?
              </Heading>
              <Text type="green" size="2xl" className="max-w-xl">
                Si representas a una empresa, institución educativa o deseas
                vincularte como aliado estratégico, este es el lugar para
                comenzar.
              </Text>
            </>
          }
          childrenRight={<PanelForm className="w-40" />}
        />
        <div className="flex gap-10">
          <AdCard
            pathImage={"/src/assets/images/LogoC3Conf-Photoroom.png"}
            title={"Tercera Cumbre Anual de Ciberseguridad"}
            place={"FIEE - Universidad Nacional de Ingeniería"}
            date={"27,28 y 29 de noviembre"}
          ></AdCard>
          <AdCard
            pathImage={"/src/assets/images/LogoCCCTF-Photoroom.png"}
            descriptionImage={
              "Logo relacionado a el capture de flag organizado por c3"
            }
            title={"C3 Capture the Flag"}
            place={"FIEE - Universidad Nacional de Ingeniería"}
            date={"27,28 y 29 de noviembre"}
          ></AdCard>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Home;
