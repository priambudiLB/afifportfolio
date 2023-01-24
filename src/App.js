import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { HardSkills } from "./components/Skills";
import { SoftSkills } from "./components/Skills";
import { Projectt } from "./components/Newpro";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <HardSkills />
      <SoftSkills />
      <Projectt />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
