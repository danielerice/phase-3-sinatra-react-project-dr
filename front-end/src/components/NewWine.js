import React, { useState } from "react";

function NewWine () {
  
  return (
    <div>
        <form>
            <label for="wineName" >Wine Name:</label><br />
            <input id="wineName" type="text"></input><br />
            <lable for="wineRating" >Rating</lable><br />
            <input id="wineRating" type="integer"></input><br />
            <label for="wineNotes" >notes</label><br />
            <input id="wineNotes" type="text"></input><br />
            <input type="submit" value="Submit"></input>
        </form>
    </div>
  );
}

export default NewWine