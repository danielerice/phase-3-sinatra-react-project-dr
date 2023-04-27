import React, { useState, useEffect } from "react";

function NewFood ({ user, setUser}) {
  
    const [wines, setWines] = useState([]);
    const [foodName, setFoodName] = useState();
    const [pairing, setPairing] = useState();
    
    function postNewFood (event) {
        event.preventDefault();
        
        const formData = {
            "name": foodName,
            "wine_id": pairing
        };
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(formData),
            };

        fetch(`http://localhost:9292/foods`, configObj)
            .then(response => response.json())
            .then(postedData => console.log(postedData))

    }
    
    useEffect(() => {
        fetch(`http://localhost:9292/user/wines/${user.id}`)
          .then(response => response.json())
          .then(data => setWines(data))
            }, []);

  return (
    <div id="container">
        <div className="card">
            <form onSubmit={postNewFood}>
                <label for="wineName" >Food Name:</label><br />
                <input id="foodName" type="text" onChange={(e) => setFoodName(e.target.value)}></input><br />
                <fieldset>
                    <legend>Pairs well with:</legend>
                        {wines.map((wine) => {
                            return (
                                <div>
                                    <input type="radio" id={wine.id} name="wine.name" value={wine.name} onChange={(e) => setPairing(e.target.id)}></input>
                                    <label for="wine.name">{wine.name}</label>
                                </div>
                            )
                        })}
                </fieldset><br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    </div>
  );
}

export default NewFood;





