import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Todo} from "./types/todos"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo])
    //元のtodosは残したままで、newTodoを入れるってこと
  };

  const toggledTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return(
    <div>
      <h1>Todo アプリ</h1>
      <TodoForm addTodo={addTodo} />
      {/* <TodoList todos={todos} toggledTodo={toggledTodo} deleteTodo={deleteTodo} /> */}
    </div>
  )
}


export default App
