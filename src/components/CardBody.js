import '../style/cardbody.css';

const CardBody = ({items, index}) => {
    return(
        <div className='card-body'>
            <h2>{items[index].title}</h2>
            <h3>{items.hours}hrs</h3>
            <h4>Last week - {items.previous}</h4>
        </div>
    )
}
 
export default CardBody;