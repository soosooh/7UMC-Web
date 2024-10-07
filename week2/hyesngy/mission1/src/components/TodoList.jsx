import TodoItem from "./TodoItem";

const TodoList = ({ todos, editingId, setEditText, setEditingId, deleteTodo, updateTodo, editText }) => {
    return (
        <div className="todoList">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    editingId={editingId}
                    setEditText={setEditText}
                    setEditingId={setEditingId}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                    editText={editText}
                />
            ))}
        </div>
    );
};

export default TodoList;
