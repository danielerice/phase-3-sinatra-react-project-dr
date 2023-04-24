import React, { useState, useEffect } from "react";

function NewFood ({ user, setUser}) {
  
    const [wines, setWines] = useState([{}]);
    const [wineName, setWineName] = useState();
    const [wineRating, setWineRating] = useState();
    const [pairing, setPairing] = useState();
    
    function postNewFood (event) {
        event.preventDefault();
        
        const formData = {
            "wineName": {wineName},
            "wineRating": {wineRating},
            "pairing": {pairing}
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
    
    useEffect(() => {
        fetch(`http://localhost:9292/user/wines/${user.id}`)
          .then(response => response.json())
          .then(data => setWines(data))
            }, []);

  return (
    <div>
        <form onSubmit={postNewFood}>
            <label for="wineName" >Food Name:</label><br />
            <input id="wineName" type="text" onChange={(e) => setWineName(e.target.value)}></input><br />
            <lable for="wineRating" >Rating:</lable><br />
            <input id="wineRating" type="text" onChange={(e) => setWineRating(e.target.value)}></input><br />
            <fieldset>
                <legend>Pairs well with:</legend>
                    {wines.map((wine) => {
                        return (
                            <div>
                                <input type="radio" id="wine.name" name="wine.name" value={wine.name} onChange={(e) => setPairing(e.target.value)}></input>
                                <label for="wine.name">{wine.name}</label>
                            </div>
                        )
                    })}
            </fieldset><br />
            <input type="submit" value="Submit"></input>
        </form>
    </div>
  );
}

export default NewFood;





