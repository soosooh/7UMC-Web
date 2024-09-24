document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input[type="text"]');
    const todoContainer = document.querySelector('.todoContainer');
    const finishContainer = document.querySelector('.finishContainer');

    // 엔터 시
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && input.value.trim() !== '') {
            addTodoItem(input.value.trim());
            input.value = '';
        }
    });


    // 해야 할 일 추가
    function addTodoItem(text) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todoItem');
        todoItem.innerHTML = `
            <p id="todoDetailTitle">${text}</p>
            <button class="finishButton">완료</button>
        `;
        
        // 완료 버튼 클릭 시
        todoItem.querySelector('.finishButton').addEventListener('click', () => {
            moveToFinished(todoItem);
        });

        todoContainer.appendChild(todoItem);
    }

    // 해야 할 일 -> 해낸 일
    function moveToFinished(todoItem) {
        const finishItem = document.createElement('div');
        finishItem.classList.add('finishItem');
        finishItem.innerHTML = `
            <p id="finishDetailTitle">${todoItem.querySelector('p').textContent}</p>
            <button class="deleteButton">삭제</button>
        `;
        
        // 삭제 버튼 클릭 시
        finishItem.querySelector('.deleteButton').addEventListener('click', () => {
            finishItem.remove();
        });

        // 지우기
        finishContainer.appendChild(finishItem);
        todoItem.remove();
    }
});
