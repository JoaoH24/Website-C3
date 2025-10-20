import { useRouteError } from "react-router-dom";

import StaticNavbar from "../organisms/StaticNavbar";
import Footer from "../organisms/Footer";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import notFound from "../../assets/images/not-found.gif";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <header className="fixed w-full">
        <StaticNavbar></StaticNavbar>
      </header>
      <main className="bg-bgd flex flex-col items-center gap-5 h-dvh py-80">
        <img src={notFound} alt="404 not found" className="max-w-58" />
        <Heading type={"gradient"} level={2} size={5}>
          Oops!
        </Heading>
        <Text size={"2xl"} weight={"bold"}>
          Lo sentimos, no hemos encontrado lo que buscabas.
        </Text>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default NotFound;
