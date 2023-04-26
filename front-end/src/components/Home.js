import React, { useEffect, useState } from "react";
import Wine from "./Wine";
import { Link } from "react-router-dom";

function Home ({isLoggedIn, setIsLoggedIn, user, setUser}) {
  
  const [wines, setWines] = useState([]);
  const [newData, setNewData] = useState();

  
  
  //fetches a user's wine, if isLoggedIn is true
  useEffect(() => {
    if(isLoggedIn === true) {
    fetch(`http://localhost:9292/user/wines/${user.id}`)
      .then(response => response.json())
      .then(wineData => setWines(wineData))
    } else {
      console.log("user not logged in")
    }
  },[newData]);

  useEffect(() => {
    if(isLoggedIn === true) {
    fetch(`http://localhost:9292/user/wines/${user.id}`)
      .then(response => response.json())
      .then(wineData => setWines(wineData))
    } else {
      console.log("user not logged in")
    }
  });

  
    return (
        <div>
          <Link to='/newwine'>New Wine!</Link><Link to='/newfood'>New Food!</Link><Link to='/editWine'>Edit!</Link>
          <ul>
            {wines.map((wine) => {
              return (<Wine
                setNewData={setNewData}
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

  )
}

export default Home;
