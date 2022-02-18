import NewTodo from './component/NewTodo';
import TodoList from './component/TodoList';
import './App.css';
import {useState, useEffect} from "react";
import axios from "axios"

export default function App() {
  const [todo, setTodo] = useState([]);
  const getTodo = () => {
    axios.get ('/todo')
    
    // .then(res =>(console.log(res.data)))
    .then(res =>  setTodo(res.data))
    .catch(err => console.log(err));
  };
 useEffect(()=>{
  getTodo();
 },[])
  const AddTodo = (newTodo) => {
    axios.post ('/todo', newTodo)
    .then(res =>{
      console.log(res)
     getTodo();
    })
   .catch(err => console.log(err));
  };


const deleteTodo = (todoId) => {
  axios.delete (`/todo/${todoId}`)
  .then(res =>{
    getTodo();
  })
  .catch(err => console.log(err))
};

const updateTodo = (todoId, updates) => {
  axios.put(`/todo/${todoId}`,updates)
  .then(res =>{
    getTodo();
  })
}

  return (
    <div className="App">
     <NewTodo addTodo={AddTodo}/>
     <TodoList todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}