let i = j = 0; 


function addActiveList() {
  let todovalue = document.querySelector(".addToDoInfo").value; 

  if (todovalue === "") { 
    alert("할 일을 입력해주세요!");
    return false;
  }

  
  let li = document.createElement("li");
  let button = document.createElement("button");

  
  button.className = "doneBtn" + i;
  button.innerHTML = "완료";

  
  li.innerHTML = todovalue;
  li.appendChild(button);

  
  document.querySelector(".listActive").appendChild(li);

  
  document.querySelector(".doneBtn" + i).addEventListener("click", doneActive);

  
  document.querySelector(".addToDoInfo").value = "";
  
  i++; 
  return false; 
}


function doneActive() {
  let content = this.parentNode; 

  
  this.innerHTML = "삭제";
  this.className = "deleteBtn" + j;

  
  document.querySelector(".deleteBtn" + j).addEventListener("click", deleteDone);

 
  document.querySelector(".listDone").appendChild(content);
  
  j++; 
}


function deleteDone() {
  
  this.parentNode.parentNode.removeChild(this.parentNode);
}
