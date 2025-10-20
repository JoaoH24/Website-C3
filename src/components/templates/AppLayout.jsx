import { Outlet } from "react-router-dom";
import StaticNavbar from "../organisms/StaticNavbar";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import IconPage from "../../assets/favicon.ico";
import Favicon from "react-favicon";

const AppLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] bg-bgd">
      <Favicon url={IconPage}></Favicon>
      <header>
        <StaticNavbar></StaticNavbar>
        <Navbar></Navbar>
      </header>
      <div className="flex flex-col">
        <main className="bg-bgd">
          <Outlet></Outlet>
        </main>

        <footer className="bg-bgd">
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};

export default AppLayout;
