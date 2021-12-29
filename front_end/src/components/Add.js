import React,{useState} from 'react';



const Add = (props) => {
    const [title, setTitle] = useState('')
const CreateNewTodo = () =>{
    props.addfunction({title:title,isCompleted:false})
}
    return (
        <div className="h-25  input-group ">
               <button className=" btn btn-outline-dark " onClick={CreateNewTodo}>Create a new To-Do</button>
            <input className="form-control" type="text" placeholder="Write your To-Do here" aria-label="To-Do" onChange={(e)=>{
        setTitle(e.target.value)
            }}/>
        </div>
    );
}

export default Add;
