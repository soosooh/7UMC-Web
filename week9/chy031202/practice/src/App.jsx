import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import TodoList from './components/TodoList'
import InputTodo from './components/InputTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <h1>To-Do List</h1>
      {/* 할 일 추가 입력 */}
      <InputTodo />
      {/* 할 일 목록 */}
      <TodoList />
    </div>

    </>
  )
}

export default App
