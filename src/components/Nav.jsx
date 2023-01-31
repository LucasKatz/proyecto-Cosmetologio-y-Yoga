import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import "../components/Nav.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" className="navegador" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              className="logo"
              src="https://res.cloudinary.com/dew1za4wz/image/upload/v1674251802/plants/logo_ktpfxw.png"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <div className="contenedorLinks">
              <NavLink as={Link} className="Link" to="/">
                Home
              </NavLink>
              <NavLink as={Link} className="Link" to="/Clases">
                Clases
              </NavLink>
              <NavLink as={Link} className="Link" to="/Bio">
                Bio
              </NavLink>
              <NavLink as={Link} className="Link" to="/Info">
                Info
              </NavLink>
              <NavLink as={Link} className="Link" to="/Contacto">
                Contacto
              </NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
