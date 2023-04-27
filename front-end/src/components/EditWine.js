import React, { useState, useEffect } from "react";

function EditWine ({user}) {
  
  const [target, setTarget] = useState();
  const [wineName, setWineName] = useState();
  const [wineRating, setWineRating] = useState();
  const [wineNotes, setWineNotes] = useState();
  const [wines, setWines] = useState();

console.log(user.id)
  function patchWine (event) {
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

      fetch(`http://localhost:9292/wines/${target}`, configObj)
            .then(response => response.json())
            .then(patchedData => console.log(patchedData))
  }

  useEffect(() => {
    console.log('in useEfect', user.id)
    fetch(`http://localhost:9292/user/wines/${user.id}`)
        .then(response => response.json())
        .then(data => setWines(data))
  },[]);

  if(wines) {
    return (
        <div id="container">
          <div className="card">
            <form onSubmit={patchWine}>
              <fieldset>
                  <legend>Select A Wine To Edit:</legend>
                      {wines.map((wine) => {
                          return (
                              <div>
                                  <input type="radio" id={wine.id} name="wine.name" value={wine.name} onChange={(e) => setTarget(e.target.id)}></input>
                                  <label for="wine.name">{wine.name}</label>
                              </div>
                          )
                      })}
              </fieldset><br />
              <label for="wineName" >Wine Name:</label><br />
              <input id="wineName" type="text" onChange={(e) => setWineName(e.target.value)}></input><br />
              <lable for="wineRating" >Rating:</lable><br />
              <input id="wineRating" type="integer" onChange={(e) => setWineRating(e.target.value)}></input><br />
              <label for="wineNotes" >Notes:</label><br />
              <textarea id="wineNotes" rows="4" columns="100" onChange={(e) => setWineNotes(e.target.value)}></textarea><br />
              <input type="submit" value="Submit"></input>
              </form>
          </div>
        </div>
      );
  } else {
    return (
        <div>
            <p>Please hold your horses</p>
        </div>
    )
  }
}

export default EditWine;