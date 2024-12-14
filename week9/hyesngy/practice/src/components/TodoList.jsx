import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
	const todolist = useSelector((state) => state.todo);
	console.log("🚀 ~ TodoList ~ todolist:", todolist)

	return (
		<ul>
			{todolist.map((todo) => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					text={todo.text}
					isComplete={todo.complete}
				/>
			))}
		</ul>
	);
}