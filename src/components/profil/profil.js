import React from "react";
import './profil.css'
import avatar from './image-jeremy.png'

function Profil (){
    return (
        <div className="profil">
            <div id="user">
                <div>
                    <img src={avatar} width="75px" alt="avatar" />
                </div>
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
            </div>
            <ul id="nav">
                <li>Daily</li>
                <li>Weekly</li>
                <li>Monthly</li>
            </ul>
        </div>
    )
}

export default Profil;