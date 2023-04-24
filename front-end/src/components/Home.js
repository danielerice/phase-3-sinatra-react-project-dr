import React, { useEffect, useState } from "react";
import Wine from "./Wine";

function Home ({isLoggedIn, setIsLoggedIn, user, setUser}) {
  
  const [wines, setWines] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //fires on submit of controlled form, fetches user obj, sets user in state
  function loginUser(event) {
    
    event.preventDefault();
    
      fetch(`http://localhost:9292/users/${username}`)
        .then(response => response.json())
        .then((data) => {
          if(data){
              if (password === data.password) {
                setUser(data)
                console.log(data)
                setIsLoggedIn(true)
              } else {
                console.log("error message")
              }
            }
          })
        }
  
  //fetches a user's wine, if isLoggedIn is true
  useEffect(() => {
    if(isLoggedIn === true) {
    fetch(`http://localhost:9292/user/wines/${user.id}`)
      .then(response => response.json())
      .then(wineData => setWines(wineData))
    } else {
      console.log("user not logged in")
    }
  }, []);

  if (isLoggedIn === true){
    return (
        <div>
          <button>New Wine!</button><button>New Food!</button>
          <ul>
            {wines.map((wine) => {
              return (<Wine
                key={wine.id}
                wineID={wine.id}
                nameOfWine={wine.name}
                rating={wine.rating}
                notes={wine.notes}
                userID={wine.user_id}
              />
              )})}
          </ul>
        </div>

  )} else {
    return (
      <form onSubmit={loginUser}>
        <lable for="username" >Username:</lable><br />
        <input id="username" type="text" onChange={(e) => setUsername(e.target.value)}></input><br />
        <lable for="password" >Password:</lable><br />
        <input id="password" type="text" onChange={(e) => setPassword(e.target.value)}></input><br />
        <input type="submit" value="Login"></input>
    </form>
    )
  }
}

export default Home;
