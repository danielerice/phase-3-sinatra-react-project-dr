import React, { useState, useEffect } from "react";

function NewFood ({ user, setUser, wines, setWines}) {
  
    const [foodName, setFoodName] = useState();
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
        console.log("pairing:", pairing)
        const response = await fetch(`http://localhost:9292/foods`, configObj)
        const postedFood = await response.json()
        const targetWine = (wines.find((wine) => wine.id == pairing))
        console.log("targetWine:", targetWine)
        targetWine.foods.push(postedFood)
        console.log("targetWine.foods:", targetWine.foods)
        const unchangedWines = wines.filter((wine) => targetWine.id !== wine.id)
        console.log("unchangedWines:", unchangedWines)
        const stateWines = [...unchangedWines, targetWine]
        console.log("stateWines:", stateWines)

        await setWines(stateWines)

    }
    

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





