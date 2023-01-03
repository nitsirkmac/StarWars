// import styles from './shipCard.module.css'
import { Card } from './appStyles'


const ShipCard = ( ele ) => {


    return (
            <Card as='div'> {ele.name} </Card>
    )
}

export default ShipCard;