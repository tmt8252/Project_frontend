import React, { useState } from 'react';
import fictionImage from "../Assets/fiction.jpg";
import nonFictionImage from "../Assets/non-fiction.jpg"
import lib from "../Assets/lib.jpg"
import footerImg from "../Assets/footer.jpg"
import './Home.css'
import BookSlider from './BookSlider';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigateFiction = useNavigate()
  const navigateNonFiction = useNavigate()
  const navigateChildren = useNavigate()

  const handleFiction = () => {
    navigateFiction("/Fiction")
  }
  const handleNonFiction = () => {
    navigateNonFiction("/Non-Fiction")
  }
  const handleChildren = () => { 
    navigateChildren("/Children")
  }

  return (
    <>
      <div className="hero-container">
        {/* Overlay for better readability */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div className="hero-content">
          <h1 className="hero-title">Escape Into the Pages</h1>
          <p className="hero-subtitle">
            Explore our vast collection of books and find stories that will
            transport you to new worlds.
          </p>
          <button className="hero-button">Shop Now →</button>
        </div>
      </div>

      <div className="app-container">
        <BookSlider />
      </div>
      <div className="container">
        <div className="text-center">
          <h1 className="title">Explore our book categories</h1>
          <div className="categories">
            {/* Fiction */}
            <div className="category-card" onClick={handleFiction}>
              <div className="image-container">
                <img
                  src={fictionImage}
                  alt="Fiction"
                  className="category-image"
                />
              </div>
              <h2 className="category-title">Fiction</h2>
              <p className="category-description">
                Delve into our extensive collection of fiction books that transport
                you to different worlds and introduce you to unforgettable
                characters.
              </p>
            </div>

            {/* Non-Fiction */}
            <div className="category-card" onClick={handleNonFiction}>
              <div className="image-container">
                <img
                  src={nonFictionImage}
                  alt="Non-Fiction"
                  className="category-image"
                />
              </div>
              <h2 className="category-title">Non-Fiction</h2>
              <p className="category-description">
                Discover insightful non-fiction titles that inform and inspire,
                covering a wide range of topics from history to self-improvement.
              </p>
            </div>

            {/* Children's Books */}
            <div className="category-card" onClick={handleChildren}>
              <div className="image-container">
                <img
                  src={lib}
                  alt="Children's Books"
                  className="category-image"
                />
              </div>
              <h2 className="category-title">Children's Books</h2>
              <p className="category-description">
                Nurture a love for reading in young minds with our delightful
                selection of children's literature, filled with adventure and
                imagination.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact details aka Footer */}
      <div className="contact-container">
        <div className="contact-content">
          <div className="image-section">
            <img
              src={footerImg}
              alt="Bookshelf"
              className="contact-image"
            />
          </div>
          <div className="form-section">
            <h1 className="form-title">GET IN TOUCH WITH US</h1>
            <p className="form-description">
              We would love to hear from you! Feel free to reach out for any inquiries.
            </p>

            <form className="contact-form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name here" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email here" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your message here" required></textarea>

              <button type="submit" className="submit-button">
                Send message
              </button>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home;