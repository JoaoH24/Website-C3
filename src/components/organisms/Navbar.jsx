import Link from "../atoms/Link";
import PrimaryButton from "../atoms/PrimaryButton";
import ProfileImage from "../atoms/ProfileImage";

import Logo from "../../assets/Logo.png";

const Navbar = (className = "") => {
  return (
    <nav
      className={`bg-transparent flex flex-row flex-wrap justify-between items-center px-4 ${className}`}
    >
      <div>
        <ProfileImage type={"logo"} path={Logo}></ProfileImage>
      </div>
      <div>
        <ul className="flex flex-row flex-wrap justify-between gap-10">
          <Link type={"title"}>Junta Directiva</Link>
          <Link type={"title"}>Roadmaps</Link>
          <Link type={"title"}>Catálogo</Link>
          <Link type={"title"}>Logros</Link>
          <Link type={"title"}>Blog</Link>
        </ul>
      </div>

      <div>
        <PrimaryButton text={"INICIAR SESIÓN"}></PrimaryButton>
      </div>
    </nav>
  );
};

export default Navbar;
