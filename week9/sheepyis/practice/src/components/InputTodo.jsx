import React, {useState} from 'react'
import {useDispatch  } from 'react-redux'
import {add} from '../redux/todoSlice'
import styled from 'styled-components'
import colors from '../styles/colors'

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1vw 0;
`

const InputContainer2 = styled.div`
    width: 100%;
    display: flex;
    gap: 2vw;
    align-items: center;
`

const AddInput = styled.input`
    width: 22vw;
    height: 2.5vw;
    border: 0.15vw solid ${colors.inputColor};
    border-radius: 1vw;
    font-size: 0.8vw;
    padding: 0 0.5vw;
    box-sizing: border-box;
    color: ${colors.timeColor};
`

const AddButton = styled.input`
    width: 2.2vw;
    height: 2.2vw;
    border: 0.15vw solid ${colors.inputColor};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2vw;
    color: ${colors.inputColor};
    line-height: 2.2vw;
    padding: 0;
`

export default function InputTodo() {
    const dispatch = useDispatch()

    const [todolist, setTodolist] = useState(
    {
        id : 0,
        text : "",
    }
    )

    function handleText(e) {
        setTodolist({text : e.target.value})
    }

    function onReset () {
        setTodolist({text : ""})
    }
  
    
  return (
      <InputContainer>
        <form onSubmit={(e) => {e.preventDefault()
            if(todolist.text !== ""){dispatch(add(todolist.text))}
            else(alert("할 일을 입력해주세요!"))
            onReset()
        }}>
            <InputContainer2>
                <AddInput type="text" value = {todolist.text} onChange={handleText} />
                <AddButton type="submit" value="+" />
            </InputContainer2>
        </form>
      </InputContainer>

    )
}