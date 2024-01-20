import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title)=>{
    const newTodo={id:Date.now(),title};
    setTodos([...todos,newTodo]);
  };

  const deleteTodo =(id)=>{
    setTodos(todos.filter(todo=>todo.id!==id));
  };

  return (
      <div className='App'>
        <h1>Todo App</h1>
        {}
      </div>
  )
}

export default App
