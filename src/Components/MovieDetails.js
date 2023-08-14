import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';
import './MovieDetails.css';

const API = process.env.REACT_APP_API_URL;

function MovieDetails() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [id, navigate]);


  const deleteMovie = () => {
    axios
      .delete(`${API}/movies/${id}`)
      .then(() => {
        navigate("/movies");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Container className="my-5 py-4">
      <Row className="justify-content-center">
        <Col md={4} className="offset-md-1">
          <Image src={movie.image_url} alt={movie.title} fluid rounded />
        </Col>

        <Col md={6}>
          <Card  className="card-body-bg text-white border-0 ">
            <Card.Header as="h2" className="fs-1 fw-bold border-bottom border-warning">{movie.title}</Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Text className="fs-6 ">            
                  <span className="fw-bold text-main">
                    <i className="bi bi-star-fill me-1 text-main fs-6"></i>
                  </span>{movie.rating}            
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold text-main">
                    <i className="bi bi-calendar3 fs-6"></i>
                  </span> {movie.release_date}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold text-main">
                    <i className="bi bi-film fs-6"></i>
                  </span> {movie.box_office}
                </Card.Text>
              </div>
              <Card.Body> 
                <p>
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo 
                  eiusmod tempor.There are many variations of passages of 
                  lorem Ipsum available, but the majority have suffered alteration in some injected humour.
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo 
                  eiusmod tempor.There are many variations of passages of 
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo 
                  eiusmod tempor.There are many variations of passages of 
                  lorem Ipsum available, but the majority have suffered alteration in some injected humour.
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo 
                  eiusmod tempor.There are many variations of passages of 
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo 
                  eiusmod tempor.There are many variations of passages of 
                  lorem Ipsum available, but the majority have suffered alteration in some injected humour.
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo 
                  eiusmod tempor.There are many variations of passages of 
                </p>
              </Card.Body>
              
              <Button className="btn-bg-main details-btn" onClick={() => navigate("/movies")}>Back</Button>
              <Button className="btn-bg-main mx-2 details-btn" onClick={() => navigate(`/movies/${id}/edit`)}>Edit</Button>
              <Button className="btn-bg-main details-btn" onClick={deleteMovie}>Delete</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetails;