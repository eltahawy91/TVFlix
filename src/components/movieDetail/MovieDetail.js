import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./movieDetail.scss";
import {
  fetchAsyncMovieShow,
  getSelectMovie,
  removeSelectedMoviesOrShow,
} from "../../features/movies/movieSlice";
import { Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const MovieDetail = () => {
  const params = useParams();
  console.log(params);
  const data = useSelector(getSelectMovie);
  // console.log(data.payload.movies.selectedFilm);
  var dataFilm = data.payload.movies.selectedFilm;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovieShow(params.imdbID));
    return () => {
      dispatch(removeSelectedMoviesOrShow());
    };
  }, [dispatch, params]);

  return (
    <>
      {Object.keys(data) === 0 ? (
        <div>no film founded</div>
      ) : (
        <>
          <Container>
            <Row>
              <Col
                lg={7}
                md={6}
                sm={12}
                className="section-left"
                style={{ marginTop: "80px" }}
              >
                <div className="movie-title">{dataFilm.Title}</div>
                <div className="movie-rating">
                  <span className="d-flex align-items-center gap-2">
                    Rating <FaStar className="fa-star" /> :{" "}
                    {dataFilm.imdbRating}
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    Votes <FaThumbsUp className="fa fa-thumbs-up" /> :{" "}
                    {dataFilm.imdbVotes}
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    Runtime <FaFilm className="fa fa-film" /> :{" "}
                    {dataFilm.Runtime}
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    Year <FaCalendarAlt className="fa fa-calendar" /> :{" "}
                    {dataFilm.Year}
                  </span>
                </div>
                <div className="movie-plot text-white">{dataFilm.Plot}</div>
                <div className="movie-info">
                  <div>
                    <span>Director</span>
                    <span>{dataFilm.Director}</span>
                  </div>
                  <div>
                    <span>Stars</span>
                    <span>{dataFilm.Actors}</span>
                  </div>
                  <div>
                    <span>Generes</span>
                    <span>{dataFilm.Genre}</span>
                  </div>
                  <div>
                    <span>Languages</span>
                    <span>{dataFilm.Language}</span>
                  </div>
                  <div>
                    <span>Awards</span>
                    <span>{dataFilm.Awards}</span>
                  </div>
                </div>
              </Col>
              <Col
                lg={5}
                md={6}
                sm={12}
                className="section-right text-center "
                style={{ marginTop: "80px" }}
              >
                <img
                  src={dataFilm.Poster}
                  alt={dataFilm.Title}
                  className="w-100 h-75"
                />
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default MovieDetail;
