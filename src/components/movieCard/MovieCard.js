import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.scss";
import { Col } from "react-bootstrap";
const MovieCard = (props) => {
  
  return (
    <>
      
        <Col className="card-item" lg={3} md="auto">
          <Link to={`/movie/${props.data.imdbID}`} className="text-decoration-none">
            <div className="card-inner">
              <div className="card-top">
                <img src={props.data.Poster} alt={props.data.Title} />
              </div>
              <div className="card-bottom">
                <div className="card-info">
                  <h4>{props.data.Title}</h4>
                  <p>{props.data.Year}</p>
                </div>
              </div>
            </div>
          </Link>
        </Col>
     
    </>
  );
};

export default MovieCard;
