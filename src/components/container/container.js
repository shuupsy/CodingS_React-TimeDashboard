import React from "react";
import './container.css'
import Profil from "../profil/profil";
import Items from '../items/items'

function Container (props) {
    return (
     <div className="container">
        <Profil />
        <Items/>
    </div>
    )
}

export default Container;