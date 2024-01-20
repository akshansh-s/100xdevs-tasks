import React, { useState } from 'react'
import './App.css'
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [ title, setTitle]= useState("");

  const addTodo = (title)=>{
    const newTodo={id:Date.now(),title};
    setTodos([...todos,newTodo]);
    setTitle("");
  };

  const deleteTodo =(id)=>{
    setTodos(todos.filter(todo=>todo.id!==id));
  };

  return (
      <div className='App'>
        <h1>Todo App</h1>
        <input type="text" 
          placeholder="Enter a todo" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
        <TodoList todos={todos} onDelete={deleteTodo} />
      </div>
  )
}

export default App
