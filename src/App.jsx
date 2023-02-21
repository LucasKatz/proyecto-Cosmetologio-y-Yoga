import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer, NavBar } from "./components";
import Bio from "./pages/Bio";
import Clases from "./pages/Clases";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Talleres from "./pages/Talleres";
import Yoga from "./pages/Yoga";

import "../src/styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Clases />} path="/Clases" />
        <Route element={<Bio />} path="/Bio" />
        <Route element={<Info />} path="/Info" />
        <Route element={<Contacto />} path="/Contacto" />
        <Route element={<Yoga />} path="/Yoga" />
        <Route element={<Talleres />} path="/Talleres" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
