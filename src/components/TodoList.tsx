import "./TodoList.css";
import TodoItem from "./TodoItem";
import { Todo } from "../types/todos";

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
};

const TodoList = ({
  todos,
  toggleTodo,
  editTodo,
  deleteTodo,
}: TodoListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>入力日時</th>
          <th>タスク</th>
          <th>完了</th>
          <th>編集</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
