import React from 'react';
import './sexCategory.css'

function SexCategory (props) {
    
    return (
        <div className="sex-category-container">
            <h3 className="title-sexCategory">¿Con qué género te identificas?</h3>
            <button 
                className="btn-female"
                onClick={props.onClickWomen}
            >
            <i className="fas fa-venus"></i></button>
            <p className="imWoman">Femenino</p>
            
            <button 
                className="btn-male"
                onClick={props.onClickMan}
            >
            <i className="fas fa-mars"></i></button>
            <p className="imMan">Masculino</p>
        </div>
    )
}

export default SexCategory;