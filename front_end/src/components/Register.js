import React,{useState} from 'react'

import axios from "axios"


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
        <div>
            <form action="">
          <label htmlFor="email">Email:</label>
            <input type='email' name="input1"onChange={(e)=>{
        setuserName(e.target.value)
            }} placeholder='write your email here'/>
            
            <label htmlFor="password">Password:</label>
            <input type='password' name="input2" onChange={(e)=>{
        setPassword(e.target.value)
            }} placeholder='write your password here' />
            
            <label for= "input3">Email:</label>
            <input type='text' name="input3" onChange={(e)=>{
        setEmail(e.target.value)}} placeholder='write your email here' />

<input type="submit" id="btn" value="register"onClick={registerFunc}/>
</form>

  

        </div>
    )
}
