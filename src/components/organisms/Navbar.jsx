import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../atoms/PrimaryButton";
import ProfileImage from "../atoms/ProfileImage";
import Logo from "../../assets/Logo.png";

const Navbar = ({ className = "" }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = 520; // altura en px
      setScrolled(window.scrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        flex flex-row flex-wrap justify-between items-center px-4
        transition-all duration-500
        ${
          scrolled
            ? "opacity-100 backdrop-blur-md bg-bgd/50 shadow-md translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-5"
        }
        ${className}
      `}
    >
      <div>
        <Link to={"/"} target="_self">
          <ProfileImage type="logo" path={Logo} />
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
        <PrimaryButton text="INICIAR SESIÓN" />
      </div>
    </nav>
  );
};

export default Navbar;
