
import { Link, Route, Switch, useLocation, withRouter } from "react-router-dom";
import {useState, useEffect} from 'react'

export const Login = () => {
    const [hidden, setHidden] = useState(false)
    const [verified, setVerified] = useState(false)
   const [userArray, setUserArray] = useState()
  
    async function getUserData() {
        const response = await fetch(
          "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/curb-appeal-thycd/service/getUsers/incoming_webhook/users"
       ); 
        const json = await response.json();
setUserArray(json.Curb[0]);
        console.log(userArray, 'Array')
       
      }
      useEffect(() => {
         getUserData()
      }, [])
    const unHide = () => {
      setHidden(!hidden)
     
    }
    const authUser = () => {
      let username = document.getElementById('username').value
      let password = document.getElementById('password').value
     
      if (Object.values(userArray).includes(username,password)) {
          
          setVerified(true)
      }
      else {
         alert('Invalid Username or password')
      }
    }
    return (
        <div className="loginPage"><h3 className="text-center">Nazwood Millworks Login
        <br /> The username is 'steve' and the password is 'password' both lowercase, we will change this later</h3>
        <br />
     
        <div className="text-center loginBox">
            <label>User Name</label>
            <br />
            <input placeholder="username" id="username"></input>
            <br />
            <label>Password</label>
            <br />
            <input placeholder="password" id="password"></input>
            <br />
            <button onClick={() => authUser()}>{verified ? <Link to="/imagereview">Review customer images</Link> : 'Login'}</button>
            </div><h3 className="text-center"> <br /><Link to="/">Back to front page</Link></h3></div>
    )
}