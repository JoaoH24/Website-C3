import Icon from "../atoms/Icon";
import Link from "../atoms/Link";
import Text from "../atoms/Text";

const Footer = () => {
  const dataLinks = {
    "Sobre Nosotros": {
      "Junta Directiva": { url: "#" },
      Roadmaps: { url: "#" },
      FAQs: { url: "#" },
      Catálogo: { url: "#" },
      Logros: { url: "#" },
    },
    Recursos: {
      Academía: { url: "#" },
      Blog: { url: "#" },
      Temas: { url: "#" },
      Github: { url: "#" },
    },
    Aliados: {
      CibersecUNI: { url: "#" },
      HTBox: { url: "https://google.com" },
    },
  };
  return (
    <div className="flex flex-col bg-bgd">
      <div className="flex flex-row  gap-32 px-20 pb-10">
        {Object.entries(dataLinks).map(([title, subtitle]) => (
          <div key={title} className="flex flex-col gap-5">
            <Link type={"title"}>{title}</Link>
            <div className="flex flex-col gap-1">
              {Object.entries(subtitle).map(([label, { url }]) => (
                <Link key={label} type={"normal"} url={url}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-bgl mx-20 h-0.5"></div>
      <div className="flex flex-row px-20 pt-5 pb-10">
        <Text>&copy; 2025 Todos los izquierdos reservados</Text>
        <div className="flex flex-row"></div>
      </div>
    </div>
  );
};

export default Footer;
