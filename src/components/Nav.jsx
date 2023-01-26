import { Nav, Navbar, Navlink } from "react-bootstrap"
import {Link} from 'react-router-dom'



const NavBAr = () => {
  return (
<>
      <Navbar collapseOnSelect expand="sm" bg="dark" varian="dark">
        <Navbar.Toggle aria-aria-controls="navbarScroll" data-bs-target ="#navbarScroll" />
        <Navbar.Collapse className="navbarScroll">
        <Nav>
          <Navlink eventkey="1" as ={Link} to="/"> Home </Navlink>
          <Navlink eventkey="2" as ={Link} to="/clases"> Clases </Navlink>
          <Navlink eventkey="3" as ={Link} to="/bio"> Bio </Navlink>
          <Navlink eventkey="4" as ={Link} to="/info"> Info </Navlink>
          <Navlink eventkey="5" as ={Link} to="/contacto"> Contacto </Navlink>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
  )
  
}

export default NavBAr