import './items.css';
import data from '../../data.json'
import ellipse from './svg/icon-ellipsis.svg'
import play from './svg/icon-play.svg'
import selfcare from './svg/icon-self-care.svg'
import social from './svg/icon-social.svg'
import study from './svg/icon-study.svg'
import work from './svg/icon-work.svg'
import exercice from './svg/icon-exercise.svg'

const Items = () => {
        const liste = [];
        
        for (let i=0; i<data.length; i++) {
            const colour = ["#FF8A66", "#56C2E6", "#FF5E7D", "#4BCF83", "#7235D1", "#F1C75B"]; // Background colour de chaque deco

            const svgImg = [work, play, study, exercice, social, selfcare]; // Background img de chaque deco

            liste.push(
            <div className='card-item'>
                <div className='decoration' style={
                    { backgroundColor: `${colour[i]}`,
                    backgroundImage: `url(${svgImg[i]})`,
                    backgroundPosition: '90%',
                    backgroundRepeat: 'no-repeat' }}>
                </div>
                <div className='card-body'>
                    <h2>{data[i].title}</h2>
                    <h3>{data[i].timeframes.daily.current}hrs</h3>
                    <h4>Last week : {data[i].timeframes.daily.previous}</h4>
                </div>
            </div>
            )
        }
        return(
            <div className='listeItems'>
                { liste }
            </div>
    )
}


export default Items;