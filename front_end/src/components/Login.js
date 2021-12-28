import React,{useState} from 'react'
import axios from "axios"
import { Routes, Route, Link } from "react-router-dom";


export default function Login(props) {

    const [email, setEmail] = useState("lamya")

    const [password, setPassword] = useState("90")
    

    const loginFunc = (e) => {

        e.preventDefault();

        console.log("log")

        const UserInfo = {
        email,
        password,
        }

        
        axios
        .post(`http://localhost:5000/users/login`,UserInfo)
        .then((response) => {
          console.log("DATA: ", response.data);
          props.setIsLoggedIn(true)
          props.setusername(response.data.username)
        })
        .catch((err) => {
          console.log("ERR: ", err);
          props.setIsLoggedIn(false)
        });
    };
        
    
       
    return (
        <div className="Login">
            <form action="">
            <br/>
            <label id="label"  htmlFor="password">Password:</label>
            <input type='password' onChange={(e)=>{
        setPassword(e.target.value)}}  value = {password} placeholder='write your password here' />
            <br/>
            <br/>
            <label id="label"  htmlFor= "email">Email:</label>
            <input type='text'  onChange={(e)=>{
        setEmail(e.target.value)}}  value = {email} placeholder='write your email here' />
<br/>
<br/>
<input type="submit" id="btn" value="Login"onClick={loginFunc}/>
<br/>
<Link to="/register">Don't Have An Account</Link>
<br/>
<br/>
</form>
        </div>
    )
}
