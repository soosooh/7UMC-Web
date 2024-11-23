import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/todolist";
import TodoDetail from "./components/TodoDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route
          path="/todo/:id"
          element={
            <TodoDetail
              todo={{ id: 1, title: "샘플 제목", content: "샘플 내용" }}
              onEdit={() => alert("수정")}
              onDelete={() => alert("삭제")}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
