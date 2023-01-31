import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Clases, Bio, Info, Contacto } from "./pages";
import { NavBar, Footer } from "./components";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Clases />} path="/" />
          <Route element={<Bio />} path="/" />
          <Route element={<Info />} path="/" />
          <Route element={<Contacto />} path="/" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
