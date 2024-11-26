import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, complete } from '../redux/todoSlice';
import styled from 'styled-components';
import colors from '../styles/colors';

const ListContainer = styled.div`
  margin-top: 1vw;
  width: 100%;
  display: flex;
  justify-content: center;
`

const ListUl = styled.ul`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
`

const ListLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5vw;
`

const Done = styled.input`
  width: 1.5vw;
  height: 1.5vw;
  border: 0.15vw solid ${colors.listColor};
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    background-color: ${colors.inputColor};
  }
`

const ListP = styled.p`
  font-size: 1.2vw;
  color: ${colors.timeColor};
`

const TrashButton = styled.button`
  width: 1.5vw;
  height: 1.5vw; 
`

export default function TodoList() {
  const todolist = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const trashIcon = "🗑️";

  console.log(todolist);

  const todolistView = todolist.map((todo, idx) => (
    <ListLi key={todolist[idx].id}>
      <LeftContainer>
        <Done type="checkbox" checked={todo.complete} onChange={() => dispatch(complete(todolist[idx].id))} />
        <ListP>
          {todo.complete === false ? (
            <>{todo.text}</>
          ) : (
            <del>{todo.text}</del>
          )}
        </ListP>
      </LeftContainer>
      <TrashButton type="button" onClick={() => dispatch(remove(todolist[idx].id))}>
        {trashIcon}
      </TrashButton>
    </ListLi>
  ));

  return (
    <ListContainer>
      <ListUl>{todolistView}</ListUl>
    </ListContainer>
  );
}
