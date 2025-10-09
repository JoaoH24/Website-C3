import { Outlet } from "react-router-dom";
import StaticNavbar from "../organisms/StaticNavbar";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

const AppLayout = () => {
  return (
    <>
      <header>
        <StaticNavbar></StaticNavbar>
        <Navbar></Navbar>
      </header>

      <main className="bg-bgd">
        <Outlet></Outlet>
      </main>

      <footer className="bg-bgd pt-10">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default AppLayout;
