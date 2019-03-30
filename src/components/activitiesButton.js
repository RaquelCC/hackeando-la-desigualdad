import React from 'react';
import './activitiesButton.css'

function ActivitiesButton(props) {
    return (
        <button className="activities-button" value={props.item} onClick={() => props.onClick(props.item)}><span className="button-span">{props.item}</span></button>
    )
}

export default ActivitiesButton;