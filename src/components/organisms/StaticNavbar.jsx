import { Link } from "react-router-dom";
import PrimaryButton from "../atoms/PrimaryButton";
import ProfileImage from "../atoms/ProfileImage";

import Logo from "../../assets/Logo.png";

const StaticNavbar = ({ className = "" }) => {
  return (
    <nav
      className={`bg-transparent flex flex-row flex-wrap absolute w-full justify-between items-center px-4 ${className}`}
    >
      <div>
        <Link to={"/"} target="_self">
          <ProfileImage type={"logo"} path={Logo}></ProfileImage>
        </Link>
      </div>
      <div>
        <ul className="flex flex-row flex-wrap justify-between gap-10">
          <Link className="text-white font-medium" to={"/directiva"}>
            Junta Directiva
          </Link>
          <Link className="text-white font-medium" to={"/roadmap"}>
            Roadmaps
          </Link>
          <Link className="text-white font-medium" to={"/catalogo"}>
            Catálogo
          </Link>
          <Link className="text-white font-medium" to={"/logros"}>
            Logros
          </Link>
          <Link className="text-white font-medium" to={"/blog"}>
            Blog
          </Link>
        </ul>
      </div>

      <div>
        <PrimaryButton text={"INICIAR SESIÓN"}></PrimaryButton>
      </div>
    </nav>
  );
};

export default StaticNavbar;
