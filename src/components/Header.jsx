import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import sections from '../utility/sections';

const Header = () => {
  return (
    <div className="header-card">
      <Navbar collapseOnSelect expand="lg" fixed="top" data-bs-theme="dark" bg="black">
        <Container fluid>
          <Navbar.Brand href="#home"><img src="/icon.ico" width="40" height="40" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              {
                sections.map((section) => (
                  <Nav.Link href={`#${section?.href}`} key={section?.label}>{section?.label}</Nav.Link>
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;