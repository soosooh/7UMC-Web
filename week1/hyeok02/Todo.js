document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const todoList = document.getElementById('todoList');
    const completedList = document.getElementById('completedList');

    // Enter 키로 할 일 추가
    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';  // 입력 필드 초기화
            }
        }
    });

    // 할 일 목록에 새로운 할 일 추가하는 함수
    function addTask(taskText) {
        const taskItem = document.createElement('div');
        taskItem.textContent = taskText;
        taskItem.classList.add('task-item');

        // 완료 버튼 추가
        const completeBtn = document.createElement('button');
        completeBtn.textContent = '완료';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', function () {
            moveTask(taskItem, todoList, completedList);
        });
        taskItem.appendChild(completeBtn);

        todoList.appendChild(taskItem);
    }

    // 할 일 이동 함수
    function moveTask(task, fromList, toList) {
        fromList.removeChild(task);
        toList.appendChild(task);
        // 완료 버튼 이벤트 제거
        task.querySelector('.complete-btn').remove();
        // 삭제 버튼 추가
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '삭제';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function () {
            toList.removeChild(task);
        });
        task.appendChild(deleteBtn);
    }
});
