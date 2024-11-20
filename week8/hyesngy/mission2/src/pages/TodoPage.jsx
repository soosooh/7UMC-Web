import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import getTodos from "../apis/todo/getTodos";
import Input from "../components/Input";
import Search from "../components/Search";
import TodoList from "../components/TodoList";
import Spinner from "../components/common/spinner";
import ErrorSpinner from "../components/common/errorSpinner";

const TodoPage = () => {
  const { data: todos = [], isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const [originalTodos, setOriginalTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (todos.length > 0) {
      setOriginalTodos(todos);
      setFilteredTodos(todos);
    }
  }, [todos]);

  return (
    <PageContainer>
      <TitleP>⚡ToDo LIST⚡</TitleP>
      <Input todos={filteredTodos} />
      <Search originalTodos={originalTodos} setTodos={setFilteredTodos} />
      <TodoList todos={filteredTodos} />
      {isLoading && <Spinner />}
      {isError && <ErrorSpinner />}
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