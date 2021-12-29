import React,{useState} from 'react'
import axios from "axios"
import { Routes, Route, Link } from "react-router-dom";


export default function Login(props) {

    

    const [email, setEmail] = useState("lamya")

    const [password, setPassword] = useState("90")

    const [WrongUser, setWrongUser] = useState(false);

    const [LoginStatus, setLoginStatus] = useState(null);

    const [message, setMessage] = useState("");

    // 200 400 404
    

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

            setLoginStatus(response.status)

            setMessage(response.data.message)

          console.log("DATA: ", response.data);
          props.setIsLoggedIn(true)
          props.setusername(response.data.username)
        })
        .catch((err) => {
          console.log("ERR: ", err);

          props.setIsLoggedIn(false)

          setLoginStatus(err.response.status)

          setMessage(err.response.data.message)

          props.setusername(null)
        });
    };

    // const DeleteUser = (e) =>{

    //     e.preventDefault();

    //     console.log("logout")


       
    //     axios.delete(`http://localhost:5000/users/login/${email}`)
    //     .then(res => {
    //     console.log(res)
    //     })
    //     .catch(err => {
    //     console.error(err); 
    //     })
    // }
    
       
    return (
        
        <div className="Login m-5 d-flex justify-content-center ">
            <div className="  card w-50">
  <div class="card-body">
  <h5 className='card-title '>Login</h5>
  
  <div class="input-group mb-3">
  <span class=" m-5 input-group-text" id="basic-addon1">Password</span>
  <input type="text" class=" m-5 form-control" placeholder="Lam86486" type='password' onChange={(e)=>{
        setPassword(e.target.value)}}  value = {password} placeholder='Lam86486' />
</div>
<br/>
<hr className="my-4"/>
<br/>
<div class="input-group mb-3">
<input type="email" className=" m-5 form-control" placeholder="lam.alshatri.1@gmail.com" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e)=>{
        setEmail(e.target.value)}}  value = {email} placeholder='lam.alshatri.1@gmail.com' />
  <span className =" m-5 input-group-text" id="basic-addon2">Email</span>
  </div>        
            <br/>

            {(LoginStatus === 200) && ( <div class="alert alert-success m-5" role="alert">
            {message}
</div>
)}

{(LoginStatus === 400 ||LoginStatus === 404) && ( <div class="alert alert-danger m-5" role="alert">
{message}
</div> )}
          


            <br/>        
<input type="submit" className='m-2 btn btn-outline-dark ' value="Login"onClick={loginFunc}/>
<br/>
<br/>
<Link className= 'btn btn-primary' to="/register">Don't Have An Account</Link>
<br/>
<br/>
<footer class="blockquote-footer">Register link<cite title="Source Title"></cite></footer>
  </div>
</div>
            
          
        



        </div>
    )
}
