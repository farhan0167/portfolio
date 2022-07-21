import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap'
import styled from 'styled-components'

function NavBar() {
  return (
    <Styles>
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">AFI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link className='nav-link-text' href="#home">Home</Nav.Link>
                <Nav.Link className='nav-link-text' href="#link">Projects</Nav.Link>
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
}
.navbar-brand{
    font-size:23px;
    font-weight:900;
}
.nav-link{
    margin-left: 10px;
}


`

export default NavBar;