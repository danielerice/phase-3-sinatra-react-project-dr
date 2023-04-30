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
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  
  

  if (isLoggedIn) {
    return (
      <div className="App">
        <Routes>
          <Route path="/newfood" element= {
            <NewFood 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            user={user}
            setUser={setUser}
            />
          }></Route>
  
          <Route path="/newwine" element= {
            <NewWine 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            user={user}
            setUser={setUser}
            />
          }></Route>
  
          <Route path="/editwine" element= {
            <EditWine 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            user={user}
            setUser={setUser}
            />
          }></Route>
  
          <Route exact path="/" element= {
            <Home 
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
