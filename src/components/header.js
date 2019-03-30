import React from 'react';
import './header.css'
import group from '../IMG/Group.png'

function Header (props) {
    
    return (
        <div className="header" onClick={props.onClick}>
            <img src={group} alt="logo"></img>
        </div>
    )
}

export default Header;