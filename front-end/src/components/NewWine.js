import React, { useState } from "react";

function NewWine ({ wines, setWines }) {
  
  const [wineName, setWineName] = useState("");
  const [wineRating, setWineRating] = useState("");
  const [wineNotes, setWineNotes] = useState("");

  async function postNewWine (event) {
    event.preventDefault();

    const formData = {
      "name": wineName,
      "rating": wineRating,
      "notes" : wineNotes
      }; 
    const configObj = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
      },
      body: JSON.stringify(formData),
      };

      const response = await fetch(`http://localhost:9292/wines`, configObj)
      const newWine = await response.json()
      const newWines = [...wines, newWine]
      setWineName("");
      setWineRating("");
      setWineNotes("");
      setWines(newWines);
  }


  return (
    <div id="container">
      <div className="card">
          <form onSubmit={postNewWine}>
              <label htmlFor="wineName" >Wine Name:</label><br />
              <input id="wineName" type="text" onChange={(e) => setWineName(e.target.value)} value={wineName}></input><br />
              <lable htmlFor="wineRating" >Rating:</lable><br />
              <input id="wineRating" type="integer" onChange={(e) => setWineRating(e.target.value)} value={wineRating}></input><br />
              <label htmlFor="wineNotes" >Notes:</label><br />
              <textarea id="wineNotes" rows="4" columns="100" onChange={(e) => setWineNotes(e.target.value)} value={wineNotes}></textarea><br />
              <input type="submit" value="Submit"></input>
          </form>
      </div>
    </div>
  );
}

export default NewWine