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
        <div className="Register m-5  d-flex justify-content-center " >


<div className="card w-50">
  <div className="card-body">
    <h5 className="card-title">Register</h5>
  
  <div className="input-group mb-3">
  <span class=" m-5 input-group-text" id="basic-addon1">Name</span>
            <input className='m-5 form-control' type='text' onChange={(e)=>{
        setuserName(e.target.value)
            }} placeholder='write your name here'/>
            </div>
            <br/>
            <hr className="my-4"/>
            <br/>
            <div className="input-group mb-3">
            <input className=' m-5 form-control'  type='password'  onChange={(e)=>{
        setPassword(e.target.value)
        
            }} placeholder='write your password here' />
            <span class=" m-5 input-group-text" id="basic-addon1">password</span>
            </div>
            
            <br/>
            <hr className="my-4"/>
            <br/>
            <div className="input-group mb-3">
            <span class=" m-5 input-group-text" id="basic-addon1">Email</span>
            <input className='m-5 form-control' type='email'  onChange={(e)=>{
        setEmail(e.target.value)}} placeholder='write your email here' />
              </div>


<br/>
<br/>
<input type="submit" className='m-2 btn btn-outline-dark' value="register"onClick={registerFunc}/>
<br/>
<br/>
<Link className='btn btn-primary' to="/login">Have An Account</Link>
<br/>
<br/>

<footer class="blockquote-footer">Login link<cite title="Source Title"></cite></footer>
   
  </div>
</div>
          

  

        </div>
    )
}
