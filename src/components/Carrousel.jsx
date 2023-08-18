import React from 'react'
import { useState } from 'react';
import '../styles/Carrousel.css';
import data from '../data/Data.json'

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 4;
      return newIndex < 0 ? images.length - (Math.abs(newIndex) % images.length) : newIndex;
    });
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev}>Previous</button>
      <div className="image-container">
        {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

function Appp() {
  const imagePaths = [];
  {data.map((item)=> imagePaths.push(item.imgSrc)) }
  return (
    <div className="app">
      <h1>Image Carousel</h1>
      <ImageCarousel images={imagePaths} />
    </div>
  );
}

export default Appp;
