import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Latest from "./Latest";
import Profile from "./Profile";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <button className="navbuton">
              <b>Home</b>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/About">
            <button className="navbuton">
              <b>About us</b>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            <button className="navbuton">
              <b>Contact us</b>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/latest">
            <button className="navbuton">
              <b>Latest</b>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <button className="navbuton">
              <b>My profile</b>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Sidebar() {
  return (
    <div>
      <aside className="sidebar">
        <ul>
          <li>
            <Link to="/technology">
              <button className="buton">Technology</button>
            </Link>
          </li>
          <li>
            <Link to="/sports">
              <button className="buton">sports</button>
            </Link>
          </li>
          <li>
            <Link to="/entertainment">
              <button className="buton">entertainment</button>
            </Link>
          </li>
          <li>
            <Link to="/gaming">
              <button className="buton">gaming</button>
            </Link>
          </li>
          <li>
            <Link to="/research">
              <button className="buton">Research</button>
            </Link>
          </li>
          <li>
            <Link to="/history">
              <button className="buton">History</button>
            </Link>
          </li>
          <li>
            <Link to="/social-media">
              <button className="buton">Social media</button>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

function Display() {
  return (
    <>
      <div>
        <h1 className="head">
          <i>The Study Spot</i>
        </h1>
      </div>
      <div className="display">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Latest" element={<Latest />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
export default Display;
