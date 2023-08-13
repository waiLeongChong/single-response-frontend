import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function NavBar() {
  return (
    <Navbar bg="dark">
      <Container className="py-3">
        <Navbar.Brand as={Link} to="/" className="fs-2 fw-bold text-main-hover">
          <img
              src={`${process.env.PUBLIC_URL}/film-logo-gold.svg`}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="film-logo"
            />{' '}
            Pikaflx
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/movies" className="text-main-hover">Movies List</Nav.Link>
        </Nav>
        
        <Button className="btn-outline-main-color">
          <Nav.Link as={Link} to="/movies/new">ADD NEW MOVIE</Nav.Link>
        </Button>

      </Container>
    </Navbar>
  );
}


export default NavBar;