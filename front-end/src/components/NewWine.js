import React, { useState } from "react";

function NewWine () {
  
  return (
    <div>
        <form>
            <label for="wineName" >Wine Name:</label><br />
            <input id="wineName" type="text"></input><br />
            <lable for="wineRating" >Rating:</lable><br />
            <input id="wineRating" type="integer"></input><br />
            <label for="wineNotes" >Notes:</label><br />
            <textarea id="wineNotes" rows="4" columns="100"></textarea><br />
            <input type="submit" value="Submit"></input>
        </form>
    </div>
  );
}

export default NewWine