import React from 'react';
import './activitiesCategory.css';
import ActivitiesButton from './activitiesButton';

function ActivitiesCategory(props) {

    return (
        <div className="activities-category-container">{
            props.activitiesList.map(item => {
                return (
                    <ActivitiesButton
                    item={item}
                    onClick={props.onClick}
                    key={item}
                    />
                )
            })
        }</div>
    )
}

export default ActivitiesCategory;