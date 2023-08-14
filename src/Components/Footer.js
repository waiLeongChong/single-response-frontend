import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer-bg text-white py-5">
      <Container className="border-top border-warning">
        <Row className="mt-5">
          <Col md={6}>
            <h5>About</h5>
            <p>
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo 
              eiusmod tempor.There are many variations of passages of 
              lorem Ipsum available, but the majority have suffered alteration in some injected humour.
            </p>
          </Col>

          <Col md={3}>
            <h5>Silis Kleemoff</h5>
            <a href="https://github.com/KleemoffDeveloper" target="_blank" rel="noopener noreferrer" className="me-2">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/silis-kleemoff/" target="_blank" rel="noopener noreferrer" className="me-2">
              <i className="bi bi-linkedin"></i>
            </a>
          </Col>

          <Col md={3}>
            <h5>Wai Leong Chong</h5>
            <a href="https://github.com/waiLeongChong" target="_blank" rel="noopener noreferrer" className="me-2">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/wai-leong-chong/" target="_blank" rel="noopener noreferrer" className="me-2">
              <i className="bi bi-linkedin"></i>
            </a>
          </Col>
        </Row>

        <Row className="pt-3 mt-4">
          <Col>
            <p className="mb-0"><span className="text-main">© 2023 Pikaflx</span> All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
