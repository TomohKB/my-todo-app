import { useState } from "react";
import { Todo } from "../types/todos";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem = ({
  todo,
  toggleTodo,
  editTodo,
  deleteTodo,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false); //falseで表示モード
  const [inputText, setInputText] = useState(todo.text); //入力モード

  const handleEdit = () => {
    //編集します
    setIsEditing(true);
  };

  const handleSave = () => {
    //編集を保存します
    editTodo(todo.id, inputText); //editTodoを親に返す
    setIsEditing(false);
  };

  const handleCancel = () => {
    //編集やめます
    setInputText(todo.text); //ここ聞く
    setIsEditing(false);
  };
  return (
    <tr>
      {isEditing ? ( //trueの処理
        <>
          <td>{todo.date}</td>
          <td>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              //入力が変わった時に発火する
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSave();
                if (e.key === "Escape") handleCancel();
              }}
            />
          </td>
          <td></td>
          <td>
            <button onClick={handleSave}>保存</button>
          </td>
          <td>
            <button onClick={handleCancel}>キャンセル</button>
          </td>
        </>
      ) : (
        //falseの処理
        <>
          <td>{todo.date}</td>
          <td
            onClick={() => toggleTodo(todo.id)}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "gray" : "white",
              textAlign: "center",
            }}
          >
            {todo.text}
          </td>
          <td>{todo.completed ? "✅" : "❌"}</td>
          <td>
            <button onClick={handleEdit}>編集</button>
          </td>
          <td>
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default TodoItem;
