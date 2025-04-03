import React from 'react';
import './Home.css';

const About = () => {
  return (
    <div className="page-container about-page">
      <div className="content-wrapper">
        <h1 className="page-title">About BookHaven</h1>
        
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            BookHaven began in 2024 with a simple mission: to connect book lovers with their next great read. 
            What started as a small online store has grown into a vibrant community of readers, authors, and book enthusiasts.
          </p>
          <p>
            We believe that books have the power to transform lives, open minds, and build bridges between different cultures and perspectives.
            Our platform is dedicated to making books accessible, affordable, and enjoyable for everyone.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            At BookHaven, we envision a world where everyone has access to the books they love. We're committed to:
          </p>
          <ul className="vision-list">
            <li>Providing a vast selection of books across all genres and categories</li>
            <li>Supporting both established and emerging authors</li>
            <li>Creating a sustainable platform for pre-owned books</li>
            <li>Building a community where book recommendations and discussions thrive</li>
            <li>Making reading accessible to all through competitive pricing and various formats</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {/* <div className="team-member">
              <div className="team-photo placeholder"></div>
              <h3>Ravi Kumar</h3>
              <p>Founder & CEO</p>
            </div> */}
            <div className="team-member">
              <div className="team-photo placeholder"></div>
              <h3>Hinal Simariya</h3>
              <p>Head of Operations</p>
            </div>
            <div className="team-member">
              <div className="team-photo placeholder"></div>
              <h3>Taher Tinwala</h3>
              <p>Chief Technology Officer</p>
            </div>
            <div className="team-member">
              <div className="team-photo placeholder"></div>
              <h3>Achyut Detroja</h3>
              <p>Content Curator</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 style={{color: "#e67e22"}}>Join Our Journey</h2>
          <p>
            BookHaven is more than just an online bookstore—it's a growing community of book lovers. 
            We invite you to join us on this exciting journey as we continue to expand our collection, 
            improve our services, and foster a love for reading across the globe.
          </p>
          <p>
            Have questions or suggestions? We'd love to hear from you! Reach out to us at 
            <a href="mailto:tahermt13@gmail.com"> tahermt13@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About; 