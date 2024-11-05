import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">BIPOC Directory</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="/category/food">Food</NavDropdown.Item>
                <NavDropdown.Item href="/category/wellness">Wellness</NavDropdown.Item>
                <NavDropdown.Item href="/category/retail">Retail</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/all-categories">All Categories</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="my-4">
        {children}
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-5">
        <Container>
          <p>&copy; {new Date().getFullYear()} BIPOC Directory. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default MainLayout;
