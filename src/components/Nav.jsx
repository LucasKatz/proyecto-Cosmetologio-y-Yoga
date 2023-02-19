import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Navbar className='navegador' collapseOnSelect expand="lg" >
      <Container >
        <Navbar.Brand href="#home"> <img className='logo' src="https://res.cloudinary.com/dew1za4wz/image/upload/v1674251802/plants/logo_ktpfxw.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='btnConteiner' id="responsive-navbar-nav">
          <Nav className='linkConteiner'>
            <NavLink className='Link' to="/">Home</NavLink>
            <NavLink className='Link' to="/Bio">Bio</NavLink>
            <NavLink className='Link' to="/Clases">Clases</NavLink>
            <NavLink className='Link' to="/Info">Info</NavLink>
            <NavLink className='Link' to="/Contacto">Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;