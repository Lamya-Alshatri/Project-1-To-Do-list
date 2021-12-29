import React, { useState } from 'react'

export default function Todo (props) {

    const {_id,
        title, isCompleted} = props.task


      return (
    <div className=' card w-25 text-center container container-table '>
      <div className='Todo card-hearder'>To-Dos
      </div>
          <ul className='list-group  list-group-flush '>
          <li className='Todo list-group-item'> <input className = "me-5 form-check-input"  type="checkbox"  name = "checkbox3"  id="flexCheckIndeterminate" defaultChecked = {isCompleted} onClick={()=>{props.checkAndUpdate1(_id,!isCompleted)}}/>
          
         <span  className='ms-4  h5 '   style={{ textDecoration:isCompleted? 'line-through':'none'}}>{title}</span>
          
          <button className=' ms-5 btn btn-outline-danger '  onClick={()=>{
            props.deleteOneTodo(_id)}}>Delete</button>
            </li> 
  </ul>    
          
      

    </div>)
}
