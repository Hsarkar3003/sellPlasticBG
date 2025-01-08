import React, { useState, useEffect } from 'react';
import './s.scss';

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'slide1.jpg',
    'slide2.jpg',
    'slide3.jpg',
    'gmini1.jpg',
    'gmini2.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500); // Change image every 2 seconds

    return () => clearInterval(intervalId); 
  }, []); 


  return (
    <div className="slider-container">
     
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />

    </div>
  );
};

export default Slider;