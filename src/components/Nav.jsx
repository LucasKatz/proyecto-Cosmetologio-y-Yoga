import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";


const NavBAr = () => {
  return (
    <>
      <Navbar >
        <Container>
          <Navbar.Brand className='logoContainer' href="#home" >
            <img
              alt="pp"
              className="logo"
              src="https://res.cloudinary.com/dew1za4wz/image/upload/v1674251802/plants/logo_ktpfxw.png"
            />
          </Navbar.Brand>
          <Nav className="navegador">
            <div className="contenedorLinks">
              <NavLink className="Link" to="/Home">
                Home
              </NavLink>
              <NavLink className="Link" to="/Clases">
                Clases
              </NavLink>
              <NavLink className="Link" to="/Bio">
                Bio
              </NavLink>
              <NavLink className="Link" to="/Info">
                Info
              </NavLink>
              <NavLink className="Link" to="/Contacto">
                Contacto
              </NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBAr;

/* <Navbar bg="light" expand="lg">

<img  
      alt=""
      classNameName="logo"
      src="https://res.cloudinary.com/dew1za4wz/image/upload/v1674251802/plants/logo_ktpfxw.png"
      srcSet=""
    />
    <Container classNameName='container'>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav classNameName="me-auto">
      <NavDropdown title="Menu" id="basic-nav-dropdown">
      <NavLink classNameName="link"href="#home">Home</NavLink> <br />
      <NavLink classNameName="link"href="#link">Clases</NavLink><br />
        <NavDropdown.Item classNameName="link" href="#action/3.1">Bio</NavDropdown.Item><br />
        <NavDropdown.Item classNameName="link"href="#action/3.2">
          Info
        </NavDropdown.Item><br />
        <NavDropdown.Item classNameName="link"href="#action/3.3">Contacto</NavDropdown.Item><br />
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
    </Container>
</Navbar>*/

