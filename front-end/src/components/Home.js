import React, { useEffect, useState } from "react";
import Wine from "./Wine";

function Home ({isLoggedIn, setIsLoggedIn, user, setUser}) {
  
  const [wines, setWines] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/user/wines/1`)
      .then(response => response.json())
      .then(data => setWines(data))
        }, []);
  
  if (isLoggedIn === true){
return (
    <div>
      <button>New Wine!</button><button>New Food!</button>
      <ul>
        {wines.map((wine) => {
          return (<Wine
            key={wine.id}
            wineID={wine.id}
            nameOfWine={wine.name}
            rating={wine.rating}
            notes={wine.notes}
            userID={wine.user_id}
          />
          )})}
      </ul>
    </div>

  )} else {
    return (
      <div>
        <lable for="username" >Username:</lable><br />
        <input id="username" type="text"></input><br />
        <lable for="password" >Password:</lable><br />
        <input id="password" type="text"></input><br /><br />
        <input type="submit" value="Login"></input>
    </div>
    )
  }
}

export default Home;
