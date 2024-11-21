import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTodoApi } from '../hooks/useTodoApi';
import LoadingSpinner from './LoadingSpinner';

const Container = styled.div`
  width: 1920px;
  height: 1261px;
  margin: 0 auto;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const Header = styled.div`
  width: 600px;
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #212529;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    color: #495057;
  }

  span {
    font-size: 1.2rem;
  }
`;

const StatusRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const Status = styled.div`
  padding: 0.5rem 1rem;
  background-color: #e9ecef;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #495057;
`;

const DateText = styled.div`
  color: #495057;
  font-size: 0.9rem;
`;

const ContentContainer = styled.div`
  width: 600px;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.div`
  font-size: 1rem;
  color: #212529;
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #226844;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 400px;
  resize: none;

  &:focus {
    outline: none;
    border-color: #226844;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${props => 
    props.variant === 'delete' ? '#dc3545' : 
    props.variant === 'submit' ? '#226844' : '#e9ecef'};
  color: white;
  opacity: ${props => props.disabled ? 0.7 : 1};
  transition: opacity 0.2s;

  &:hover {
    opacity: ${props => props.disabled ? 0.7 : 0.9};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  text-align: center;
  padding: 1rem;
  background-color: #f8d7da;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, getTodoById, updateTodo, deleteTodo } = useTodoApi();
  const [todo, setTodo] = useState(null);
  const [editedTodo, setEditedTodo] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchTodo();
  }, [id]);

  const fetchTodo = async () => {
    try {
      const data = await getTodoById(id);
      setTodo(data);
      setEditedTodo({ title: data.title, content: data.content });
    } catch (err) {
      console.error('Failed to fetch todo:', err);
    }
  };

  const handleUpdate = async () => {
    if (!editedTodo.title.trim() || !editedTodo.content.trim()) return;
    
    try {
      await updateTodo(id, editedTodo);
      navigate('/');
    } catch (err) {
      console.error('Failed to update todo:', err);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      try {
        await deleteTodo(id);
        navigate('/');
      } catch (err) {
        console.error('Failed to delete todo:', err);
      }
    }
  };

  if (!todo) return null;

  return (
    <Container>
      {loading && (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      )}

      <Header>
        <Title to="/">
          <span>⚡</span>
          UMC ToDoList
          <span>⚡</span>
        </Title>
        <StatusRow>
          <Status>{todo.checked ? '완료' : '미완료'}</Status>
          <DateText>
            {new Date(todo.createdAt).toLocaleString('ko-KR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </DateText>
        </StatusRow>
      </Header>

      <ContentContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <InputGroup>
          <Label>제목</Label>
          <StyledInput
            value={editedTodo.title}
            onChange={(e) => setEditedTodo({ ...editedTodo, title: e.target.value })}
            placeholder="제목을 입력해주세요"
          />
        </InputGroup>

        <InputGroup>
          <Label>내용</Label>
          <StyledTextArea
            value={editedTodo.content}
            onChange={(e) => setEditedTodo({ ...editedTodo, content: e.target.value })}
            placeholder="내용을 입력해주세요"
          />
        </InputGroup>

        <ButtonContainer>
          <Button
            variant="submit"
            onClick={handleUpdate}
            disabled={!editedTodo.title.trim() || !editedTodo.content.trim()}
          >
            수정완료
          </Button>
          <Button variant="delete" onClick={handleDelete}>
            삭제하기
          </Button>
        </ButtonContainer>
      </ContentContainer>
    </Container>
  );
};

export default TodoDetail;