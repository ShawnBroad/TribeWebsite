import React from 'react'; 
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import Logo from "../assets/tribelogo.jpg";


const Nav1 = () => {
    return(
    <Navbar bg="navbar" expand="lg">
  <Container>
    <Navbar.Brand href="/"><Image className='logo' src={Logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="./">Home</Nav.Link>
        <Nav.Link href="./aboutus">About Us</Nav.Link>
        <NavDropdown title="Learn More" id="basic-nav-dropdown">
          <NavDropdown.Item href="./artists">Artists</NavDropdown.Item>
          <NavDropdown.Item href="./piercers">Piercers</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="./events">Events</NavDropdown.Item>
          <NavDropdown.Item href="./tattoorodeo">Tattoo Rodeo</NavDropdown.Item>
          <NavDropdown.Item href="./photolibrary">Photo Library</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="./contactus">Contact Us</Nav.Link>
        <Nav.Link href="./apply">Links for Artist</Nav.Link>
        <Nav.Link href="./sponsor">Become a Sponsor</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Nav1