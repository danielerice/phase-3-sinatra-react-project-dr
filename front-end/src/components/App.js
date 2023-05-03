import { useEffect, useState } from 'react';
import '/Users/danielrice/Development/code/phase-3/phase-3-sinatra-react-project-dr/front-end/src/App.css';
import { Route, Routes } from 'react-router-dom';
import NewFood from './NewFood';
import Food from './Food';
import Wine from './Wine';
import NewWine from './NewWine';
import NewUser from './NewUser';
import Home from './Home';
import EditWine from './EditWine';
import Login from './Login';


function App() {
  console.log("app has rendered")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [wines, setWines] = useState([]);

  //fetch that gets wines with nested foods array for each wine.
  //pass each comp the wines array with nested foods.
  //each comp is then resposible for updating state that it effects, newwines, adds awine. new food adds a foods to the correct wine, home deletes wine and removes wine from state. Edit wine also changes the wine in state.

  //fetches a user's wine, if isLoggedIn is true
  useEffect(() => {
    console.log("firing")
    if(isLoggedIn === true) {
    fetch(`http://localhost:9292/user/wines/${user.id}`)
      .then(response => response.json())
      .then(wineData => setWines(wineData))
      console.log(wines)
    } else {
      console.log("user not logged in")
    }
  }, [isLoggedIn]);
  

  if (isLoggedIn) {
    return (
      <div className="App">
        <Routes>
          <Route path="/newfood" element= {
            <NewFood 
            wines={wines}
            setWines={setWines}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            user={user}
            setUser={setUser}
            />
          }></Route>
  
          <Route path="/newwine" element= {
            <NewWine 
            wines={wines}
            setWines={setWines}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            user={user}
            setUser={setUser}
            />
          }></Route>
  
          <Route path="/editwine" element= {
            <EditWine 
            wines={wines}
            setWines={setWines}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            user={user}
            setUser={setUser}
            />
          }></Route>
  
          <Route exact path="/" element= {
            <Home 
            wines={wines}
            setWines={setWines}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            user={user}
            setUser={setUser}
            />
          }></Route>
          
        </Routes>
      </div>
    )
  } else {
    return (
      <Routes>
        <Route path='/' element={
          <Login
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUser={setUser}
          />
          }></Route>

      <Route path="/newuser" element= {
            <NewUser 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            user={user}
            setUser={setUser}
            />
          }></Route>
      </Routes>
    )
  }
 
}

export default App;
