import { useState } from 'react'; 
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "투두만들기"},
    {id: 2, task: "희연 혜원 혜윤 건 찬민"}
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');



  console.log(todos);

  
  

  const handleSubmit = (e) =>{
    e.preventDefault();
  };
 // 1 추가
  const addTodo = () => {
    if(text.trim().length === 0) {
      alert('입력하라1');
    }
    setTodos((prev)=> [
      ...prev, 
      {id:Math.floor(Math.random()*100) *2, task:text},
    ]);
    setText('');
  };

  // 2 삭제
  const deleteTodo =(id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  //3 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) => 
      prev.map((item) => (item.id === id? {...item, task:text}:item))
    );
    setEditingId('');
  };

  return (
    <>
      
      <form action="" onSubmit={handleSubmit} className='cont'>
        <input className="writearea" type="text" value={text} onChange={(e) =>{
          const {value} = e.target; 
          setText(value)}}/>
        <button className = 'regis' onClick={() => addTodo()} type="submit">할 일 등록</button>
      </form>
      <div className='clickt'>
        {/* const {id} = todo;
        const {task} = todo; */}
        {todos.map((todo, _) => (
          <div  style={{display: 'flex', gap:'20px'}}>
            {/* 수정중 아닐때 */}
            {editingId !== todo.id && (
              <div key={todo.id} style={{display: 'flex', gap:'5px'}}>
              <p>{todo.id}.</p>
              <p>{todo.task}</p>
            </div>
            )}
            {/* 수정중 상태일때 */}
            {editingId === todo.id && (
              <div key={todo.id} style={{display: 'flex', gap:'5px'}}>
              <p>{todo.id}.</p>
              <input defaultValue={todo.task} onChange={(e) =>{
                const {value} = e.target; 
                setEditText(value)}}/>
            </div>
            )}
            <button onClick={() => {
              const {id} = todo;
              deleteTodo(id)
              }}>삭제하기</button>

            {editingId === todo.id ? (
              <button onClick={() => updateTodo(editingId, editText)}>수정 완료</button>
            ): (
              <button onClick={() => {
                const {id} = todo;
                setEditingId(id)
              }}>수정 진행</button>
            )}
            


          </div>
        ))}
      </div>
    </>
  );
}

export default App;
