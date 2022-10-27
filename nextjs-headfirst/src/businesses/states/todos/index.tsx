import React, { Dispatch, useContext, useReducer } from "react";
import { TodoModel } from "@/models/todo";
import { createContext } from "react";
import { todoReducers, TodosAction } from "./todos.reducers";

const TodosContext = createContext<TodoModel[]>([]);
const TodosDispatchContext = createContext<Dispatch<TodosAction> | null>(null);

const TodosProvider = ({
  initialTodos,
  children,
}: {
  initialTodos: TodoModel[];
  children: JSX.Element[] | JSX.Element;
}) => {
  const [todos, dispatch] = useReducer(todoReducers, initialTodos);
  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};

const useTodos = () => {
  return useContext(TodosContext);
};

const useTodosDispatch = () => {
  return useContext(TodosDispatchContext);
};
export { useTodos, useTodosDispatch, TodosProvider };
