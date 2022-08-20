import React, { useReducer } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { loginAction, usernameAction } from "../../features/LoginSlice";
import "./Login.scss";
import {useNavigate} from 'react-router-dom'

const formData = {
  username: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "username": {
      return { ...state, username: action.payload };
    }
    case "password": {
      return { ...state, password: action.payload };
    }
    default: {
      return state;
    }
  }
};

const Login = () => {
  const [data, dispatchForm] = useReducer(reducer, formData);
  const showModal = useSelector((state) => state.login.login);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.username && data.password) {
      dispatch(usernameAction(data.username));
      dispatch(loginAction())
    }
  };
  return (
    <div className="login-box">
      <div className="login-container">
        <div className="form-name">
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputField">
            <label htmlFor="username">Username</label>
            <input
              type={"text"}
              id="username"
              placeholder="Enter Username"
              value={data.username}
              onChange={(e) =>
                dispatchForm({ type: "username", payload: e.target.value })
              }
            />
          </div>
          <div className="inputField">
            <label htmlFor="password">Password</label>
            <input
              type={"text"}
              id="password"
              placeholder="Enter Password"
              value={data.password}
              onChange={(e) =>
                dispatchForm({ type: "password", payload: e.target.value })
              }
            />
          </div>
          <div className="submitButton">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
