const todoInput = document.getElementById("todoInput");

todoInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        const todoName = todoInput.value;

        if(todoName.trim() !== "") {
            const newTodo = document.createElement("div");
            const todoTitle = document.createElement("h3");
            const todoButton = document.createElement("button");
            
            newTodo.classList.add("todo");
            todoButton.classList.add("todoButton");

            todoTitle.textContent = todoName;
            todoButton.textContent = "완료";

            todoButton.addEventListener("click", function() {
                if (todoButton.textContent === "완료") {
                    completeTask(newTodo, todoButton);
                } else {
                    newTodo.remove();
                }
            });

            newTodo.appendChild(todoTitle);
            newTodo.appendChild(todoButton);

            const taskList = document.querySelector(".taskList");
            taskList.appendChild(newTodo);

            todoInput.value = "";
        }
    }
});

function completeTask(newTodo, todoButton) {
    const completedList = document.querySelector(".completedList");
    todoButton.textContent = "삭제";
    completedList.appendChild(newTodo);
}