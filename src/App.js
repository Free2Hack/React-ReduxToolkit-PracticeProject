import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import MovieDetail from "./component/MovieDetail/MovieDetail";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import PageNotFound from "./component/PagenotFound/Pagenotfound";
import Login from "./component/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.login.login);
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
          {data ? (
            <Login />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:imdbID" element={<MovieDetail />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          )}
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
