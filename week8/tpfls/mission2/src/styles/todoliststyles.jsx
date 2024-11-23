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
      justifyContent: "center",
      alignItems: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginBottom: "20px",
      alignItems: "center", // 가운데 정렬
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
      width: "430px", // 제목, 내용 칸과 동일한 길이
      height: "20px",
    },
    buttonDisabled: {
      width: "450px",
      height: "40px",
      backgroundColor: "#EDEDED",
      color: "#FFF",
      border: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      cursor: "not-allowed",
    },
    buttonEnabled: {
      width: "450px",
      height: "40px",
      backgroundColor: "#C0C3D8",
      color: "#FFF",
      border: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    searchContainer: {
      display: "flex",
      flexDirection: "column", // 위아래 배치를 위해 column 설정
      alignItems: "center", // 가운데 정렬
      gap: "10px", // 텍스트와 필드 간격
      marginBottom: "20px",
      width: "704px", // 제목, 내용 칸과 동일한 길이
    },
    searchLabel: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#666", // 적절한 회색 톤
      marginBottom: "5px", // 텍스트와 입력 칸 사이의 여백
    },
    searchButton: {
      backgroundColor: "#C0C3D8",
      borderRadius: "20px", // 동그라미 스타일
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      color: "#000",
      border: "none",
      cursor: "pointer",
      
      
    },
    searchInput: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
      width: "430px", // 제목, 내용 칸과 동일한 길이
      height: "20px", // 검색 인풋 높이
    },
    todoList: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignItems: "center", // 가운데 정렬
    },
    todoItem: {
      backgroundColor: "#F9F9F9",
      padding: "15px",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "704px", // ToDo 항목의 너비를 다른 칸과 동일하게 설정
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    todoContent: {
      display: "flex",
      flexDirection: "column",
    },
    todoTitle: {
      fontSize: "16px",
      fontWeight: "bold",
    },
    todoDescription: {
      fontSize: "14px",
      color: "#666",
    },
  };
  
  export default styles;
  