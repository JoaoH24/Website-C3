import "./App.css";
import Field from "./components/molecules/Field";
import PrimaryButton from "./components/atoms/PrimaryButton";
import SecondaryButton from "./components/atoms/SecondaryButton";
import Text from "./components/atoms/Text";
import Heading from "./components/atoms/Heading";
import Link from "./components/atoms/Link";
import ProfileImage from "./components/atoms/ProfileImage";
import Dots from "./components/molecules/Dots";
import Navbar from "./components/organisms/Navbar";
import Home from "./components/pages/Home";
import PanelForm from "./components/organisms/PanelForm";
import CarouselItem from "./components/molecules/CarouselItem";

import PathImage from "./assets/images/perfil.jpeg";

function App() {
  return (
    <>
      {/*       <CarouselItem
        phraseProfile={
          '"La ciberseguridad no es solo técnica, es cultura, es comunidad, es visión compartida"'
        }
        pathProfileImage={PathImage}
        descriptionProfile={
          "Especialista en ciberseguridad con 10 años de experiencia"
        }
        rolProfile={"President"}
        nameProfile={"Francis Joao Cruz Huaman"}
      ></CarouselItem> */}

      <Home></Home>
    </>
  );
}

export default App;
