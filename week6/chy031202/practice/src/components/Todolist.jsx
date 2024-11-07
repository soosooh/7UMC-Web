import { useContext } from 'react';
import { TodoContext } from './todocontext';

function TodoList() {
    const {
        todos,
        text,
        setText,
        editingId,
        setEditingId,
        editText,
        setEditText,
        addTodo,
        deleteTodo,
        updateTodo,
    } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo();
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="cont">
                <input
                    className="writearea"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className="regis" type="submit">
                    할 일 등록
                </button>
            </form>
            <div className="clickt">
                {todos.map((todo) => (
                    <div key={todo.id} style={{ display: 'flex', gap: '20px' }}>
                        {editingId !== todo.id ? (
                            <>
                                <p>{todo.id}.</p>
                                <p>{todo.task}</p>
                            </>
                        ) : (
                            <input
                                defaultValue={todo.task}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                        )}
                        <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
                        {editingId === todo.id ? (
                            <button onClick={() => updateTodo(editingId, editText)}>
                                수정 완료
                            </button>
                        ) : (
                            <button onClick={() => setEditingId(todo.id)}>수정 진행</button>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default TodoList;