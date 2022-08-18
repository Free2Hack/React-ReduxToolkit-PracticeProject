import React,{useState} from "react";
import logoImage from "../../images/user.jpg";
import { Link,useNavigate } from "react-router-dom";
import "./Header.scss";
import { movieApi,showsApi } from "../../features/MovieSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [searchData,setSearchData]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(movieApi(searchData))
    dispatch(showsApi(searchData))
    setSearchData("")
  }
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search movies or shows" value={searchData} onChange={(e)=>setSearchData(e.target.value)} />
          <button type="submit">
            <span className="fa fa-search"></span>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={logoImage} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
