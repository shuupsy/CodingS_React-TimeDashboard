import '../style/card.css'
import CardBody from './CardBody'

const Card = ({items}) => {

    return(
        <div className='listeItems'>
            {items.map((item, index) => (
                <div className={'card-item ' + item.title} key={item.title}>
                <div className='decoration'></div>
                    <CardBody items={items} index={index}/>
                </div>
            ))}
        </div>
    )

}


export default Card;