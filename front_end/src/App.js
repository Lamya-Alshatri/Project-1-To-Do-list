
import './App.css';

import React, { useState,useEffect } from 'react'
import Todo from "./components/Todo"
import axios from 'axios';
import Add from"./components/Add"
import Register from"./components/Register"
import Login from "./components/Login"
import { Routes, Route, Link } from "react-router-dom";



export default function App() {
  const [tasks, setTasks] = useState([])
  const GetData = () => {
  axios.get("http://localhost:5000/tasks")
  .then(res => {
    console.log(res.data)
    setTasks(res.data)
  })
  .catch(err => {
    console.error(err); 
  })


}




  // useEffect(()=>{

  //   GetData()
  // },[])
  const postaNewTodo = (body) => {
    axios.post("http://localhost:5000/tasks",body)
    .then(res => {
      
      console.log(res.data)
      // setTasks(res.data)
      GetData()
      // change state using spread operator
    })
    .catch(err => {
      console.error(err); 
    })
    }

    const deleteTodo = (id) => {
  axios.delete(`http://localhost:5000/tasks/${id}`,)
  .then(res => {
    
    console.log(res.data)
    GetData()
  })
  .catch(err => {
    console.error(err); 
  })
}

const deleteAll = () => {
  axios.delete(`http://localhost:5000/Alltasks`,)
  .then(res => {
    
    console.log(res.data)
    GetData()
  })
  .catch(err => {
    console.error(err); 
  })
}

const GetCertainTodos = ()=> {

axios.get(`http://localhost:5000/filter?isCompleted=true`)
.then(function (response) {
  console.log(response.data)
  setTasks(response.data)

})
.catch(function (error) {
  console.error(error)
})

}

const GetCertainTodos2 = ()=> {

  axios.get(`http://localhost:5000/filter?isCompleted=false`)
  .then(function (response) {
    console.log(response.data)
    setTasks(response.data)
  
  })
  .catch(function (error) {
    console.error(error)
  })
  
  }

const  checkAndUpdate = (id,newStatus)=>{

  axios.put(`http://localhost:5000/tasks/${id}/${newStatus}`,)
  .then(function (response) {
    console.log(response.data)

    GetData()
  })
  .catch(function (error) {
    console.error(error)
  
  })
}




  const mapOverTasks = tasks.map((taskObj, i) => (

    
    <Todo  key={i} task={taskObj} deleteOneTodo={deleteTodo} checkAndUpdate1={checkAndUpdate}  />
  ));


// i need to use this command to put line on checked tasks style={{textDecoration:"line-through black"}}

// i need to get the tasks 

//  i need to put a button that deletes tasks

// i need to put isComplete in the shape of input checkbox and to display a line on selected tasks



//    const map = tasks.map((taskobj,i)=>{
// return <p>{taskobj.title}</p>
//   }); 



const relodpage = () => {

  window.location.reload();
}
const [IsLoggedIn, setIsLoggedIn] = useState();

const [username, setusername] = useState("");
  
  return(
    <div className='g'>
       <p className='list1'>To-Do list</p>
      <p className='To'>To-Do list</p>

      <p>Name:{username}</p>
      <nav>
        <Link to="/home">Home</Link>{" | "}
        <Link to="/register">Register</Link>{" | "}
        <Link to="/login">Login</Link>
      </nav>
      <br/>
      <Routes>
        <Route path="/home" element={<div className="home">

        <Add addfunction={postaNewTodo}/>
    <button id="GetData" onClick={GetData}>Get ALL</button> 
    <span id = "white" >|</span>

    <button id="btn" onClick={deleteAll}>Delete All</button>
    <span id = "white"  >|</span>

    <button id="btn" onClick={GetCertainTodos}>Get Finished</button>
    <span id = "white" >|</span>

    <button id="btn" onClick={GetCertainTodos2}>Get Pending</button>
    <span id = "white" >|</span>

    <button id="btn" onClick={relodpage} > Relod Page </button>
      {/* {map} */}
      
      
      <br/>
      {mapOverTasks}
      <br/>
      </div>}/>
        <Route path="login" element={< Login setIsLoggedIn={setIsLoggedIn} setusername={setusername} />} />
        <Route path="register" element={< Register/>} />
      </Routes>

    </div>
  )
  
}



