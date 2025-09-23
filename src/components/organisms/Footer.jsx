import Icon from "../atoms/Icon";
import { Link } from "react-router-dom";
import Text from "../atoms/Text";

const Footer = () => {
  const dataLinks = {
    "Sobre Nosotros": {
      "Junta Directiva": { url: "/directiva", target: "_self" },
      Roadmaps: { url: "/roadmap", target: "_self" },
      FAQs: { url: "/catalogo", target: "_self" },
      Catálogo: { url: "/catalogo", target: "_self" },
      Logros: { url: "/logros", target: "_self" },
    },
    Recursos: {
      Blog: { url: "/blog", target: "_self" },
      Github: {
        url: "https://github.com/JoaoH24/Website-C3",
        target: "_blank",
      },
    },
    Aliados: {
      CibersecUNI: {
        url: "https://web.facebook.com/cibersecuni/?locale=es_LA&_rdc=1&_rdr#",
        target: "_blank",
      },
      HTBox: { url: "https://academy.hackthebox.com/", target: "_blank" },
    },
  };
  return (
    <div className="flex flex-col bg-bgd">
      <div className="flex flex-row  gap-32 px-20 pb-10">
        {Object.entries(dataLinks).map(([title, subtitle]) => (
          <div key={title} className="flex flex-col gap-5">
            <Text weight={"bold"} className="text-white">
              {title}
            </Text>
            <div className="flex flex-col gap-1">
              {Object.entries(subtitle).map(([label, { url, target }]) => (
                <Link to={url} target={target} className="text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-bgl mx-20 h-0.5"></div>
      <div className="flex flex-row px-20 pt-5 pb-10 text-bgl">
        &copy; 2025 Todos los izquierdos reservados
        <div className="flex flex-row"></div>
      </div>
    </div>
  );
};

export default Footer;
