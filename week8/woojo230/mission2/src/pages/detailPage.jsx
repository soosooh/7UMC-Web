import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTodoById, useUpdateTodo, useDeleteTodo } from '../hooks/useTodoApi';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  background-color: #e3f2fd;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const Header = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

const DateInfo = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 50%;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 50%;
  height: 150px;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 50%;
`;

const Button = styled.button`
  width: 60%;
  padding: 0.7rem;
  font-size: 1rem;
  color: white;
  background-color: #99aaff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #7f8cff;
  }
`;

const LoadingMessage = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.2rem;
`;

const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  font-size: 1.2rem;
`;

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  const { data: todo, isLoading, error } = useTodoById(id);
  const updateTodoMutation = useUpdateTodo();
  const deleteTodoMutation = useDeleteTodo();

  useEffect(() => {
    if (todo) {
      setEditedTitle(todo.title);
      setEditedContent(todo.content);
    }
  }, [todo]);

  const handleSave = () => {
    updateTodoMutation.mutate(
      { id, updates: { title: editedTitle, content: editedContent } },
      {
        onSuccess: () => navigate('/'),
      }
    );
  };

  const handleDelete = () => {
    deleteTodoMutation.mutate(id, {
      onSuccess: () => navigate('/'),
    });
  };

  if (isLoading) {
    return <LoadingMessage>로딩 중...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>오류가 발생했습니다: {error.message}</ErrorMessage>;
  }

  return (
    <Container>
      <Header>
        ⚡ UMC ToDoList ⚡<DateInfo>{todo.updatedAt}</DateInfo>
      </Header>
      <Form>
        <Input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          placeholder="제목"
        />
        <Textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          placeholder="내용을 입력하세요"
        />
        <ButtonContainer>
          <Button onClick={handleSave} disabled={updateTodoMutation.isLoading}>
            {updateTodoMutation.isLoading ? '저장 중...' : '수정완료'}
          </Button>
          <Button
            onClick={handleDelete}
            disabled={deleteTodoMutation.isLoading}
          >
            {deleteTodoMutation.isLoading ? '삭제 중...' : '삭제하기'}
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default DetailPage;
