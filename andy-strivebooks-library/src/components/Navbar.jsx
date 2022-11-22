import { Navbar, Nav } from "react-bootstrap";

const CustomNavbar = () => (
  <Navbar
    className="customNavbar px-3"
    collapseOnSelect
    expand="lg"
    bg="dark"
    variant="dark"
  >
    <Navbar.Brand href="#home">
      <span>
        <img className="logo" src="books-logo.png" alt="library-logo" />
      </span>
      StriveBooks
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default CustomNavbar;
