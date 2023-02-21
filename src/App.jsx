import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer, NavBar } from "./components";

import "../src/styles/style.css";
import { Bio, Clases, Contacto, Home, Info, Talleres, Yoga } from "./pages";

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
