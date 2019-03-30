import React from 'react';
import './moreInfo.css'

function MoreInfo(props) {

    return (
        <div className="more-info-container">
        <span className="more-info-text">Aca encontrarás información para empzar a generar un cambio</span>
        <div className="more-info-button"><span className="more-info-button-text">Trabajos con mayor brecha salarial</span> <i class="fas fa-arrow-right flecha-cambio2"></i></div>
        <div className="more-info-button"><span className="more-info-button-text">Cómo empezar a generar un cambio</span> <i class="fas fa-arrow-right flecha-cambio2"></i></div>
        <div className="more-info-button"><span className="more-info-button-text">Cómo pedir un aumento de sueldo</span> <i class="fas fa-arrow-right flecha-cambio2"></i></div>
        <div className="more-info-button"><span className="more-info-button-text">Tipos de Jefes</span> <i class="fas fa-arrow-right flecha-cambio2"></i></div>
        </div>
    )
}

export default MoreInfo;