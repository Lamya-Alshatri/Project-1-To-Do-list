import React from 'react'

export default function Todo (props) {
    const {_id,
        title, isCompleted}=props.task
      return (
        <div className='Todo'>
      
          <input type="checkbox" checked ={isCompleted}></input>

          <span style={{ textDecoration:isCompleted? 'line-through':'none'}}>{title}</span>
          <button>✖</button>
        </div>)
}
