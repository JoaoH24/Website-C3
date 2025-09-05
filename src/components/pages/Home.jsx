import Navbar from "../organisms/Navbar";
import Banner from "../organisms/Banner";
import Footer from "../organisms/Footer";

const Home = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      <header className="w-full fixed">
        <Navbar></Navbar>
      </header>
      <main className="bg-amber-200">
        <Banner></Banner>
      </main>
      <footer className="bg-blue-400">
        <Footer></Footer>
        footer{" "}
      </footer>
    </div>
  );
};

export default Home;
