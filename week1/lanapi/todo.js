
// document.addEventListener('DOMContentLoaded', () => {
//     const input = document.querySelector('.input-field');
//     const todoList = document.getElementById('todoList');
//     const doneList = document.getElementById('doneList');

//     input.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter' && input.value.trim() !== '') {
//             addTask(input.value.trim());
//             input.value = '';
//         }
//     });

//     function addTask(taskText) {
//         const task = document.createElement('div');
//         task.className = 'task';
//         task.innerHTML = `
//             <div class="task-content">
//                 <span class="task-text">${taskText}</span>
//                 <button onclick="completeTask(this)">완료</button>
//             </div>
//             <div class="task-divider"></div>
//         `;
//         todoList.appendChild(task);
//     }

//     window.completeTask = function(button) {
//         const task = button.parentElement;
//         button.remove();
//         doneList.appendChild(task);
//     };
// });

// function addTask(taskText) {
//     const task = document.createElement('div');
//     task.className = 'task';
//     task.innerHTML = `
//         <div class="task-content">
//             <span class="task-text">${taskText}</span>
//             <button onclick="completeTask(this)">완료</button>
//         </div>
//         <div class="task-divider"></div>
//     `;
//     todoList.appendChild(task);
// }

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.input-field');
    const todoList = document.getElementById('todoList');
    const doneList = document.getElementById('doneList');

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim() !== '') {
            addTask(input.value.trim());
            input.value = '';
        }
    });

    function addTask(taskText) {
        const task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `
            <div class="task-content">
                <span class="task-text">${taskText}</span>
                <button onclick="completeTask(this)">완료</button>
            </div>
            <div class="task-divider"></div>
        `;
        todoList.appendChild(task);
    }

    window.completeTask = function(button) {
        const task = button.closest('.task');
        const completeButton = task.querySelector('button');
        completeButton.textContent = '삭제';
        completeButton.onclick = function() { deleteTask(this); };
        doneList.appendChild(task);
    };

    window.deleteTask = function(button) {
        const task = button.closest('.task');
        task.remove();
    };
});