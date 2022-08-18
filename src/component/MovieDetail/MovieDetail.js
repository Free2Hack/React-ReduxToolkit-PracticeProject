import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { movieOrShowDetail, clearImdbData } from "../../features/MovieSlice";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const detail = useSelector((state) => state.movies.details);

  useEffect(() => {
    dispatch(movieOrShowDetail(imdbID));
    return () => {
      dispatch(clearImdbData());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(detail).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{detail.Title}</div>
            <div className="movie-rated">Rated : {detail.Rated}</div>
            <div className="movie-rating">
              <div>
                IMDB rating <span className="fa fa-star"></span>:{" "}
                {detail.imdbRating}
              </div>
              <div>
                IMDB Votes <span className="fa fa-thumbs-up"></span>:{" "}
                {detail.imdbVotes}
              </div>
              <div>
                Runtime <span className="fa fa-film"></span>: {detail.Runtime}
              </div>
              <div>
                Year <span className="fa fa-calendar"></span>: {detail.Year}
              </div>
            </div>
            <div className="movie-plot">{detail.Plot}</div>
            <div className="movie-infodetails">
              <div>
                <span>Cast</span>
                <span>{detail.Actors}</span>
              </div>
              <div>
                <span>Genre</span>
                <span>{detail.Genre}</span>
              </div>
              <div>
                <span>Director</span>
                <span>{detail.Director}</span>
              </div>
              <div>
                <span>Writer</span>
                <span>{detail.Writer}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{detail.Awards}</span>
              </div>
              <div>
                <span>Language</span>
                <span>{detail.Language}</span>
              </div>
              <div>
                <span>Country</span>
                <span>{detail.Country}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={detail.Poster} alt={detail.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
