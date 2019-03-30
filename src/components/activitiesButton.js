import React from 'react';

function ActivitiesButton(props) {
    return (
        <button className="activities-button" value={props.item} onClick={() => props.onClick(props.item)}>{props.item}</button>
    )
}

export default ActivitiesButton;