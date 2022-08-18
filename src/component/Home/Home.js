import React, { useState, useEffect } from "react";
import axiosApi from "../../common/apis/MovieApis";
import { Apikey } from "../../common/apis/MovieApiKey";
import Movielisting from "../MovieListing/Movielisting";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/MovieSlice";
import { movieApi, showsApi } from "../../features/MovieSlice";
import { useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  // const makeApi = async () => {
  //   const response = await axiosApi
  //     .get(`?apiKey=${Apikey}&s=${movieText}&type=${type}`)
  //     .catch((err) => console.log(err));
  //   console.log(response);
  //   dispatch(addMovies(response.data));
  // };
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
      <Movielisting />
    </>
  );
};

export default Home;
