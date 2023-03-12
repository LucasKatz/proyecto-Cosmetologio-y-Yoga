import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

/* Este Navbar tiene el efecto active bolder al seleccionar una pagina, falta agregar la imagen del fondo del burger navbar */

function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="ligth"
        className="navegador"
        expand="lg"
        variant="ligth"
      >
        <Container className="d-flex justify-content-around p-1">
          <Navbar.Brand href="#home">
            <img
              alt="React Bootstrap logo"
              className="d-inline-block align-top"
              height="56"
              src="https://res.cloudinary.com/dew1za4wz/image/upload/v1674251802/plants/logo_ktpfxw.png"
              width="56"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="btnConteiner" id="responsive-navbar-nav">
            <Nav
              className="linkConteiner"
              style={{ fontWeight: "bold", fontSize: "24px" }}
            >
              <NavLink
                className={({ isActive }) => {
                  return (
                    "isNotActive block px-3 py-2 rounded-md text-base font-medium no-underline " +
                    (!isActive ? " text-gray-300 " : "active")
                  );
                }}
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return (
                    "isNotActive block px-3 py-2 rounded-md text-base font-medium no-underline " +
                    (!isActive
                      ? " text-gray-300 hover:bg-gray-700 hover:text-white"
                      : "active")
                  );
                }}
                to={"/Bio"}
              >
                Bio
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return (
                    "isNotActive block px-3 py-2 rounded-md text-base font-medium no-underline " +
                    (!isActive
                      ? " text-gray-300 hover:bg-gray-700 hover:text-white"
                      : "active")
                  );
                }}
                to={"/Clases"}
              >
                Clases
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return (
                    "isNotActive block px-3 py-2 rounded-md text-base font-medium no-underline " +
                    (!isActive
                      ? " text-gray-300 hover:bg-gray-700 hover:text-white"
                      : "active")
                  );
                }}
                to={"/Info"}
              >
                Info
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return (
                    "isNotActive block px-3 py-2 rounded-md text-base font-medium no-underline " +
                    (!isActive
                      ? " text-gray-300 hover:bg-gray-700 hover:text-white"
                      : "active")
                  );
                }}
                to={"/Contacto"}
              >
                Contacto
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
