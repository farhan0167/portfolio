import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap'
import styled from 'styled-components'

function NavBar({navbarBackground}) {
  return (
    <Styles>
    <Navbar collapseOnSelect expand="lg" className='navigation' style={{
      'backgroundColor': navbarBackground,
      'transition': 'background-color 0.4s ease-in'
      }}>
          <Container>
            <Navbar.Brand href="#home">AFI</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse className='toggle-nav' id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link className='nav-link-text' href="#header-container">Home</Nav.Link>
                    <Nav.Link className='nav-link-text' href="#projects-container">Projects</Nav.Link>
                    <Nav.Link className='nav-link-text' href="#about-me">About Me</Nav.Link>
                    <Nav.Link className='nav-link-text' href="#skills">Skills</Nav.Link>
                    <Nav.Link className='nav-link-text' href="#about-me-container">Contact</Nav.Link>
                    <Nav.Link className='nav-link-text' href="https://blog.ahmadfarhanishraq.com/" target='_blank'>Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
    </Navbar>
    </Styles>
  );
}
const Styles = styled.div`

.nav-link-text{
    font-weight: 900;
    font-size: 15px;
    color: white;
}
.navbar-brand{
    font-size:23px;
    font-weight:900;
    color: white;
}
.nav-link{
    margin-left: 10px;
}


`

export default NavBar;