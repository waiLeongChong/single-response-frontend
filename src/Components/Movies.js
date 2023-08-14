import axios from "axios";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import { Container, Row, Col } from 'react-bootstrap';


const API = process.env.REACT_APP_API_URL;

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/movies`)
      .then((response) => setMovies(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  
  return (
    <Container className="my-5">
      <Row>
        {movies.map((movie, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={movie.id}>
              <Movie movie={movie} index={index} />
            </Col>
          );
        })}
      </Row>
  </Container>
  );
}

export default Movies;

