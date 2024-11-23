import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import styles from "../styles/todoliststyles";
import Loading from "./Loading"; // 로딩 컴포넌트
import Error from "./Error"; // 에러 컴포넌트

// Fetch todos from the API
const fetchTodos = async () => {
  const { data } = await axios.get("/api/todos");
  return Array.isArray(data) ? data : [];
};

// Add a new todo to the API
const addTodo = async (newTodo) => {
  const { data } = await axios.post("/api/todos", newTodo);
  return data;
};

// Delete a todo
const deleteTodo = async (id) => {
  const { data } = await axios.delete(`/api/todos/${id}`);
  return data;
};

const ToDoList = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const queryClient = useQueryClient();

  const { data: todos, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const mutationAdd = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleAddTodo = () => {
    if (title.trim() && content.trim()) {
      mutationAdd.mutate({ title, content });
      setTitle("");
      setContent("");
    }
  };

  const handleDeleteTodo = (id) => {
    mutationDelete.mutate(id);
  };

  const handleSearch = () => {
    console.log(`검색어: ${search}`);
  };

  const filteredTodos = Array.isArray(todos)
    ? todos.filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  // 로딩 상태
  if (isLoading) {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>⚡ UMC ToDoList ⚡</h1>
        <Loading />
      </div>
    );
  }

  // 에러 상태
  if (isError) {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>⚡ UMC ToDoList ⚡</h1>
        <Error />
      </div>
    );
  }

  const isButtonEnabled = title.trim() && content.trim();

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>⚡ UMC ToDoList ⚡</h1>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={handleAddTodo}
          style={isButtonEnabled ? styles.buttonEnabled : styles.buttonDisabled}
          disabled={!isButtonEnabled}
        >
          ToDo 생성
        </button>
      </div>
      <div style={styles.searchContainer}>
        <button
          style={styles.searchButton}
          onClick={handleSearch}
        >
          검색
        </button>
        <input
          type="text"
          placeholder="제목으로 검색해보세요."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.todoList}>
        {filteredTodos.map((todo) => (
          <div key={todo.id} style={styles.todoItem}>
            <div style={styles.todoContent}>
              <p style={styles.todoTitle}>{todo.title}</p>
              <p style={styles.todoDescription}>{todo.content}</p>
            </div>
            <div>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "#DC3545",
                  color: "#FFF",
                  cursor: "pointer",
                }}
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
