import { TodosContext } from "@/businesses/states/todos";
import {
  todoActions,
  todoReducers,
  TodosAction,
} from "@/businesses/states/todos/todos.reducers";
import { TodoModel, TodoStatus } from "@/models/todo";
import TodoList from "@/views/components/todos/TodoList";
import type {
  GetServerSideProps,
  NextComponentType,
  NextPageContext,
} from "next";
import { ReducerAction, useMemo, useReducer, useState } from "react";

interface TodosIndexProps {
  initialTodos: TodoModel[];
}

const TodosIndex: NextComponentType<NextPageContext, {}, TodosIndexProps> = (
  props: TodosIndexProps
) => {
  // application state
  const [todos, dispatch] = useReducer(todoReducers, props.initialTodos);
  // handler events
  const onAddNewTask = () => {
    todoActions.addAction(dispatch, {
      name: `Task`,
      description: "lorem ips",
    });
  };
  // should use views here
  return (
    <>
      <div className="max-h-screen min-h-screen">
        <div className="h-1/2">
          <TodosContext.Provider value={todos}>
            <button
              className="bg-blue-600"
              onClick={(e) => {
                onAddNewTask();
              }}
            >
              New task
            </button>
            <TodoList />
          </TodosContext.Provider>
        </div>
      </div>
    </>
  );
};

export default TodosIndex;
export const getServerSideProps: GetServerSideProps<TodosIndexProps> = async (
  context
) => {
  const initialTodos: TodoModel[] = Array.from(new Array(5)).map((_, index) => {
    const statuses = [
      TodoStatus.pending,
      TodoStatus.inprogress,
      TodoStatus.done,
    ];
    return {
      id: index + 1,
      name: `Issue ${index + 1}`,
      description: `lorem ipsum blalasd aasd ${index + 1}`,
      status: statuses[Math.floor(Math.random() * 3)],
    };
  });
  return {
    props: {
      initialTodos,
    },
  };
};
