import React,{useState} from 'react'

import axios from "axios"



export default function Login() {

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
        })
        .catch((err) => {
          console.log("ERR: ", err);
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

<input type="submit" id="btn" value="Login"onClick={loginFunc}/>
<br/>
<br/>
</form>
        </div>
    )
}
