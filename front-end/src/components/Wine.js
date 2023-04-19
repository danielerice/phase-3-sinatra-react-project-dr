import React, { useState, useEffect } from "react";
import Food from "./Food";


function Wine ({ wineID, nameOfWine, rating, notes, userID }) {
  
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/wine/foods/${wineID}`)
      .then(response => response.json())
      .then(data => setFoods(data))
        }, []);
  
        console.log(foods)
  
  return (
    <div id="container">
      <div className="card">
        <h1>{nameOfWine}</h1>
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
