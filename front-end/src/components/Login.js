import React, { useEffect, useState} from 'react';
import { Link } from "react-router-dom";

function Login ({ setIsLoggedIn, isLoggedIn, setUser}) {

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
                    setIsLoggedIn(true)
                    console.log("logging in!")
                } else {
                    console.log("error message")
                }
                }
            })
            }


    return (
        <div>
            <form onSubmit={loginUser}>
            <lable for="username" >Username:</lable><br />
            <input id="username" type="text" onChange={(e) => setUsername(e.target.value)}></input><br />
            <lable for="password" >Password:</lable><br />
            <input id="password" type="text" onChange={(e) => setPassword(e.target.value)}></input><br />
            <input type="submit" value="Login"></input>
            </form>
            <Link to='/newuser'>Sign Up!</Link>
      </div>
    )
}

export default Login;