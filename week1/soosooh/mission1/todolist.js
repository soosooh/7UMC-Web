document.addEventListener('DOMContentLoaded', function () {
    // 입력 필드와 해야 할 일 목록 가져오기
    const inputTask = document.getElementById('inputTask');
    const toDoList = document.getElementById('ToDoList');
    const doneList = document.getElementById('DoneList');

    inputTask.addEventListener('keypress',function(event) {
        if (event.key === 'Enter') {
            const task = inputTask.value; // 입력된 값 가져오기

            if (task !== "") { // 입력이 비어있지 않으면
                const listItem = document.createElement('li'); // 새로운 리스트 항목 생성
                listItem.textContent = task; // 할 일 텍스트 추가
                const doneButton = document.createElement('button');
                doneButton.textContent = '완료';
                doneButton.classList.add('doneButton');
                // 완료 버튼 클릭 시 동작 추가
                doneButton.addEventListener('click', function () {
                    // 완료된 항목을 해낸 일 목록으로 이동
                    doneList.appendChild(listItem);
                    doneButton.textContent = '삭제';
                  // 삭제 버튼 클릭 시 동작 추가
                    doneButton.addEventListener('click', function () {
                    doneList.removeChild(listItem); // 리스트 항목 삭제
                    });
                });
                listItem.appendChild(doneButton);
                toDoList.appendChild(listItem); // 해야 할 일 목록에 추가
                inputTask.value = ''; // 입력 필드 비우기
            }
        }
    });
});
