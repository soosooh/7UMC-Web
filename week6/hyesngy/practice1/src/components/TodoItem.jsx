import Input from "./Input";
import Button from "./Button";

const TodoItem = ({ todo, editingId, editText, setEditText, setEditingId, deleteTodo, updateTodo }) => {
    return (
        <div className="todo" style={{ display: 'flex', gap: '20px' }}>
            {editingId !== todo.id && (
                <div className="todoName" key={todo.id} style={{ display: 'flex', gap: '5px' }}>
                    <div className="listItem" />
                    <p>{todo.task}</p>
                </div>
            )}
            {editingId === todo.id && (
                <div className="todoName" key={todo.id} style={{ display: 'flex', gap: '5px' }}>
                    <div className="listItem" />
                    <Input value={editText} onChange={(e) => setEditText(e.target.value)} inputType="edit" />
                </div>
            )}
            <div className="buttonDiv">
                <Button onClick={() => deleteTodo(todo.id)} text="삭제하기" />
                {editingId === todo.id ? (
                    <Button onClick={() => updateTodo(editingId, editText)} text="수정완료" />
                ) : (
                    <Button onClick={() => setEditingId(todo.id)} text="수정진행" />
                )}
            </div>
        </div>
    );
};

export default TodoItem;
