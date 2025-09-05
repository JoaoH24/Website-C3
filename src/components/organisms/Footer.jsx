import Heading from "../atoms/Heading";
import Link from "../atoms/Link";

const Footer = () => {
  /*   const dataLinks = {
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
      HTBox: { url: "#" },
    },
  }; */
  return (
    <div className="flex flex-row bg-bgd">
      <div className="flex flex-col">
        for (const data in dataLinks){" "}
        {/*         <Link type={"title"}>Sobre Nosotros</Link>
        <Link type={"normal"}>Junta Directiva</Link>
 */}
      </div>
    </div>
  );
};

export default Footer;
