import React,{useState} from "react";
import logoImage from "../../images/user.jpg";
import { Link,useNavigate } from "react-router-dom";
import "./Header.scss";
import { movieApi,showsApi } from "../../features/MovieSlice";
import { useDispatch } from "react-redux";
import { loginAction } from "../../features/LoginSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [showModal,setShowModal]=useState(false)
  const [searchData,setSearchData]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(movieApi(searchData))
    dispatch(showsApi(searchData))
    navigate('/',{state:{searchData:searchData}})    
    setSearchData("")
  }
  const handleLoginClick=()=>{
   dispatch(loginAction())
  }
  const username=useSelector(state=>state.login.username)
  return (
    <div className="header">
      <div className="logo">
        <a href="/">Movie App</a>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search movies or shows" value={searchData} onChange={(e)=>setSearchData(e.target.value)} />
          <button type="submit">
            <span className="fa fa-search"></span>
          </button>
        </form>
      </div>
      {/* <div className="user-image">
        <img src={logoImage} alt="Logo" />
      </div> */}
      {!username ?<div className="Login">
        <button onClick={handleLoginClick}>Login</button>
      </div>:<h3 style={{color:"white"}}>{username} <small>...logged In</small></h3>}
    </div>
  );
};

export default Header;
