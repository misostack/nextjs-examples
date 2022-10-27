import { TodosContext } from "@/businesses/states/todos";
import { TodoModel, TodoStatus } from "@/models/todo";
import TodoList from "@/views/components/todos/TodoList";
import type {
  GetServerSideProps,
  NextComponentType,
  NextPageContext,
} from "next";
import { useMemo, useState } from "react";

interface TodosIndexProps {
  initialTodos: TodoModel[];
}

const TodosIndex: NextComponentType<NextPageContext, {}, TodosIndexProps> = (
  props: TodosIndexProps
) => {
  // application state
  const [todos, setTodos] = useState(props.initialTodos);
  const nextTodoId = useMemo(() => {
    return Math.max(...todos.map((todo) => todo.id)) + 1;
  }, [todos]);
  // handler events
  const onAddNewTask = () => {
    const newTask: TodoModel = {
      id: nextTodoId,
      name: `Task ${nextTodoId}`,
      description: "lorem",
      status: TodoStatus.pending,
    };
    setTodos([...todos, newTask]);
  };
  // should use views here
  return (
    <>
      <div className="max-h-screen min-h-screen">
        <div className="h-1/2">
          <TodosContext.Provider value={todos}>
            <button
              className="bg-blue-600"
              onClick={() => {
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
