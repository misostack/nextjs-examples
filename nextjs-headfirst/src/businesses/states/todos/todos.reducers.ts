import { TodoCreateModel, TodoModel, TodoStatus } from "@/models/todo";
import { Dispatch, Reducer } from "react";
// actions
export interface TodosAction {
  type: "add" | "update" | "delete" | "markDone" | "markPending";
  payload: TodoModel | TodoCreateModel;
}

// reducers
const todoReducers: Reducer<TodoModel[], TodosAction> = (
  todos: TodoModel[],
  action: TodosAction
) => {
  if (action.type === "add") {
    const nextTodoId = Math.max(...todos.map((todo) => todo.id)) + 1;
    return [
      ...todos,
      {
        ...action.payload,
        id: nextTodoId,
        status: TodoStatus.pending,
        name: `Task ${nextTodoId}`,
      },
    ];
  }
  // default
  return [...todos];
  // return new Error(`Unhandled  action type ${action.type}`);
};

// define dispatch actions

const todoActions = {
  addAction: (dispatch: Dispatch<TodosAction>, payload: TodoCreateModel) => {
    dispatch({
      type: "add",
      payload,
    });
  },
};

export { todoReducers, todoActions };
