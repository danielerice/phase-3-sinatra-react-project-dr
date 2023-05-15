import React, { useEffect, useState } from "react";
import Wine from "./Wine";


function Home ({ wines, setWines }) {

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
