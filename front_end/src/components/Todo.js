import React, { useState } from 'react'

export default function Todo (props) {

    const {_id,
        title, isCompleted} = props.task


      return (
    <div className='Todo'>
        
          <input type="checkbox"  defaultChecked = {isCompleted} onClick={()=>{props.checkAndUpdate1(_id,!isCompleted)}}/>

          <span className='size' style={{ textDecoration:isCompleted? 'line-through':'none'}}>{title}</span>
          <button id = "btn" onClick={()=>{
            props.deleteOneTodo(_id)}}>Delete</button>
    </div>)
}
