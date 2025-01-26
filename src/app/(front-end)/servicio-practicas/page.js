'use client';
import React, { useState, useEffect } from 'react';
import './syp.css'; // Archivo de estilos
import Image from 'next/image';

const ServicioPracticas = () => {
  const apiurl = '/api/practias-servicio';
  const [programas, setProgramas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showProgramInfo, setShowProgramInfo] = useState(null);

  useEffect(() => {
    const fetchProgramas = async () => {
      try {
        const res = await fetch(apiurl);
        if (!res.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await res.json();
        setProgramas(data.docs);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProgramas();
  }, []);

  const toggleProgramInfo = (programName) => {
    setShowProgramInfo(showProgramInfo === programName ? null : programName);
  };

  return (
    <div>
      <div className="banner-nosotros">
        <Image
          src="/Imagenes/Splash/1.jpg"
          width={1500}
          height={800}
          className="hidden md:block"
          alt={'Noticia'}
        />
      </div>
      <div className="syp-container">
        <div className="content">
          <button disabled className="info-button-sp">¿Te gustaría realizar tu SS o PP con nosotros?</button>
          <div className="program-title">PROGRAMAS DE SERVICIO SOCIAL</div>

          <div className="program-details">
            {isLoading && <div>Cargando programas...</div>}
            {error && <div>Error: {error.message}</div>}
            {!isLoading && !error && programas && programas.length > 0 && (
              programas.map((program) => (
                <div key={program.num_programa}>
                  <div
                    className="program-link"
                    onClick={() => toggleProgramInfo(program.nombre_programa)}
                  >
                    ♦ <span className="program-name">{program.nombre_programa}</span>
                  </div>
                  {showProgramInfo === program.nombre_programa && (
                    <div className="program-info">
                      <p>No. de Programa: {program.num_programa}</p>
                      <p>{program.descripcion_programa}</p>
                      <p>
                        <strong>Coordinador del Programa:</strong> {program.coord_programa}<br />
                        <strong>Correo electrónico:</strong> {program.correo_coord}<br />
                        <strong>Número de contacto:</strong> {program.telefono_coord}
                      </p>
                      <p>
                        <strong>Perfil educativo solicitado:</strong>
                      </p>
                    </div>
                  )}
                </div>
              ))
            )}
            {!isLoading && !error && (!programas || programas.length === 0) && (
              <p>No hay publicaciones disponibles.</p>
            )}
          </div>
        </div>

        {/* Card de últimas noticias */}
        <div className="card-container">

          {/* Texto informativo */}
          <div className="program-info">
            <p>¿TE GUSTARÍA REALIZAR TU SERVICIO SOCIAL O PRÁCTICAS PROFESIONALES CON NOSOTROS?</p>
            <p>¡Conoce los distintos programas que tenemos para ti dependiendo tu tipo de carrera!</p>
            <p>Solo necesitas darnos tus datos y nos contactaremos contigo.</p>
          </div>
          <br />
          {/* Formulario debajo del texto */}
          <form className="form-container">
            <div className="form-group">
              <label htmlFor="name" className="label-grande">Nombre completo:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="name" className="label-grande">Correo:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <br />
            {/* Nuevos campos en la misma línea */}
            <div className="form-group-inline">
              <div className="form-group">
                <label htmlFor="licenciatura" className="label-grande label-licenciatura">Licenciatura/Universidad:</label>
                <input type="text" id="licenciatura" name="licenciatura" required />
              </div>
              <div className="form-group">
                <label htmlFor="ss-pp" className="label-grande label-ss-pp">SS/PP:</label>
                <input type="text" id="ss-pp" name="ss-pp" required />
              </div>
            </div>
            {/* Botón de Enviar */}
            <button type="submit" className="btn-enviar">Enviar</button>
          </form>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default ServicioPracticas;
