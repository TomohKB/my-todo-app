import { useState } from "react";
import { Todo } from "../types/todos"

type TodoItemProps = {
    todo: Todo;
    toggleTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
    deleteTodo: (id: number) => void;
};

const TodoItem = ({ todo, toggleTodo, editTodo, deleteTodo }: TodoItemProps) => {
    const [isEditing, setIsEditing] = useState(false); //falseで表示モード
    const [inputText, setInputText] = useState(todo.text); //入力モード

    const handleEdit = () => { //編集します
        setIsEditing(true);
    }

    const handleSave = () => { //編集を保存します
        editTodo(todo.id, inputText); //editTodoを親に返す
        setIsEditing(false);
    }

    const handleCancel = () => { //編集やめます
        setInputText(todo.text); //ここ聞く
        setIsEditing(false);
    }
    
    return(
        <li>
            {isEditing ? ( //trueの処理
                <>
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
                    <button onClick={handleSave}>保存</button>
                    <button onClick={handleCancel}>キャンセル</button>
                </>
            ) : ( //falseの処理
                <>
                    <span
                        onClick={() => toggleTodo(todo.id)} 
                        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                    >
                        {todo.text}
                    </span>
                    <button onClick={handleEdit}>編集</button>
                    <button onClick={() => deleteTodo(todo.id)}>削除</button>
                </>
            )}
        </li>
    )
}

export default TodoItem;

