import React, { useEffect, useState } from "react";
import Wine from "./Wine";

function Home ({isLoggedin, setIsLoggedIn, user, setUser}) {
  
  const [wines, setWines] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/user/wines/1`)
      .then(response => response.json())
      .then(data => setWines(data))
        }, []);
        console.log(wines)
  
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

  );
}

export default Home;
