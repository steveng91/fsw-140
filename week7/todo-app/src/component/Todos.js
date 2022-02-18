import React, {useState} from 'react'
import NewTodo from './NewTodo';
export default function Todo({todo,message,deleteTodo,updateTodo,id}){
    const [editInput, setEditInput] = useState(false);
    return (
        <div className= 'todo'>

<br></br>


{!editInput ?
            <>
            <h1>{todo}</h1>
            <h3>{message}</h3>
            <button onClick={()=> deleteTodo(id)}>delete</button>
            <button onClick={()=> setEditInput(prevIn =>!prevIn)}>edit</button>
            </>
            :
            <>
            <NewTodo
           
           addTodo={(updates) =>{updateTodo(id, updates)}}
           
           />
            <button onClick={()=> setEditInput(prevIn => !prevIn) }>update</button>
            </>
}

        </div>
    )
}