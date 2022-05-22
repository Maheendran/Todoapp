import React from 'react'
import { useState } from 'react'
import "../component/todos.css"

const TodoItem = ({todo,onDelete}) => {
    const [value,setValue] = useState(todo.value)
  return (
    <div key={todo.id}>
        <input type="radio" value={""} 
        checked={value} 
        onChange={(e)=>{setValue(e.target.checked)}} 
         />
        {todo.value}
        <button className='delebut' onClick={()=>onDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem