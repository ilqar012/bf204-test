import React, { useState } from "react";
import AddTodo from "../AddTodo";
import SearchToDo from "../SearchToDo";
import ToDoList from "../TodoList";
import ToDoItem from "../TodoItem";


const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  let filteredTodos = todos.filter((todo) => {
    return todo.title
      .toLowerCase()
      .trim()
      .includes(searchQuery.toLowerCase().trim());
  });
  return (
    <>
      <h2>ToDo React App</h2>
      <AddTodo todos={todos} setTodos={setTodos} />
      <hr />
      <SearchToDo setSearchQuery={setSearchQuery} />
      <h3>ToDo list</h3>
      <ToDoList>
        {filteredTodos &&
          filteredTodos.map((todo) => {
            return <ToDoItem key={todo.id} todo={todo} setTodos={setTodos}/>;
          })}
      </ToDoList>
    </>
  );
};

export default ToDo;
