import React from 'react';

function TodoItem({ todo, onDelete }) {
  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
