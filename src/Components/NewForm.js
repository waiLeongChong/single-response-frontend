import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';
import "./NewForm.css"

const API = process.env.REACT_APP_API_URL;

function NewForm() {
  let navigate = useNavigate();

  const addMovie = (newMovie) => {
    axios
      .post(`${API}/movies`, newMovie)
      .then(() => {
        alert("Movie added");
        navigate(`/movies`);
      })
      .catch((error) => {
        console.error(error);
        alert("error adding movie.");
      });
  };

  const [movie, setMovie] = useState({
    title: "",
    image_url: "",
    release_date: "",
    box_office: 0,
    rating: 0
  });

  const handleInputChange = (event) => {
    setMovie({ ...movie, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMovie(movie);
  };

  return (
    <Container className="my-5 col-md-6">
      <Form onSubmit={handleSubmit} className="text-main form-border p-5">
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" value={movie.title} onChange={handleInputChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="release_date">
          <Form.Label>Release Date:</Form.Label>
          <Form.Control type="date" value={movie.release_date} onChange={handleInputChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="box_office">
          <Form.Label>Box Office (in millions):</Form.Label>
          <Form.Control type="number" step="0.001" value={movie.box_office} onChange={handleInputChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rating">
          <Form.Label>Rating:</Form.Label>
          <Form.Control type="number" step="0.1" min="0" max="5" value={movie.rating} onChange={handleInputChange} required />
        </Form.Group>

        <Form.Group className="mb-5" controlId="image_url">
          <Form.Label>Image URL:</Form.Label>
          <Form.Control 
            type="url" 
            required 
            value={movie.image_url} 
            placeholder="http://example.com/image.jpg" 
            onChange={handleInputChange} 
          />
        </Form.Group>

        <Button type="submit" className="btn-bg-main new-btn">Add New Movie</Button>
      </Form>
    </Container>
  );
}

export default NewForm;
