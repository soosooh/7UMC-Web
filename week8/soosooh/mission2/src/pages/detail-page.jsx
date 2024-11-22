import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getTodo, patchTodo, deleteTodo } from "../apis/todo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 30%;
  top: 5%;

  @media (max-width: 768px) {
    left: 15%;
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

const DoneButton = styled.button`
  width: 100px;
  height: 40px;
  margin-left: -500px;
  margin-bottom: 20px;
  background-color: #c0c3d8;
  color: black;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: -335px;
    margin-bottom: 10px;
    width: 70px;
    height: 30px;
    font-size: 12px;
  }
  @media (max-width: 480px) {
    margin-left: -260px;
    width: 50px;
    height: 30px;
    font-size: 10px;
  }
`;

const Title = styled.input`
  width: 600px;
  height: 60px;
  background-color: white;
  color: black;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 400px;
    height: 40px;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 30px;
    font-size: 10px;
  }
`;

const Content = styled.input`
  width: 600px;
  height: 500px;
  background-color: white;
  color: black;

  @media (max-width: 768px) {
    width: 400px;
    height: 300px;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 200px;
    font-size: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const EditButton = styled.button`
  width: 280px;
  height: 40px;
  background-color: #c0c3d8;
  color: white;

  @media (max-width: 768px) {
    width: 170px;
    height: 30px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    width: 130px;
    height: 25px;
    font-size: 10px;
  }
`;

const DeleteButton = styled.button`
  width: 280px;
  height: 40px;
  background-color: #c0c3d8;
  color: white;
  margin-left: 50px;

  @media (max-width: 768px) {
    width: 170px;
    height: 30px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 25px;
    font-size: 10px;
  }
`;

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient(); // QueryClient 가져오기
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todo = await getTodo({ id });
        setTitle(todo.title);
        setContent(todo.content);
      } catch (error) {
        console.error("데이터 로드 실패:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleEdit = async () => {
    try {
      const updatedTodo = await patchTodo({ id, title, content });
      console.log("수정 성공", updatedTodo);
      queryClient.invalidateQueries(["todos"]); // 최신화
      navigate("/"); // 메인 페이지로 이동
    } catch (error) {
      console.error("수정 실패:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo({ id });
      console.log("삭제 성공");
      queryClient.invalidateQueries(["todos"]); // 최신화
      navigate("/"); // 메인 페이지로 이동
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  };

  const handleDone = () => {
    navigate("/"); // 메인 페이지로 이동
  };

  return (
    <Container>
      <DoneButton onClick={handleDone}>완료</DoneButton>
      <Title value={title} onChange={(e) => setTitle(e.target.value)} />
      <Content value={content} onChange={(e) => setContent(e.target.value)} />
      <ButtonContainer>
        <EditButton onClick={handleEdit}>수정하기</EditButton>
        <DeleteButton onClick={handleDelete}>삭제하기</DeleteButton>
      </ButtonContainer>
    </Container>
  );
};

export default DetailPage;
