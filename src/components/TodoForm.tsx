import { useState } from "react";

type addTodoProps = {
  addTodo: (text: string) => void;
};

const TodoForm = ({ addTodo }: addTodoProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    //trim()：前後の空白を消す
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="タスク入力中・・・"
      />
      <button type="submit">追加</button>
    </form>
  );
};

export default TodoForm;
