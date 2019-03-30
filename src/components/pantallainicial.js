import React from 'react';
import './pantallainicial.css'
import logo from '../IMG/logo.png'

function Inicio (props) {
    
    return (
        <div className="inicio">
            <h4 className="number">21%</h4>
                <img className="logo" src={logo} alt="logo"/>
                <p className="askText"> 
                Es la brecha salarial entre hombres 
                y mujeres en Chile.
                </p>
                <p className="ask">
                Quieres ver dónde estas tú?
                </p>

            <button 
            className="btn-initial"
            onClick={props.onClickVamos}     
            >Vamos  
            <i class="fas fa-arrow-right"></i></button>
        </div>
    )
}

export default Inicio;