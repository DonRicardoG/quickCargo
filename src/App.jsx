import Form from "./Components/ModalForm";
import Bienvenida from "./Components/Bienvenida";
import NavBar from "./Components/NavBar";
import Info from "./Components/info";
import Proceso from "./Components/Proceso";
import Conocenos from "./Components/Conocenos";
import Servicios from "./Components/Servicios";
import Contacto from "./Components/Contacto/Contacto";
import Map from "./Components/Map";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Form />
      <Bienvenida />
      <Proceso />
      <Info />
      <Conocenos />
      <Servicios />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
