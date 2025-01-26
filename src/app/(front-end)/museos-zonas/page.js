'use client';

import React, { useEffect, useState } from 'react';
import './myz.css';
import NewsMod from '@/modulos/NewsMod';
import Image from 'next/image';

const MuseosZonas = () => {
  const [myz, setMyz] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showInfo, setShowInfo] = useState(null);
  const apiurl = '/api/museos-zona';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(apiurl);
        
        if (!res.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await res.json();
        // Extraemos solo los datos relevantes
        setMyz(data.docs); 
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleInfo = (index) => setShowInfo(showInfo === index ? null : index);

  return (
    <div>
      <div className="banner-nosotros">
        <Image
          src="/Imagenes/Splash/1.jpg"
          width={1500}
          height={800}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
      <div className="myz-container">
        <div className="content">
          <button disabled className="info-button">
            Conoce nuestros sitios resguardados
          </button>

          {/* Mostrar mensaje mientras se cargan datos */}
          {isLoading && <div>Cargando datos...</div>}
          {error && <div>Error al cargar datos: {error}</div>}

          {/* Renderizar datos si están disponibles */}
          {myz.map((item, index) => (
            <div key={item.id}>
              <h2 onClick={() => toggleInfo(index)}>
                {index + 1}. {item.nombre_myz}
              </h2>
              {showInfo === index && (
                <div>
                  {item.imagen_myz && (
                    <img
                      src={item.imagen_myz.url}
                      alt={item.nombre_myz}
                    />
                  )}
                  {/* Otros campos */}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* NewsMod siempre se renderiza */}
        <NewsMod />
      </div>
    </div>
  );
};

export default MuseosZonas;
