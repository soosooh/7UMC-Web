import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import InputTodo from "./components/InputTodo";
import styled from "styled-components";
import "./App.css";

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f9;
  overflow: hidden;
  box-sizing: border-box;
`
const TodoListContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-width: 400px;
  height: 45vh;
  overflow-y: auto;
  padding: 10px;

  @media (max-width: 375px) {
    height: 30vh;
  }
`
const TodoContainer = styled.div`
  background-color: white;
  padding: 3rem 2.5rem;
  border-radius: 2rem;
  box-sizing: border-box;
  height: 80vh;
  
  @media (max-width: 500px) {
    width: 90vw;
  }
`

function App() {


  return (
    <PageContainer>
      <TodoContainer>
        <Header />
        <InputTodo />
        <TodoListContainer>
          <TodoList />
        </TodoListContainer>
      </TodoContainer>
    </PageContainer>
  );
}

export default App;
