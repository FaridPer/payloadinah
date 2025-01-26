'use client'; // Esto es necesario porque usamos estado y efectos en React
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/Imagenes/Splash/1.jpg',
    '/Imagenes/Splash/2.jpg',
    '/Imagenes/Splash/3.jpg',
    '/Imagenes/Splash/4.jpg',
  ];

  // Cambiar imagen automáticamente cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, [images.length]);

  return (
    <div className="carousel">
      <div
        className="carousel-images"
        style={{
          display: 'flex',
          transform: `translateX(${-currentIndex * 100}%)`,
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
