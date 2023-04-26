import React from 'react';
import "./styles.css";



function About() {
  return (
    <div>
      <header>
        <h1 class="page-title">About Us</h1>
      </header>
      <main>
        <section id="mission">
          <h2 class="section-title">Our Mission</h2>
          <p class="section-description">
            Welcome to our website! We are a group of computer science students
            who are passionate about sharing our knowledge and experience with
            fellow students. As students ourselves, we understand the challenges
            that come with studying computer science and navigating the tech
            industry. That's why we created this website - to provide useful
            articles and resources that can help other students succeed in their
            studies and careers. Our goal is to offer proper guidance and support
            to help you reach your full potential. We hope you find our website
            helpful and informative, and we look forward to hearing from you!.
          </p>
        </section>
        <section id="team">
          <h2 class="section-title">Our Team</h2>
          <ul class="team-members">
            <li class="team-member">
              <div class="image-cropper">
                <img
                  alt="Team Member 1"
                  class="member-photo"
                />
              </div>
              <h3 class="member-name">Surya Teja Varma Mudunuru</h3>
              <p class="member-title"></p>
            </li>
            <li class="team-member">
              <img
                src="2nd.jpg"
                alt="Team Member 2"
                class="member-photo"
              />
              <h3 class="member-name">Javeed Mohammad</h3>
            </li>
          </ul>
        </section>
        <section id="contact">
          <h3 class="contact">Contact Us</h3>
          <p class="section-description">
            123 Main Street<br />Anytown, USA 12345<br />Phone:
            <span class="phone-number">555-555-5555</span><br />Email:
            <a href="mailto:info@company.com" class="email-address"
              >info@company.com</a
            >
          </p>
        </section>
      </main>
      <footer>
        <p class="copy-right">&copy; 2023 Company Name</p>
      </footer>
    </div>
  );
}

export default About;
