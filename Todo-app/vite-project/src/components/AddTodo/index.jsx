import React, { useState } from "react";
import Proptypes from "prop-types";
import TodoItem from "../../classes/TodoItem";

function AddTodo({ todos, setTodos }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValue.trim() == "") {
          setError(true);
        } else {
          setTodos([...todos, new TodoItem(inputValue)]);
          setInputValue("");
          setError(false);
        }
      }}
    >
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
        placeholder="Enter new todo"
        value={inputValue}
      />
      <p style={{ color: "red", display: error ? "block" : "none" }}>
        Input is required
      </p>
      <button type="submit">Add</button>
    </form>
  );
}

AddTodo.proptypes = {
  todos: Proptypes.array,
  setTodos: Proptypes.func,
};

export default AddTodo;
