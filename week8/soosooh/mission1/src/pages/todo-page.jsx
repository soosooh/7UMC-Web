import styled from "styled-components";
import TitleInput from "../components/title-input";
import { useState, useEffect } from "react";
import TodoList from "../components/todo-list";
import Search from "../components/search";
import axiosInstance from "../apis/axiosInstance";
import Loading from "../components/loading";
import Error from "../components/error";

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
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // 초기 데이터 로드
  useEffect(() => {
    const fetchTodos = async () => {
      console.log("로딩 시작");
      setIsLoading(true); // 로딩 상태 시작
      setIsError(false); // 에러 상태 초기화
      try {
        const { data } = await axiosInstance.get("/todo");
        if (Array.isArray(data) && Array.isArray(data[0])) {
          setTodos(data[0]); // 첫 번째 배열을 사용
        } else {
          setTodos(data || []);
        }
      } catch (error) {
        console.error("TODO 목록을 불러오는 데 실패했습니다:", error);
        setIsError(true); // 에러 상태 설정
      } finally {
        setIsLoading(false); // 로딩 상태 종료
      }
    };

    fetchTodos();
  }, []);

  const handleSearch = async (searchTitle) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const url = searchTitle.trim() ? `/todo?title=${searchTitle}` : `/todo`;
      const { data } = await axiosInstance.get(url);
      if (Array.isArray(data) && Array.isArray(data[0])) {
        setTodos(data[0]); // 첫 번째 배열을 사용
      } else {
        setTodos(data || []);
      }
      console.log("검색 결과:", data);
    } catch (error) {
      console.error("검색 실패:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const handleAddTodo = (newTodo) => {
    if (!newTodo.id) {
      console.error("newTodo에 id가 없습니다:", newTodo);
    }
    setTodos((prevTodos) => [newTodo, ...prevTodos]); // 새로운 todo를 리스트에 추가
  };

  const handleDeleteTodo = async (id) => {
    try {
      // 서버에 DELETE 요청
      await axiosInstance.delete(`/todo/${id}`);
      // 상태에서 해당 TODO 제거
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      console.log("삭제 성공:", id);
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Container>
      <StyledTitle>⚡️ UMC ToDoList ⚡️</StyledTitle>
      <TitleInput onAddTodo={handleAddTodo} />
      <Search onSearch={handleSearch} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </Container>
  );
};

export default TodoPage;
