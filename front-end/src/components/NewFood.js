import React, { useState } from "react";

function NewFood () {
  
  return (
    <div>
        <label for="wineName" >Food Name:</label><br />
        <input id="wineName" type="text"></input><br />
        <lable for="wineRating" >Rating:</lable><br />
        <fieldset>
            <legend>Pairs well with:</legend>

                <div>
                    <input type="radio" id="huey" name="drone" value="huey"></input>
                    <label for="huey">Huey</label>
                </div>

                <div>
                    <input type="radio" id="dewey" name="drone" value="dewey"></input>
                    <label for="dewey">Dewey</label>
                </div>

                <div>
                    <input type="radio" id="louie" name="drone" value="louie"></input>
                    <label for="louie">Louie</label>
                </div>
        </fieldset><br />
        <input type="submit" value="Submit"></input>
    </div>
  );
}

export default NewFood;





