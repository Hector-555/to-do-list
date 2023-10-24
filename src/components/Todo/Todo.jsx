/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import './Todo.css'
import DeleteIcon from "../../icons/delete-icon.png";

function Todo({ task, toggleComplete, deleteTodo }) {
  return (
    <div className={task.completed ? "todo completed" : "todo"}>
      <p
        onClick={() => toggleComplete(task.id)}
        className={task.completed ? "completed" : ""}
      >
        {task.task}
      </p>
      <div>
        <img
          src={DeleteIcon}
          alt="удалить"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
}

export default Todo