import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BookCard from "./BookCard.jsx"; // Import the BookCard component
import books from "./Book"; // Import the books array

const BookSlider = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through books
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of cards visible
    slidesToScroll: 1, // Scroll one card at a time
    autoplay: true, // Auto-slide enabled
    autoplaySpeed: 2000, // Slide every 2 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title">Trending Books</h2>
      <Slider {...settings}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Slider>
    </div>
  );
};

export default BookSlider;
