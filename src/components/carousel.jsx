'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const fallbackImage = '/placeholder.png'; // Imagen de respaldo en caso de error

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [validImages, setValidImages] = useState([]);

  useEffect(() => {
    if (images.length === 0) return;

    // Filtra las imágenes para omitir la primera y segunda imagen
    const filteredImages = images.slice(1, 7); // Empieza desde la tercera imagen y muestra hasta un máximo de 5

    // Verifica que al menos el primer item tenga una imagen válida
    setValidImages(filteredImages);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images]);

  // Manejar imágenes que no cargan correctamente
  const handleImageError = (index) => {
    setValidImages((prev) =>
      prev.map((img, i) => (i === index ? fallbackImage : img))
    );
  };

  if (validImages.length === 0) {
    return <p>No hay imágenes disponibles para mostrar.</p>;
  }

  return (
    <div className="carousel">
      <div
        className="carousel-images"
        style={{
          display: 'flex',
          transform: `translateX(${-currentIndex * 100}%)`,
          transition: 'transform 0.5s ease-in-out',
          alignItems: 'center',
          minHeight: '100%',
          maxHeight: '400px'
        }}
      >
        {validImages.map((image, index) => (
          <Image
            key={index}
            src={image || fallbackImage} // Usa la imagen de respaldo si no hay una imagen
            alt={`Imagen ${index + 1}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', flexShrink: 0, objectFit: 'cover' }}
            onError={() => handleImageError(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
