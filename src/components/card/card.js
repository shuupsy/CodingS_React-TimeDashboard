import './card.css';
import { useState } from 'react';

import data from '../../data.json'
import play from './svg/icon-play.svg'
import selfcare from './svg/icon-self-care.svg'
import social from './svg/icon-social.svg'
import study from './svg/icon-study.svg'
import work from './svg/icon-work.svg'
import exercice from './svg/icon-exercise.svg'
// import ellipse from './svg/icon-ellipsis.svg'


const Card = () => {
    const [items, setItems] = useState(data);

    const colour = ["#FF8A66", "#56C2E6", "#FF5E7D", "#4BCF83", "#7235D1", "#F1C75B"];
    const svgImg = [work, play, study, exercice, social, selfcare];

    // const active = document.querySelector(".active")

    return(
        <div className='listeItems'>
            {items.map((item, index) => (
                <div className='card-item' key={item.title}
                        style={{ backgroundColor: `${colour[index]}`,
                                 backgroundImage: `url(${svgImg[index]})`,
                                 backgroundPosition: '90% -10%',
                                 backgroundRepeat: 'no-repeat' } }>
                <div className='decoration'></div>
            </div>
        ))}
        </div>
    )
}


export default Card;