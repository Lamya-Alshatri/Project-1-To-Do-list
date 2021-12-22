import React,{useState} from 'react';



const Add = (props) => {
    const [title, setTitle] = useState('')
const CreateNewTodo = () =>{
    props.addfunction({title:title,isCompleted:false})
}
    return (
        <div className="Add">
            <input type="text" onChange={(e)=>{
        setTitle(e.target.value)
            }}/>
            <button onClick={CreateNewTodo} placeholder="Write your new To-Do here">Create a new To-Do</button>

        </div>
    );
}

export default Add;
