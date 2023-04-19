import React, { useState } from "react";

function NewUser () {
  
  return (
    <div>
        <label for="fullName" >Full Name:</label><br />
        <input id="fullName" type="text"></input><br />
        <lable for="username" >Username:</lable><br />
        <input id="username" type="text"></input><br />
        <lable for="password" >Password:</lable><br />
        <input id="password" type="text"></input><br /><br />
        <input type="submit" value="Submit"></input>
    </div>
  );
}

export default NewUser;
