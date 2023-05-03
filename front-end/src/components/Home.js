import React, { useEffect, useState } from "react";
import Wine from "./Wine";
import { Link } from "react-router-dom";

function Home ({ wines, setWines, user, isLoggedIn }) {

  console.log("home has fired")

  function renderWines() {
      console.log("wines:", wines, "user:", user, "isLoggedIn:", isLoggedIn)
      
 

      wines.map((wine) => {
        return (<Wine
          key={wine.id}
          wineID={wine.id}
          nameOfWine={wine.name}
          rating={wine.rating}
          notes={wine.notes}
          userID={wine.user_id}
        />)
      }
    )
    }

  
  
  return (
        <div>
          <Link to='/newwine'>New Wine!</Link><Link to='/newfood'>New Food!</Link><Link to='/editWine'>Edit!</Link>
          <ul>
              {wines.map((wine) => {
                return (<Wine
                  wine={wine}
                  wines={wines}
                  setWines={setWines}
                  key={wine.id}
                  wineID={wine.id}
                  nameOfWine={wine.name}
                  rating={wine.rating}
                  notes={wine.notes}
                  userID={wine.user_id}
                  />)
                }
              )}
          </ul>
        </div>

  )
  }

export default Home;
