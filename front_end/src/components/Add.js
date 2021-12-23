import React,{useState} from 'react';



const Add = (props) => {
    const [title, setTitle] = useState('')
const CreateNewTodo = () =>{
    props.addfunction({title:title,isCompleted:false})
}
    return (
        <div className="Add">
            <input classname="input" type="text" placeholder="Write your To-Do here" onChange={(e)=>{
        setTitle(e.target.value)
            }}/>
            <button id="btn" onClick={CreateNewTodo}>Create a new To-Do</button>

        </div>
    );
}

export default Add;
