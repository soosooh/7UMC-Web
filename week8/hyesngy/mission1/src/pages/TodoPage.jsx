import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import getTodos from "../apis/todo/getTodos";
import Input from "../components/Input";
import Search from "../components/Search";
import TodoList from "../components/TodoList";
import Spinner from "../components/common/spinner";
import ErrorSpinner from "../components/common/errorSpinner";

const TodoPage = () => {
  const { data: todos, setData: setTodos, loading, error } = useFetch(getTodos);
  const [originalTodos, setOriginalTodos] = useState([]);

  useEffect(() => {
    if (todos && todos.length > 0 && originalTodos.length === 0) {
      setOriginalTodos(todos);
    }
  }, [todos]);

  return (
    <PageContainer>
      <TitleP>⚡ToDo LIST⚡</TitleP>
      <Input todos={todos} setTodos={setTodos} />
      <Search todos={todos} setTodos={setTodos} originalTodos={originalTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      {loading && <Spinner />}
      {error && <ErrorSpinner />}
    </PageContainer>
  );
};

export default TodoPage;

const PageContainer = styled.div`
  width: 40vw;
  height: 100%;
  box-sizing: border-box;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1440px) {
    width: 60vw;
  }

  @media (max-width: 1024px) {
    width: 70vw;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }

  @media (max-width: 425px) {
    width: 90vw;
  }
`

const TitleP = styled.p`
  font-size: 32px;
  font-weight: 700;
  line-height: 38.73px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  white-space: nowrap;
`