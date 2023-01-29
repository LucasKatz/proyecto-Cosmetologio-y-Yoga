import { NavBar } from "./components";
import { Footer } from './components';
import Home from "./pages/Home";
import Clases from "./pages/Clases";
import Bio from "./pages/Bio";
import Info from "./pages/Info";
import Contacto from "./pages/Contacto";

import "../src/styles/style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clases" element={<Clases />} />
        <Route path="/Bio" element={<Bio />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Contacto" element={<Contacto />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
