import React from "react";
import "./styles.css";

function About() {
  return (
    <div className="aboutcontent">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are a team of passionate individuals
        dedicated to providing the best products and services for our customers.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to help our customers achieve their goals and improve
        their lives through our products and services. We strive to deliver the
        highest quality solutions and unparalleled customer service.
      </p>
      <h2>Our Team</h2>
      <ul>
        <li>John Doe - CEO</li>
        <li>Jane Smith - Marketing Manager</li>
        <li>Bob Johnson - Sales Representative</li>
      </ul>
      <h2>Testimonials</h2>
      <p>
        "This company changed my life! I am forever grateful for their products
        and services." - Sarah B.
      </p>
      <p>
        "The customer service team was incredibly helpful and attentive to my
        needs." - Alex T.
      </p>
    </div>
  );
}

export default About;
