import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';

import "./EditFrom.css"

const API = process.env.REACT_APP_API_URL;

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({
    title: "",
    image_url: "",
    release_date: "",
    box_office: 0,
    rating: 0,
  });

  useEffect(() => {
    axios
      .get(`${API}/movies/${id}`)
      .then((response) => {
        const data = response.data;
        if (data.release_date) {
          data.release_date = dateFormatInput(data.release_date);
        }
        setMovie(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  

  const handleInput = (event) => {
    setMovie({
      ...movie,
      [event.target.id]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/movies/${id}`, movie)
      .then(() => {
        navigate(`/movies/${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const dateFormatInput = (dateStr) => {
    const [month, day, year] = dateStr.split('/');
    return `${year}-${month}-${day}`;
  };

  return (
    <Container className="my-5 p-5">
      <Form onSubmit={handleSubmit} className="text-main">
        <Row className="justify-content-center">
          <Col md={4}>
            <Image src={movie.image_url} alt={movie.title} className="movie-edit-image mb-4" />
          </Col>
          
          <Col md={8}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title:</Form.Label>
              <Form.Control type="text" value={movie.title} onChange={handleInput} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="release_date">
              <Form.Label>Release Date:</Form.Label>
              <Form.Control type="date" value={movie.release_date} onChange={handleInput} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="box_office">
              <Form.Label>Box Office:</Form.Label>
              <Form.Control type="number" value={movie.box_office} onChange={handleInput} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rating">
              <Form.Label>Rating:</Form.Label>
              <Form.Control type="number" value={movie.rating} onChange={handleInput} required />
            </Form.Group>

            <Form.Group controlId="image_url" className="mb-4">
              <Form.Label>Image URL:</Form.Label>
              <Form.Control 
                type="url" 
                value={movie.image_url} 
                onChange={handleInput} 
                placeholder="http://example.com/image.jpg"
                required 
              />
            </Form.Group>
            <Button type="submit" className="btn-bg-main edit-btn" size="lg">Save and Change</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
export default Edit;

