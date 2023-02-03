import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components";
import { Footer } from './components';
import Home from "./pages/Home";
import Clases from "./pages/Clases";
import Bio from "./pages/Bio";
import Info from "./pages/Info";
import Contacto from "./pages/Contacto";

import "../src/styles/style.css";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/Home"  />
        <Route element={<Clases />} path="/Clases"  />
        <Route element={<Bio />} path="/Bio" />
        <Route element={<Info />} path="/Info"  />
        <Route element={<Contacto />}path="/Contacto"  />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
