/* eslint-disable react/no-array-index-key */
import React, {useState} from 'react'
import TodoForm from '../TodoForm/TodoForm'
import './TodoWrapper.css'
import Todo from '../Todo/Todo'

function TodoWrapper() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([
      {
        id: Math.random().toString(),
        task: todo,
        completed: false,
      },
      ...todos
    ])
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-wrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        )
      )}
    </div>
  )
}

export default TodoWrapper