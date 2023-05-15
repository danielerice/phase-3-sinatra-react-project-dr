import React, { useState, useEffect } from "react";
import Food from "./Food";
import { Link } from "react-router-dom";


function Wine ({ wineID, nameOfWine, rating, notes, wines, setWines, wine }) {
  

  async function deleteWine (event) {

    const configObj = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }}

    const response = await fetch(`http://localhost:9292/wines/${wineID}`, configObj)
    const deletedWine = await response.json()
    const updatedWines = await wines.filter((wine) => deletedWine.id !== wine.id)
    setWines(updatedWines)
  }
  
  return (
    <div id="container">
      <div className="card">
      <button onClick={deleteWine}> X</button>
        <h1>{nameOfWine}</h1>
        <div className="card_details">
          <span className="tag">Rating: {rating}</span>
          <p>{notes}</p>
          <span className="tag">This wine pairs great with:</span>  
            <ul>
              {wine.foods.map((food) => {
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
