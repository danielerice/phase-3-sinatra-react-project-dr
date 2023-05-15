import { useEffect, useState } from 'react';
import '/Users/danielrice/Development/code/phase-3/phase-3-sinatra-react-project-dr/front-end/src/App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import NewFood from './NewFood';
import NewWine from './NewWine';
import Home from './Home';
import EditWine from './EditWine';



function App() {
  
  const [wines, setWines] = useState([]);

  function updateWines (patchedWine) {
    //update the wines in state after a fetch request to reflect changes
    const updatedWinesArray = wines.map((wine) => {
      
      if (wine.id === patchedWine.id) {
        
        wine = patchedWine
        
      }
      return wine
    })

    setWines(updatedWinesArray)
  }

  function updateFoods (newFood, pairing) {
    //update the foods in state after a fetch request to reflect changes
    const newWinesArray = wines.map((wine) => {
      const updatedFoods = wine.foods
      if (wine.id == pairing) {
        updatedFoods.push(newFood)
        wine.foods = updatedFoods
      }
      return wine
    })
    setWines(newWinesArray)
  }

  //fetches wines
  useEffect(() => {
    fetch(`http://localhost:9292/wines`)
      .then(response => response.json())
      .then(wineData => setWines(wineData))
  }, [])
  

  return (
      <div className="App">
        
        <NavLink className='NavButton' to='/'>Home!</NavLink><NavLink className='NavButton' to='/newwine'>New Wine!</NavLink><NavLink className='NavButton' to='/newfood'>New Food!</NavLink><NavLink className='NavButton' to='/editWine'>Edit!</NavLink>
        
        <Routes>
          <Route path="/newfood" element= {
            <NewFood 
            wines={wines}
            setWines={setWines}
            updateFoods={updateFoods}
            />
          }></Route>
  
          <Route path="/newwine" element= {
            <NewWine 
            wines={wines}
            setWines={setWines}
            />
          }></Route>
  
          <Route path="/editwine" element= {
            <EditWine 
            wines={wines}
            setWines={setWines}
            updateWines={updateWines}
            />
          }></Route>
  
          <Route exact path="/" element= {
            <Home 
            wines={wines}
            setWines={setWines}
            />
          }></Route>
          
        </Routes>
      </div>
    )
  
  }

export default App;
