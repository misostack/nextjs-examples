import { TodosProvider } from "@/businesses/states/todos";

import { TodoModel, TodoStatus } from "@/models/todo";
import TodoAddForm from "@/views/components/todos/TodoAddForm";
import TodoList from "@/views/components/todos/TodoList";
import type {
  GetServerSideProps,
  NextComponentType,
  NextPageContext,
} from "next";

interface TodosIndexProps {
  initialTodos: TodoModel[];
}

const TodosIndex: NextComponentType<NextPageContext, {}, TodosIndexProps> = (
  props: TodosIndexProps
) => {
  // should use views here
  return (
    <>
      <div className="max-h-screen min-h-screen">
        <div className="h-1/2">
          <TodosProvider initialTodos={props.initialTodos}>
            <TodoAddForm />
            <TodoList />
          </TodosProvider>
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
