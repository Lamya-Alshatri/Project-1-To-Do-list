
import './App.css';

import React, { useState,useEffect } from 'react'

import Todo from "./components/Todo"
import axios from 'axios';



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

 
  const mapOverTasks = tasks.map((taskObj, i) => (
    <Todo  key={i} task={taskObj} />
  ));

// i need to use this command to put line on checked tasks style={{textDecoration:"line-through black"}}

// i need to get the tasks 

//  i need to put a button that deletes tasks

// i need to put isComplete in the shape of input checkbox and to display a line on selected tasks



//    const map = tasks.map((taskobj,i)=>{
// return <p>{taskobj.title}</p>
//   }); 

  
  return(
    <div className='g'>
     
      <button onClick={GetData}>Get ALL</button>

      {/* {map} */}

      {mapOverTasks}
    </div>)
  
}



