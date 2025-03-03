'use client';
import React, { useState } from 'react';
import './myz.css';
import Image from 'next/image';
import NewsMod from '@/modulos/NewsMod';

const MuseosZonas = ({ myz }) => {
  const [showInfo, setShowInfo] = useState(null);

  const toggleInfo = (index) => {
    setShowInfo(showInfo === index ? null : index);
  };

  return (
    <div>
      <div className="banner-nosotros">
        <Image
          src="/Imagenes/Splash/1.jpg"
          width={1500}
          height={800}
          className="hidden md:block"
          alt="Imagen de museo o zona"
        />
      </div>
      <div className="myz-container">
        <div className="content">
          <button disabled className="info-button">
            Conoce nuestros sitios resguardados
          </button>

          {myz && myz.length > 0 ? (
            myz.map((item, index) => (
              <div key={item.id}>
                <h3
                  className="toggle-title"
                  onClick={() => toggleInfo(index)}
                >
                  {index + 1}. {item.nombre_myz}
                </h3>
                {showInfo === index && (
                  <div className="myz-info">
                    {item.imagen_myz && (
                      <img
                        src={item.imagen_myz.url}
                        alt={item.nombre_myz}
                        className="img-myz"
                      />
                    )}
                    {item.descripcion_myz && (
                      <p className="descripcion-myz">{item.descripcion_myz}</p>
                    )}
                    {item.ubicacion_myz && (
                      <p><strong>Ubicación:</strong> {item.ubicacion_myz}</p>
                    )}
                    {item.telefono_myz && (
                      <p><strong>Contacto:</strong> {item.telefono_myz}</p>
                    )}
                    {item.costo_myz && (
                      <p><strong>Costo:</strong> {item.costo_myz}</p>
                    )}
                    {item.url_myz && (
                      <p>
                        Conoce más <a target="_blank" href={item.url_myz} rel="noopener noreferrer">aquí</a>
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No hay sitios disponibles.</p>
          )}
        </div>

        {/* Módulo de noticias */}
        <NewsMod />
      </div>
    </div>
  );
};

export default MuseosZonas;
