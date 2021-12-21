import React from 'react'

export default function Todo (props) {
    const {_id,
        title, isCompleted}=props.task
      return (
        <div className='Todo'>
          <p>TITLE: {title} </p> <p>{isCompleted} <input type="checkbox"></input></p>
          
        </div>)
}
