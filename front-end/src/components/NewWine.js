import React, { useState } from "react";

function NewWine ({ user, setUser }) {
  
  const [wineName, setWineName] = useState();
  const [wineRating, setWineRating] = useState();
  const [wineNotes, setWineNotes] = useState();

  function postNewWine (event) {
    event.preventDefault();

    const formData = {
      "name": wineName,
      "rating": wineRating,
      "notes" : wineNotes,
      "user_id" : user.id
      }; 
    const configObj = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
      },
      body: JSON.stringify(formData),
      };

      fetch(`http://localhost:9292/wines`, configObj)
            .then(response => response.json())
            .then(postedData => console.log(postedData))
  }


  return (
    <div>
        <form onSubmit={postNewWine}>
            <label for="wineName" >Wine Name:</label><br />
            <input id="wineName" type="text" onChange={(e) => setWineName(e.target.value)}></input><br />
            <lable for="wineRating" >Rating:</lable><br />
            <input id="wineRating" type="integer" onChange={(e) => setWineRating(e.target.value)}></input><br />
            <label for="wineNotes" >Notes:</label><br />
            <textarea id="wineNotes" rows="4" columns="100" onChange={(e) => setWineNotes(e.target.value)}></textarea><br />
            <input type="submit" value="Submit"></input>
        </form>
    </div>
  );
}

export default NewWine