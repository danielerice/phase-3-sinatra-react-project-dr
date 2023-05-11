import { useEffect, useState } from 'react';
import '/Users/danielrice/Development/code/phase-3/phase-3-sinatra-react-project-dr/front-end/src/App.css';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import NewFood from './NewFood';
import NewWine from './NewWine';
import Home from './Home';
import EditWine from './EditWine';



function App() {
  console.log("app has rendered")
  
  const [wines, setWines] = useState([]);


  //fetches wines
  useEffect(() => {
    fetch(`http://localhost:9292/wines`)
      .then(response => response.json())
      .then(wineData => setWines(wineData))
  }, [])
  

  return (
      <div className="App">
        
        <NavLink to='/'>Home!</NavLink><NavLink to='/newwine'>New Wine!</NavLink><NavLink to='/newfood'>New Food!</NavLink><NavLink to='/editWine'>Edit!</NavLink>
        
        <Routes>
          <Route path="/newfood" element= {
            <NewFood 
            wines={wines}
            setWines={setWines}
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
