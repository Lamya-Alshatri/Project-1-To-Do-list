import React, { useState } from 'react'

export default function Todo (props) {

    const {_id,
        title, isCompleted} = props.task


      return (
    <div className='  w-25 text-center text-center '>
      
          <ol className='list-group'>
          <li className='list-group-item bg-dark p-2 text-white bg-opacity-50'> <input className = "me-5 form-check-input"  type="checkbox"  name = "checkbox3"  id="flexCheckIndeterminate" defaultChecked = {isCompleted} onClick={()=>{props.checkAndUpdate1(_id,!isCompleted)}}/>
          
         <span  className='ms- h5 '   style={{ textDecoration:isCompleted? 'line-through':'none'}}>{title}</span>
          
          <button className='ms-5 btn btn-outline-dark ' onClick={()=>{
            props.deleteOneTodo(_id)}}>Delete</button>
            </li> 
  </ol>    
          
      

    </div>)
}
