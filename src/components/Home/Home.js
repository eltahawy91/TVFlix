import React, { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import { SliderData } from "../slider/SliderData";
import ImageSlider from "../slider/ImagesSlider";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <ImageSlider slides={SliderData} />

      <MovieListing  />
    </>
  );
};

export default Home;
