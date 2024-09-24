// 할 일 추가 함수
function keyCheck(event) {
  if (event.key === "Enter") {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    const todoInput = document.querySelector(".todoInput");
    const doList = document.querySelector(".doList");
    const didList = document.querySelector(".didList");

    // 새로운 리스트 아이템 생성
    newSpan.textContent = todoInput.value;
    newBtn.textContent = "완료";
    delBtn.textContent = "삭제";

    // 할일 목록에 추가
    newLi.appendChild(newSpan);
    newLi.appendChild(newBtn);
    doList.appendChild(newLi);

    // 입력 필드 초기화
    todoInput.value = "";

    //확인 버튼 클릭시
    newBtn.addEventListener("click", () => {
      doList.removeChild(newLi);
      newLi.removeChild(newBtn);
      newLi.appendChild(delBtn);
      didList.appendChild(newLi);
    });

    //삭제 버튼 클릭시
    delBtn.addEventListener("click", () => {
      didList.removeChild(newLi);
    });
  }
}
