//import { FaBook, FaEye, FaBullseye, FaRegFlag, FaUsers } from 'react-icons/fa'; // Importa los iconos
import './nosotros.css'; // Se importa el archivo de estilos
import NewsMod from '@/modulos/NewsMod';
import Carousel from "@/components/carousel";
import Image from 'next/image';

const Tramites = () => {
  return (
    <div>
          <div className='banner-nosotros'>
            <Image
            src='/Imagenes/Splash/1.jpg'
            width={1500}
            height={800}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
           />           
          </div>
      <div className="nosotros-container">
        <div className="content">
         
          <button disabled className="info-button">Conoce al Centro INAH Puebla</button>
          <p>Para nosotros la preservación, cuidado y difusión del patrimonio cultural poblano es uno de nuestros principales objetivos como dependencia, por lo que todos nuestros valores y corazón ideológico están orientados a ello.</p>

          <h2> Nuestra misión</h2>
          <p>
            El Instituto Nacional de Antropología en Historia (INAH) investiga, conserva y difunde el patrimonio arqueológico, antropológico, histórico y paleontológico de la nación con el fin de fortalecer la identidad y memoria de la sociedad que lo detenta.
          </p>

          <h2>Nuestra visión</h2>
          <p>
            El INAH tiene plena facultad normativa y rectora en la protección y conservación del patrimonio cultural tangible e intangible, y se encuentra a la vanguardia gracias a su nivel de excelencia en investigación y en la formación de profesionales en el ámbito de su competencia.
          </p>

          <h2> ¿Cuál es nuestro objetivo como institución?</h2>
          <p>
            Fomentar la investigación científica de alta calidad en materia de antropología, arqueología, historia, restauración, museología, paleontología y áreas afines (entre otros).
          </p>

          <h2>Nuestros fundamentos</h2>
            <ul className='lista'>
              <li>Bien común</li>
              <li>Integridad</li>
              <li>Honradez</li>
              <li>Justicia</li>
              <li>Transparencia</li>
              <li>Rendición de cuentas</li>
              <li>Entorno cultural y económico</li>
              <li>Generosidad</li>
              <li>Igualdad</li>
              <li>Respeto</li>
              <li>Liderazgo</li>
            </ul>

          <h2>Coordinaciones CINAHP</h2>
          <p>Para cumplir nuestros objetivos estamos constituidos por distintas ramas de profesionistas en áreas.</p>
          <h3>Dirección y Subdirección:</h3>
          <p>
            Son la imagen representativa del CINAHP. Se encargan de planear, dirigir y evaluar acciones orientadas hacia el cumplimiento de la misión y objetivo del Instituto Nacional de Antropología en Historia, así como de los proyectos y procesos.
          </p>
          <p><strong>Director de Centro INAH Puebla:</strong> Manuel Villarruel Vázquez</p>
          <p><strong>Subdirectora de Centro INAH Puebla:</strong> Catalina Montiel Romero</p>
          <h3>Coordinación de Asuntos Jurídicos:</h3>
          <p>
             Atender y prestar de manera eficiente y eficaz los trámites y servicios jurídico-administrativos para garantizar la adecuada defensa de los intereses del INAH.
          </p>
          <p><strong>Jefa de departamento:</strong> Nayely Tello Gutiérrez</p>
          <h3>Coordinación de Arqueología:</h3>
          <p>
             Definir y establecer normas y lineamientos para identificar, investigar, catalogar, registrar, proteger, recuperar, conservar, restaurar, mantener, vigilar y difundir el patrimonio arqueológico y paleontológico.
          </p>
          <h3>Coordinación de Antropología:</h3>
          <p>
            Promover, desarrollar, dirigir y controlar los proyectos de investigación científica que se realizan en la coordinación del INAH y otras dependencias, así como el análisis de su origen y variabilidad biológica a través del tiempo.
          </p>
          <p><strong>Coordinador de Antropología Física:</strong> Zaid Cervantes Morales</p>
          <h3>Coordinación de Difusión y Promoción Cultural:</h3>
          <p>
           Difundir el patrimonio cultural, científico, educativo, técnico y artístico del INAH entre los diferentes sectores de la población.
          </p>
          
        </div>

        {/* Card de últimas noticias */}
        <NewsMod/> 
      </div>

    </div>
  );
};

export default Tramites;
