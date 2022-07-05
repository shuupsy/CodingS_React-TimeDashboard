import React from "react";
import { useState } from 'react';

import '../style/container.css'
import data from '../data/data.json'
import Profil from "./Profil";
import Card from './Card'

function Container () {

    const [items, setItems] = useState(data);

    const changeActive = (e) => { 
        // Ajout classe "active" CSS
        let tab = document.querySelectorAll("li");
        tab.forEach(i => {
            i.classList.remove('active')
        })
        e.target.classList.add('active')
    }

    const changeData = () => {
        setItems()
    }

    return (
     <div className="container">
        <Profil changeActive={changeActive} />

        <Card stats='daily' items={items} setItems={setItems} changeData={changeData} className='tab active' />
{/* 
        <Card stats='monthly' items={items} setItems={setItems} changeData={changeData} className='tab' />

        <Card stats='weekly' items={items} setItems={setItems} changeData={changeData} className='tab' /> */}
    </div>
    )
}

export default Container;