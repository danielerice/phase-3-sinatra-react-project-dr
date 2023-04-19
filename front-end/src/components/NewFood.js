import React, { useState, useEffect } from "react";

function NewFood ({ user, setUser}) {
  
    const [wines, setWines] = useState();

    useEffect(() => {
        fetch(`http://localhost:9292/user/wines/${user.id}`)
          .then(response => response.json())
          .then(data => setWines(data))
            }, []);

  return (
    <div>
        <label for="wineName" >Food Name:</label><br />
        <input id="wineName" type="text"></input><br />
        <lable for="wineRating" >Rating:</lable><br />
        <fieldset>
            <legend>Pairs well with:</legend>
                {wines.map(( wine ) => {
                    return (
                        <div>
                            <input type="radio" id="wine.name" name="wine.name" value="wine.name"></input>
                            <label for="wine.name">{wine.name}</label>
                        </div>
                    )
                })}
        </fieldset><br />
        <input type="submit" value="Submit"></input>
    </div>
  );
}

export default NewFood;





