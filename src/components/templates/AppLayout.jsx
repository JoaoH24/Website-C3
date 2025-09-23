import { Outlet } from "react-router-dom";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

const AppLayout = () => {
  return (
    <>
      <header className="fixed w-full">
        <Navbar></Navbar>
      </header>

      <main className="bg-bgd">
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default AppLayout;
