import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "../atoms/PrimaryButton";
import Text from "../atoms/Text";
import ProfileImage from "../atoms/ProfileImage";
import Logo from "../../assets/images/isotipo.webp";

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
        fixed top-0 left-0 w-full z-50 h-20
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
          <li>
            <a
              href="#nosotros"
              className="font-bold text-white hover:text-main transition-colors duration-300"
            >
              <Text type="neon-white-green" weight="bold">
                Nosotros
              </Text>
            </a>
          </li>
          <li>
            <a
              href="#eventos"
              className="font-bold text-white hover:text-main transition-colors duration-300"
            >
              <Text type="neon-white-green" weight="bold">
                Eventos
              </Text>
            </a>
          </li>
          <li>
            <a
              href="#directiva"
              className="font-bold text-white hover:text-main transition-colors duration-300"
            >
              <Text type="neon-white-green" weight="bold">
                Junta Directiva
              </Text>
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="font-bold text-white hover:text-main transition-colors duration-300"
            >
              <Text type="neon-white-green" weight="bold">
                Contacto
              </Text>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <PrimaryButton text="INICIAR SESIÓN" className={"hidden"} />
      </div>
    </nav>
  );
};

export default Navbar;
