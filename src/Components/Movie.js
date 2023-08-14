import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import { format } from "date-fns";
import "./Movie.css"

function Movie({ movie, index }) {
  
  function formatDate(dateStr) {
    try {
      return format(new Date(dateStr), "MM/dd/yyyy");
    } catch(error) {
      console.error(dateStr, error);
      return dateStr; 
    }
  }

  return (
    <Card className="mb-5 border-0">
      <Link to={`/movies/${movie.id}`} className="card-img-hover">
        <Card.Img variant="top" src={movie.image_url} alt={movie.title} />
        <div className="img-overlay">
          <button className="btn btn-primary detail-btn">Details</button>
        </div>
      </Link>

      <Card.Body className="card-body-bg text-white">
        <div className="d-flex justify-content-between">
          <Card.Title>
            <h4  className="fs-5 fw-bold">{movie.title}</h4>
          </Card.Title>
        </div>

        <div className="d-flex justify-content-between">
          <Card.Text>
              <span className="fw-bold text-main">
                <i className="bi bi-star-fill me-1 text-main fs-6"></i>
              </span>{movie.rating}            
            </Card.Text>

          <Card.Text>
            <span className="fw-bold text-main">
              <i className="bi bi-film fs-6"></i>
            </span> {movie.box_office}
          </Card.Text>
          <Card.Text>
            <span className="fw-bold text-main">
              <i className="bi bi-calendar3 fs-6"></i>
            </span> {formatDate(movie.release_date)}
          </Card.Text>
        </div>
        
      </Card.Body>
    </Card>

  );
}

export default Movie;



