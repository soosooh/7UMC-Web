const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // 모든 출처 허용
app.use(express.json()); // JSON 요청 본문(body) 파싱

// 샘플 ToDo 데이터
let todos = [
  { id: 1, title: "샘플 제목 1", content: "샘플 내용 1" },
  { id: 2, title: "샘플 제목 2", content: "샘플 내용 2" },
];

// GET: 모든 ToDo 반환
app.get("/api/todos", (req, res) => {
  console.log("GET /api/todos 요청 받음");
  res.json(todos);
});

// POST: 새로운 ToDo 추가
app.post("/api/todos", (req, res) => {
  const { title, content } = req.body;

  // 제목과 내용이 없는 경우 오류 반환
  if (!title || !content) {
    return res.status(400).json({ message: "제목과 내용을 입력해주세요." });
  }

  // 새 ToDo 생성
  const newTodo = {
    id: todos.length + 1, // 간단한 ID 생성
    title,
    content,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo); // 추가된 ToDo 반환
});

// DELETE: 특정 ToDo 삭제
app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = todos.length;

  // ID로 항목 찾기
  todos = todos.filter((todo) => todo.id !== parseInt(id, 10));

  // 삭제된 항목이 없으면 404 반환
  if (todos.length === initialLength) {
    return res.status(404).json({ message: "ToDo를 찾을 수 없습니다." });
  }

  res.status(204).end(); // 성공적으로 삭제 후 빈 응답 반환
});

// 서버 실행
const PORT = process.env.PORT || 5001; // 포트 변경 가능
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
