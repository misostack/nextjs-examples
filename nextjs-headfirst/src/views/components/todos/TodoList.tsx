import { useTodos } from "@/businesses/states/todos";
import { TodoStatus } from "@/models/todo";
import React from "react";

const TodoList = () => {
  const todos = useTodos();
  // component's properties
  const statusColors = {
    [TodoStatus.pending]: "bg-red-400",
    [TodoStatus.inprogress]: "bg-yellow-400",
    [TodoStatus.done]: "bg-green-400",
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className={`${statusColors[todo.status]} mb-2`}>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <p>{todo.status}</p>
        </div>
      ))}
    </>
  );
};

export default TodoList;
