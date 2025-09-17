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
          <Link type={"normal"}>Junta Directiva</Link>
          <Link type={"normal"}>Roadmaps</Link>
          <Link type={"normal"}>Catálogo</Link>
          <Link type={"normal"}>Logros</Link>
          <Link type={"normal"}>Blog</Link>
        </ul>
      </div>

      <div>
        <PrimaryButton text={"INICIAR SESIÓN"}></PrimaryButton>
      </div>
    </nav>
  );
};

export default Navbar;
