import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import { Container, Row } from "react-bootstrap";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies;
  var renderShows;

  if (
    movies &&
    movies.payload &&
    movies.payload.movies &&
    movies.payload.movies.data &&
    movies.payload.movies.data.Search
  ) {
    renderMovies =
      movies.payload.movies.data.Response === "True" ? (
        movies.payload.movies.data.Search.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))
      ) : (
        <p className="text-center d-block">No movies found</p>
      );
  } else {
    renderMovies = <p>Loading...</p>;
  }
  if (
    movies &&
    movies.payload &&
    movies.payload.movies &&
    movies.payload.movies.shows &&
    movies.payload.movies.shows.Search
  ) {
    renderShows =
      movies.payload.movies.shows.Response === "True" ? (
        movies.payload.movies.shows.Search.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))
      ) : (
        <p className="text-center d-block">No series found</p>
      );
  } else {
    renderShows = <p>Loading...</p>;
  }

  return (
    <>
      <Container className="text-white ">
        <Row className="g-3">
          {" "}
          <h2 className="text-white">Movies</h2>
          {renderMovies}
        </Row>
      </Container>
      <Container className="text-white mt-5">
        <Row className="g-3">
          <h2 className="text-white">Shows</h2>
          {renderShows}
        </Row>
      </Container>
    </>
  );
};

export default MovieListing;
