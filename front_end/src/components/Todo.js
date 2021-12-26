import React, { useState } from 'react'

export default function Todo (props) {

    const {_id,
        title, isCompleted} = props.task


      return (
    <div className='Todo'style={{ transform:isCompleted? "translateX(400px)":"translateX(-400px)"}}>
      
      
          <input className = "checkbox1"  type="checkbox"  name = "checkbox3" defaultChecked = {isCompleted} onClick={()=>{props.checkAndUpdate1(_id,!isCompleted)}}/>
         
          <span className='size' style={{ textDecoration:isCompleted? 'line-through':'none'}}>{title}</span>
          
          <button id = "btn" onClick={()=>{
            props.deleteOneTodo(_id)}}>Delete</button>

      

    </div>)
}
