import { TodoModel } from "@/models/todo";
import { createContext } from "react";

const TodosContext = createContext<TodoModel[]>([]);
const TodosDispatchContext = createContext(null);

export { TodosContext, TodosDispatchContext };
