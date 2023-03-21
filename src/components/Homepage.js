import React, { useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import background from "./pgbg.png";
import Display from "./Display";
import { useNavigate } from "react-router-dom";


function Homepage() {
  const [showModal, setShowModal] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate= useNavigate();

  const handleSignupClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSignupChange = (event) => {
    const { name, value } = event.target;
    setSignupData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // validate login data here
    console.log("Login form submitted!", loginData);
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // validate signup data here
    console.log("Signup form submitted!", signupData);
  };

  return (
    <div className="container">
      <div className="study-spot">
        <h1>The Study Spot</h1>
      </div>
      <div className="form-container">
        <form className="form" onSubmit={handleLoginSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={loginData.username}
            onChange={handleLoginChange}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
          
          <button onClick={()=>navigate("/Display")}>Login</button>
          
          <p>New user?</p>
          <button type="button" onClick={handleSignupClick}>

            Signup
          </button>
        </form>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <h2>Signup</h2>
            <form onSubmit={handleSignupSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={signupData.name}
                onChange={handleSignupChange}
                required
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={signupData.email}
                onChange={handleSignupChange}
                required
              />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={signupData.password}
                onChange={handleSignupChange}
                required
              />
              <button type="submit">Signup</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;