import React, { useState, useEffect } from "react";
import axiosApi from "../../common/apis/MovieApis";
import { Apikey } from "../../common/apis/MovieApiKey";
import Movielisting from "../MovieListing/Movielisting";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../../features/MovieSlice";
import { movieApi, showsApi } from "../../features/MovieSlice";
import { useLocation } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import './Home.scss'

const Home = () => {
  const dispatch = useDispatch();
  const loadingCheck = useSelector((state) => state);
  console.log(loadingCheck);
  const location = useLocation();
  const movieDefault =
    location && location.state && location.state.searchData
      ? location.state.searchData
      : "Harry";
  const showDefault =
    location && location.state && location.state.searchData
      ? location.state.searchData
      : "Friends";
  const asyncApiDispatch = () => {
    dispatch(movieApi(movieDefault));
    dispatch(showsApi(showDefault));
  };
  useEffect(() => {
    console.log("CHECK");
    asyncApiDispatch();
  }, [dispatch]);
  return (
    <>
      {loadingCheck && loadingCheck.movies && loadingCheck.movies.loading ? (
        <div className="loader">
        <BeatLoader
          loading={loadingCheck.movies.loading}
          size="24px"
          color="white"
        />
        </div>
      ) : (
        <Movielisting />
      )}
    </>
  );
};

export default Home;
