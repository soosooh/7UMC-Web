const field = document.getElementById('input');
field.addEventListener('focus', function(){
    field.style.color = 'black';
    field.style.fontStyle = 'normal';

});


document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        send();
        document.getElementById('input').value = ''; 
    }
});




function send()  {
    
    text = document.getElementById('input').value;

    const newElement = document.createElement('div');
    newElement.innerHTML = '<p>'+text+
    '<input type="button" value="완료" id = "dolist" onclick = "change(this, \'' + text + '\')"></p>';
    document.getElementById('do').appendChild(newElement);
}

function change(elem, text){
    const changeElement = elem.parentElement.parentElement; 
    
    document.getElementById('do').removeChild(changeElement)
    const newElement = document.createElement('div');
    newElement.innerHTML = '<p>'+text+
    '<input type="button" value="삭제" id = "donelist" onclick = deletelist(this)></p>';
    document.getElementById('done').appendChild(newElement);
    
}

function deletelist(elem){
    const deleteElement = elem.parentElement.parentElement; 
    deleteElement.remove(); 
}