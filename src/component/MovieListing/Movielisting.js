import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/Moviecard";
import "./Movielisting.scss";
import Slider from "react-slick";
import { settings } from "../../common/settingsSlider";

const Movielisting = () => {
  const movieList = useSelector((state) => state.movies.movies);
  const showsList = useSelector((state) => state.movies.shows);
  const renderMovies =
    movieList && movieList.Response === "True" ? (
      movieList.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movieList && movieList.Error}</h3>
      </div>
    );

  const renderShows =
    showsList && showsList.Response === "True" ? (
      showsList.Search.map((shows, index) => (
        <MovieCard key={index} data={shows} />
      ))
    ) : (
      <div className="shows-error">
        <h3>{showsList && showsList.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container"><Slider {...settings}>{renderMovies}</Slider></div>
      </div>
      <div className="shows-list">
        <h2>Series</h2>
        <div className="shows-container"><Slider {...settings}>{renderShows}</Slider></div>
      </div>
    </div>
  );  
};

export default Movielisting;
