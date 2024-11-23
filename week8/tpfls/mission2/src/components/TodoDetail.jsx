import React from "react";

const TodoDetail = ({ todo, onEdit, onDelete }) => {
  const styles = {
    container: {
      backgroundColor: "#E1E7F5",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    profileCircle: {
      width: "50px",
      height: "50px",
      backgroundColor: "#C0C3D8",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "18px",
      color: "#FFF",
    },
    date: {
      fontSize: "14px",
      color: "#666",
    },
    status: {
      backgroundColor: "#EDEDED",
      borderRadius: "5px",
      padding: "5px 10px",
      fontSize: "14px",
      color: "#333",
      fontWeight: "bold",
    },
    input: {
      width: "400px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
      marginBottom: "20px",
    },
    textarea: {
      width: "400px",
      height: "150px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
      marginBottom: "20px",
      resize: "none",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
    },
    button: {
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#C0C3D8",
      color: "#FFF",
      fontWeight: "bold",
      cursor: "pointer",
      fontSize: "14px",
    },
    disabledButton: {
      backgroundColor: "#EDEDED",
      cursor: "not-allowed",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.profileCircle}>인서</div>
        <span style={styles.status}>완료</span>
        <span style={styles.date}>2024-11-07T01:15</span>
      </div>
      <input
        type="text"
        value={todo?.title || ""}
        placeholder="제목"
        readOnly
        style={styles.input}
      />
      <textarea
        value={todo?.content || ""}
        placeholder="내용내용내용내용"
        readOnly
        style={styles.textarea}
      />
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={onEdit}>
          수정하기
        </button>
        <button style={styles.button} onClick={onDelete}>
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default TodoDetail;
