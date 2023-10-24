import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Новая задача"
        onChange={handleChange}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;
