import React, { useState } from "react";

function NewUser ({setUser, setIsLoggedIn}) {
  
  const [fullName, setFullName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function postNewUser (event) {
    event.preventDefault();

    const formData = {
      "name": fullName,
      "username": username,
      "password" : password
      }; 
    const configObj = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
      },
      body: JSON.stringify(formData),
      };

      fetch(`http://localhost:9292/users`, configObj)
            .then(response => response.json())
            .then(data => setUser(data))

  }

  return (
    <div id="container">
      <div className="card">
        <form onSubmit={postNewUser}>
          <label for="fullName" >Full Name:</label><br />
          <input id="fullName" type="text" onChange={(e) => setFullName(e.target.value)}></input><br />
          <lable for="username" >Username:</lable><br />
          <input id="username" type="text" onChange={(e) => setUsername(e.target.value)}></input><br />
          <lable for="password" >Password:</lable><br />
          <input id="password" type="text" onChange={(e) => setPassword(e.target.value)}></input><br /><br />
          <input type="submit" value="Submit"></input>
          </form>
      </div>
    </div>
  );
}

export default NewUser;
