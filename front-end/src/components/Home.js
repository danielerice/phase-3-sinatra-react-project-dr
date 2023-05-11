import React, { useEffect, useState } from "react";
import Wine from "./Wine";


function Home ({ wines, setWines }) {

  console.log("home has fired", wines)

  function renderWines() {
      console.log("wines:", wines)
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
                  />)
                }
              )}
          </ul>
        </div>

  )
  }

export default Home;
