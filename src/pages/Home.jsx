import React, { useState } from 'react';
import fictionImage from "../Assets/fiction.jpg";
import nonFictionImage from "../Assets/non-fiction.jpg"
import lib from "../Assets/lib.jpg"

import './Home.css'
const Home = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="title">Explore our book categories</h1>
        <div className="categories">
          {/* Fiction */}
          <div className="category-card">
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
          <div className="category-card">
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
          <div className="category-card">
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
  )
}

export default Home;