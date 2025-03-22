import TodoItem from "./TodoItem";
import { Todo } from "../types/todos"

type TodoListProps = {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
    deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, toggleTodo, editTodo, deleteTodo }: TodoListProps) => {
    return(
        <ul>
            {todos.map(todo => (
                <TodoItem //それぞれに対してTodoItemコンポーネントを描画している
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    )
}

export default TodoList;