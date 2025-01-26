//import styles from "./page.module.css";
import React from "react";
import Carousel from "@/components/carousel";
import ApiNoticias from "@/modulos/apinoticias";
import { FaHandshake, FaEye, FaBullseye, FaRegEye } from 'react-icons/fa'; // Importa los iconos


export default function Home() {
  return (
    <div>
    <div className="banner">
        
        <Carousel /> {/* Se usa el componente Carousel */}
        <div className="sub-div"></div>
        <div className="frases-container">
            <div className="frases-box">
                <div className="frase-logo">
                    <FaBullseye size={30} color="#691c32"/> {/* Ajusta el tamaño del icono si es necesario */}
                    <h2>Misión</h2>
                </div>
                <div className="frase-descripcion">
                    <p>Investigar, conservar y difundir el patrimonio de la nación.</p>
                </div>
            </div>
            <div className="frases-box">
                <div className="frase-logo">
                    <FaRegEye size={30} color="#691c32" /> {/* Ajusta el tamaño del icono si es necesario */}
                    <h2>Visión</h2>
                </div>
                <div className="frase-descripcion">
                    <p>Protección y conservación del patrimonio tangible e intangible.</p>
                </div>
            </div>
            <div className="frases-box">
                <div className="frase-logo">
                    <FaHandshake size={30} color="#691c32" /> {/* Ajusta el tamaño del icono si es necesario */}
                    <h2>Fundamentos</h2>
                </div>
                <div className="frase-descripcion">
                    <p>Enfocados al bien común, la integridad, honradez, justicia, respeto y más.</p>
                </div>
            </div>
            
        </div>
    </div>

    <div className="main-content">
        <div className="section">
            <div className="moto">
            “ Preservar el patrimonio cultural es preservar nuestra identidad y legado. „
            </div>
        </div>
        
        <div className="section">
        <hr />
        <div>
            <div className="explora-cont">
                <h1>Explora las raíces de Puebla con nosotros</h1>
            </div>
            <div className="sitsect-cont">
                <div><p>Descubre la riqueza de nuestra herencia cultural a través de los museos, zonas arqueológicas y galerías que preservan las maravillas de nuestro pasado.</p></div>
                <div>
                    <div className="sitsect-box">
                        <img src={null} alt="" />
                        <h3>Museo Regional 
                        de Puebla</h3>
                    </div>
                </div>
            </div>
        </div>
        <div>

        </div>
        
        </div>
        <div className="section">
        <hr />
        <div className="card-container">
            <div className="card">
                <ApiNoticias /> {/* Componente de noticias */}
            </div>
        </div>
        </div>
        
        
    </div>
    
</div>
  );
}
