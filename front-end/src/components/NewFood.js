import React, { useState, useEffect } from "react";

function NewFood ({ wines, updateFoods}) {
  
    const [foodName, setFoodName] = useState("");
    const [pairing, setPairing] = useState();
    
    async function postNewFood (event) {
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
        
        const response = await fetch(`http://localhost:9292/foods`, configObj)
        const postedFood = await response.json()
        await updateFoods(postedFood, pairing)
        await setFoodName('')

    }
    

  return (
    <div id="container">
        <div className="card">
            <form onSubmit={postNewFood}>
                <label for="wineName" >Food Name:</label><br />
                <input id="foodName" type="text" onChange={(e) => setFoodName(e.target.value)} value={foodName}></input><br />
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





