import { useEffect, useState } from 'react'
import Starships from "./components/Starships.js"
import { Nav } from './components/appStyles'
import './App.css';


function App() {

  const [starshipData, setStarshipData] = useState([])

  useEffect(() => {
    const swapi = `https://swapi.dev/api/starships/`
    const makeApiCall = async () => {
      const res = await fetch(swapi);
      const json = await res.json();
      setStarshipData(json)
    }
    makeApiCall()
  }, []) 
console.log(starshipData)

const shipsArray=starshipData.results 
console.log(shipsArray)



  return (
    <div className="App">
      <Nav>STARSHIP GALLERY</Nav>

        <Starships shipsArray={shipsArray} />


    </div>
  );
}

export default App;
