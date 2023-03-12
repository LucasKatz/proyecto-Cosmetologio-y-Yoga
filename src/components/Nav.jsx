import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

/* Este es el nav original sin el efecto active bolder */

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect className="navegador" expand="lg">
      <Container>
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
          <Nav className="linkConteiner">
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
  );
}

export default CollapsibleExample;
