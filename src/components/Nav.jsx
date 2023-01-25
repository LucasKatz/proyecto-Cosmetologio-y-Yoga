import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../components/Nav.css"


const NavBAr = () => {
  return (
<>
      <Navbar className='navegador' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand  href="#home"><img className='logo' src="https://res.cloudinary.com/dew1za4wz/image/upload/v1674251802/plants/logo_ktpfxw.png" alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <div className='contenedorLinks'>
            <Nav.Link className='Link' href="#home">Home</Nav.Link>
            <Nav.Link className='Link' href="#features">Clases</Nav.Link>
            <Nav.Link className='Link' href="#pricing">Bio</Nav.Link>
            <Nav.Link className='Link' href="#pricing">Info</Nav.Link>
            <Nav.Link className='Link' href="#pricing">Contacto</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
  
}

export default NavBAr

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
      <Nav.Link classNameName="link"href="#home">Home</Nav.Link> <br />
      <Nav.Link classNameName="link"href="#link">Clases</Nav.Link><br />
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