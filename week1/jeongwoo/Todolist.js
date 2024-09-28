document.addEventListener('DOMContentLoaded', function() {
    const studyInput = document.getElementById('study-input');
    const searchBtn = document.getElementById('search-btn');
    const todoList = document.getElementById('todo-list');
    const doneList = document.getElementById('done-list');

    let todos = [];

    function renderTodos() {
        todoList.innerHTML = '';
        doneList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = todo.status === 'todo' ? 'todo-item' : 'done-item';
            li.innerHTML = `
                <span>${todo.text}</span>
                <button>${todo.status === 'todo' ? '완료' : '삭제'}</button>
            `;
            if (todo.status === 'todo') {
                li.querySelector('button').onclick = () => changeTodoStatus(todo, 'done');
                todoList.appendChild(li);
            } else {
                li.querySelector('button').onclick = () => removeTodo(todo);
                doneList.appendChild(li);
            }
        });
    }

    function changeTodoStatus(todo, newStatus) {
        todo.status = newStatus;
        renderTodos();
    }

    function removeTodo(todo) {
        todos = todos.filter(t => t !== todo);
        renderTodos();
    }

    searchBtn.addEventListener('click', function() {
        const newTodo = studyInput.value.trim();
        if (newTodo) {
            todos.push({ text: newTodo, status: 'todo' });
            studyInput.value = '';
            renderTodos();
        }
    });

    studyInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
});