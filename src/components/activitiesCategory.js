import React from 'react';
import './activitiesCategory.css';
import ActivitiesButton from './activitiesButton';

function ActivitiesCategory(props) {

    return (
        <div className="white-bg">
        <div className="activities-category-container">{
            props.activitiesList.map(item => {
                return (
                    <ActivitiesButton
                    item={item}
                    onClick={props.onClick}
                    key={props.item}
                    />
                )
            })
            
        }
        <div className="bottom-category"><span className="step2">paso 2/2</span></div>
        </div>
        </div>
    )
}

export default ActivitiesCategory;