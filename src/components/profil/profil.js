import React from "react";
import './profil.css'
import avatar from './image-jeremy.png'

function Profil (){
    let changeActive = (e) => { // Ajout classe CSS
        let tab = document.querySelectorAll("li");
        tab.forEach(i => {
            i.classList.remove("active")
        })
        e.target.classList.add("active")
    }

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
                <li className="btn active" onClick={(e) => {changeActive(e)}}>Daily</li>
                <li className="btn" onClick={(e) => {changeActive(e)}}>Weekly</li>
                <li className="btn" onClick={(e) => {changeActive(e)}}>Monthly</li>
            </ul>
        </div>
    )
}

export default Profil;