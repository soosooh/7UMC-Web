import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/todoSlice";
import styled from "styled-components";

const InputDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export default function InputTodo() {
	const dispatch = useDispatch();

	const [todolist, setTodolist] = useState({
		id: 0,
		text: "",
	});

	function handleText(e) {
		setTodolist({ text: e.target.value });
	}

	function onReset() {
		setTodolist({ text: "" });
	}

	return (
		< >
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (todolist.text !== "") {
						dispatch(add(todolist.text));
					} else alert("할 일을 입력해주세요!");
					onReset();
				}}
			>
				<InputDiv>
					<input
						type="text"
						value={todolist.text}
						onChange={handleText}
					/>
					<input type="submit" value="+" />
				</InputDiv>
			</form>
		</>
	);
}
