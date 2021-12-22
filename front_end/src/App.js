
import './App.css';

import React, { useState,useEffect } from 'react'

import Todo from "./components/Todo"
import axios from 'axios';
import Add from"./components/Add"


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
  const mapOverTasks = tasks.map((taskObj, i) => (
    <Todo  key={i} task={taskObj} deleteOneTodo={deleteTodo}  />
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
      <p>To-Do list</p>
     <Add addfunction={postaNewTodo}/>
      <button onClick={GetData}>Get ALL</button>

      {/* {map} */}

      {mapOverTasks}
    </div>)
  
}



