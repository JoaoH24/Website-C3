import { useRouteError } from "react-router-dom";

import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <header className="fixed w-full">
        <Navbar></Navbar>
      </header>
      <main className="bg-bgd flex flex-col items-center gap-5 h-dvh py-80">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/source/06f21a161921919.63cd7887d0a70.gif"
          alt="404 not found"
          className="size-50"
        />
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
