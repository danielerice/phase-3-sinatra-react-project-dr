import React, { useState } from "react";

function EditWine ({ wines, updateWines}) {
  
  const [target, setTarget] = useState();
  const [wineName, setWineName] = useState();
  const [wineRating, setWineRating] = useState();
  const [wineNotes, setWineNotes] = useState();
  
  function setTargetWine (targetId) {
    
    const targetWine = wines.find(wine => wine.id == targetId)
    
    setWineName(targetWine.name);
    setWineNotes(targetWine.notes);
    setWineRating(targetWine.rating);
    setTarget(targetId);
  
  }

  async function patchWine (event) {
    event.preventDefault();

    const formData = {
        "name": wineName,
        "rating": wineRating,
        "notes" : wineNotes
      }; 
    const configObj = {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
      },
      body: JSON.stringify(formData),
      };

      const response = await fetch(`http://localhost:9292/wines/${target}`, configObj)
      const patchedWine = await response.json()
      await updateWines(patchedWine)
      // const unchangedWines = (wines.filter((wine) => wine.id !== patchedWine.id))
      // const newWines = [...unchangedWines, patchedWine]
      // setWines(newWines)
  }

 
    return (
        <div id="container">
          <div className="card">
            <form onSubmit={patchWine}>
              <fieldset>
                  <legend>Select A Wine To Edit:</legend>
                      {wines.map((wine) => {
                          return (
                              <div>
                                  <input type="radio" id={wine.id} name="wine.name" value={wine.name} onChange={(e) => setTargetWine(e.target.id)}></input>
                                  <label for="wine.name">{wine.name}</label>
                              </div>
                          )
                      })}
              </fieldset><br />
              <label for="wineName" >Wine Name:</label><br />
              <input id="wineName" type="text" onChange={(e) => setWineName(e.target.value)} value={wineName}></input><br />
              <lable for="wineRating" >Rating:</lable><br />
              <input id="wineRating" type="integer" onChange={(e) => setWineRating(e.target.value)} value={wineRating}></input><br />
              <label for="wineNotes" >Notes:</label><br />
              <textarea id="wineNotes" rows="4" columns="100" onChange={(e) => setWineNotes(e.target.value)} value={wineNotes}></textarea><br />
              <input type="submit" value="Submit"></input>
              </form>
          </div>
        </div>
      );
}

export default EditWine;