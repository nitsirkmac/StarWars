import ShipCard from "./ShipCard.js"
import { Gallery } from "./appStyles"

const Starships = ( {shipsArray} ) => {

    const shipNames = shipsArray?.map((ele, index) => {
        return (
          <ShipCard 
          name={ele.name}
          key={index}
          />
        )
      })

    return (
        <Gallery >
            {shipNames}
        </Gallery>
    )
}

export default Starships;