import React from "react";

const Error = () => {
  const styles = {
    container: {
      marginTop: "20px",
      textAlign: "center",
      color: "#DC3545",
    },
    icon: {
      fontSize: "32px",
      marginBottom: "10px",
    },
    message: {
      fontSize: "16px",
      color: "#DC3545",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>❌</div>
      <p style={styles.message}>에러가 발생했습니다.</p>
    </div>
  );
};

export default Error;
