import React, { useState, useEffect } from "react";
import Food from "./Food";
import { Link } from "react-router-dom";


function Wine ({ wineID, nameOfWine, rating, notes, userID, setNewData }) {
  
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/wine/foods/${wineID}`)
      .then(response => response.json())
      .then(data => setFoods(data))
        }, []);
  
  function deleteWine (event) {
    console.log(wineID)

    const configObj = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }}

    fetch(`http://localhost:9292/wines/${wineID}`, configObj)
      .then(response => response.json())
      .then(data => setNewData(data))
    
  }
  
  return (
    <div id="container">
      <div className="card">
        <h1>{nameOfWine}</h1><button onClick={deleteWine}> X</button>
        <div className="card_details">
          <span className="tag">Rating: {rating}</span>
          <p>{notes}</p>
          <p>This wine pairs great with:</p>  
            <ul>
              {foods.map((food) => {
                return (<Food
                  key={food.id}
                  name={food.name}
                  wineId={food.wine_id}
                />
              )})}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Wine;
