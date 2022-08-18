import React from "react";
import "./Moviecard.scss";
import { Link } from "react-router-dom";

const Moviecard = (props) => {
  const data = props.data;

  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="card-footer">
          <div className="card-date">{data.Year}</div>
        </div>
        <div className="card-bottom">
          <div className="card-info">{data.Title}</div>
        </div>
       
      </div>
      </Link>
    </div>
  );
};

export default Moviecard;
