import React, { useState, useEffect } from "react";

function NewFood ({ user, setUser}) {
  
    const [wines, setWines] = useState([{
        "id": 1,
        "name": "Big Red",
        "rating": 10,
        "notes": "super great wow!",
        "user_id": 1,
        "created_at": "2023-04-13T18:09:53.284Z",
        "updated_at": "2023-04-13T18:09:53.284Z"
    }]);
    const [wineName, setWineName] = useState();
    const [wineRating, setWineRating] = useState();
    

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
                {wines.map((wine) => {
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





