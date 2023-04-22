import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Latest from "./Latest";
import {useNavigate } from "react-router-dom";
import Publish from "./Publish";
import { useState, useEffect } from 'react';
import axios from 'axios';





function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
	
    navigate("/login");

	};

  const handleClick = () => {
    navigate('/Publish');
  }


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
         
            <button className="navbuton"  onClick={handleLogout}>
              <b>Logout</b>
            </button>
        </li>
        <div>
        <button className="publish" onClick={handleClick}>Publish article!</button>
      </div>
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
function ArticlesList(){
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/article')
      .then(response => {
        if(Array.isArray(response.data)){

        
        setArticles(response.data);
        }else{
          console.error("Response data is not an array",response.data)
        }
      })
      .catch(error => {
        console.error('Error retrieving articles', error);
      });
  }, []);

  return (
    <div>
      {articles.map((article)=>(
        <div key={article._id} className="article-box">
          <h3>{article.title}</h3>
          <p>category:{article.category}</p>
          <p>{article.article}</p>
          </div>
      ))}
    </div>
  );
}

function Display() {
  return (
    <>
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" exact element={<About />} />
            <Route path="/Contact" exact element={<Contact />} />
            <Route path="/Latest" exact element={<Latest />} />
            <Route path="/Publish" exact element={<Publish />} />
          </Routes>
    
      
      
      <div className="display">
        <Navbar />
          <div className="content">
            <div className="sidebar-and-articles-container">
              <Sidebar />
              <ArticlesList />
            </div>
          </div>
      </div>
    </>
  );
}
export default Display;
