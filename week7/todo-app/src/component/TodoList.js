import React from 'react'
import Todo from './Todos'
// import React,{useContext} from 'react'



export default function TodoList(props){
    const { todo, updateTodo, deleteTodo } = props
    // console.log(todos)
    return (
        <div className='todo-list'>
            {todo.map(todo => <Todo {...todo} key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo} />) }
        </div>
    )
}