import React from 'react';
import { useState } from 'react';
import "../component/todos.css"
import TodoItem from './TodoItem';
const Todo = () => {
  let[newTodo,setNewTodo] = useState("")
   const [todos,setTodos] = useState([]);
   const handleChange=(e)=>{
    setNewTodo(e.target.value)
   }
   const onDelete=(id)=>{
      let newTodo = todos.filter(todo => todo.id !== id)
      setTodos(newTodo);
   }
  return (
    <div>
        <div className='nav'> 
        <h1>TODO APP </h1>
        <p>List your todo items here , Make your day better with this habit</p>
     </div>
      <div className='body'>
            <input value={newTodo} placeholder='Write Something' onChange={handleChange} className='something'/>
             <button onClick={()=>{
               setTodos([...todos,{id:Date.now(),value: newTodo,}])
              setNewTodo("")
              }} className='add'>
              +
              </button> 
             {todos.map((todo)=>(
             <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
            ))}
       </div> 
    </div>
  )
}

export default Todo;