import { useTodosDispatch } from "@/businesses/states/todos";
import { todoActions } from "@/businesses/states/todos/todos.reducers";
import { TodoModel } from "@/models/todo";
import React from "react";

const TodoAddForm = () => {
  // application state
  const dispatch = useTodosDispatch();
  // handler events
  const onAddNewTask = () => {
    if (dispatch) {
      todoActions.addAction(dispatch, {
        name: `Task`,
        description: "lorem ips",
      });
    }
  };
  return (
    <>
      <button
        className="bg-blue-600"
        onClick={(e) => {
          onAddNewTask();
        }}
      >
        New task
      </button>
    </>
  );
};

export default TodoAddForm;
