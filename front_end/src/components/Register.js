import React,{useState} from 'react'
import axios from "axios"
import { Routes, Route, Link } from "react-router-dom";

export default function Register() {

    const [email, setEmail] = useState("lamya")

    const [password, setPassword] = useState("90")
    
    const [username, setuserName] = useState("l")
    

    const registerFunc = (e) => {
        e.preventDefault();
        console.log("reg");
        const newUser = {
          // ES6
          email,
          // "email": "email value in the state"
          password,
          username,
        };
    
        axios
        .post(`http://localhost:5000/users/register`, newUser)
        .then((response) => {
          console.log("DATA: ", response.data);
        })
        .catch((err) => {
          console.log("ERR: ", err);
        });
    };
    return (
        <div className="Register" >
            <form action="">
              <br/>
          <label id="label" htmlFor="text">Name:</label>
            <input type='text' name="input1"onChange={(e)=>{
        setuserName(e.target.value)
            }} placeholder='write your name here'/>
            <br/>
            <br/>
            
            <label id="label"  htmlFor="password">Password:</label>
            <input type='password' name="input2" onChange={(e)=>{
        setPassword(e.target.value)
            }} placeholder='write your password here' />
            <br/>
            <br/>
            <label id="label"  htmlFor= "email">Email:</label>
            <input type='email' name="input3" onChange={(e)=>{
        setEmail(e.target.value)}} placeholder='write your email here' />

<br/>
<br/>
<input type="submit" id="btn" value="register"onClick={registerFunc}/>
<br/>
<Link to="/login">Have An Account</Link>
<br/>
<br/>
</form>

  

        </div>
    )
}
