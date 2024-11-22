import styled from "styled-components";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import TitleInput from "../components/title-input";
import TodoList from "../components/todo-list";
import Search from "../components/search";
import Loading from "../components/loading";
import Error from "../components/error";
import { postTodo, getTodoList, deleteTodo, patchTodo } from "../apis/todo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 30%;
  top: 10%;
  background-color: #e1e7f5;

  @media (max-width: 768px) {
    left: 20%;
    top: 5%;
    width: 80%;
    padding: 10px;
  }

  @media (max-width: 480px) {
    left: 15%;
    top: 5%;
    width: 60%;
  }
`;

const StyledTitle = styled.h2`
  color: black;
`;

const TodoPage = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const queryClient = useQueryClient();

  // TODO 목록 GET
  const {
    data: rawTodos = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["todos", searchTitle], // queryKey에 searchTitle 포함
    queryFn: async () => {
      const data = await getTodoList({ title: searchTitle });
      if (Array.isArray(data) && Array.isArray(data[0])) {
        return data[0];
      }
      return data || [];
    },
    refetchOnWindowFocus: false, // 포커스 시 자동 새로고침 비활성화
  });

  // 새로운 TODO POST
  const { mutate: addTodo, isLoading: isAdding } = useMutation({
    mutationFn: postTodo,
    onSuccess: (newTodo) => {
      console.log("새로 생성된 Todo:", newTodo);
      queryClient.setQueryData(["todos", searchTitle], (oldTodos = []) => [
        newTodo,
        ...oldTodos,
      ]);
      queryClient.invalidateQueries(["todos", searchTitle]);
    },
    onError: (error) => {
      console.error("Error adding todo:", error);
    },
  });

  // TODO 삭제 DELETE
  const { mutate: removeTodo, isLoading: isRemoving } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (_, id) => {
      queryClient.setQueryData(["todos", searchTitle], (oldTodos = []) =>
        oldTodos.filter((todo) => todo.id !== id)
      );
      queryClient.invalidateQueries(["todos", searchTitle]);
    },
    onError: (error) => {
      console.error("Error removing todo:", error);
    },
  });

  // TODO PATCH
  const { mutate: updateTodo, isLoading: isUpdating } = useMutation({
    mutationFn: patchTodo,
    onSuccess: (updatedTodo) => {
      queryClient.setQueryData(["todos", searchTitle], (oldTodos = []) =>
        oldTodos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        )
      );
      queryClient.invalidateQueries(["todos", searchTitle]);
    },
    onError: (error) => {
      console.error("Error updating todo:", error);
    },
  });

  // 검색 처리
  const handleSearch = (title) => {
    setSearchTitle(title);
  };

  // 로딩 중 처리
  if (isLoading || isAdding || isRemoving || isUpdating) {
    return <Loading />;
  }

  // 에러 처리
  if (isError) {
    return <Error message={error?.message || "An error occurred"} />;
  }

  return (
    <Container>
      <StyledTitle>⚡️ UMC ToDoList ⚡️</StyledTitle>
      <TitleInput />
      <Search onSearch={handleSearch} />
      <TodoList
        todos={rawTodos}
        onDelete={(id) => removeTodo({ id })}
        onUpdate={(id, updatedFields) => updateTodo({ id, ...updatedFields })}
      />
    </Container>
  );
};

export default TodoPage;
