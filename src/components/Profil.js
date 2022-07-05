import React from "react";
import '../style/profil.css'
import avatar from '../images/image-jeremy.png'

function Profil ({changeActive}){
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
                <li className="btn active" tab="daily" onClick={(e) => {changeActive(e)}}>Daily</li>

                <li className="btn" tab="weekly" onClick={(e) => {changeActive(e)}}>Weekly</li>
                
                <li className="btn" tab="monthly" onClick={(e) => {changeActive(e)}}>Monthly</li>
            </ul>
        </div>
    )
}

export default Profil;