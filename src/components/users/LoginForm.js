import React, { useState } from "react";
import "./LoginFormCSS.css";
import Avator from "./Avator";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const { isLogin, login } = useAuth();
  console.log(`isLoginisLoginisLogin`, isLogin);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [editUserName, SetEditUserName] = useState(false);
  const [editPwd, SetEditPwd] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission here
    console.log("Submitted: Username -", username, "Password -", password);
    login();
  };

  const isUserNameValid = editUserName && username.length < 5;
  const isPwdValid = editPwd && password.length < 6;
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    SetEditPwd(true);
  };

  const handleInputBlur = (indentifier) => {
    if (indentifier === "username") {
      SetEditUserName(true);
    }
    if (indentifier === "pwd") {
      SetEditUserName(true);
    }
  };

  return (
    <>
      {isLogin===true && <Navigate to="/home" replace={true} />}
      <form onSubmit={handleSubmit}>
        <div className="imgcontainer">
          <img src={Avator} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            onBlur={() => {
              handleInputBlur("username");
            }}
            onChange={handleUsername}
            required
          />
          {isUserNameValid && <span>Username must be at least 5 characters</span>}

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={password}
            onBlur={() => {
              handleInputBlur("pwd");
            }}
            onChange={handlePassword}
            required
          />
          {isPwdValid && <span>Password must be at least 6 characters</span>}
          <button
            type="submit"
            disabled={!isUserNameValid && !isPwdValid}
          >
            Login
          </button>
          <label>
            <input type="checkbox" defaultChecked name="remember" /> Remember me
          </label>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
